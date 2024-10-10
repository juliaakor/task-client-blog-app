import { renderHook, act } from '@testing-library/react';

import { useModal } from '@hooks/useModal';

describe('useModal hook', () => {
  it('should initialize with isOpen as false by default', () => {
    const { result } = renderHook(() => useModal());

    expect(result.current.isModalOpen).toBe(false);
  });

  it('should initialize with isOpen as true when passed as argument', () => {
    const { result } = renderHook(() => useModal(true));

    expect(result.current.isModalOpen).toBe(true);
  });

  it('should open the modal when openModal is called', () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    expect(result.current.isModalOpen).toBe(true);
  });

  it('should close the modal when closeModal is called', () => {
    const { result } = renderHook(() => useModal(true));

    act(() => {
      result.current.closeModal();
    });

    expect(result.current.isModalOpen).toBe(false);
  });
});
