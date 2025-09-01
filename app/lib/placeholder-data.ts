// 假數據定義：可替換成真實資料
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
  // 新增 customers 讓頁數增加
  {
    id: '7A8B9C0D-1E2F-4A5B-9C8D-7E6F5A4B3C2D',
    name: 'Sarah Johnson',
    email: 'sarah@johnson.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '8B9C0D1E-2F3A-5B6C-AD8E-7F6A5B4C3D2E',
    name: 'David Chen',
    email: 'david@chen.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '9C0D1E2F-3A4B-6C7D-BE9F-8A7B6C5D4E3F',
    name: 'Emma Wilson',
    email: 'emma@wilson.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: 'A0D1E2F3-4B5C-7D8E-CF0A-9B8C7D6E5F4A',
    name: 'James Martinez',
    email: 'james@martinez.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'B1E2F3A4-5C6D-8E9F-DA1B-AC9D8E7F6A5B',
    name: 'Lisa Anderson',
    email: 'lisa@anderson.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: 'C2F3A4B5-6D7E-9F0A-EB2C-BD0AE9F8A7B6',
    name: 'Robert Taylor',
    email: 'robert@taylor.com',
    image_url: '/customers/balazs-orban.png',
  },
  {
    id: 'D3A4B5C6-7E8F-0A1B-FC3D-CE1BF0A9B8C7',
    name: 'Jennifer Lee',
    email: 'jennifer@lee.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: 'E4B5C6D7-8F9A-1B2C-AD4E-DF2CA1B0C9D8',
    name: 'Michael Brown',
    email: 'michael@brown.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: 'F5C6D7E8-9A0B-2C3D-BE5F-EA3DB2C1D0E9',
    name: 'Jessica Davis',
    email: 'jessica@davis.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: 'A6D7E8F9-0B1C-3D4E-CF6A-FB4EC3D2E1F0',
    name: 'Christopher Miller',
    email: 'chris@miller.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'B7E8F9A0-1C2D-4E5F-DA7B-AC5FD4E3F2A1',
    name: 'Amanda Garcia',
    email: 'amanda@garcia.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: 'C8F9A0B1-2D3E-5F6A-EB8C-BD6AE5F4A3B2',
    name: 'Daniel Rodriguez',
    email: 'daniel@rodriguez.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
  // 為新客戶添加發票
  {
    customer_id: customers[6].id, // Sarah Johnson
    amount: 12500,
    status: 'paid',
    date: '2023-12-01',
  },
  {
    customer_id: customers[7].id, // David Chen
    amount: 8750,
    status: 'pending',
    date: '2023-11-15',
  },
  {
    customer_id: customers[8].id, // Emma Wilson
    amount: 15600,
    status: 'paid',
    date: '2023-11-20',
  },
  {
    customer_id: customers[9].id, // James Martinez
    amount: 9200,
    status: 'pending',
    date: '2023-12-05',
  },
  {
    customer_id: customers[10].id, // Lisa Anderson
    amount: 11800,
    status: 'paid',
    date: '2023-11-28',
  },
  {
    customer_id: customers[11].id, // Robert Taylor
    amount: 7300,
    status: 'pending',
    date: '2023-12-03',
  },
  {
    customer_id: customers[12].id, // Jennifer Lee
    amount: 13400,
    status: 'paid',
    date: '2023-11-18',
  },
  {
    customer_id: customers[13].id, // Michael Brown
    amount: 6900,
    status: 'pending',
    date: '2023-12-07',
  },
  {
    customer_id: customers[14].id, // Jessica Davis
    amount: 14500,
    status: 'paid',
    date: '2023-11-25',
  },
  {
    customer_id: customers[15].id, // Christopher Miller
    amount: 10200,
    status: 'pending',
    date: '2023-12-02',
  },
  {
    customer_id: customers[16].id, // Amanda Garcia
    amount: 8800,
    status: 'paid',
    date: '2023-11-30',
  },
  {
    customer_id: customers[17].id, // Daniel Rodriguez
    amount: 12100,
    status: 'pending',
    date: '2023-12-06',
  },
  // 為現有客戶添加更多發票以增加多樣性
  {
    customer_id: customers[6].id, // Sarah Johnson - 第二筆
    amount: 5500,
    status: 'pending',
    date: '2023-10-15',
  },
  {
    customer_id: customers[7].id, // David Chen - 第二筆
    amount: 18900,
    status: 'paid',
    date: '2023-09-20',
  },
  {
    customer_id: customers[8].id, // Emma Wilson - 第二筆
    amount: 3400,
    status: 'paid',
    date: '2023-10-08',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

export { users, customers, invoices, revenue };
