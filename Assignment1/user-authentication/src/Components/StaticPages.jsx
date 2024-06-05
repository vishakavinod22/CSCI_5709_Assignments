import './styles.css';

function StaticPages(props){
    return(
        <div>
            <span className='user-profile-container'>
                <h1>{props.heading}</h1>
            </span>
        </div>
    );
}

export default StaticPages;