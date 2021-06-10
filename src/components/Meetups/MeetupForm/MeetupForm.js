import classes from './MeetupForm.module.css'
import { Card } from '../../UI/Card/Card'

export const MeetupForm = () => {
  return <Card>
    <form className={classes.Form}>
      <div className={classes.Control}>
        <label htmlFor="title">Meetup title</label>
        <input id="title" type="text" required />
      </div>
      <div className={classes.Control}>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" required />
      </div>
      <div className={classes.Control}>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" required />
      </div>
      <div className={classes.Control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" required></textarea>
      </div>
      <div className={classes.Actions}>
        <button>Add metup</button>
      </div>
    </form>
  </Card>
}
