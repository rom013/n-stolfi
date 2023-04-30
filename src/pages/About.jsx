import { useNavigate } from "react-router-dom"
import ButtonNavegate from "../components/btns"
import Header from "../components/Header"

export default function about(){
    const navigate = useNavigate()
    return(
        <>
            <Header/>
            <main className="px-8 pb-16 sm:hidden flex flex-col" >
                <button 
                    onClick={()=> navigate("/")}
                    className="text-white"
                >
                    Voltar
                </button>
                <h1 className="title">Sobre n-Stolfi</h1>

                <section>
                    <p>
                        O conceito de números n-Stolfi é um conjunto de números inteiros positivos que atendem a uma condição específica. 
                        Um número inteiro positivo x é chamado de número n-Stolfi se a soma de seus dígitos módulo n for igual ao seu dígito mais significativo.
                    </p>

                    <p>
                        O número significativo é o número mais a esquerda de um conjunto de números. Por exemplo, 5011 o número 5 é o mais significativo desse conjutonto, já que ele está mais a esquerda.
                    </p>

                    <p>
                        Se o resto da divisão não for igual ao número significativo do conjunto, significa que o número de Stolfi ainda não foi encontrado. Portanto, é necessário continuar a divisão até que o resto seja igual ao número significativo do conjunto.
                    </p>

                    <h1 className="title">
                        Exemplo
                    </h1>

                    <div className="border rounded-lg border-gray-400 p-4 bg-zinc-800">
                        <p><span className="text-red-600">8</span>57</p>

                        <p>(8 + 5 + 7) = <span className="text-green-500">20</span></p>

                        <p> 20 % 2 = <span className="text-green-500">0</span>  <span className="ml-4">❌</span></p>
                        <p> 20 % 3 = <span className="text-green-500">2</span>  <span className="ml-4">❌</span></p>
                        <p> 20 % 4 = <span className="text-green-500">0</span>  <span className="ml-4">❌</span></p>
                        <p>...</p>
                        <p> 20 % 12 = <span className="text-green-500">8</span>  <span className="ml-4">✔</span></p>

                        <p>
                            <span className="text-red-600 mr-4">8</span>
                            ===
                            <span className="text-green-500 ml-4">8</span>
                        </p>

                        <p>
                            Logo 12 é o número de Stolfi ou 12-Stolfi
                        </p>
                    </div>
                </section>
                <div className="btn mt-8">
                    <ButtonNavegate title={"calcular stolfi"} location={"/calculate"}/>
                </div>

                <a href="https://github.com/rom013" target="_blank" className="text-emerald-400 self-center">by rom013</a>
            </main>
            <main className="hidden sm:flex justify-center items-center min-h-screen">
                <h3 className="font-bold text-white text-4xl">Disponível apenas em telas menores</h3>
            </main>
        </>
    )
}