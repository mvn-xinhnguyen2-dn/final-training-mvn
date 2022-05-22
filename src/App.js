import "./assets/styles.css";
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components/layouts";
import React, { Suspense } from "react";
import PrivateRoute from "./core/guards/PrivateRoute";
import { DataClass } from "./data";

const Auth = React.lazy(() => import("./pages/Auth"));
const Admin = React.lazy(() => import("./pages/Features/Admin"));
const Features = React.lazy(() => import("./pages/Features"));

function App() {
  return (
    <>
      <DataClass />
      <Header />
      <main className="page-main">
        <Suspense fallback={<div>Loading...</div>}>
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
      <Footer />
    </>
  );
}

export default App;
