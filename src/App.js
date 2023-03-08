import "./App.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Review from "./pages/Review/Review";
import Countries from "./pages/Countries/Countries";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/account",
    element: <div>회원가입 영역입니다.</div>,
  },
  {
    path: "/",
    element: <Countries />,
  },
  {
    path: "/:id",
    element: <Home />,
    children: [
      {
        path: "review/:reviewId",
        element: <Review />,
      },
      {
        path: "",
        element: <div>국가영역입니다.</div>
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;