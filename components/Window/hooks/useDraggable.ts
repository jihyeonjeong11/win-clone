import { useState } from "react";

export type Position = {
  x: number;
  y: number;
};
type Draggable = [Position, React.Dispatch<React.SetStateAction<Position>>];

const useDraggable = (): Draggable => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  return [position, setPosition];
};

export default useDraggable;
