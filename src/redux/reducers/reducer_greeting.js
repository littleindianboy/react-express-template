import { SHOW_GREETING } from '../actions/action_show_greeting';

export default function(state = null, action) {
  switch(action.type) {
    case SHOW_GREETING:
    return action.payload
    default:
      return state;
  }
}
