import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
    return (
    <Router>
        <>
        <Route exact path ='/'component={Home} />
    <Switch>
       
        <Route path ="Education"component={Education} />
        <Route path ="Skills"component={Skills} />
        <Route path ="Experience"component={Experience} />
        <Route path ="Projects"component={Projects} />

    </Switch>
        </>
    </Router>
 );
}

export default App;