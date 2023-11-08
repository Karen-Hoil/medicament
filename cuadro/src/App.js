import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './css/login.css';
import './css/tabs.css';
import './css/cards.css';
import Login from './page/login';
import Home from './page/home';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Home/>
    },
    {
      path:'/login',
      element: <Login/>
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
