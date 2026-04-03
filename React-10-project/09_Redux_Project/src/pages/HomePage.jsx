import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { query } = useSelector((state) => state.search);
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">


    <SearchBar/>
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
