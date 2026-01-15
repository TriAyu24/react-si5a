import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

// ===== IMPORT LOGIN & AUTH =====
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

// ===== LAZY LOAD KOMPONEN =====
const Home = React.lazy(() => import("./components/Home"));
const FakultasList = React.lazy(() =>
  import("./components/Fakultas/List")
);
const FakultasCreate = React.lazy(() =>
  import("./components/Fakultas/Create")
);
const FakultasEdit = React.lazy(() =>
  import("./components/Fakultas/Edit")
);
const ProdiList = React.lazy(() =>
  import("./components/Prodi/List")
);
const ProdiCreate = React.lazy(() =>
  import("./components/Prodi/Create")
);
const MahasiswaList = React.lazy(() =>
  import("./components/Mahasiswa/List")
);
const MahasiswaCreate = React.lazy(() =>
  import("./components/Mahasiswa/Create")
);

function App() {
  return (
    <Router>
      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">PAW React</span>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/fakultas">
                  Fakultas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/prodi">
                  Program Studi
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/mahasiswa">
                  Mahasiswa
                </NavLink>
              </li>
            </ul>

            {/* LOGOUT */}
            <Logout />
          </div>
        </div>
      </nav>

      {/* ===== ROUTING ===== */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* LOGIN (TIDAK DIPROTEKSI) */}
          <Route path="/login" element={<Login />} />

          {/* ===== SEMUA ROUTE DIPROTEKSI JWT ===== */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          <Route
            path="/fakultas"
            element={
              <PrivateRoute>
                <FakultasList />
              </PrivateRoute>
            }
          />

          <Route
            path="/fakultas/create"
            element={
              <PrivateRoute>
                <FakultasCreate />
              </PrivateRoute>
            }
          />

          <Route
            path="/fakultas/edit/:id"
            element={
              <PrivateRoute>
                <FakultasEdit />
              </PrivateRoute>
            }
          />

          <Route
            path="/prodi"
            element={
              <PrivateRoute>
                <ProdiList />
              </PrivateRoute>
            }
          />

          <Route
            path="/prodi/create"
            element={
              <PrivateRoute>
                <ProdiCreate />
              </PrivateRoute>
            }
          />

          <Route
            path="/mahasiswa"
            element={
              <PrivateRoute>
                <MahasiswaList />
              </PrivateRoute>
            }
          />

          <Route
            path="/mahasiswa/create"
            element={
              <PrivateRoute>
                <MahasiswaCreate />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;