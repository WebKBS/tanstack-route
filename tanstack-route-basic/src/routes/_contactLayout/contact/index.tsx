import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_contactLayout/contact/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
