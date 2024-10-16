import { AboutUsSection } from '@components/AboutUsSection';
import { AuthorList } from '@components/AuthorList';
import { JoinSection } from '@components/JoinSection';
import { PageContent } from '@lib/components/PageContent';

export default function About() {
  return (
    <PageContent>
      <AboutUsSection />
      <div>
        <AuthorList limit={8} />
      </div>
      <div className="w-1/3 max-768:w-3/5 max-425:4/5 m-auto">
        <JoinSection />
      </div>
    </PageContent>
  );
}
