import React from "react";
import RecentUpdates from "./RecentUpdates";
import CalenderEvents from "./CalenderEvents";

function HomeUpdates() {
  return (
    <div>
      <div className="home-updates">
        <div className="container">
          <div className="row">
            <RecentUpdates/>
            <CalenderEvents/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUpdates;
