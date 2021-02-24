import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Link from "@material-ui/core/Link";
import Carousel from "../components/Carousel";
import Description from "./WebDescription";
const Home = () => {
  const user = { firstName: "Young Coder" };
  return (
    <>
      <Header user={user} />
      <Carousel />
      <Description />
      <Footer />
    </>
  );
};
export default Home;
