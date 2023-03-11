import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Review from "./pages/Review/Review";
import Countries from "./pages/Countries/Countries";
import Home from "./pages/Home";
import Community from "./pages/Community/Community";
import Account from "./pages/Community/Account";
import Login from "./components/Account/Login";

const router = createBrowserRouter([
  {
    path: "account",
    element: <Account />,
    children: [
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: ":id",
    element: <Home />,
    children: [
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "review/:reviewId",
        element: <Review />,
      },
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;