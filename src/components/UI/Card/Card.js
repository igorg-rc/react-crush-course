import classes from './Card.module.css'

export const Card = props => {
  const { children } = props

  return (
    <div className={classes.Card}>
      { children }
    </div>
  )
}