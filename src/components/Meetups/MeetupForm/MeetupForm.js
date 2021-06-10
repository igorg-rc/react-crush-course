import { useRef } from 'react'
import classes from './MeetupForm.module.css'

import { Card } from '../../UI/Card/Card'

export const MeetupForm = props => {

  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()


  const submitHandler = e => {
    e.preventDefault()

    const enteredTitle = titleInputRef.current.value
    const enteredImage = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }

    props.onAddMeetup(meetupData)
  }

  return <Card>
    <form className={classes.Form} onSubmit={submitHandler}>
      <div className={classes.Control}>
        <label htmlFor="title">Meetup title</label>
        <input id="title" type="text" required ref={titleInputRef} />
      </div>
      <div className={classes.Control}>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" required ref={imageInputRef} />
      </div>
      <div className={classes.Control}>
        <label htmlFor="address">Address</label>
        <input id="address" type="text" required ref={addressInputRef} />
      </div>
      <div className={classes.Control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" required ref={descriptionInputRef}></textarea>
      </div>
      <div className={classes.Actions}>
        <button>Add metup</button>
      </div>
    </form>
  </Card>
}
