import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "../header/Header";
import ProductList from "../productList/ProductList";
import Login from "../login/Login";
import Register from "../register/Register";
import UserProducts from "../userProducts/UserProducts";
import ProductPage from "../productPage/ProductPage";
import Footer from "../footer/Footer";
import '../../Style.scss'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/products/:id' element={<ProductList/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/userProducts/:id' element={<UserProducts/>}/>
          <Route path='/product/:id' element={<ProductPage/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
