import './App.css';
import HeaderPart from './components/HeaderPart';
import FooterPart from './components/FooterPart';
import ListPart from './components/ListPart';
import FormPart from './components/FormPart';
import DetailPart from './components/DetailPart';
import WorksPart from './components/WorksPart';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="d-flex minHeight:'100vh' flex-column">
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
                <Route path="/darbai">
                  <HeaderPart/>
                  <WorksPart/>
                  <FooterPart/>
                </Route>
                <Route path="/">
                  <HeaderPart/>
                  <ListPart/>
                  <FooterPart/>
                </Route>
            </Switch>
          </Router>
    </Container>
  );
}

export default App;
