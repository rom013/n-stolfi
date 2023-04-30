import { useNavigate } from "react-router-dom"
import Header from "../components/Header"

export default function history(){
    const navigate = useNavigate()
    return(
        <>
            <Header/>
            <main className="px-8 pb-16 sm:hidden flex flex-col">
                <button 
                    onClick={()=> navigate("/")}
                    className="text-white"
                >
                    Voltar
                </button>
                <h1 className="title">História</h1>
                <section>
                    <p>
                        N-Stolfi é o apelido de Jorge Stolfi, um professor de ciência da computação brasileiro conhecido por suas contribuições para a área de algoritmos e estruturas de dados.
                    </p>
                    <p>
                        Stolfi nasceu em São Paulo em 1951 e estudou na Universidade de São Paulo, onde obteve seu bacharelado, mestrado e doutorado em ciência da computação. Depois de concluir seu doutorado em 1979, ele se juntou ao corpo docente da Universidade Estadual de Campinas (Unicamp), onde passou a maior parte de sua carreira acadêmica.
                    </p>
                    <p>
                        Stolfi nasceu em São Paulo em 1951 e estudou na Universidade de São Paulo, onde obteve seu bacharelado, mestrado e doutorado em ciência da computação. Depois de concluir seu doutorado em 1979, ele se juntou ao corpo docente da Universidade Estadual de Campinas (Unicamp), onde passou a maior parte de sua carreira acadêmica.
                    </p>
                    <p>
                        Além de sua carreira acadêmica, Stolfi é conhecido por suas contribuições para a cultura brasileira. Ele é um defensor da reforma ortográfica da língua portuguesa e tem sido um crítico ativo da forma como a língua é ensinada no Brasil. Ele também é conhecido por seu trabalho como tradutor, tendo traduzido vários livros de literatura e filosofia para o português.
                    </p>
                </section>

                <a href="https://github.com/rom013" target="_blank" className="text-emerald-400 self-center">by rom013</a>
            </main>
            <main className="hidden sm:flex justify-center items-center min-h-screen">
                <h3 className="font-bold text-white text-4xl">Disponível apenas em telas menores</h3>
            </main>
        </>
    )
}