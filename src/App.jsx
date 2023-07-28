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
import ProductCreate from './components/products/create/Product_create';
import ProductEdit from './components/products/edit/Product_edit';

import ProductSuccess from './components/products/create/product_success/ProductSuccess';

import EditCategory from './components/categories/category/edit/EditCategory';
import Category from './components/categories/category/Category';
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/categories/" element={<Categories />} />
              <Route path="/categories/:id/products" element={<ProductsByCategory />} />
              <Route path="/login/" element={<ValidateLogin />} />
              <Route path="/connected/" element={<Connected />} />
              <Route path="/products/" element={<Products />} />
              <Route path="/createuser/" element={<CreateUser />} />
              <Route path="/createuseradmin/" element={<CreateUser />} />
              <Route path="/createProduct/" element={<ProductCreate />} />
              <Route path="/productEdit/" element={<ProductEdit />} />
              <Route path="/productEdit/:idEdit" element={<ProductEdit />} />
              <Route path="/productSuccess/:id" element={<ProductSuccess/>}/>
              <Route path="/category/:id" element={<Category/>}/>
              <Route path="/editCategory/" element={<EditCategory/>}/>
              <Route path="/editCategory/:idEdit" element={<EditCategory/>}/>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AuthProvider>


  );
}

export default App
