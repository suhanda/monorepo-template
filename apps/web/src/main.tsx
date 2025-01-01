import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import "./index.css";
import { queryClient, QueryProvider } from "@/core/context/query";
import { routeTree } from "./routeTree.gen";
import { AuthProvider, useAuth } from "./core/context/auth";

// Set up a Router instance
const router = createRouter({
  routeTree,
  context: {
    queryClient: undefined!,
    authState: undefined!,
  },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("app")!;

export function App() {
  const authContext = useAuth();
  return (
    <RouterProvider
      router={router}
      context={{ queryClient, authState: authContext }}
    />
  );
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryProvider>,
  );
}
