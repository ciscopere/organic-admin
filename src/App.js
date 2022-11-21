import Container from "@mui/material/Container";
import MyTabs from "./Components/Layout/MyTabs";
import AppBar from "./Components/Layout/AppBar";
import CartDrawer from "./Components/drawers/cartDrawer";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeCartDrawer } from "./redux/cartDrawer.slice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ButtonAppBar from "./Components/Layout/AppBaar";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      {/* <AppBar /> */}
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <CartDrawer />
        </Container>
      </main>
    </BrowserRouter>
  );
}

export default App;
