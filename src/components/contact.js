import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Contact() {
    return (
        <div className='contact-container'>
            <section className='email'>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <a href="mailto:anandhkrsna@gmail.com" target="_blank">| anandhkrsna@gmail.com</a>
            </section>
            <section className='whatsapp'>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                <a href="https://wa.me/6282145663396" target="_blank">| 082145663396</a>
            </section>
            <section className='location'>
                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                <p>| Denpasar, Bali</p>
            </section>
        </div>
    )
}

export default Contact;