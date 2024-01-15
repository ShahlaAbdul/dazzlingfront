import React from "react";
import "./home.scss";
import { Helmet } from "react-helmet-async";
import DazzlingCards from "../../Component/DazzylingCards/DazzlingCards";
function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
          </Helmet>
      <div>
        <DazzlingCards/>
          </div>
    </>
  );
}

export default Home;
