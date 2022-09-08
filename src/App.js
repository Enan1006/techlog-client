import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Shared/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import MyAccount from './Pages/Dashboard/MyAccount/MyAccount';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Items from './Pages/Items/Items/Items';
import Signup from './Pages/Shared/Signup/Signup';
import UpdateAccount from './Pages/Dashboard/UpdateAccount/UpdateAccount';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/items' element={<Items />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyOrder />}></Route>
          <Route path='/dashboard/update-account/:emailId' element={<UpdateAccount />}></Route>
          <Route path='/dashboard/my-account/:emailId' element={<MyAccount />}></Route>
          <Route path='/dashboard/add-review' element={<AddReview />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
