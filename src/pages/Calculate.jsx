import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"



export default function calculate(){
    const navigate = useNavigate()
    const regex = /[a-zA-Z\._-]/
    const [valueInput, setValueInput] = useState("")
    const [state, setState] = useState(false)
    const [result, setResult] = useState([])
    useEffect(()=>{
        // console.log(regex.test(valueInput))
        if(valueInput.length > 0) {
            if(regex.test(valueInput)){
                setState(true)
            }
            else setState(false)
        } 
        else {setState(true)}
        setResult([])
    },[valueInput])

    
    function calcular(){
        const numbersArray = []
        let sum = 0
        const valueAlter = valueInput.replaceAll("0","")
        // console.log(valueAlter);
        for(let i = 0; i < valueAlter.length; i++){
            const sliceValue = valueAlter.slice(i,i+1)
            const convertNumber = parseInt(sliceValue)
            numbersArray.push(convertNumber)
            sum += numbersArray[i]
        }

        const significativo = numbersArray[0]
        let result = 0
        let p = 1
        
        while(significativo != result){
            if(sum == p){
                result = null
                break
            }
            else{
                p++
                result = sum % p
            }
        }
        setResult([result, p, sum, numbersArray])

        // console.log(result, p, sum);
    }
    return(
        <>
            <Header/>
            <main className="px-8 pb-16 flex flex-col items-start gap-8 sm:hidden">
                <button 
                    onClick={()=> navigate("/")}
                    className="text-white"
                >
                    Voltar
                </button>
                <label className="mx-auto">
                    <span className="text-gray-300">Número inteiro</span>
                    <input 
                        type="number" 
                        className="w-full bg-zinc-900 border-b-2 border-gray-800 focus:outline-none focus:border-green-500 text-white py-2"
                        placeholder="Ex.: 388"
                        onChange={(e)=>{setValueInput(e.target.value)}}
                        value={valueInput}
                    />
                </label>

                <button 
                    className={`btn mt-8 disabled:opacity-10 transition-opacity duration-1000`}
                    disabled={state}
                    onClick={()=> calcular()}
                >
                    Calcular
                </button>


                <div className="w-full">
                    {
                        result.length > 0  && (
                            result[0] != null ? (
                                <>
                                    <p className="text-white text-center text-2xl">
                                        O stolfi de <span className="font-bold">{valueInput.replaceAll("0","")}</span> é <span className="font-bold">{result[1]}</span>-stolfi
                                    </p>
                                    <details className="text-white border border-gray-600 rounded-lg p-2 bg-zinc-800 mt-6">
                                        <summary>Resolução</summary>
                                        
                                            <p>
                                                <span className="text-red-600">{result[0]}</span>
                                                {valueInput.replaceAll("0","").slice(1)}
                                            </p>

                                            <p>
                                                (
                                                    {
                                                        result[3].join("+")
                                                    }
                                                ) = <span className="text-green-500">{result[2]}</span></p>

                                            <p> {result[2]} % 2 = <span className="text-green-500">0</span>  <span className="ml-4">❌</span></p>
                                            <p>...</p>
                                            <p> {result[2]} % {result[1]} = <span className="text-green-500">{result[0]}</span>  <span className="ml-4">✔</span></p>

                                            <p>
                                                <span className="text-red-600 mr-4">{result[0]}</span>
                                                ===
                                                <span className="text-green-500 ml-4">{result[0]}</span>
                                            </p>

                                            
                                    </details>
                                </>
                            )
                            : (
                                <p className="text-red-700 text-center">
                                    Não foi possivel calcular o número de n-stolfi, tente com outro valor
                                </p>
                            )
                        )
                    }

                </div>

                <a href="https://github.com/rom013" target="_blank" className="text-emerald-400 self-center">by rom013</a>
            </main>

            <main className="hidden sm:flex justify-center items-center min-h-screen">
                <h3 className="font-bold text-white text-4xl">Disponível apenas em telas menores</h3>
            </main>


        </>
        
    )
}

