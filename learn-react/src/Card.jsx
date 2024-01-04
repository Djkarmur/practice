function Card(props){
    return (
        <>
        <div className="cards">
            <div className="card">
                <img className="images" src={props.imgsrc} />
                <h3 className="title">{props.titlename}</h3>
                <h2 className="name">{props.sname}</h2>
                <a  className="linkoff" href={props.official}>
                    <button style={{marginBottom:'10px'}}>watch now</button>
                </a>
            </div>

        </div>
        </>
    )
}
export default Card;