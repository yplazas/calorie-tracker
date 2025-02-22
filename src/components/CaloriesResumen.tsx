export default function CaloriesResumen() {
    return (
        <section className="py-10 px-5 bg-gray-800">
            <div className="max-w-5xl mx-auto text-white">
                <h2 className="text-center text-3xl font-black">Resumen de calorias</h2>
                <div className="mt-10 flex justify-between">
                    <p className="flex flex-col items-center gap-2 text-lg font-bold"><span className="text-6xl font-black">500</span>Consumidas</p>
                    <p className="flex flex-col items-center gap-2 text-lg font-bold"><span className="text-6xl font-black">0</span>Ejercicio</p>
                    <p className="flex flex-col items-center gap-2 text-lg font-bold"><span className="text-6xl font-black">500</span>Diferencia</p>
                </div>
            </div>
        </section>
    )
}
