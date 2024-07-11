import BadgerBudSummary from "./BadgerBudSummary.jsx";
import {Row} from "react-bootstrap";

export default function BadgerBudsAdoptable(props) {
    return <div>
        <h1>Available Badger Buds</h1>
        <p>The following cats are looking for a loving home! Could you help?</p>
        <Row>
            <BadgerBudSummary/>
        </Row>
    </div>
}