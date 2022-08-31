import { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Container from "@mui/material/Container";
import MyTabs from "./Components/Layout/MyTabs";
import AddDrawer from "./Components/agregar/AddDrawer";

function App() {
  return (
    <Fragment>
      <header>{/* <AppBar /> */}</header>
      <main>
        <Container>
          <MyTabs></MyTabs>
          <AddDrawer />
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
