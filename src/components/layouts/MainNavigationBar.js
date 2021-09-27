import { useContext } from 'react';

import { Link } from 'react-router-dom';
import classes from './MainNavigationBar.module.css';
import FavouritesContext from '../../store/favourite-context';

function MainNavigationBar() {
  const favouriteCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUp</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New MeetUp</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationBar;
