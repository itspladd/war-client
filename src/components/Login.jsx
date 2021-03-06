import {useState} from 'react';
import EVENTS from '../constants/EVENTS'

export default function Login(props) {
  const [formState, setFormState] = useState("");
  const {state, dispatch, ACTIONS} = props;
  const {socket} = state;

  const handleChange = event => {
    event.preventDefault();
    setFormState(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event)
    socket.emit(EVENTS.USER_CONNECT, formState)
    dispatch({
      type: ACTIONS.SET_USER,
      id: 1,
      username: formState
    })
  }
  return(
    <form onSubmit={handleSubmit}>
      <label for="name">Username</label>
      <input type="text" id="name" name="name" value={formState} onChange={handleChange} minlength="1">
      </input>
      <button>Log In</button>
    </form>
  )
}