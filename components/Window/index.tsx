import { Rnd } from "react-rnd";
import { empty } from "constants/constants";

const Window: FC<{
  setShowWindow?: (val: boolean) => void;
}> = ({ setShowWindow = () => empty }): React.ReactElement => (
  // Remember kill all data-testid when go Prod!
  <Rnd>
    <section
      data-testid="test-window"
      style={{ backgroundColor: "pink", height: 55, width: 300 }}
    >
      <button
        onClick={() => {
          setShowWindow(false);
        }}
        type="button"
      >
        <span>x</span>
      </button>
      <span>Window</span>
    </section>
  </Rnd>
);
export default Window;
