import React, {useEffect, useState} from 'react'
import Calendar from '../components/Calendar'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CalendarScreen = ({events}) => {
    // const [events, setEvents] = useState([]);
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     const fetchEvents = async () => {
    //         try{
    //             const response = await fetch('https://eoqddhabrwwtgwj.m.pipedream.net/');
    //             setEvents((await response.json()).events);
    //         }catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchEvents().finally(() => setLoading(false));
    // },[])


    return (
        <div>
            <NavBar/>
            <div className="container-md mt-4 mb-4 bg-white p-4 rounded-2 w-100">
                {/*{loading ? <h1 className="text-black">Loading...</h1> : <Calendar events={events}/>}*/}
                <Calendar events={events}/>
            </div>
            <Footer/>
        </div>
    );
}

export const getStaticProps = async () => {
    let events = [];
    const response = await fetch('https://eoqddhabrwwtgwj.m.pipedream.net/').catch(err => console.log(err));
    if (response?.ok) {
        events = (await response.json()).events;
    }

    return {
        props: {
            events
        }
    }
}

export default CalendarScreen