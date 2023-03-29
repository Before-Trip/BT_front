import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Review from "./pages/Review/Review";
import Countries from "./pages/Countries/Countries";
import Home from "./pages/Home";
import Community from "./pages/Community/Community";
import Account from "./pages/Community/Account";
import Login from "./components/Account/Login";
import Authorization from "./components/Account/Authorization";
import ReviewForm from "./pages/Review/ReviewForm";
import CountryInfo from "./pages/Countries/CountryInfo";

const routerInfo = createBrowserRouter([
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
        path: "",
        element: <CountryInfo />
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "review/:reviewId",
        element: <Review />,
      },
      {
        path: "create",
        element: (
          <Authorization>
            <ReviewForm />
          </Authorization>
        ),
      }
    ]
  },
])
function App() {
  return (
    <RouterProvider router={routerInfo} />
  );
}

export default App;