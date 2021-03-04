import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import EditPage from "./Pages/EditPage";
import HomePage from "./Pages/HomePage";
import NotFound from "./Pages/NotFound";
import ResultPage from "./Pages/ResultPage";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/edit/:id" component={EditPage} />
            <Route exact path="/result/:id" component={ResultPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;