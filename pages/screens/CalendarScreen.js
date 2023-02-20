import React from 'react'
import Calendar from '../components/Calendar'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CalendarScreen = ({events}) => {
    return (
        <div>
            <NavBar/>
            <div className="container-md mt-4 mb-4 bg-white p-4 rounded-2">
                <Calendar events={events}/>
            </div>
            <Footer/>
        </div>
    );
}

// import fsPromises from "fs/promises";
// import path from 'path';
export const getStaticProps = async () => {
    let events = [];
    const response = await fetch('https://eoqddhabrwwtgwj.m.pipedream.net/').catch(err => console.log(err));
    if (response.ok) {
        events = (await response.json()).events;
    }

    return {
        props: {
            events
        }
    }
}

export default CalendarScreen