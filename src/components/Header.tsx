import { Dispatch, useMemo } from "react"
import { ActivityActions, ActivityState } from "../reducers/activity-reducer"

interface HeaderProps {
  dispatch: Dispatch<ActivityActions>
  state: ActivityState
}

export default function Header({ dispatch, state }: HeaderProps) {

  const canResetActivities = useMemo(() => state.activities.length > 0, [state.activities])
  return (
    <header className="bg-gray-800 p-5">
      <div className="flex justify-between items-center max-w-5xl mx-auto text-white font-bold">
        <h1 className="text-xl">CALORIE COUNTER</h1>
        <button
          className="p-2 bg-gray-500 rounded-lg enabled:cursor-pointer 
          enabled:hover:bg-gray-400 transition-colors duration-300 disabled:opacity-30"
          onClick={() => dispatch({ type: 'RESET_STATE' })}
          disabled={!canResetActivities}
        >RESTART CALORIES</button>
      </div>
    </header>
  )
}
