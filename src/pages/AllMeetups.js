import { keys } from '../config/keys'
import { useEffect, useState } from 'react'

import { MeetupList } from '../components/Meetups/meetupList/MeetupList'
import { Spinner } from '../components/UI/Spinner/Spinner'

export default function AllMeetups() {
  const [loadedMeetups, setLoadedMeetups] = useState([])
  const [loading, setLoading] = useState(true)

  const BASE_URL = keys.FIREBASE_BASE_URL

  useEffect(() => {
    setLoading(true)

    fetch(`${BASE_URL}/meetups.json`)
      .then(response => response.json())
      .then(data => {
        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
      
          meetups.push(meetup)
        }

        setLoading(false)
        setLoadedMeetups(meetups)
      })
      .catch(error => console.log(error))
  }, [BASE_URL])

  console.log(loadedMeetups)

  return (
    <section>
      <h1>All meetups</h1>
      { loading ? <Spinner /> : <MeetupList meetups={loadedMeetups} />}
    </section>
  )
}
