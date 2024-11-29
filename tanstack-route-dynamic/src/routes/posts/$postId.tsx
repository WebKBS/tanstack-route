import { createFileRoute } from '@tanstack/react-router';
import { getPost } from '../../services/api';

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return await getPost(+params.postId);
  },
  pendingComponent: () => <div>Loading...</div>,
  pendingMs: 500,
  component: RouteComponent,
});

function RouteComponent() {
  const post = Route.useLoaderData();

  console.log('postId', post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
