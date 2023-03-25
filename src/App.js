import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/login/Login';
import Register from './components/login/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from '../src/components/privateroute/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import MakeAdmin from './components/makeadmin/MakeAdmin';
import Products from './components/products/Products';
import MenuDetails from './components/menudetails/MenuDetails';
import Blogs from './components/blogs/Blogs'
import Faq from './components/faq/Faq';
import AddProducts from './components/AddProducts/AddProducts';
import Gallary from './components/gallary/Gallary';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
     <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/about">
          <About></About>
        </Route>
        <Route exact path="/products">
         <Products></Products>
        </Route>
        <Route exact path="/services">
         <Gallary></Gallary>
        </Route>
        <Route exact path="/addproducts">
      <AddProducts></AddProducts>
        </Route>
        <Route  path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route  path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route  path="/faq">
         <Faq></Faq>
        </Route>
        <PrivateRoute exact path="/cars/:id">
       <MenuDetails></MenuDetails>
        </PrivateRoute>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/blogs">
         <Blogs></Blogs>
        </Route>
      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
