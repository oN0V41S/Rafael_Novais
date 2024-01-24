import { Link } from "react-router-dom"

export default function TopSkill(){
    return(
        <Link className="topSkill aside-component" to="/skills">
            <h3>Top Habilidades</h3>
            <ul className="topSkill-list aside-list">
                <li><Skill src="" name="React.JS" /></li>
                <li><Skill src="" name="JavaScript" /></li>
                <li><Skill src="" name="java" /></li>
            </ul>
        </Link>
    )
}

function Skill({src, name}){
    return(
        <div className="topSkill-item aside-item" >
            <img src={src} alt="imgSkill"/>
            <h5>{name}</h5>
        </div>
    )
}