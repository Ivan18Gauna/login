import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import styles from './Register.module.css'
import signin from './images/signin.png'
import candado from './images/candado.png'

export default function Register() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState()

    const navigate = useNavigate()
    const { signup } = useAuth()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signup(user.email, user.password);
            navigate('/')
        } catch (error) {
            setError(error.message)

        }
    }


    return (
        <div className={styles.container}>
            <div className={styles.imageAstronauta}>
                <img src="https://moonshotedu.com.br/wp-content/uploads/2020/10/IDENTIDADE-SEMANA-07-07.png" alt="" width={400} />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.imageSignin}>
                    <img src={signin} alt="" />
                </div>
                <div className={styles.inputEmailPassword}>
                    <div className={styles.image}>
                        <img src="https://th.bing.com/th/id/R.63e6418faf301a961aacc63e34753111?rik=BpuRRDScwVZ6RQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_383016.png&ehk=0N08Z7ouQCYaQDNaJU9GOZVqqqpOyp%2bo1fBK7rgxTjI%3d&risl=&pid=ImgRaw&r=0" alt="no img" width={17} />
                    </div>
                    <div>
                        <input className={styles.input} type="email" name="email" id="email" placeholder="yourEmail@compani.com" onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.inputEmailPassword}>
                    <div className={styles.image}>
                        <img src={candado} alt="" width={17} />
                    </div>
                    <div>
                        <input className={styles.input} type="password" name="password" id="password" placeholder="********" onChange={handleChange} />
                    </div>
                </div>
                <div className={styles.btnDiv}>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}