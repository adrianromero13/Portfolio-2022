import React from "react";

import CustomHeader from "../Header";

import "../../assets/Styles/styles.css";

const Layout = ({ children }) => {
  return (
    <div>
      <CustomHeader />
      <div className="container-fluid mainContainer">
        <div className="col-lg-6 col-md-auto">
          <div className="row">
            <figure >
              <blockquote className="blockquote myName">
                <h1>Adrian Romero</h1>
              </blockquote>
              <h3>
                <figcaption className="blockquote-footer myTitle ">Full Stack React.js developer</figcaption>
              </h3>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
