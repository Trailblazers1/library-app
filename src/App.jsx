import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookList from "./pages/bookList";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import About from "./pages/about";
import AuthForm from "./pages/authForm";
import WishList from "./pages/wishList";
import ContactUs from "./pages/contactUs";
import EditBook from "./pages/editBook";
import List from "./pages/getBooks";
import Fiction from "./pages/fiction";
import Journals from "./pages/journals.jsx";
import NonFiction from "./pages/nonFiction/index.jsx";
import ViewAllBooks from "./pages/viewAllBooks/index.jsx";

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

    {
      path: "/contactUs",
      element: <ContactUs />,
    },

    {
      path: "/editbook",
      element: <EditBook />,
    },

    {
      path: "/getbooks",
      element: <List />,
    },

    {
      path: "/fiction",
      element: <Fiction/>
    },

    {
      path: "/journals",
      element: <Journals/>
    },

    {
      path: "/nonFiction",
      element: <NonFiction/>
    },

    {path: "/viewAllBooks",
      element: <ViewAllBooks/>

    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
