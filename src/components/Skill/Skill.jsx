import styles from "./Skill.module.css"

export function Skill({src}) {
    return <img src={src} className={styles.skill}>
    </img>
}