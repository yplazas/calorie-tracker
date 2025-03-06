import { Activity } from "../interfaces"
import { useMemo } from 'react';


interface CaloriesResumenProps {
    activities: Activity[]
}

export default function CaloriesResumen({ activities }: CaloriesResumenProps) {

    const caloriesConsumidas = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])
    const caloriesQuemadas = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])
    const diferencia = caloriesConsumidas - caloriesQuemadas;
    return (
        <section className="py-10 px-5 bg-gray-800">
            <div className="max-w-5xl mx-auto text-white">
                <h2 className="text-center text-3xl font-black">Resumen de calorias</h2>
                <div className="mt-10 flex justify-between">
                    <p className="flex flex-col items-center gap-2 text-lg font-bold"><span className="text-6xl font-black">{caloriesConsumidas}</span>Consumidas</p>
                    <p className="flex flex-col items-center gap-2 text-lg font-bold"><span className="text-6xl font-black">{caloriesQuemadas}</span>Quemadas</p>
                    <p className="flex flex-col items-center gap-2 text-lg font-bold"><span className="text-6xl font-black">{diferencia}</span>Diferencia</p>
                </div>
            </div>
        </section>
    )
}
