import React from 'react';
import {FaInstagram, FaTwitter, FaTwitch} from 'react-icons/fa';

import './styles.css'

export default function Footer() {


    return (
        <div className="footer1">
            <div>
                <h2>Nos siga nas redes sociais:</h2>
            </div>
            <div className="icons">
                <FaInstagram size={40} className="icon"/>
                <FaTwitter size={40} className="icon"/>
                <FaTwitch size={40} className="icon"/>
            </div>
        </div>
    )
}