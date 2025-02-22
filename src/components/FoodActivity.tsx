import Card from "./Card";

export default function FoodActivity() {
    return (
        <section className="py-10 px-5 bg-cyan-100">
            <div className="max-w-5xl mx-auto flex flex-col gap-5">
                <h2 className="text-center text-3xl font-bold text-slate-600 mb-10">Comidas y Actividades</h2>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}
