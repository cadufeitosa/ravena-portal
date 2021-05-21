import React from 'react';

import Header from '../../components/Header/index'
import '../Home/styles.css'
import ravenaimg from "../../images/ravena1.png"
import Footer from "../../components/Footer";

export default function Home() {


    return (
        <div>
            <Header className="header"/>
            <div className="imagemzinha">
                <div className="main">
                    <h1 className="titulo">QUEM SOU EU?</h1>
                    <a className="paragrafo">OI, EU SOU A RAVENA, UM BOT MULTIPROPÓSITO ,
                        MINHA IDEIA PRINCIPAL É SER UM BOT QUE COBRE QUASE
                        TODAS AS FUNÇÕES QUE UM SERVIDOR DO DISCORD
                        PRECISA.</a>
                </div>
                <div>
                    <img src={ravenaimg} className="rvnimg"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}