import Header from "./components/Header"
import ButtonNavegate from "./components/btns"

function App() {
  return (
    <>
      <Header/>
      <main className="flex flex-col justify-center items-center gap-16 sm:hidden">
        <div className="flex flex-col gap-4 w-full items-center">
          <h1 className="text-white font-bold text-6xl">n-Stolfi</h1>
        </div>
        <a href="https://github.com/rom013" target="_blank" className="text-emerald-400 self-center">by rom013</a>
      </main>
      <main className="hidden sm:flex justify-center items-center min-h-screen">
        <h3 className="font-bold text-white text-4xl">Disponível apenas em telas menores</h3>
      </main>
    </>
  )
}

export default App
