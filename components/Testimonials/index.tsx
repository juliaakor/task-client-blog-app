'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { KeyboardEvent, useState } from 'react';
import { Typography } from 'task-blog-ui-lib';

import leftArrow from '@assets/icons/ArrowLeft.svg';
import rightArrow from '@assets/icons/ArrowRight.svg';

import { TestimonialsInfo } from './types';

const SLIDE_CARD_OFFSET = 100;

export const Testimonials = () => {
  const t = useTranslations('testimonials');
  const testimonialsTranslations = t.raw('testimonials') as TestimonialsInfo[];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsTranslations.length) % testimonialsTranslations.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsTranslations.length);
  };

  const handleOnKeyPrev = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key !== 'Enter') return;

    handlePrev();
  };

  const handleOnKeyNext = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key !== 'Enter') return;

    handleNext();
  };

  const switchButtons = [
    {
      alt: 'Left Arrow',
      className: 'w-12 h-12 p-2 cursor-pointer rounded-full bg-white-01 hover:bg-light-gray',
      onClick: handlePrev,
      onKeyDown: handleOnKeyPrev,
      src: leftArrow,
    },
    {
      alt: 'Right Arrow',
      className: 'w-16 h-16 p-2 cursor-pointer rounded-full bg-dark-blue hover:bg-light-blue',
      onClick: handleNext,
      onKeyDown: handleOnKeyNext,
      src: rightArrow,
    },
  ];

  return (
    <>
      <div className="pr-20 mr-24 border-r border-light-gray max-768:pr-0 max-768:pb-20 max-768:mr-0 max-768:mb-24 max-768:border-r-0">
        <Typography className="mb-3" tag="cap1">
          {t('sectionName')}
        </Typography>
        <Typography className="mb-4" tag="h2">
          {t('title')}
        </Typography>
        <Typography tag="body1">{t('info')}</Typography>
      </div>
      <div className="relative max-w-xl w-full overflow-hidden max-768:w-8/12 max-768:pt-20 max-768:border-t max-768:border-light-gray">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * SLIDE_CARD_OFFSET}%)` }}
        >
          {testimonialsTranslations.map(({ avatar, feedback, location, name }) => (
            <div key={name} className="min-w-full flex flex-col items-center text-center p-4">
              <Typography tag="h4" className="mb-28 w-11/12 self-start text-left">
                {feedback}
              </Typography>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Image
                    src={avatar}
                    alt={`${name}'s avatar`}
                    className="rounded-full mb-2 w-12 h-12 object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col ml-2 text-left">
                    <Typography tag="h4">{name}</Typography>
                    <Typography tag="body1">{location}</Typography>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  {switchButtons.map(({ alt, className, onClick, onKeyDown, src }) => (
                    <Image
                      key={alt}
                      onClick={onClick}
                      role="button"
                      tabIndex={0}
                      onKeyDown={onKeyDown}
                      src={src}
                      alt={alt}
                      className={className}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
