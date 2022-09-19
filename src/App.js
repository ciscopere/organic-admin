import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Container from "@mui/material/Container";
import MyTabs from "./Components/Layout/MyTabs";
import AddDrawer from "./Components/drawers/AddDrawer";
import  AppBar  from './Components/Layout/AppBar'
import CartDrawer from "./Components/drawers/cartDrawer";

function App() {
  return (
    <Fragment>
      <AppBar />
      <header></header>
      <main>
        <Container>
          <MyTabs></MyTabs>
          {/* <AddDrawer /> */}
          <CartDrawer />
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
