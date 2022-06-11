
import './App.css';
import Home from './LandingPage/Home';
import { StyledEngineProvider } from '@mui/material/styles';
import { Routes,Route } from 'react-router-dom';
import MenProduct from './LandingPage/MenProduct';
import WomenProduct from './LandingPage/WomenProduct';
import KidProduct from './LandingPage/KidProduct';
import Cart from './LandingPage/Cart';
import SingleProduct from './LandingPage/SingleProduct';
import AdminHome from './Admin/AdminHome';
import AdminProduct from './Admin/AdminProduct';
import AdminCategory from './Admin/AdminCategory';
import InsertCategory from './Admin/InsertCategory';
import InsertProduct from './Admin/InsertProduct';
function App() {
  return (
  <>
  <StyledEngineProvider injectFirst>
  <Routes>
     <Route element={<Home/>} path="/"/>
     <Route element={<MenProduct/>} path="/men/shoes"/>
     <Route element={<WomenProduct/>} path="/women/shoes"/>
     <Route element={<KidProduct/>} path="/kid/shoes"/>
     <Route element={<Cart/>} path="/cart"/>
     <Route element={<SingleProduct/>} path="/single"/>
   </Routes>
   </StyledEngineProvider>

   <StyledEngineProvider injectFirst>
   <Routes>
    <Route element={<AdminHome/>} path="/admin"/>
    <Route element={<AdminCategory/>} path="/category"/>
    <Route element={<AdminProduct/>} path="/product"/>
    <Route element={<InsertCategory/>} path="/insert/category"/>
    <Route element={<InsertProduct/>} path="/insert/product"/>
  </Routes>
   </StyledEngineProvider>
 
  </>
  );
}

export default App;
