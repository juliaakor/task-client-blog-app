import { useCallback } from 'react';

interface PaginationButtonProps {
  disabled: boolean;
  name: string;
  onClick: () => void;
  text: string;
}

export const usePaginationButtons = ({
  buttonsTranslations,
  currentPage,
  currentPostsAmount,
  handleNextClick,
  handlePrevClick,
}: {
  currentPage: number;
  currentPostsAmount: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  buttonsTranslations: (key: string) => string;
}) => {
  return useCallback(() => {
    const buttons: PaginationButtonProps[] = [
      {
        disabled: currentPage === 1,
        name: 'prev',
        onClick: handlePrevClick,
        text: `< ${buttonsTranslations('prevButtonTitle')}`,
      },
      {
        disabled: currentPostsAmount === 0,
        name: 'next',
        onClick: handleNextClick,
        text: `${buttonsTranslations('nextButtonTitle')} >`,
      },
    ];

    return buttons;
  }, [currentPage, currentPostsAmount, handlePrevClick, handleNextClick, buttonsTranslations]);
};
