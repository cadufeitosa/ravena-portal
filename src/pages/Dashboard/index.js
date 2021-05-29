import React from 'react';

import './styles.css'

import Header from '../../components/Header/index'
import Sidebar from "../../components/Sidebar";
import DashMain from "../../components/DashMain"


export default function Dashboard() {

    return (
        <div className="main">
            <div>
                <Header/>
            </div>
            <div className="dashOuter">
                <div className="side">
                    <Sidebar/>
                </div>
                <div className="mainDash">
                    <DashMain/>
                </div>
            </div>
        </div>
    )
}