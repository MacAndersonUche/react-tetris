import { BOARDHEIGHT, BOARDWIDTH } from "../constants";
import { useState } from "react";
/**
 * [
 *  [0,0,0,0,0,0,0,0,0,0]
 *  [0,0,0,0,0,0,0,0,0,0]
 *  ...
 * ]
 */
// [0][0]
// X  Y
function createEmptyBoard() {
  return Array.from(Array(BOARDWIDTH), () => Array(BOARDHEIGHT).fill(0));
}
export const useBoardDimensions = () => {
  const [board, setBoard] = useState(() => createEmptyBoard());

  return {
    board,
    setBoard,
  };
};

console.log(createEmptyBoard());
