import './App.css'
import {Card} from "./components/Card.tsx";
import {GlobalModal} from "./components/GlobalModal.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "./store.ts";


function App() {
  const {cards} = useSelector((state: RootState) => state.cards)

  return (
    <>
      <GlobalModal/>
      <h3>Training Modal Windows</h3>
      <h1>Event Loop</h1>

      <div className="cardsGrid">
        {Object.values(cards.byId).map((el) =>
          (<Card
            key={el.id}
            id={el.id}
            title={el.title}
          />))
        }
      </div>
    </>
  )
}

export default App