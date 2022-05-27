import { Switch, Route } from "react-router-dom";
import Home from "./Home";
// import AboutUs from "./AboutUs";
import Admin from "./Admin";

export default function Features() {
  return (
    <>
      <Switch>
        {/* <Route path="/about">
          <AboutUs />
        </Route> */}
        <Route path="/">
          <Home />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </>
  );
}
