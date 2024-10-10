import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
 import BookList from "./pages/bookList";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import About from "./pages/about";
import AuthForm from "./pages/authForm";
import WishList from "./pages/wishList";
import ContactUs from "./pages/contactUs";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n'
import EditBook from "./pages/editBook";
import List from "./pages/getBooks";



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
      element: <ContactUs/>
    },

    <I18nextProvider i18n={i18n}>
      <div>
        <h1>{i18n.t('welcome')}</h1>
        <BookList />
      </div>
    </I18nextProvider>
      element: <About/>
    },

    {
      path: "/editbook",
      element: <EditBook/>
    },

    {
      path: "/getbooks",
      element: <List/>
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
