import './App.css';
import Header from './parts/Header';
import Footer from './parts/Footer';
import routeData from './data/Routs';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container fluid className="d-flex minHeight:'100vh' flex-column">
      <Router>
        <Header/>
        {
          routeData.map(({
            title,
            component: Component,
            url,
            exact,
          }, index) => {
            return (
              <Route
                key={index}
                path={url}
                exact={exact}
                render={(compProps) => <Component {...compProps} title={title} />}
              />
            )
          })
        }
        <Footer/>
      </Router>
    </Container>
  );
}
export default App;