import { Dispatch, useMemo } from "react";
import { Activity } from "../interfaces";
import { ActivityActions } from "../reducers/activity-reducer";
import { categories } from '../data/db';
import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

interface CardProps {
    activity: Activity,
    dispatch: Dispatch<ActivityActions>

}
export default function Card({ activity, dispatch }: CardProps) {

    const categoryName = useMemo(() =>
        (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : ''), [])

    return (
        <div className="py-10 px-5 bg-white rounded-lg relative shadow border border-gray-300">
            <h3 className={` w-35 py-1 px-5 text-center text-white absolute top-4 -left-4 rounded-sm 
                ${activity.category === 1 ? "bg-gray-500" : "bg-gray-700"}`}>
                {categoryName(activity.category)}
            </h3>
            <div className="flex justify-between items-center pt-6 text-slate-600">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">{activity.name}</p>
                    <p className="text-4xl font-black text-cyan-500">{activity.calories} <span>Calorias</span></p>
                </div>
                <div className="flex gap-5">
                    <button
                        className="cursor-pointer text-slate-300 hover:text-slate-500 hover:scale-105 transition duration-300"
                        onClick={() => dispatch({ type: "SET_ACTIVE_ID", payload: { id: activity.id } })}
                    >
                        <HiOutlinePencilSquare style={{ width: "32px", height: "32px" }} />
                    </button>
                    <button
                        className="cursor-pointer text-red-300 hover:text-red-500 hover:scale-105 transition duration-300"
                        onClick={() => dispatch({ type: "DELETE_ACTIVITY", payload: { id: activity.id } })}
                    >
                        <HiOutlineTrash style={{ width: "32px", height: "32px" }} />
                    </button>
                </div>
            </div>
        </div>
    )
}
