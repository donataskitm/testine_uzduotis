import './App.css';
import HeaderPart from './components/HeaderPart';
import FooterPart from './components/FooterPart';
import ListPart from './components/ListPart';
import FormPart from './components/FormPart';
import DetailPart from './components/DetailPart';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
          <Router>
            <Switch>
                <Route path="/pildymas">
                  <HeaderPart/>
                  <FormPart/>
                  <FooterPart/>
                </Route>
                <Route path="/aprasymas">
                  <HeaderPart/>
                  <DetailPart/>
                  <FooterPart/>
                </Route>
                <Route path="/">
                  <HeaderPart/>
                  <ListPart/>
                  <FooterPart/>
                </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
