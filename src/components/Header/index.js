import React, { useState } from "react";
// import { Segment, Grid, Menu, Button, Icon } from "semantic-ui-react";
// components needed

const CustomHeader = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark well justify-content-between">
      <a className="navbar-brand">Logo</a>
      <div className="inline ">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact</a>
      </li>
      <li class="nav-item">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Portfolio
        </button>
      </li>
    </ul>
  </div>
      </div>
    </nav>
  );
};

export default CustomHeader;
