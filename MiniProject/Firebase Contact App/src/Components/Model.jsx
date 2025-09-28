import { RiCloseLargeLine } from "react-icons/ri";
import {createPortal} from 'react-dom'
export default function Model({ isOpen, onClose, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white rounded-lg p-3 mt-2">
            <div className="justify-end flex">
              <RiCloseLargeLine
                onClick={onClose}
                className="cursor-pointer text-2xl self-end"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>,document.getElementById("model-root")
  );
}
