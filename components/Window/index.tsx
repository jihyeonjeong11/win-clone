import React from "react";
import { Rnd } from "react-rnd";

const Window = ({ showWindow, setShowWindow }) => {
  if (!showWindow) return null;
  return (
    <Rnd>
      <section style={{ backgroundColor: "pink", height: 55, width: 300 }}>
        <button onClick={() => setShowWindow(false)} type="button">
          <span>x</span>
        </button>
        Window
      </section>
    </Rnd>
  );
};

export default Window;
