import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

//components
import Home from "./pages/home/home.component";
import Menu from "./pages/menu/menu.component";
import Navbar from "./components/navbar/navbar.component";
import Button from "./components/button/button.component";
import LoadingScreen from "./components/loadingScreen/loadingScreen.component";

//redux
import { setIsLoading, setFirstMount } from "./redux/app/app.action";

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
        <LoadingScreen />
        <Suspense fallback={<LoadingScreen />}>
          <Navbar />
          <Button menu />
          <Button left />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setIsLoading: (boolean) => dispatch(setIsLoading(boolean)),
  setFirstMount: () => dispatch(setFirstMount()),
});

export default connect(null, mapDispatchToProps)(App);
