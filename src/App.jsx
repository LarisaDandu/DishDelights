import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultPage from './views/DefaultPage';
import Recipes from './views/recipes';
import FavRecipes from './views/favRecipes';
import About from './views/about';
import Contact from './views/contact';
import Layout from './Layout';
import Details from './views/Details';

function App() {

  const router = createBrowserRouter([
    {
      path: "/DishDelights/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <DefaultPage/>,
        },
        {
          path: "recipes",
          element: <Recipes/>,
        },
        {
          path: "details/:detailId",
          element: <Details/>,
        },
        {
          path: "favrecipes",
          element: <FavRecipes/>,
        },
        {
          path: "about",
          element: <About/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        }
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App
