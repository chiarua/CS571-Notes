import { Button, Card } from "react-bootstrap";
import {useContext} from "react";
import TicketContext from "./TicketContext.jsx";

const Ticket = (props) => {

    const [tickets, setTickets] = useContext(TicketContext);

    const move = (from, to, tickId) => {
        console.log(from, to, tickId);
        if (from === to) {
            return
        }
        setTickets(oldLanes => {
            let fromLane = oldLanes[from];
            let toLane = oldLanes[to];
            const ticketToMove = fromLane.find(tick => tick.id === tickId);

            const newLanes = {...oldLanes};
            newLanes[from] = fromLane.filter(tick => tick.id !== tickId);
            newLanes[to] = [...toLane, ticketToMove];

            return newLanes;
        })
    }
    const markTodo = () => {
        move(props.status, "todo", props.id);
    }

    const markInProgress = () => {
        move(props.status, "inprogress", props.id);
    }

    const markDone = () => {
        move(props.status, "done", props.id);
    }

    return <Card style={{margin: "0.25rem"}}>
        <h2 style={{fontSize: "1.25rem"}}>{props.name}</h2>
        <sub>{props.author}</sub>
        <br/>
        <p>{props.description}</p>
        <Button variant="secondary" onClick={markTodo}>todo</Button>
        <Button variant="primary" onClick={markInProgress}>in progress</Button>
        <Button variant="success" onClick={markDone}>done</Button>
    </Card>
}

export default Ticket;