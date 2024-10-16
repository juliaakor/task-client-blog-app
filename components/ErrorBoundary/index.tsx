import { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorState } from './types';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // console error used instead of logger func
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <div className="bg-text-foreground text-center text text-lg tracking-wide px-4 py-3 w-52 m-auto">
          Something went wrong here... Try to reload or contact the support.
        </div>
      );
    }

    return children;
  }
}
