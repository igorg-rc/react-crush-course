import { useHistory } from 'react-router-dom'
import { MeetupForm } from "../components/Meetups/MeetupForm/MeetupForm";
import { keys } from '../config/keys'

export default function NewMeetup() {
  const history = useHistory()
  
  const onAddMeetupHandler = meetupData => {
    const BASE_URL = keys.FIREBASE_BASE_URL
    
    fetch(`${BASE_URL}/meetups.json`, {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => history.replace('/'))
    .catch(error => console.log(error))
  }

  return <section>
    <h1>Add new meetup</h1>
    <MeetupForm onAddMeetup={onAddMeetupHandler} />
  </section>
}