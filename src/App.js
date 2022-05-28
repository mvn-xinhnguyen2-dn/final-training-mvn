import "./assets/styles.css";
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components/layouts";
import React, { Suspense } from "react";
import PrivateRoute from "./core/guards/PrivateRoute";
import { DataAccount, DataClass } from "./data";
import { Spin, BackTop } from "antd";

const Auth = React.lazy(() => import("./pages/Auth"));
const Admin = React.lazy(() => import("./pages/Features/Admin"));
const Features = React.lazy(() => import("./pages/Features"));

function App() {
  return (
    <>
      <DataClass />
      <DataAccount />
      <Header />
      <main className="page-main">
        <Suspense
          fallback={
            <div className="center mt-30">
              <Spin />
            </div>
          }
        >
          <Switch>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Features />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <BackTop />
      <strong className="site-back-top-basic"></strong>
      <Footer />
    </>
  );
}

export default App;
