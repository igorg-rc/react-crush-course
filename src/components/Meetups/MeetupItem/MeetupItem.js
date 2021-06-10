import { useContext } from 'react'
import classes from './MeetupItem.module.css'
import { Card } from '../../UI/Card/Card'
import FavoritesContext from '../../../store/FavoritesContext'

export const MeetupItem = props => {
  const { id, image, title, description, address } = props

  const favoritesCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id, title, description, image, address
      })
    }
  }

  return (
      <li className={classes.Item}>
        <Card>
          <div className={classes.ImageHolder}>
            <img src={image} className={classes.Image} alt={title} />
          </div>
          <div className={classes.Content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
            <div className={classes.Actions}>
              <button onClick={toggleFavoriteStatusHandler}>{ itemIsFavorite ? 'Remove from favorites' : 'Add to favorites' }</button>
            </div>
          </div>
        </Card>
      </li>
  )
}