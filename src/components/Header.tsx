export default function Header() {
  return (
    <header className="bg-gray-800 p-5">
        <div className="flex justify-between items-center max-w-5xl mx-auto text-white font-bold">
        <h1 className="text-xl">CONTADOR DE CALORIAS</h1>
        <button className="p-2 bg-gray-500 rounded-lg ">REINICIAR CALORIAS</button>
        </div>
    </header>
  )
}
