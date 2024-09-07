
export default function Game() {
  return(
    <div className="flex flex-col items-center justify-center w-full max-w-md h-auto p-8 bg-gray-100 rounded-lg shadow-lg mx-auto mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Guess the Number!</h1>

      <div className="w-full bg-white p-4 rounded-lg shadow mb-6">
        <p className="text-lg text-center text-gray-700">Which number am I thinking of?</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6 w-full">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">1</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">2</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">3</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">4</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">5</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">6</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">7</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">8</button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">9</button>
      </div>

      {/* this should probably float in & disappear */}
      <p className="text-lg text-green-500 font-semibold">You guessed correctly!</p>

      <button className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Restart Game</button>
    </div>
     
  )
}