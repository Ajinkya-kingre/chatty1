import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/Register";
import Chat from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Chat />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <Routes />
      </div>
    </RouterProvider>
  );
}

export default App;
