import React, { Suspense, lazy } from "react";
import { createStructuredSelector } from "reselect";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

//components
import Home from "./pages/home/home.component";
import Menu from "./pages/menu/menu.component";
import Navbar from "./components/navbar/navbar.component";
import Button from "./components/button/button.component";
import LoadingScreen from "./components/loadingScreen/loadingScreen.component";
import Popup from "./components/popup/popup.component";
import Contact from "./pages/contact/contact.component";

//redux
import { setIsLoading, setFirstMount } from "./redux/app/app.action";
import { selectIsLoading } from "./redux/app/app.selectors";

import { selectShowPopup } from "./redux/popup/popup.selectors";
// const Home = lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(import("./pages/home/home.component")), 1500);
//   });
// });

class App extends React.Component {
  componentWillMount() {
    this.props.setIsLoading(true);
  }

  componentDidMount() {
    this.props.setFirstMount();
  }

  render() {
    return (
      <div className="App">
        {/*  <LoadingScreen /> */}
        <Popup active={this.props.showPopup} />
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <Button menu />
          <Button left />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  showPopup: selectShowPopup,
});

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (boolean) => dispatch(setIsLoading(boolean)),
  setFirstMount: () => dispatch(setFirstMount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
