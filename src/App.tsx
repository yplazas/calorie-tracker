import { useEffect, useReducer } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import { activityReducer, initialState } from "./reducers/activity-reducer"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState);

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])


  return (
    <>
      <Header dispatch={dispatch} state={state} />
      <Main dispatch={dispatch} state={state} />
      <Footer />
    </>
  )
}

export default App
