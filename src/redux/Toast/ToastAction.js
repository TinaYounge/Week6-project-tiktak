import { TOAST_SUCCESS, TOAST_FAIL } from "./ToastType";

export const toastSuccess = (mode) => {
  return {
    type: TOAST_SUCCESS,
    payload: mode,
  };
};
export const toastFail = () => {
  return {
    type: TOAST_FAIL,
    payload: Error,
  };
};
