import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="header">
            <Link to='/'><h3>RafaelNovais</h3></Link>
        </header>
    )
}