import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  return 'Hello /posts/$postId!';
}
