import { useContext } from "react";
import moment from "moment";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main";
import { GlobalContext } from "../context/GlobalState";

export default function Header() {
  const { emptyTransaction } = useContext(GlobalContext);

  return (
    <BrowserRouter>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="d-flex mx-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  onClick={(e) => emptyTransaction()}
                  className="nav-link text-light"
                  to="/"
                >
                  {moment().format("DD/MM/YY")}
                </Link>
                <Link
                  onClick={(e) => emptyTransaction()}
                  className="nav-link text-light"
                  to={moment().add(1, "days").format("DD/MM/YY")}
                >
                  {moment().add(1, "days").format("DD/MM/YY")}
                </Link>
                <Link
                  onClick={(e) => emptyTransaction()}
                  className="nav-link text-light"
                  to={moment().add(2, "days").format("DD/MM/YY")}
                >
                  {moment().add(2, "days").format("DD/MM/YY")}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route index element={<Main />} />
        <Route
          path={moment().add(1, "days").format("DD/MM/YY")}
          element={<Main />}
        />
        <Route
          path={moment().add(2, "days").format("DD/MM/YY")}
          element={<Main />}
        />
      </Routes>
    </BrowserRouter>
  );
}
