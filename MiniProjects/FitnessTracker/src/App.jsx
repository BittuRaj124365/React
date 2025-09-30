import { useState } from "react";
import "./App.css";
// import FitnessApp from "./Components/FitnessApp";
// import PrimarySearchAppBar from "./Pages/Dashboard";
// import MiniDrawer from "./Pages/Drawer";
import DrawerAndHeading from "./Pages/DrawerAndHeading";
import Container from "./Pages/Container"
function App() {
  return (
    <>
      <DrawerAndHeading />
      <Container/>
      {/* <PrimarySearchAppBar /> */}
      {/* <MiniDrawer/> */}
      {/* <FitnessApp /> */}
      {/* <Dashboard /> */}
    </>
  );
}

export default App;
