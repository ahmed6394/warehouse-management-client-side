import "./App.css";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Inventory from "./Pages/Inventory/Inventory";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login/Login";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import NotFound from "./Shared/NotFound/NotFound";
import Signup from "./Pages/Login/SignUp/Signup";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import ManageItem from "./Pages/ManageItem/ManageItem";
import Manage from "./Pages/Manage/Manage";
import Blog from "./Pages/Blog/Blog";
import AddItems from "./Pages/AddItems/AddItems";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <Manage></Manage>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="item/:itemId" element={<ItemDetail></ItemDetail>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
