import React from 'react';
import { FaInstagram, FaWhatsapp, FaTiktok} from "react-icons/fa";
import '../styles/Components/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-icons'>
                <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={24} />
                    </a>
                <a href='https://www.whatsapp.com' target='_blank' rel='noopener noreferrer'>
                    <FaWhatsapp size={24} />
                </a>
                <a href='https://www.tiktok.com' target='_blank' rel='noopener noreferrer'> 
                    <FaTiktok size={24} />
                    </a>
                <p>© 2025 Katiamoda. Todos los derechos reservados.</p>
            </div>
        </div>
    );
}

export default Footer;