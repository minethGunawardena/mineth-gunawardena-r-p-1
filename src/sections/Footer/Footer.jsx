import Styles from './FooterStyle.module.css'

function Footer() {
  return (
   <section id='footer' className={Styles.container}>
    <p>&copy; 2025 Mineth Gunwardena 
        <br />
        All Rights Reserved
    </p>
   </section>
  )
}

export default Footer