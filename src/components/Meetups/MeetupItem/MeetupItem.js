import classes from './MeetupItem.module.css'

export const MeetupItem = props => {
  const { id, image, title, description, address } = props

  return (
    <>
      <li className={classes.Item}>
        <div>
          <img src={image} className={classes.Image} alt={title} />
        </div>
        <div className={classes.Content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
          <div className={classes.Actions}>
            <button>To favorites</button>
          </div>
        </div>
      </li>
    </>
  )
}