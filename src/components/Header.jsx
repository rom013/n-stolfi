import { useState } from "react"
import ButtonNavegate from "./btns"

export default function Header(){
    const [open, setOpen] = useState(false)
    return(
        <>
            <header className="py-2 px-8 bg-zinc-800 transition duration-1000 mb-16 relative">
                <button
                    onClick={()=>setOpen(!open)}
                >
                    {
                        open ? (
                            <span className="material-symbols-outlined text-white text-4xl">
                                close
                            </span>
                        )
                        : (
                            <span className="material-symbols-outlined text-white text-4xl">
                                menu
                            </span>
                        )
                    }
                </button>
                <nav className={`flex flex-col items-center border-b-2 border-zinc-500 gap-4 px-8 py-12 w-full bg-zinc-800 transition-all duration-1000 absolute ${open ? "left-0" : "-left-full"}`}>
                    <ButtonNavegate title={"História"} location={"/history"}/>
                    <ButtonNavegate title={"Sobre o n-stolfi"} location={"/about"}/>
                    <ButtonNavegate title={"Calcular n-stolfi"} location={"/calculate"}/>
                </nav>

            </header>
        </>
    )
}