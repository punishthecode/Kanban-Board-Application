import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import KanbanBoard from "./pages/KanbanBoard";
import "./App.css";

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <KanbanBoard />
    </ChakraProvider>
  );
}

export default App;
