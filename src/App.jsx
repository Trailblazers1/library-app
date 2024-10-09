import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookList from "./pages/bookList";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import About from "./pages/about";
import AuthForm from "./pages/authForm";
import WishList from "./pages/wishList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BookList />,
    },

    {
      path: "/add-new",
      element: <AddBook />,
    },

    {
      path: "/books/:id",
      element: <BookDetails />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/authForm",
      element: <AuthForm />,
    },

    {
      path: "/wishList",
      element: <WishList />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
