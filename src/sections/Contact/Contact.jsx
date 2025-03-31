import styles from './ContactStyle.module.css'

function Contact() {
  return (
    <section id='Contact' className={styles.container}>
       <h1 className='sectionTitle'>Contact</h1>
       <form action="https://formspree.io/f/xqapdjdj" method='post'>
        <div className='formGroup'>
            <label htmlFor="name" hidden>
                Name
            </label>
            <input type="text" name="name" id="name" placeholder="name" required/>
        </div>
        <div className='formGroup'>
            <label htmlFor="Email" hidden>
                Email
            </label>
            <input type="text" name="email" id="email" placeholder="Email" required/>
        </div>
        <div className='formGroup'>
            <label htmlFor="Email" hidden>
                Massege
            </label>
            <textarea name="massege" id="massege" placeholder="Massege" required>
            </textarea>
        </div>
        <input type="Submit" className='hover btn' value='Submit'/>
       </form>
    </section>
  )
}

export default Contact
