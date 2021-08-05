import { COUNT_SEND } from "./CountType";

export const sendCount = (number, productId) => {
  return {
    type: COUNT_SEND,
    payload: { number, productId },
  };
};
