import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../features/modal/modalSlice.ts";
import modalComponents from "./ModalComponents";
import type {RootState} from "../store.ts";
import type {FC} from "react";


export const GlobalModal = () => {
  const dispatch = useDispatch()
  const {isOpen, componentName, componentProps} = useSelector((state: RootState) => state.modal)

  if (!isOpen || !componentName) return null;

  const ComponentToRender = modalComponents[componentName] as FC<typeof componentProps>;

  return (
    <div className={'modalOverlay'}>
      <div className="modalContentWrapper">
        <div className="modalContent">
          <ComponentToRender {...componentProps} />
          <button
            onClick={() => {
              dispatch(closeModal())
            }}
          >
            <span className="char">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};