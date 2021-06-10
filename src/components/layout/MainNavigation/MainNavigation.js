import { Link } from 'react-router-dom'
import { useContext } from 'react'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../../store/FavoritesContext'

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext)

  return (
    <>
      <header className={classes.Header}>
        <div className={classes.Logo}>React meetups</div>  
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites"
              >Favorites
              <span className={classes.Badge}>{ favoritesCtx.totalFavorites }</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header> 
    </>
  )
}
