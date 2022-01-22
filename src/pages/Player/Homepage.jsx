import React from "react";
import "./Homepage.scss";
import Searchbar from "../../components/searchbar/search";
import { Mcard } from "../../components/cards/makecard";
const Player = ({ search, click, monster }) => {
  return (
    <div className="main-div x">
      <div className="searchbar x">
        <h1>Enter Name</h1>
        <Searchbar search={search} />
      </div>
      <div className="card-list">
        {monster.map((n, i) => (
          <Mcard key={i} card={n} index={i} url={n.Photo} click={click} />
        ))}
      </div>
    </div>
  );
};
export default Player;
