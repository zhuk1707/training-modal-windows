import {useDispatch} from "react-redux";
import {openModal} from "../features/modal/modalSlice.ts";

interface CardProps {
  id: string
  title: string
}

export const Card = ({id, title}: CardProps) => {
  const dispatch = useDispatch()

  const handleOpen = (id: string) => {
    dispatch(openModal({
      componentName: 'CardDetails',
      componentProps: {cardId: id}
    }));
  };
  return (
    <div className="card"
         onClick={() => handleOpen(id)}
    >
      <div className="cardContent">
        <h2 className="title">{title}</h2>
        <p className="hint">Click on card to open</p>
      </div>
    </div>
  );
};