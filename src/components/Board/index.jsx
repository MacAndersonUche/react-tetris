import { useBoardDimensions } from "../../hooks/useBoardDimensions";
import { useEffect } from "react";

export const Board = () => {
  const { board, setBoard } = useBoardDimensions();

  useEffect(() => {
    const newBoard = [...board];
    newBoard[9][10] = "I";
    newBoard[9][11] = "I";
    newBoard[9][12] = "I";
    newBoard[9][13] = "I";
    setBoard(newBoard);
  }, []);

  return (
    <div className="board-grid">
      {board.map((item) => (
        <div key={item}>
          {item.map((i) => (
            <div className="cell" key={i}>
              {i}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
