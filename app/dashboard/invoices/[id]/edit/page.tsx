import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  // 獲取 id
  const params = await props.params;
  const id = params.id;

  // 獲取特定發票
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  // 如果發票不存在，顯示404頁面
  console.log(`Edit page: invoice for id ${id}:`, invoice);
  // 讓被刪掉的發票(表示沒有此 UUID)，顯示404頁面
  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}