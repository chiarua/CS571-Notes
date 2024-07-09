import {useState} from "react";

export default function BadgerSaleItem(props) {
    const [count, setCount] = useState(0);

    function addOne(){
        setCount(count+1);
    }
    function minusOne(){
        setCount(count-1);
    }
    return <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <p>{props.price+'$'}</p>
        <div>
            <button className="inline" onClick={minusOne} disabled={count<=0}>-</button>
            <p className="inline" id={"num"}>{count}</p>
            <button className="inline" onClick={addOne}>+</button>
        </div>
    </div>
}