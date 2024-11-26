import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_contactLayout')({
  component: ContactLayout,
});

function ContactLayout() {
  return (
    <div>
      <h1>Contact Layout</h1>
      <Outlet />
    </div>
  );
}
