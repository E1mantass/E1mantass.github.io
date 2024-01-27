// import { postRequest } from "../../services/userService";
import Login from "../login/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import ProductList from "../productList/ProductList";



function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/products/:id' element={<ProductList/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
