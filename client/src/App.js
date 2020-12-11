import {BrowserRouter as Router , Route} from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import {Container} from 'semantic-ui-react'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Container>
    </Router>
  );
}

export default App;
