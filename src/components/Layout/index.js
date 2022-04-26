import React from "react";
import { Container } from "semantic-ui-react";
// import 'semantic-ui-css';

import CustomHeader from "../Header";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      {/* components */}
      <CustomHeader />
      
    </Container>
  );
};

export default Layout;
