import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_aboutLayout')({
  component: AboutLayout,
});

function AboutLayout() {
  return (
    <div>
      <h1>About Layout</h1>
      <Outlet />
    </div>
  );
}
