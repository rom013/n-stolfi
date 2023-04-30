import { useNavigate } from "react-router-dom"

export default function ButtonNavegate({title, location}){
    const navigate = useNavigate()
    const nav = location
    return(
        <div 
            className=""
            onClick={()=> {
                navigate(nav)
            }}
        >
            <span 
                className="text-white font-bold text-lg"
            >
                {title}
            </span>
        </div>
    )
}