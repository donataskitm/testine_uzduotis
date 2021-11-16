import './App.css';
import Header from './parts/Header';
import Footer from './parts/Footer';
import List from './pages/List';
import Form from './components/Form';
import Detail from './pages/Detail';
import Works from './pages/Works';

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
                  <Header/>
                  <Form/>
                  <Footer/>
                </Route>
                <Route path="/aprasymas">
                  <Header/>
                  <Detail/>
                  <Footer/>
                </Route>
                <Route path="/darbai">
                  <Header/>
                  <Works/>
                  <Footer/>
                </Route>
                <Route path="/">
                  <Header/>
                  <List/>
                  <Footer/>
                </Route>
            </Switch>
          </Router>
    </Container>
  );
}
export default App;