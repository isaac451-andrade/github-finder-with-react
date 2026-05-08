import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import type { RepoProps } from "../types/repo";
import Loading from "../components/Loading/Loading";

function Repos() {

    const { username } = useParams<{ username: string }>();

    const [repos, setRepos] = useState<RepoProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    async function loadRepos(username: string) {

        setIsLoading(true);

        try {
            const usernameFormatado = username.trim();

            const response = await fetch(`https://api.github.com/users/${usernameFormatado}/repos`);

            if (response.status === 404) {
                console.warn("Repositórios não encontrados para esse usuário.");
                return;
            }

            const dados = await response.json();

            const dadosFiltrados: RepoProps[] = dados.map((dado: any) => ({
                name: dado.name,
                description: dado.description,
                created_at: dado.created_at,
                html_url: dado.html_url
            }))

            setRepos(dadosFiltrados);
        }

        catch (err) {
            console.warn(`Erro na requisição: ${err}`);
        }
        finally {
            setIsLoading(false);
        }

    }

    //  vai executar no inicio do componente e quando username mudar
    useEffect(() => {
        if (username) {
            loadRepos(username);
        }
    }, [username]);


    return (
        <div>
            <Link to="/">Voltar</Link>
            <h1>
                Repos de {username}
            </h1>

            {isLoading && <Loading />}

            {repos.length > 0 ? (
                <ul>
                    {repos.map((repo) => (
                        <li key={`repo-${repo.html_url}`}>
                            <strong>{repo.name} - {repo.created_at}</strong>
                            <p>{repo.description}</p>
                            <a href={repo.html_url} target="_blank">Ir para repositório</a>
                        </li>
                    ))}
                </ul>
            ) : (
                !isLoading && <p>Nenhum Repositório encontrado.</p>
            )}

        </div>
    )
}

export default Repos