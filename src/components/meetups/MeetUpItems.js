import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetUpItems.module.css';
import FavouritesContext from '../../store/favourite-context';

function MeetUpItems(props) {
  const favouriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouriteCtx.isFavorite(props.id);

  function toggleFavouritesHandler() {
    if (itemIsFavourite) {
      favouriteCtx.removeFavourite(props.id);
    } else {
      favouriteCtx.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        address: props.address,
        image: props.image,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouritesHandler}>
            {itemIsFavourite ? 'Remove From Favourites' : 'To Favourites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetUpItems;
