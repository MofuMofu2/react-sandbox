import { useState } from "react";
import "./EventPoint.css";

type Position = {
  x: number;
  y: number;
};

export default function EventPoint() {
  const [screen, setScreen] = useState<Position>({ x: 0, y: 0 });
  const [page, setPage] = useState<Position>({ x: 0, y: 0 });
  const [client, setClient] = useState<Position>({ x: 0, y: 0 });
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 });

  const handleMousemove = (e: React.MouseEvent<HTMLDivElement>) => {
    setScreen({ x: e.screenX, y: e.screenY });
    setPage({ x: e.pageX, y: e.pageY });
    setClient({ x: e.clientX, y: e.clientY });
    setOffset({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <div id="main" onMouseMove={handleMousemove}>
      screen: {screen.x}/{screen.y}
      page: {page.x}/{page.y}
      client: {client.x}/{client.y}
      offset: {offset.x}/{offset.y}
    </div>
  );
}
