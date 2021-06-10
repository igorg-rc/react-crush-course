import { Route, Switch } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/NewMeetup'
import MainNavigation from './components/layout/MainNavigation/MainNavigation'

const App = () => {
  return (
    <div className="App">
      <MainNavigation />
      <img src={logo} className="App-logo" alt="logo" />
      <h3>Hello from React!</h3>

      <Switch>
        <Route exact path="/" component={AllMeetups} />
        <Route exact path="/new-meetup" component={NewMeetup} />
        <Route exact path="/favorites" component={Favorites} />
      </Switch>

{/* These routes are equal to next: */}
      {/* <Route path="/" exact>
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetup />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route> */}
    </div>
  );
}

export default App;
