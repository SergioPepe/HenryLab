import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Catalogo from "./components/catalogue";
import searchBar from "./components/searchBar"



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={searchBar} />
        <Route path="/catalogo" component={Catalogo} />
      </Switch>
    </Router>
    
  );
}

export default App;
