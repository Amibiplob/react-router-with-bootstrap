import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './Component/Error';
import About from './Component/About';
import Root from './Component/Root';
import Home from './Component/Home';
import Sports from './Component/Sports';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php'),
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'sports',
        loader: () => fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php'),
        element:<Sports></Sports>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
