import { useState, ChangeEvent, FormEvent, Dispatch, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { categories } from "../data/db"
import { Activity } from "../interfaces";
import { ActivityActions, ActivityState } from '../reducers/activity-reducer';

interface CaloriesFormProps {
    dispatch: Dispatch<ActivityActions>
    state: ActivityState

}
export default function CaloriesForm({ dispatch, state }: CaloriesFormProps) {

    const initialState: Activity = {
        id: uuidv4(),
        category: 0,
        name: "",
        calories: 0
    }

    const [activity, setActivity] = useState<Activity>(initialState);

    useEffect(() => {
        if (state.activeId) {
            const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId, state.activities])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        });
    };

    const isValidActivity = () => {
        const { category, name, calories } = activity;
        return category > 0 && name.trim() && calories > 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({
            type: "ADD_ACTIVITY", payload: {
                newActivity: activity
            }
        })

        setActivity({ ...initialState, id: uuidv4() });
    }

    return (
        <section className="bg-cyan-100 py-20 px-5">
            <div className="max-w-5xl mx-auto">
                <form
                    className="bg-white p-10 space-y-5 rounded-lg shadow border border-gray-300"
                    onSubmit={handleSubmit}

                >
                    <div className="flex flex-col gap-4">
                        <label className="font-bold" htmlFor="categoria">
                            Categoria
                        </label>
                        <select
                            id="category"
                            className="p-2 border rounded-lg border-gray-500"
                            value={activity.category}
                            onChange={handleChange}
                        >
                            <option value="">Seleccione una categoría</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-bold" htmlFor="actividad">
                            Actividad
                        </label>
                        <input
                            id="name"
                            className="p-2 border rounded-lg border-gray-500"
                            type="text"
                            placeholder="Ej: jugo de naranja, comida, manzana"
                            value={activity.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-bold" htmlFor="calorias">
                            Calorias
                        </label>
                        <input
                            id="calories"
                            type="number"
                            placeholder="Cantidad de calorías"
                            className="p-2 border rounded-lg border-gray-500"
                            value={activity.calories}
                            onChange={handleChange}
                        />
                    </div>
                    <input
                        className="mt-1.5 font-bold w-full bg-gray-500 text-white rounded-md p-2 disabled:opacity-10 cursor-pointer hover:bg-gray-600 transition duration-300"
                        type="submit"
                        value={activity.category === 1 ? "Guardar comida" : "Guardar ejercicio"}
                        disabled={!isValidActivity()}
                    />
                </form>
            </div>
        </section>
    )
}
