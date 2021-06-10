import { Route, Switch } from 'react-router-dom'

import './App.css'
import AllMeetups from './pages/AllMeetups'
import Favorites from './pages/Favorites'
import NewMeetup from './pages/NewMeetup'
import { Layout } from './components/layout/Layout/Layout'

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={AllMeetups} />
          <Route exact path="/new-meetup" component={NewMeetup} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
