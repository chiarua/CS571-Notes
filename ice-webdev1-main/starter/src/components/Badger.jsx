import {Button, Card} from "react-bootstrap";
import {useEffect, useState} from "react";
import data from "bootstrap/js/src/dom/data.js";

function Badger(props) {


    const [isHovering, setIsHovering] = useState(false)

    function HandleTurnGreen(){
        setIsHovering(!isHovering);
    }
    function sayName(){
        alert("I'm "+props.name)
    }

    return <Card style={{margin: "0.5rem"}}>
        <h2 id={"name"}>{props.name}</h2>
        <p id={"email"}>{props.email}</p>
        <Button onClick={sayName}
            variant={isHovering?"success":"primary"} onMouseOver={HandleTurnGreen} onMouseLeave={HandleTurnGreen}
        >Say Name</Button>
    </Card>
}

export default Badger;