// Author: Shvet Kantibhai Anaghan (sh618812@dal.ca) || (BannerID: B00917946)

import React from "react";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";
import "./home-page.styles.scss";

import path from "../../constants/paths";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Send a sell car request now.</h1>
      <Link to={path.SELL_CAR}>
        <Button>Sell A Car</Button>
      </Link>
    </div>
  );
};

export default HomePage;
