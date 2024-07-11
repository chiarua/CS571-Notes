import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import BadgerBudsNavbar from "./nav/BadgerBudsNavbar";
import BadgerBudsDataContext from "../contexts/BadgerBudsDataContext";

export default function BadgerBuds() {

    const [buds, setBuds] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/api/s24/hw5/buds', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                console.log(res)
                return res.json()
            })
            .then(cats => {
                setBuds(cats)
            })
    }, []);

    return <div>
        <BadgerBudsNavbar />
        <div style={{ margin: "1rem" }}>
            <BadgerBudsDataContext.Provider value={buds}>
                <Outlet />
            </BadgerBudsDataContext.Provider>
        </div>
    </div>
}