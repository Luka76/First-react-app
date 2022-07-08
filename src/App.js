import React from "react";
import Navbar from "./components/Header/Navbar";
import Categories from "./components/Header/Categories";
import Banner from "./components/Banner";
import SimpleSlider from "./components/SimpleSlider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Article from "./pages/Article";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Trending from "./components/Sidebar/Trending";


function App() {
  return (
    <Router>
      <Navbar />
      <Categories />
      <Banner />
      <SimpleSlider />
      <Card/>
      <Card/>
      <Trending/>
      <Banner/>
      <Footer />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="category" exact element={<Category />} />
        <Route path="article" exact element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
