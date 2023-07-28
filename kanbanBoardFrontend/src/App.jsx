import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import KanbanBoard from "./pages/KanbanBoard";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./pages/SignupPage";
import "./App.css";

function setToken(userToken) {
  sessionStorage.setItem("user", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("user");
  const userToken = JSON.parse(tokenString);
  return userToken;
}
// App component that contains urls and hanldes routes
function App() {
  const token = getToken();
  const router = createBrowserRouter([
    {
      path: "/",
      element: !token ? <LoginPage setToken={setToken} /> : <KanbanBoard />,
    },
    // {
    //   path: "/login",
    //   exact: true,
    //   element: <LoginPage />,
    // },
    // { path: "/kanban", element: <KanbanBoard /> },
    { path: "*", element: <NotFoundPage /> },
    { path: "/signup", element: <SignupPage /> },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}
export default App;
