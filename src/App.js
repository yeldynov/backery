import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Process from './pages/process/Process';
import Contacts from './pages/contacts/Contacts';

import './app.scss';
import Basket from './pages/basket/Basket';

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/process', element: <Process /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/basket', element: <Basket /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
