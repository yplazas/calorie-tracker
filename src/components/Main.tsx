import { Dispatch } from "react";
import CaloriesForm from "./CaloriesForm";
import CaloriesResumen from "./CaloriesResumen";
import FoodActivity from "./FoodActivity";
import { ActivityActions, ActivityState } from "../reducers/activity-reducer";

interface MainProps {
  dispatch: Dispatch<ActivityActions>
  state: ActivityState
}

export default function Main({ dispatch, state }: MainProps) {
  return (
    <main>
      <CaloriesForm dispatch={dispatch} state={state}/>
      <CaloriesResumen activities={state.activities}/>
      <FoodActivity activities={state.activities} dispatch={dispatch} />
    </main>
  )
}
