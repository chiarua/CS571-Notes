import {Col, Row} from "react-bootstrap"
import Ticket from "./Ticket";

const TicketLane = (props) => {
    return <div>
        <Row>
            <h2>{props.status}</h2>
            {
                props.tix.map(t => {
                    return <Col key={t.id} xs={12} md={6} xl={4}>
                        <Ticket
                            {...t}
                            status={props.status}
                            moveTicket={props.move}
                        />
                    </Col>
                })
            }
        </Row>
        <br />
    </div>
}

export default TicketLane;