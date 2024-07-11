import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import TicketLane from './TicketLane'

const TicketBoard = (props) => {

    const [ticketLanes, setTicketLanes] = useState({
        todo: [],
        inprogress: [],
        done: [],
    })

    const move = (from, to, tickId) => {
        console.log(from, to, tickId);
        if (from === to) {
            return
        }
        setTicketLanes(oldLanes => {
            let fromLane = oldLanes[from];
            let toLane = oldLanes[to];
            const ticketToMove = fromLane.find(tick => tick.id === tickId);

            const newLanes = {...oldLanes};
            newLanes[from] = fromLane.filter(tick => tick.id !== tickId);
            newLanes[to] = [...toLane, ticketToMove];

            return newLanes;
        })
    }

    useEffect(() => {
        fetch('https://cs571.org/api/s24/ice/tickets', {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(ticketData => {
            console.log(ticketData);
            setTicketLanes({
                todo: ticketData, // TODO Put the tickets in the the todo lane!
                inprogress: [],
                done: []
            });
        })
    }, []);

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                Object.keys(ticketLanes).map(tlName =>
                    <TicketLane
                        status={tlName}
                        tix={ticketLanes[tlName]}
                        move={move}
                    />)
            }
        </Container>
    </div>
}

export default TicketBoard;