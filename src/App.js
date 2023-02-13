import "./assets/scss/styles.scss";
import { Route, Switch } from "react-router-dom";
import { Header, Footer } from "./components/layouts";
import React, { Suspense, useState, useEffect } from "react";
import PrivateRoute from "./core/guards/PrivateRoute";
import { Spin, BackTop } from "antd";
import { getDatabase, ref, child, onValue } from "firebase/database";

const Auth = React.lazy(() => import("./pages/Auth"));
const Admin = React.lazy(() => import("./pages/Features/Admin"));
const Features = React.lazy(() => import("./pages/Features"));

function App() {
  const dbRef = ref(getDatabase());
  const [dataClasses, setDataClasses] = useState([]);
  const [dataTutors, setDataTutors] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    onValue(child(dbRef, `classes`), (snapshot) => {
      if (snapshot.exists()) {
        setDataClasses(Object.values(snapshot.val()));
      } else {
        console.log("No data available");
      }
    });
    onValue(child(dbRef, `users`), (snapshot) => {
      if (snapshot.exists()) {
        const loginUser = Object.values(snapshot.val()).find(
          (user) => user.status === true
        );
        setCurrentUser(loginUser);
      } else {
        console.log("No data available");
      }
    });
    onValue(child(dbRef, `tutors`), (snapshot) => {
      if (snapshot.exists()) {
        setDataTutors(Object.values(snapshot.val()));
      } else {
        console.log("No data available");
      }
    });
  }, [dbRef]);
  return (
    <>
      {" "}
      {dataClasses.length === 0 || dataTutors.length === 0 ? (
        <div className="center mt-30">
          <Spin />
        </div>
      ) : (
        <>
          <Header dataClasses={dataClasses} currentUser={currentUser} />
          <main className="page-main">
            <Suspense
              fallback={
                <div className="center mt-30">
                  <Spin />
                </div>
              }
            >
              <Switch>
                <PrivateRoute path="/admin" currentUser={currentUser}>
                  <Admin
                    dataClasses={dataClasses}
                    currentUser={currentUser}
                    dataTutors={dataTutors}
                  />
                </PrivateRoute>
                <Route path="/auth">
                  <Auth currentUser={currentUser} />
                </Route>
                <Route path="/">
                  <Features
                    dataClasses={dataClasses}
                    currentUser={currentUser}
                    dataTutors={dataTutors}
                  />
                </Route>
              </Switch>
            </Suspense>
          </main>
          <BackTop visibilityHeight={200} />
          <strong className="site-back-top-basic"></strong>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
