
import './App.css';

import Products from './RaviComponent/Products';
import Product from './product/product';
import logo from './logo.svg';
import AdminNavbar from './Admin/AdminComponents/AdminNavbar';



import HomePage from './Piyush/HomePage';

function App() {
  return (

    <div className="App" style={{width:"80%",margin:"auto",height:"auto"}}>
 <Products/>

    <div className="App">
    {/* <Navbar/> */}
      <AdminNavbar />

    </div>
    
    </div>
  );
}

export default App;
