import Rect from 'react'

const Card = (props) => {
    //console.log(props);
    return(
        <div>
            <h2> {props.name} </h2>
                <img src={props.img} alt='' width={200} />
                <p>{props.url}</p>
        </div>
    );
}

export default Card