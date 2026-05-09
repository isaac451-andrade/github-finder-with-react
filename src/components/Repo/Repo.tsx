import type { RepoProps } from "../../types/repo"
import styles from "./Repo.module.css"

function Repo({
    name,
    description,
    created_at,
    html_url,
}: RepoProps) {

    function dateParser(date: string) {
        const [datePart] = date.split("T");

        const [year, month, day] = datePart.split("-");

        const dataFormatada = `${day}/${month}/${year}`;

        return dataFormatada;
    }

    const dataFormatada = dateParser(created_at);

    return (
        <div className={styles.repoContainer}>
            <div className={styles.repoItem}>
                <h3>{name} - <span>{dataFormatada}</span></h3>
                <p>{description ? description : "Sem descrição"}</p>
                <a className="link" href={html_url} target="_blank">Ir para repositório</a>
            </div>
        </div>
    )
}

export default Repo