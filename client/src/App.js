import { Route, Routes } from "react-router-dom";
import path from "./constants/paths";
import Navigation from "./components/navigation/navigation.component";
import "./App.scss";
import ProfilePage from "./pages/profile/profilePage";
import { ModalProvider } from "styled-react-modal";
import { useSelector, useDispatch } from "react-redux";

import {
  HomePage,
  NewListingsPage,
  DailyNewsPage,
  LiveAuctionPage,
  PastAuctionsPage,
  SellCarPage,
  LoginPage,
  RegistrationPage,
  ForgotPage,
  Auction,
  ShowAuction,
  DetailsAuction,
  NewListingsListPage,
  NewListingDetailsPage,
  HistoryPage,
  ComparePage,
  ListComparision,
  UpdateProfilePage,
  NotFoundPage,
} from "./pages";
import EditCarDetailsPage from "./pages/EditCarDetails/EditCarDetails.jsx";
import React, { useEffect } from "react";
import { notSubmitted, submitted, setLoginUser, setNullUser } from "./redux/isLogin.reducers";
import axios from "axios";

function App() {
    const dispatch = useDispatch();

    const loginStatus = useSelector((state) => state.loginStatus.status);

    useEffect(() => {
        axios({
            method: "get",
            url: "https://bid-my-ride-server.onrender.com/user/checkUser",
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then((res) => {
                if (res.data.status) {
                    dispatch(submitted());
                    dispatch(setLoginUser(res.data.user));
                } else {
                    dispatch(notSubmitted());
                    dispatch(setNullUser());
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [dispatch]);

    return (
      <>
        {loginStatus ? (
          <ModalProvider>
            <div className="app">
              <div className="navigation__wrapper">
                <Navigation />
              </div>
              <div className="main-section">
                <Routes>
                  <Route path={path.HOME} exact element={<HomePage />} />
                  <Route path={path.SELL_CAR} element={<SellCarPage />} />
                  <Route path={path.AUCTION} element={<Auction />} />
                  <Route path={path.SHOWAUCTION} element={<ShowAuction />} />
                  <Route path="/auction/details/:id" element={<DetailsAuction />} />
                  <Route path={path.NEW_LISTINGS} element={<NewListingsPage />}>
                    <Route
                      path={`${path.NEW_LISTINGS}/`}
                      element={<NewListingsListPage />}
                    />
                    <Route
                      path={`${path.NEW_LISTINGS}/:vin`}
                      element={<NewListingDetailsPage />}
                    />
                  </Route>
                  <Route
                    path={path.DAILY_NEWS}
                    exact
                    element={<DailyNewsPage />}
                  />
                  <Route
                    path={path.LIVE_AUCTIONS}
                    exact
                    element={<LiveAuctionPage />}
                  />
                  <Route
                    path={path.PAST_AUCTIONS}
                    exact
                    element={<PastAuctionsPage />}
                  />
                  <Route path={path.PROFILE} exact element={<ProfilePage />} />
                  <Route
                    path={path.UPDATE_PROFILE}
                    exact
                    element={<UpdateProfilePage />}
                  />
                  <Route path={path.HISTORY} exact element={<HistoryPage />} />
                  <Route
                    path={path.COMPARE_CARS}
                    exact
                    element={<ComparePage />}
                  />
                  <Route
                    path={path.LIST_COMPARISION}
                    exact
                    element={<ListComparision />}
                  />
                  <Route
                    path={path.MY_LISTINGS}
                    exact
                    element={<div>MY LISTINGS....</div>}
                  />
                  <Route
                    path={`${path.SELL_CAR}/:vin`}
                    exact
                    element={<EditCarDetailsPage />}
                  />
                </Routes>
              </div>
            </div>
          </ModalProvider>
        ) : (
          <>
            <Routes>
              <Route path={path.LOGIN} exact element={<LoginPage />} />
              <Route path={path.REGISTRATION} element={<RegistrationPage />} />
              <Route path={path.FORGOT} element={<ForgotPage />} />
            </Routes>
          </>
        )}
        <Routes>
          <Route path="*" exact={true} element={<NotFoundPage />} />
        </Routes>
      </>
    );
}

export default App;
