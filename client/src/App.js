import {Header, Footer} from './components/index';
import {Home, Tour, AboutMe, ErrorPage, Auth} from './pages/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { GlobalStyle } from './Theme';

function App() {
    return (
        <Router>
            <Header/>
            <GlobalStyle />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tour/:id" component={Tour} />
                <Route path="/aboutMe" component={AboutMe} />
                <Route path="/login" component={Auth} />
                <Route path="/signup" component={Auth} />
                <Route  component={ErrorPage} />
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;
