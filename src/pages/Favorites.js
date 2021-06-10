import { useContext } from 'react'

import FavoritesContext from '../store/FavoritesContext'
import { MeetupList } from '../components/Meetups/meetupList/MeetupList'

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = <h3>You have no favorites yet. Start adding now?</h3>
  } else {
    content = <div>
                <h3>My favorites meetups</h3>
                <MeetupList meetups={favoritesCtx.favorites} />
              </div>
  }

  return  <section>
            { content }
          </section>
  
}

