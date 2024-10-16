import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { CategoryCard } from 'task-blog-ui-lib';

import { Link } from '@/i18n';
import { CATEGORY_ICONS } from '@constants/layout';
import { ROUTES } from '@constants/navigation';

import { CategoryListProps, CategoryTranslation } from './types';

export const CategoryList = ({ cardClassName, className, isFullInfo = false }: CategoryListProps) => {
  const t = useTranslations('blog');

  const categories = Object.entries(t.raw('categories.values') as Record<string, CategoryTranslation>).map(
    ([key, category]) => ({
      icon: CATEGORY_ICONS[key],
      info: category.info,
      label: category.title,
      name: key,
    })
  );

  return (
    <div className={clsx('flex', isFullInfo ? 'gap-8 flex-wrap justify-center' : 'flex-col gap-6', className)}>
      {categories.map(({ icon, info, label, name }) => (
        <Link key={name} href={ROUTES.blogCategory.replace('[category]', name)}>
          {isFullInfo ? (
            <CategoryCard type="medium" label={label} name={name} icon={icon} info={info} className={cardClassName} />
          ) : (
            <CategoryCard type="small" key={name} label={label} name={name} icon={icon} className={cardClassName} />
          )}
        </Link>
      ))}
    </div>
  );
};
