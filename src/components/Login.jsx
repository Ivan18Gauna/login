import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Alert from "./Alert";
import styles from './Login.module.css'
import candado from './images/candado.png'

export default function Login() {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { loginWithGoogle, login, resetPassword } = useAuth()
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleGoogle = async () => {
        try {
            await loginWithGoogle()
            navigate('/')
        } catch (error) {
            setError(error.message)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password);
            navigate('/')
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }
    }

    const handleResetPassword = async (e) => {
        e.preventDefault()
        if (!user.email) {
            return setError('Please enter your email')
        }
        try {
            await resetPassword(user.email)
            setError('we sent you an email with a link to reset your password')
        } catch (error) {
            setError(error.message)
        }

    }


    return (
        <div className={styles.container}>
            <div className={styles.imageAstronauta}>
                <img src="https://moonshotedu.com.br/wp-content/uploads/2020/10/IDENTIDADE-SEMANA-07-07.png" alt="" width={400} />
            </div>
            <div className={styles.login}>
                <form onSubmit={handleSubmit}>

                    <h3 className={styles.inputEmailPassword}>USER LOGIN</h3>
                    <div className={styles.alert}>
                        {error ? <Alert message={error} /> : null}
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
                    <div className={styles.forgot}>
                        <a href="" onClick={handleResetPassword}>Forgot your Password?</a>
                    </div>
                    {user.email === '' || user.password === '' ?
                        <div className={styles.btnDiv}>
                            <button disabled className={styles.btnDisabled}>Login</button>
                        </div> :
                        <div className={styles.btnDiv}>
                            <button>Login</button>
                        </div>
                    }
                </form>
                <div className={styles.new}>
                    <p>¿New?</p>
                    <a href="/register">Register</a>
                </div>
                <button onClick={handleGoogle}>Login with Google</button>
            </div>
        </div>
    )
}