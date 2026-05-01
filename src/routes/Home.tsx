import type { UserProps } from "../types/user";
import { useState } from "react"
import Search from "../components/Search/Search"
import UserProfile from "../components/UserProfile/UserProfile";
import Error from "../components/Error/Error";
import Loading from "../components/Loading/Loading";

export default function Home() {

    const [user, setUser] = useState<UserProps | null>(null);

    const [error, setError] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    async function loadUser(username: string) {

        try {
            setError("");
            setUser(null);
            setIsLoading(true);

            const usernameFormatado = username.trim();

            const response = await fetch(`https://api.github.com/users/${usernameFormatado}`)

            if (response.status === 404) {
                setError("Usuário não encontrado!");
                return;
            }

            const data = await response.json();

            const { avatar_url, login, location, followers, following } = data;

            const userData: UserProps = {
                avatar_url,
                login,
                location,
                followers,
                following
            }

            setUser(userData);
        }
        catch (err) {
            setError("Erro ao fazer a requisição!")
        }
        finally {
            setIsLoading(false);
        }

    };

    return (
        <div>
            <Search loadUser={loadUser} />

            {isLoading && <Loading />}

            {!isLoading && user && <UserProfile {...user} />}
            {error && <Error erro={error} />}

        </div>
    )

}