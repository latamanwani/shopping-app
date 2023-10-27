
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
// import AddProducts from './components/AddProducts';



function App() {

  const user = localStorage.getItem("token");

  return (
    <div className="App">
            
     <Routes>
			{user && <Route path="/" exact element={<DashBoard />} />} 
		
			
      {/* <Route path="/add-product" exact element={<AddProducts />} />  */}
      <Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
 


              
              
   

        
         
    </div>
  );
}

export default App;
