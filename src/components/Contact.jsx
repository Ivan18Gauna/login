import React from "react";
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import web from './images/web.png'
import styles from './Concact.module.css'


export default function Contact() {
    return (
        <div className={styles.a}>
            <a href='https://www.linkedin.com/in/ivangauna/' target="_blank">
                <img src={linkedin} alt="" width={50} />
            </a>
            <a href="https://github.com/ivan18Gauna" target="_blank">
                <img src={github} alt="" width={60} />
            </a>
            <a href="https://wa.link/8wjvwn" target="_blank">
                <img src="https://th.bing.com/th/id/OIP.AHRvag4q7ZsgppUOc5RnXQHaHa?pid=ImgDet&rs=1" alt="" width={50} />
            </a>
            <a href="https://mi-portfolio-one.vercel.app" target="_blank">
                <img src={web} alt="" width={45} />
            </a>
        </div>
    )
}