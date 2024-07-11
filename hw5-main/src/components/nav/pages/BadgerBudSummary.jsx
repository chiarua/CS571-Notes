import React, { useContext, useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { BadgerBudsDataContext } from './BadgerBuds';

export default function BadgerBudSummary(props) {
    const buds = useContext(BadgerBudsDataContext);
    const [filteredBuds, setFilteredBuds] = useState([]);

    useEffect(() => {
        const savedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds')) || [];
        setFilteredBuds(buds.filter(bud => !savedCatIds.includes(bud.id)));
    }, [buds]);

    const saveBuddy = (id, name) => {
        const savedCatIds = JSON.parse(sessionStorage.getItem('savedCatIds')) || [];
        savedCatIds.push(id);
        sessionStorage.setItem('savedCatIds', JSON.stringify(savedCatIds));
        alert(`${name} has been added to your basket!`);
        setFilteredBuds(filteredBuds.filter(bud => bud.id !== id));
    };

    return (
        <>
            {filteredBuds.map((bud) => (
                <BudCard key={bud.id} bud={bud} saveBuddy={saveBuddy} />
            ))}
        </>
    );
}

function BudCard({ bud, saveBuddy }) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <Card style={{ margin: "0.25rem" }} key={bud.id}>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/CS571-S24/hw5-api-static-content/main/cats/${bud.imgIds[0]}`} alt={`${bud.name}'s picture`} />
            <Card.Body>
                <h3 style={{ fontSize: "1.25rem" }}>{bud.name}</h3>
                {showMore ? (
                    <>
                        <h4>{bud.age}</h4>
                        <h4>{bud.gender}</h4>
                        <h4>{bud.breed}</h4>
                        {bud.description && <p>{bud.description}</p>}
                        <Button variant="secondary" onClick={toggleShowMore}>Show less</Button>
                    </>
                ) : (
                    <>
                        <Button variant="secondary" onClick={toggleShowMore}>Show more</Button>
                    </>
                )}
                <Button variant="primary" onClick={() => saveBuddy(bud.id, bud.name)}>Save</Button>
            </Card.Body>
        </Card>
    );
}
