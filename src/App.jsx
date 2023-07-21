import './App.css'
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import Categories from './components/categories/Categories';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./components/products/Products"
import Register from './components/register/Register';
import ProductsByCategory from './components/products/products_by_category/ProductsByCategory';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { AuthProvider } from './components/context/AuthContext';
import Connected from "./components/login/connected/connected"
import CreateUser from "./components/login/create_user/CreateUser";
import ValidateLogin from './components/login/ValidateLogin';
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:id/products" element={<ProductsByCategory />} />
              <Route path="/login" element={<ValidateLogin />} />
              <Route path="/connected" element={<Connected />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<Products />} />
              <Route path="/createuser" element={<CreateUser />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>


  );
}

export default App
