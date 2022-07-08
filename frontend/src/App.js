import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Setting from "./Pages/Setting/Setting";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Home/> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/setting">
          {currentUser ? <Setting /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
