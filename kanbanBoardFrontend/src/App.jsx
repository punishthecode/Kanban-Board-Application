import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import KanbanBoard from "./pages/KanbanBoard";
import LoginPage from "./pages/LoginPage";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: <LoginPage />,
    },
    { path: "/kanban", exact: true, element: <KanbanBoard /> },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
