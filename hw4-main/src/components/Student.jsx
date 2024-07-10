const Student = (props) => {
    const numHobby = props.interests.length
    return <div>
        <h2>{props.name.first} {props.name.last}</h2>
        {/* TODO Student data goes here! */}
        <p><strong>{props.major}</strong></p>
        <p>{props.name.first} is taking {props.numCredits} and is {props.fromWisconsin?"not":""} from Wisconsin</p>
        <p>who has {numHobby} hobbies including</p>
        <ul>
            {
                props.interests.map(int=><li id={props.name.first+props.name.last+int}>{int}</li>)
            }
        </ul>
    </div>
}

export default Student;