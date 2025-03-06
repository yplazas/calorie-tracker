import Card from "./Card";
import { Activity } from "../interfaces";
import { Dispatch } from "react";
import { ActivityActions } from "../reducers/activity-reducer";

interface FoodActivityProps {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export default function FoodActivity({ activities, dispatch }: FoodActivityProps) {

    return (
        <section className="py-10 px-5 bg-cyan-100">
            <div className="max-w-5xl mx-auto flex flex-col gap-5">
                <h2 className="text-center text-3xl font-bold text-slate-600 mb-10">Comidas y Actividades</h2>

                {activities.length > 0 ? (
                    activities.map(activity => (
                        <Card
                            key={activity.id}
                            activity={activity}
                            dispatch={dispatch}
                        />
                    ))
                ) : (
                    <div className="py-10 px-5 bg-white rounded-lg relative shadow border border-gray-300">
                        <p className="text-2xl text-center text-slate-600">No hay actividades</p>
                    </div>
                )
                }

            </div>
        </section>
    )
}
