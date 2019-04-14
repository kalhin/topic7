import React, { Component } from "react";
import "../css/Search.css";
import search from "../img/search.png";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <img src={search} alt="search" />
        <div className="placeholder">
          Search for properties or keywords..
        </div>
      </div>
    );
  }
}

export default Search;
