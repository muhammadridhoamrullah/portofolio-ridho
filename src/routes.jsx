import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import LandingPage from "./pages/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

export default router;
