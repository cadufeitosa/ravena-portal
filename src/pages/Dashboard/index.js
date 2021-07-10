import React from 'react';

import './styles.css'

import Header from '../../components/Header/index'
import Sidebar from "../../components/Sidebar";
import DashMain from "../../components/DashMain"


export default function Dashboard() {

    return (
        <div className="dashboard">
                <Header/>
            <div className="dashOuter">
                <Sidebar/>
                <DashMain/>
            </div>
        </div>
    )
}