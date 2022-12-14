import Login from "./pages/login/Login"
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom"
import Register from "./pages/register/Register"
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import Profile from "./pages/profile/Profile"
import Home from "./pages/home/Home.jsx"
import "./style.scss"
import { useContext } from "react"
import { DarkModeContext } from "./context/darkModeContext"
import { AuthContext } from "./context/authContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const { currentUser } = useContext(AuthContext);

  // accessing data via context provider
  const { darkMode } = useContext(DarkModeContext);

  const queryClient = new QueryClient()


  // outlet is a component that renders the next match in a set of matches. It allows nested routes.
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <Navbar />
          <div style={{ display: "flex"}}>
            <LeftBar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <RightBar />
          </div>
        </div>
      </QueryClientProvider>
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
