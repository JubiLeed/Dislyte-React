import { Fragment } from "react";
import "./Overlay.css";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <Fragment>
      {isOpen && (
        <div className="overlay">
          <div className="overlay_background" onClick={onClose}>
            <div className="overlay_container">
              <div className="overlay_controls">{children}</div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Overlay;
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleOverlay = (e) => {
//     setIsOpen(!isOpen);
//     console.log(e.target);
//   };

//   <Overlay isOpen={isOpen} onClose={toggleOverlay}>
// </Overlay>
