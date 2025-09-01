// import { Card } from '@/app/ui/dashboard/cards'; 
import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

import { Suspense } from 'react'; // Suspense 實現部分載入 -> suspense 包裝
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
};


// import { fetchRevenue, latestInvoices, fetchCardData } from '@/app/lib/data';

// 1.fetchRevenue、 latestInvoices 改為串流元件(實現部分載入)
// remove fetchRevenue 後匯入Suspense, 包裝 <RevenueChart /> , 傳遞名為 <RevenueChartSkeleton> 的後援元件。
// remove latestInvoices 後匯入Suspense, 包裝 <LatestInvoices /> , 傳遞名為 <LatestInvoicesSkeleton> 的後援元件。

// 2.Card變成 CardWrapper -> 改為群組元件


export default async function Page() {
  
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* 已收取的發票總額 */}
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}

        {/* 未收取的發票總額 */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}

        {/* 發票總數 */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}

        {/* 客戶總數 */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
        
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  改成串流元件/> */}
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        {/* <LatestInvoices latestInvoices={latestInvoices} 改成串流元件/> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}