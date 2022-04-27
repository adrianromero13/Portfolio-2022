import React, { useState } from "react";
// import { Segment, Grid, Menu, Button, Icon } from "semantic-ui-react";
// components needed

const CustomHeader = () => {
  const [aciveItem, setAciveItem] = useState("home");
  return (
    <div className='navbar well'>
      <div className='container'>
        <a className='navbar-brand logo-link' href="#">
          <img src='' alt='' width='30' height='24' className='d-inline-block align-text-top'/>
        Halo
        </a>
      </div>
    </div>
  );
};

export default CustomHeader;
