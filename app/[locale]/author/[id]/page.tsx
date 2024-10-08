import { AuthorProps } from './types';

export default function Author({ params }: AuthorProps) {
  return <main>Author: {params.id}</main>;
}
