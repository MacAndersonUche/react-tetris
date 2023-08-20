import { useBoardDimensions } from "../../hooks/useBoardDimensions";

export const Board = () => {
  const { board } = useBoardDimensions();
  return <div>{board}</div>;
};
