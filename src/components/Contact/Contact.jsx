import './Contact.css'
import { contact } from '../../assets/images'
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
    return (
        <section className="section">
            <div className="container wrapper">
                <img src={contact} className="contact__image" alt="" />
                <div className="text">
                    <h2 className="section__title">Free Shipping Services</h2>
                    <p className="section__description">*only for the same region</p>
                    <ul className="contact__list">
                        <li>
                            <span>
                                <a href="tel:+62 1189-2719-00"><FaPhone /> +62 1189-2719-00</a>
                            </span>
                        </li>
                        <li>
                            <span>
                                <a href="mailto:order@platify.co"><IoMdMail /> order@platify.co</a>
                            </span>
                        </li>

                    </ul>
                </div>



            </div>

        </section >
    )
}

export default Contact