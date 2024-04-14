import { PageHeader } from '@/app/admin/_components/PageHeader';
import { ProductForm } from '../../_components/ProductForm';
import db from '@/db/db';

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      priceInCents: true,
      isAvailableForPurchase: true,
      filePath: true,
      imagePath: true,
    },
  });
  return (
    <>
      <PageHeader>Edit product</PageHeader>
      <ProductForm product={product} />
    </>
  );
}
