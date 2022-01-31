import React from "react";
import KittenContainer from "../components/KittenContainer/KittenContainer";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  const [catLinks, setCatLinks] = React.useState([]);
  React.useEffect(() => {
    axios.get("./data/catLinks.json").then((response) => {
      setCatLinks(response.data);
    });
  }, []);

  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axios.get("./data/categories.json").then((response) => {
      setCategories(response.data);
    });
  }, []);

  const [kittens, setKittens] = React.useState([]);
  React.useEffect(() => {
    axios.get("./data/kittens.json").then((response) => {
      setKittens(response.data);
    });
  }, []);

  return (
    <div className="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Streameow - Web Cat Video Cat</title>
        <link rel="icon" type="image/svg" href="/favicon.svg" sizes="16x16" />
      </Helmet>
      <Navbar catLinks={catLinks} />
      <div className="content">
        <Sidebar catLinks={catLinks} categories={categories} />
        <KittenContainer kittens={kittens} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
