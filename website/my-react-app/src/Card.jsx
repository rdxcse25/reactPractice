import profilePic from './assets/imresizer-1715277195869.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Prince & Co.</h2>
            <p className="card-text">I am studing CSE and love to go to the gym</p>

        </div>
    );
}

export default Card