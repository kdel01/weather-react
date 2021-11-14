import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="card">
          <h1>Weather Around the World</h1>
          <h3 className="date" id="date">
            Tuesday, 6:43
          </h3>
          <div className="weather-app">
            <form id="form" className="mb-3">
              <div className="row">
                <div className="col-3 empty-space"></div>

                <div className="col-3">
                  <div className="search-form">
                    <div className="mb-3">
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search City"
                        id="search-city"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <button type="submit" className="btn btn-success" id="search">
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-info"
                    id="myLocation"
                  >
                    My Location
                  </button>
                </div>

                <div className="col-3 empty-space"></div>
              </div>
            </form>

            <div className="current-selection">
              <div className="current-heading">
                <h2 id="current-city">Current City: Sydney</h2>
              </div>
              <div className="current-heading">
                <span id="heading">Current Temp: </span>
                <span id="temperature">20</span>
                <span id="current-units"> ºC</span>
                <div className="row">
                  <div className="col-3 empty-space"></div>
                  <div className="col-3 major-details">
                    <div className="current-icon">
                      <img
                        src="http://openweathermap.org/img/wn/04d@2x.png"
                        alt="Clear"
                        id="current-icon"
                        className="float-left"
                      />
                    </div>
                  </div>
                  <div className="col-3 minor-details">
                    <ul>
                      <li id="describe">Cloudy</li>
                      <li>
                        Humidity: <span id="humidity">70</span>%
                      </li>
                      <li>
                        Wind: <span id="wind">7</span> m/h
                      </li>
                    </ul>
                  </div>
                  <div className="col-3 empty-space"></div>
                </div>
              </div>
            </div>

            <hr />

            <div className="weather-forecast" id="weather-forecast"></div>
          </div>
        </div>
        <footer>
          Coded by Kathryn Delavere | Hosted on Netlify | View{" "}
          <a
            href="https://github.com/kdel01/vanilla-weatherapp"
            target="_blank"
          >
            Source Code
          </a>{" "}
          on GitHub
        </footer>
      </div>
    </div>
  );
}
