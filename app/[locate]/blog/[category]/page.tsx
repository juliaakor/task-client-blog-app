import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Categories, CategoriesValues } from '@/constants/entities';
import { toPascalCaseWithSpaces } from '@lib/format/toPascalCaseWithSpaces';

import { CategoryProps } from './types';

const isValidCategory = (category: string) => !CategoriesValues.includes(category as Categories);

export async function generateMetadata({ params }: CategoryProps): Promise<Metadata> {
  const { category } = params;

  if (isValidCategory(category)) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: toPascalCaseWithSpaces(category),
  };
}

export default function Category({ params }: CategoryProps) {
  const { category } = params;

  if (isValidCategory(category)) {
    notFound();
  }

  return <div>My category: {category}</div>;
}
