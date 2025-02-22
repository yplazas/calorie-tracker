
export default function CaloriesForm() {
    return (
        <section className="bg-cyan-100 py-20 px-5">
            <div className="max-w-5xl mx-auto">
                <form action="" className="bg-white p-10 space-y-5 rounded-lg shadow border border-gray-300">
                    <div className="flex flex-col gap-4">
                        <label className="font-bold" htmlFor="categoria">
                            Categoria
                        </label>
                        <select className="p-2 border rounded-lg border-gray-500" name="categoria" id="categoria"></select>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-bold" htmlFor="actividad">
                            Actividad
                        </label>
                        <input id="actividad" className="p-2 border rounded-lg border-gray-500" type="text" placeholder="Ej: jugo de naranja, comida, manzana" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="font-bold" htmlFor="calorias">
                            Calorias
                        </label>
                        <input id="calorias" className="p-2 border rounded-lg border-gray-500" type="number" placeholder="Cantidad de calorías" />
                    </div>
                    <input className="mt-1.5 font-bold w-full bg-gray-500 text-white rounded-md p-2" type="submit" value="Guardar Comida - Guardar Ejercicio" />
                </form>
            </div>
        </section>
    )
}
