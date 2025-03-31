import styles from './HeroStyles.module.css';
import heroimg from '../../assets/ME.jpg';
import sunIcon from '../../assets/sun.svg';
import moonIcon from '../../assets/moon.svg';
import YtIconLight from '../../assets/YT-Light.svg';
import YtIconDark from '../../assets/YT-Dark.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import githubIconLight from '../../assets/github-light.svg';
import githubIconDark from '../../assets/github-dark.svg';
import cv from '../../assets/Mineth 2025 April Resume.pdf';
import {useTheme} from '../../common/ThemeContex';


function Hero() {
    const{theme,toggleTheme} = useTheme();
    const themeIcon = theme === 'light'?sunIcon : moonIcon;
    const YtIcon = theme === 'light'?YtIconLight : YtIconDark;
    const linkedinIcon = theme === 'light'?linkedinIconLight : linkedinIconDark;
    const githubIcon= theme === 'light'?githubIconLight : githubIconDark;
    
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroimg} alt="Profile Picture in here" />
            <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" 
            onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Mineth <br />Gunawardena
            </h1>
            <h2>
                Software Engineer 
            </h2>
            <span>
                <a href="https://www.youtube.com/@MDG9000/featured" target='_blank'>
                <img src={YtIcon} alt="Twitter Icon" />
                </a>
                <a href="https://www.linkedin.com/in/mineth-gunawardena-0ab07933a/" target='_blank'>
                <img src={linkedinIcon} alt="linkedin Icon" />
                </a>
                <a href="https://github.com/minethGunawardena" target='_blank'>
                <img src={githubIcon} alt="github Icon" />
                </a>
            </span>
            <p className={styles.discription}>A software engineer specializing in enterprise application development, focused on delivering scalable, efficient, and user-centric solutions. 
                Explore my portfolio to see how I create innovative software for real-world challenges.</p>
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