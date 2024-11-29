import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import * as React from 'react';
import Header from '../components/Header';
import '../index.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
