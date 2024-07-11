import {Button, Card} from "react-bootstrap";

const Ticket = (props) => {
    function moveTodo(){
        props.moveTicket(props.status, "todo", props.id);
    }

    function moveInPro(){
        props.moveTicket(props.status, "inprogress", props.id);
    }

    function moveDone(){
        props.moveTicket(props.status, "done", props.id);
    }

    return <Card>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Button variant={"primary"} onClick={moveTodo}>Move to Todo</Button>
        <Button variant={"secondary"} onClick={moveInPro}>Move to In progress</Button>
        <Button variant={"success"} onClick={moveDone}>Move to Done</Button>
    </Card>
}

export default Ticket;