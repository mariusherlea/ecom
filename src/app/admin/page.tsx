import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import db from '@/db/db';
import { formatNumber, formatCurrency } from '@/lib/formatters';
import { unstable_noStore as noStore } from 'next/cache';

export function getEnvVariable(name: string) {
  // Using noStore prevents this function from being rendered statically
  // This is a problem because the environment variables need to change between development and production
  noStore();
  const variable = process.env[name];
  if (!variable) {
    throw new Error('Missing environment variable for ' + name);
  }
  return variable;
}

async function getSalesData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}

async function getUsersData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);
  return {
    userCount: userCount,
    averageValuePerUser:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
  };
}

async function getProductsData() {
  const [activeProductCount, inactiveProductCount] = await Promise.all([
    db.product.count({ where: { isAvailableForPurchase: true } }),
    db.product.count({ where: { isAvailableForPurchase: false } }),
  ]);

  return {
    activeProductCount: activeProductCount,
    inactiveProductCount: inactiveProductCount,
  };
}

export default async function AdminDashBoard() {
  const [salesData, userData, productData] = await Promise.all([
    getSalesData(),
    getUsersData(),
    getProductsData(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} Orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(
          userData.averageValuePerUser
        )} Average value`}
        body={formatNumber(userData.userCount)}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(productData.inactiveProductCount)} Inactive`}
        body={formatNumber(productData.activeProductCount)}
      />
    </div>
  );
}

type DashboardCardProsp = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProsp) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
