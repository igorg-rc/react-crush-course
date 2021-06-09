import { useState, useEffect } from 'react'

import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal"

export const Todo = props => { // Todo component in App.js will recive props <Todo title="Some string" description="other value" /> 
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  const deleteHandler = () => {
    setModalIsOpen(true)
  }

  const closeModalHandler = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="card-holder">
      <div className="card">
        <h2>{props.title}</h2>
        <h5>{props.description}</h5>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
{/* onModalCancel, onCancelConfirm and onBackDropClose come from its components props as props.onBackDropClose and props.onBackdropClose */}
      { modalIsOpen && <Modal onModalCancel={closeModalHandler} onModalConfirm={closeModalHandler} /> } 
      { modalIsOpen && <Backdrop onBackdropClose={closeModalHandler} />}
      </div>
    </div>
  )
}

// Equivalent record
// export const Todo = props => {  // or export const Todo = ({ title, description }) =>
//   const { title, description } = props

//   return (
//     <div>
//       <div className="card">
//         <h2>{title}</h2>
//         <h5>{description}</h5>
//         <div className="actions">
//           <button className="btn">Delete</button>
//         </div>
//       </div>
//     </div>
//   )
// }