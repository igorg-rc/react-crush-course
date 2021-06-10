import classes from './MeetupList.module.css'

import { MeetupItem } from '../MeetupItem/MeetupItem'

export const MeetupList = props => {
  const { meetups } = props

  return (
    <ul className={classes.List}>
      { meetups.map(meetup => (
        <MeetupItem 
          key={meetup.id}
          id={meetup.id} 
          image={meetup.image} 
          title={meetup.title} 
          description={meetup.description} 
          address={meetup.address} 
        /> 
      )) }
    </ul>
  )
}