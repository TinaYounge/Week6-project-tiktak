import { REGISTER } from "./RegisterType";
function RegisterAction(state) {
  return {
    type: REGISTER,
    payload: state,
  };
}

export default RegisterAction;
