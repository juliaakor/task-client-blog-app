'use client';

import { useTranslations } from 'next-intl';
import { useInViewRef } from 'rooks';

import { AboutUsPreview } from '@components/AboutUsPreview';
import { AuthorList } from '@components/AuthorList';
import { CategoryList } from '@components/CategoryList';
import { JoinSection } from '@components/JoinSection';
import { LogoList } from '@components/LogoList';
import { ReasonsPreview } from '@components/ReasonsPreview';
import { Testimonials } from '@components/Testimonials';
import { Typography } from '@lib/components/Typography';

const animationClassName = (sectionInView: boolean) =>
  `transition-all duration-700 ${sectionInView ? 'opacity-100 animate-fadeIn' : 'opacity-0'}`;

export const HomePageContent = () => {
  const t = useTranslations('home');

  const [aboutRef, aboutSectionInView] = useInViewRef();
  const [categoriesRef, categoriesSectionInView] = useInViewRef();
  const [reasonsRef, reasonsSectionInView] = useInViewRef();
  const [logosRef, logosSectionInView] = useInViewRef();
  const [testimonialsRef, testimonialsSectionInView] = useInViewRef();
  const [authorsRef, authorsSectionInView] = useInViewRef();
  const [joinRef, joinSectionInView] = useInViewRef();

  return (
    <>
      <div ref={aboutRef} className={animationClassName(aboutSectionInView)}>
        <AboutUsPreview />
      </div>
      <div ref={categoriesRef} className={animationClassName(categoriesSectionInView)}>
        <Typography tag="h2" className="mb-12 text-center">
          {t('sectionTitles.categories')}
        </Typography>
        <CategoryList isFullInfo cardClassName="w-72" />
      </div>
      <div ref={reasonsRef} className={animationClassName(reasonsSectionInView)}>
        <ReasonsPreview />
      </div>
      <div ref={logosRef} className={animationClassName(logosSectionInView)}>
        <LogoList />
      </div>
      <div ref={authorsRef} className={animationClassName(authorsSectionInView)}>
        <Typography tag="h2" className="mb-12 text-center">
          {t('sectionTitles.authors')}
        </Typography>
        <AuthorList />
      </div>
      <div
        ref={testimonialsRef}
        className={`bg-beige-01 py-20 max-425:px-5 px-24 max-768:flex max-768:flex-col flex ${animationClassName(testimonialsSectionInView)}`}
      >
        <Testimonials />
      </div>
      <div ref={joinRef} className={animationClassName(joinSectionInView)}>
        <div className="w-1/3 max-768:w-3/5 max-425:4/5 m-auto">
          <JoinSection />
        </div>
      </div>
    </>
  );
};
