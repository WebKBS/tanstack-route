import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  // const { postId } = useParams({ strict: false });

  return `Hello /posts/${postId}`;
}
