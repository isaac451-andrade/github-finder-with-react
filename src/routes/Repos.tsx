import { Link, useParams } from "react-router-dom"

function Repos() {

    const { username } = useParams<{ username: string }>();

    return (
        <div>
            <Link to="/">Voltar</Link>
            <h1>
                Repos de {username}
            </h1>
            <p>Ainda em Desenvolvimento</p>
        </div>
    )
}

export default Repos