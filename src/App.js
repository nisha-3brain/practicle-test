import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.min.css";
import "./css/custome.css";
import Loader from "./components/Loader";
import ProtectedRoutes from "./components/ProtectedRoutes";

const NoPage = lazy(() => import("./containers/NoPage"));
const AuthPage = lazy(() => import("./containers/AuthPage"));
const ToDo = lazy(() => import("./containers/Todo"));
const AddTodo = lazy(() => import("./containers/AddTodo"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <BrowserRouter basename={"/deployment"}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/ToDo">
                <Route index={true} element={<ToDo />}></Route>
                <Route path="Add" element={<AddTodo />}></Route>
                <Route path="Update/:id" element={<AddTodo />}></Route>
              </Route>
            </Route>
            <Route
              path={`${process.env.PUBLIC_URL}/`}
              element={<AuthPage />}
            ></Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
