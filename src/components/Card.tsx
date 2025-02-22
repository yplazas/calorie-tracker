import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
export default function Card() {
    return (
        <div className="py-10 px-5 bg-white rounded-lg relative shadow border border-gray-300">
            <h3 className="bg-gray-500 w-35 py-1 px-5 text-center text-white absolute top-4 -left-4 rounded-sm">Comida</h3>
            <div className="flex justify-between items-center pt-6 text-slate-600">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl font-bold">Pesas</p>
                    <p className="text-4xl font-black text-cyan-500">500 <span>Calorias</span></p>
                </div>
                <div className="flex gap-5">
                    <button className="cursor-pointer text-slate-300 hover:text-slate-500 hover:scale-105 transition duration-300">
                        <HiOutlinePencilSquare style={{ width: "32px", height: "32px" }} />
                    </button>
                    <button className="cursor-pointer text-red-300 hover:text-red-500 hover:scale-105 transition duration-300">
                        <HiOutlineTrash style={{ width: "32px", height: "32px" }} />
                    </button>
                </div>
            </div>
        </div>
    )
}
