export const Modal = props => {
  return (
    <div className='modal'>
      <p>{props.text}</p>
      <button className='btn btn--alt' onClick={props.onModalCancel}>
        Cancel
      </button>
      <button className='btn' onClick={props.onModalConfirm}>
        Confirm
      </button>
    </div>
  );
}