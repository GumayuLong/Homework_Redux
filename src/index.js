import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutExcercise from "./LayoutExcercise/LayoutExcercise";
import Description from "./MainCompent/Description";
import MovieBooking from "./pages/MovieBooking/MovieBooking";

// redux setup
import { Provider } from "react-redux";
import { store } from "./redux/configStore";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<Description />}></Route>
          <Route
            path="BTLayout"
            element={<LayoutExcercise></LayoutExcercise>}
          ></Route>
          <Route path="movieBooking" element={<MovieBooking />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
