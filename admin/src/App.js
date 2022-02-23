import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  const adminLogin = useSelector((state) => state.user.currentUser.isAdmin);
  return (
    <Router>
      <Topbar />
      <Container>
        <Sidebar />
        <Routes>
          <Route
            exact
            path="/"
            element={adminLogin ? <Home /> : <Navigate to={"/login"} />}
          />
          <Route
            path="/users"
            element={adminLogin ? <UserList /> : <Navigate to={"/login"} />}
          />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route
            path="/login"
            element={adminLogin ? <Navigate to={"/"} /> : <Login />}
          />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
