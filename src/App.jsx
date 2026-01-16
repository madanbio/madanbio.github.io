import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ContactSuccess from "./components/ContactSuccess";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success",
    element: <ContactSuccess />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
