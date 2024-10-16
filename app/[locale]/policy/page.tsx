import { useTranslations } from 'next-intl';

import { PolicySection } from '@components/PolicySection';
import { Section } from '@components/Section';
import { PolicyInfo } from '@type/policy';

export default function PrivacyPolicy() {
  const t = useTranslations('policy');
  const policyInfo = t.raw('info') as PolicyInfo[];

  return (
    <main>
      <Section title={t('pageTitle')} subtitle={t('date')} />
      <div className="flex flex-col gap-8 my-32 w-2/4 mx-auto">
        {policyInfo.map(({ id, paragraphs, subTitle, title }) => (
          <PolicySection key={id} id={id} title={title} subTitle={subTitle} paragraphs={paragraphs} />
        ))}
      </div>
    </main>
  );
}
