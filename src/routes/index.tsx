import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/main-layout";
import MainView from "../view/main-view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainView />,
      },
    ],
  },
]);

export default router;
