import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function HomeSearchBar({className}) {
  return (
    <div className={className}>
      <div className="banner-searchbar">
        <input type="text" placeholder="Search rfa.sc.gov" />
        <button type="button">
          Search
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomeSearchBar;
