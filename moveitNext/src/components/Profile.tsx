import styles from "../styles/components/Profile.module.css";

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/36905023?s=460&u=a5e3a2f43c5d90ee3c7a38ded5c50a4c87d317da&v=4" alt="Thiago Siqueira"/>
            <div>
                <strong> Thiago Siqueira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1</p>
            </div>
        </div>
    )
}