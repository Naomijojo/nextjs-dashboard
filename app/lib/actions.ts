'use server';
// (typeof rawFormData.amount) 得出字串類型，而不是數字類型
// 用zod處理類型驗證和轉換: 將 formData 儲存至資料庫之前驗證 formData
// formData 擷取資料->zod 驗證型別->轉成美元->變數傳遞至您的 SQL 查詢->呼叫 revalidatePath 來清除客戶端快取並提出新的伺服器請求->呼叫重新導向將使用者重新導向至發票頁面
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'; // 重新導向
import postgres from 'postgres';

// 新增登入功能
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.', 
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

//1.zod 驗證和轉換 formData
const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

// 定義 State 型別
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};


// 2.建立發票
export async function createInvoice(prevState: State, formData: FormData) {
  // 使用 zod 驗證和轉換 formData
  // const { customerId, amount, status } = CreateInvoice.parse({
  
  // 將 Zod parse（） 函數變更為 safeParse（）
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  // 測試型別 : 是字串，而不是數字！
  // console.log( typeof rawFormData.amount);

  // 如果 validatedFields 不成功(驗證失敗)，顯示來自 Zod 的錯誤訊息
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }


  const { customerId, amount, status } = validatedFields.data;
  // 將金額轉換為美元
  const amountInCents = amount * 100; 
  //建立一個新日期
	const date = new Date().toISOString().split('T')[0];
  // 將資料插入到資料庫 並 添加錯誤處理
  try{
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch(error){
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }

  // 重新整理路徑並重新獲取資料
  revalidatePath('/dashboard/invoices');

  // 重新導回invoices頁面
  redirect('/dashboard/invoices');
}

// 2.更新發票
export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData) {
    const validatedFields = UpdateInvoice.safeParse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
  try{
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch(error){
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// 3.刪除發票
export async function deleteInvoice(id: string) {
  // 測試錯誤
  // throw new Error('Failed to Delete Invoice');

  await sql`DELETE FROM invoices WHERE id = ${id}`;
  revalidatePath('/dashboard/invoices');
}


// 4.登入
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}