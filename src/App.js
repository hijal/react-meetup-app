import { Route, Switch } from 'react-router-dom';
import Layout from './components/layouts/Layout';

import AllMeetUpPage from './pages/AllMeetUp';
import FavouritePage from './pages/Favourites';
import NewMeetUpPage from './pages/NewMeetUps';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpPage />
        </Route>

        <Route path="/favourites">
          <FavouritePage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetUpPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
