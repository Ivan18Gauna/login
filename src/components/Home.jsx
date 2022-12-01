import React from "react";
import { useAuth } from "../context/authContext";
import Contact from "./Contact";
import styles from './Home.module.css'
import image from './images/astronauta.png'

export default function Home() {
    const { user, logout, loading } = useAuth()

    console.log('user', user)

    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }
    if (loading) return <h1>Loading....</h1>
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                {/* <img src="https://i.pinimg.com/originals/aa/42/e9/aa42e95a8fa0f42502590c4cc437e837.jpg" alt="" width={500} /> */}
                <img src={image} alt="" width={500} />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    <h3>Bienvenido {user.email}</h3>
                </div>
                <div className={styles.txt}>
                    <h4>Hola Soy Iván Gauna y estoy en búsqueda de trabajo, soy desarrollador Front-End trabajo con React, Redux, Htlm, Css, JavaScript con los cuales tengo varios proyectos.
                    </h4>
                    <h4>
                        Estoy altamente interesado en trabajar donde pueda aportar y aprender de mis compañeros para poder así expandir mis conocimientos y brindar un trabajo de calidad.
                    </h4>
                </div>
                <div className={styles.contact}>
                    <Contact />
                </div>
                <div className={styles.btn}>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
}