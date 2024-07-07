import Badger from "./Badger";

import {useEffect, useState} from "react";

function FindMyBadgers() {
    const [badgers, setBadgers] = useState([])
    useEffect(()=>{
    fetch("https://randomuser.me/api?results=3")
        .then(res => res.json())
        .then(data=>{
            setBadgers(data.results)
        })
    }, [])
    return <div>
        <h1>Find My Badgers</h1>
        {
            badgers.map(b => <Badger key={b.email} name={b.name.first+" "+b.name.last} email={b.email}></Badger>)
        }
    </div>
}

export default FindMyBadgers;