import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postId } = Route.useParams();
  // const { postId } = useParams({ strict: false });

  return <h1>`Hello /posts/{postId}`</h1>;
}
