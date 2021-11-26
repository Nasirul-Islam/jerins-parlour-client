import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import AOS from 'aos';
import Register from "./Pages/Login/Register/Register";
import Dashbord from "./Pages/Dashbord/Dashbord/Dashbord";
import AuthContext from "./context/AuthContext/AuthContext";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import AddServices from "./Pages/Dashbord/AddServices/AddServices";
import Book from "./Pages/Dashbord/Book/Book";
import AddReview from "./Pages/Dashbord/AddReview/AddReview";
import Bookinglist from "./Pages/Dashbord/Bookinglist/Bookinglist";
import MakeAdmin from "./Pages/Dashbord/MakeAdmin/MakeAdmin";
import ManageServices from "./Pages/Dashbord/ManageServices/ManageServices";
import Orderlist from "./Pages/Dashbord/Orderlist/Orderlist";
import AllServices from "./Pages/AllServices/AllServices";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";

AOS.init();

function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/allServices" element={<AllServices />} />
            <Route path="/contact" element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashbord" element={
              <PrivateRoute>
                <Dashbord />
              </PrivateRoute>} >
              {/* for User */}
              <Route path="/dashbord" element={<Bookinglist />} />
              <Route path="/dashbord/book/:id" element={<Book />} />
              <Route path="/dashbord/bookinglist" element={<Bookinglist />} />
              <Route path="/dashbord/addReview" element={<AddReview />} />
              {/* for Admin */}
              {/* <AdminRoute> */}
              <Route path="/dashbord/orderlist" element={<Orderlist />} />
              <Route path="/dashbord/addServices"
                element={<AddServices />} />
              <Route path="/dashbord/manageServices"
                element={<ManageServices />} />
              <Route path="/dashbord/makeAdmin" element={<MakeAdmin />} />
              {/* </AdminRoute> */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
