import "./App.css";
import React from "react";
import Navbar from "./components/NavBar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/HomePage/home";
import Footer from "./components/Footer";
import Espers from "./components/EspersPage/Espers";
import TierList from "./components/TierListPage/tierlist";
import NewsDetails from "./components/HomePage/Events/NewsDetails";

import { Twitter } from "./components/HomePage/Twitter";
import EsperDetailPage from "./components/EsperDetailPage/EsperDetailPage";

import TierListTable from "./components/TierListPage/TierListTable";
import Patchnote320 from "./components/HomePage/Events/PatchNotes/Patch320";
import Patchnote319 from "./components/HomePage/Events/PatchNotes/Patch319";

import {
  DevelopersQA,
  DislyteTV,
  Valentines,
} from "./components/HomePage/Events/News";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Espers" element={<Espers />}></Route>
          <Route path="/TierList" element={<TierList />}></Route>
          <Route path="/TierListTable" element={<TierListTable />}></Route>
          <Route
            path="TierList/:esperName"
            element={<EsperDetailPage />}></Route>
          <Route path="Espers/:esperName" element={<EsperDetailPage />}></Route>
          <Route path="/Twitter" element={<Twitter />}></Route>
          <Route path="/NewsDetails" element={<NewsDetails />}>
            {" "}
          </Route>
          /*Events */
          <Route path="/DislyteTVProgram" element={<DislyteTV />}></Route>
          <Route path="/Patch320" element={<Patchnote320 />}></Route>
          <Route path="/Patch319" element={<Patchnote319 />}></Route>
          <Route path="/DevelopersQA8" element={<DevelopersQA />}></Route>
          <Route path="/ValentinesEvent" element={<Valentines />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
