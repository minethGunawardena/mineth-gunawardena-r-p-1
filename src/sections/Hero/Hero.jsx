import styles from './HeroStyles.module.css'
import heroimg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'
import githubIcon from '../../assets/github-light.svg'
import cv from '../../assets/cv.pdf'


function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroimg} alt="Profile Picture in here" />
            <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" />
        </div>
        <div className={styles.info}>
            <h1>
                Mineth <br />Gunawardena
            </h1>
            <h2>
                Software Engineer 
            </h2>
            <span>
                <a href="https://twitter.com" target='_blank'>
                <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="https://linkedin.com" target='_blank'>
                <img src={linkedinIcon} alt="linkedin Icon" />
                </a>
                <a href="https://github.com" target='_blank'>
                <img src={githubIcon} alt="github Icon" />
                </a>
            </span>
            <p>Passionate Software Engineer and Game Developer And 3D Animatior and Artist</p>
            <a href={cv} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero