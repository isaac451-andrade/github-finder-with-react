import type { UserProps } from "../../types/user"

import { MdLocationPin } from "react-icons/md"

import { Link } from "react-router-dom"

import styles from "./UserProfile.module.css";

function UserProfile({
    avatar_url,
    login,
    location,
    followers,
    following
}: UserProps) {

    return (
        <div className={styles.userContainer}>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>

            {location && (
                <p className={styles.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}

            <div className={styles.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={styles.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguindo:</p>
                    <p className={styles.number}>{following}</p>
                </div>
            </div>
            <Link className={styles.link} to={`repos/${login}`}>Ver melhores projetos</Link>

        </div>
    )
}

export default UserProfile