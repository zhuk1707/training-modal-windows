import {useSelector} from "react-redux";
import type {RootState} from "../store.ts";

export const CardDetails = ({cardId}: { cardId: string }) => {
  const {cards} = useSelector((state: RootState) => state.cards)

  const card = cards.byId[cardId as keyof typeof cards.byId];

  return (
    <>
      <h1>{card.title}</h1>
      <p>{card.subtitle}</p>
      <ul>
        {card.mainFeatures.map((el) => {
          return <li>{el}</li>
        })}
      </ul>
    </>
  );
};