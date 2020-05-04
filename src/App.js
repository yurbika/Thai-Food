import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import FocusLock, { AutoFocusInside } from "react-focus-lock";

import "./App.css";

//components
import Navbar from "./components/navbar/navbar.component";
import Button from "./components/button/button.component";
import LoadingScreen from "./components/loadingScreen/loadingScreen.component";
import Popup from "./components/popup/popup.component";

//redux
import { selectShowPopup } from "./redux/popup/popup.selectors";

const Home = lazy(() => import("./pages/home/home.component"));

const Menu = lazy(() => import("./pages/menu/menu.component"));

const Contact = lazy(() => import("./pages/contact/contact.component"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Popup active={this.props.showPopup} />
          <Button menu />
          <Button left />
          <Navbar />
          <Suspense fallback={<LoadingScreen />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  showPopup: selectShowPopup,
});

export default connect(mapStateToProps)(App);
