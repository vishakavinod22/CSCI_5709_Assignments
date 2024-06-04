import './styles.css';

function StaticPages(props){
    return(
        <div>
            <span className='user-profile-container'>
                <h1>{props.value}</h1>
            </span>
        </div>
    );
}

export default StaticPages;