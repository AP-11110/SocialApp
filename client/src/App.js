import Login from "./pages/login/Login"
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom"
import Register from "./pages/register/Register"
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home.jsx"

function App() {

  const currentUser = true;

  // outlet is a component that renders the next match in a set of matches. It allows nested routes.
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex"}}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    ) 
  };

  // protecting home & profile routes
  // can access if use signed it, otherwise redirected to login
  const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }

  // layout will always be rendered
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

}

export default App;
