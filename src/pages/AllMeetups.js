import { DATA } from '../mockFiles/meetupsData'

import { MeetupList } from '../components/Meetups/meetupList/MeetupList'

console.log(DATA)
// const meetupList = DATA.map(i => (
//   <div key={i.id}>{i.title}</div>
// ))

export default function AllMeetups() {
  return (
    <>
      <section>
        <h1>All meetups</h1>
        <MeetupList meetups={DATA} />
      </section>
    </>
  )
}
