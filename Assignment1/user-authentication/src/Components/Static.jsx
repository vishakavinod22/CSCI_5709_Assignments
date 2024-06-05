import './styles.css';

function Static(props){
    return(
        <div>
            <span className='user-profile-container'>
                <h1>{props.heading}</h1>
            </span>
        </div>
    );
}

export default Static;