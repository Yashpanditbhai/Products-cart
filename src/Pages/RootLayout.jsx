import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

const RootLayout = () => {
  return (
    <div className="root-div">
      <Provider store={store}>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};
export default RootLayout;
