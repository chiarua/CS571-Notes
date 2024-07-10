export default function Hurricane(props) {
    const stardDt = new Date(props.start_date).toLocaleString()

    return <div>
        <h2>{props.name}</h2>
        <p>{props.category}</p>
        <p>{stardDt}</p>
    </div>
}