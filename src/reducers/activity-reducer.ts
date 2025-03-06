import { Activity } from "../interfaces";

export type ActivityActions =
    { type: 'ADD_ACTIVITY', payload: { newActivity: Activity } } |
    { type: 'SET_ACTIVE_ID', payload: { id: Activity['id'] } } |
    { type: 'DELETE_ACTIVITY', payload: { id: Activity['id'] } } |
    { type: 'RESET_STATE' }

export interface ActivityState {
    activities: Activity[];
    activeId: Activity['id'];
}

const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ""
};

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions,
) => {
    if (action.type === 'ADD_ACTIVITY') {
        let updatedActivities: Activity[] = [];

        if (state.activeId) {
            updatedActivities = state.activities.map(stateActivity =>
                stateActivity.id === state.activeId ? action.payload.newActivity : stateActivity
            )
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: ""
        };
    }
    if (action.type === 'SET_ACTIVE_ID') {
        return {
            ...state,
            activeId: action.payload.id,
        }
    }

    if (action.type === 'DELETE_ACTIVITY') {

        return {
            ...state,
            activities: state.activities.filter(stateActivity => stateActivity.id !== action.payload.id)
        }
    }
    if (action.type === 'RESET_STATE') {
        console.log("click aqui");

        return {
            activities: [],
            activeId: ""
        }
    }

    return state;
};