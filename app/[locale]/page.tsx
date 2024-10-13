import { HomePageContent } from '@components/HomePageContent';
import { PageContent } from '@lib/components/PageContent';

export default async function Home() {
  return (
    <main>
      <PageContent>
        <HomePageContent />
      </PageContent>
    </main>
  );
}
