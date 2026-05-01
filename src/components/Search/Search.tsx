import { useState, type KeyboardEvent } from "react"
import styles from "./Search.module.css"
import { BsSearch } from "react-icons/bs"

type SearchProps = {
    loadUser: (username: string) => Promise<void>;
}

export default function Search({ loadUser }: SearchProps) {
    const [search, setSearch] = useState("");

    const [searchAtual, setSearchAtual] = useState<string | null>(null);

    function handleSearch() {

        if (!search.trim()) return;

        if (searchAtual === search) return;

        loadUser(search);
        setSearchAtual(search);

    }

    function handleEnter(e: KeyboardEvent) {
        if (e.key === "Enter") {
            handleSearch();
        };
    };

    return (
        <div className={styles.searchContainer}>
            <h2>Busque por um usuário:</h2>
            <p>Encontre os melhores repositórios</p>
            <div className={styles.inputBox}>
                <input
                    onKeyDown={handleEnter}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.searchInput}
                    type="text"
                    name="search"
                    id="search"
                />

                <div className={styles.icon}>
                    <BsSearch onClick={handleSearch} />
                </div>
            </div>
        </div>
    )
}