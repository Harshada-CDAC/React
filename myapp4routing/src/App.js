import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header'
import NoPage from './NoPage';
import ProductList from './ProductList';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import UseStateHookObjForm from './UseStateHookObjForm'
function App() {
  return (
      <BrowserRouter>
      <Home></Home>

            <Routes>
                <Route>
                <Route path="list" element={<ProductList />} />
                <Route path="UseStateHookObjForm" element={<UseStateHookObjForm />} />
                <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
            </BrowserRouter>
            

  );
}

export default App;