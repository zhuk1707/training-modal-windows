import './App.css'

function App() {
  const cards = {
    byId: {
      '1': {
        title: 'Call Stack',
        subtitle: 'Стек вызовов — это структура данных, которая отслеживает, какие функции выполняются в данный момент.',
        mainFeatures: [
          'Работает по принципу LIFO (последним пришёл — первым ушёл)',
          'Когда вызывается функция, она добавляется в стек',
          'Когда функция завершает выполнение, она удаляется из стека',
          'Если стек переполняется (например, при бесконечной рекурсии), возникает Stack Overflow'
        ]
      },
      '2': {
        title: 'Web API',
        subtitle: 'Web API — это функции, предоставляемые браузером, которые расширяют возможности JavaScript.',
        mainFeatures: [
          'Позволяют взаимодействовать с DOM, сервером, хранилищем и прочими внешними ресурсами',
          'Не являются частью самого языка JavaScript',
          'Включают setTimeout, fetch, localStorage, addEventListener и другие',
          'Асинхронные задачи помещаются в Task Queue после выполнения API'
        ]
      },
      '3': {
        title: 'Event Loop',
        subtitle: 'Цикл событий — механизм, который управляет выполнением синхронного и асинхронного кода.',
        mainFeatures: [
          'Проверяет, пуст ли Call Stack',
          'Если стек пуст, извлекает задачи из очередей и помещает их в стек',
          'Гарантирует, что микрозадачи выполняются перед макрозадачами',
          'Обеспечивает неблокирующее выполнение JavaScript'
        ]
      },
      '4': {
        title: 'Task Queue',
        subtitle: 'Очередь задач — хранилище макрозадач, ожидающих выполнения после завершения текущего стека.',
        mainFeatures: [
          'Работает по принципу FIFO (первым пришёл — первым ушёл)',
          'Содержит задачи от setTimeout, событий DOM, fetch и других Web API',
          'Задачи из этой очереди выполняются после микрозадач',
          'Одна макрозадача извлекается в каждом цикле Event Loop'
        ]
      },
      '5': {
        title: 'Microtask Queue',
        subtitle: 'Очередь микрозадач — это очередь с более высоким приоритетом по сравнению с макрозадачами.',
        mainFeatures: [
          'Содержит задачи от Promise.then, queueMicrotask, MutationObserver',
          'Выполняется сразу после текущего Call Stack и до Task Queue',
          'Микрозадачи могут добавлять новые микрозадачи — они тоже выполняются до перехода к Task Queue',
          'Позволяет быстрее реагировать на изменения в приложении'
        ]
      }
    },
    allId: ['1', '2', '3', '4', '5']
  };


  return (
    <>
      <h1>Training Modal Windows</h1>

      <div className="cardsGrid">

        {Object.values(cards.byId).map((el) => {
          return <div className="card">
            <div className="cardContent">
              <h2 className="title">{el.title}</h2>
              <p className="subtitle">{el.subtitle}</p>

              {el.mainFeatures.map((el) => {
                return <ul>
                  <li>{ el}</li>
                </ul>
              })}
              <p className="hint">Click on card to open</p>

            </div>
          </div>
        })}

      </div>
    </>
  )
}

export default App
