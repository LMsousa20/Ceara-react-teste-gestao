import { Routes, Route } from "react-router-dom";
import Footer from "./pages/components/Footer";

import Header from "./pages/components/Header";
import Cadastro from "./pages/components/Products";
import 'bootstrap/dist/css/bootstrap.css'

import './App.css'
import Frentista from "./pages/components/Frentista";
import Clientes from "./pages/components/Clientes";
import Login from "./pages/components/Login";


function App() {

  return (
    <div>
      


        <Header />
        <div className="sub-container1"></div>
        
      <Routes>
        
        
        <Route path="/" element={<Cadastro />}/>
        <Route path="/products" element={<Cadastro />}/>
        <Route path="/Frentista" element={<Frentista />}/>
          
        <Route path="/Clientes" element={<Clientes />}/>
        <Route path="/Login" element={<Login />}/>
        
        
      </Routes>
      <Footer />
      
    </div>
  );
}



export default App;
