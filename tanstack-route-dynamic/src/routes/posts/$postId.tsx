import { createFileRoute } from '@tanstack/react-router';
import { getPost } from '../../services/api';

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params }) => await getPost(+params.postId),
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
