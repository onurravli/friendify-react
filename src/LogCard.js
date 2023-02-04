import './LogCard.css';

function LogCard({ userName, imageUrl, trackName, artistName, timestamp }) {
	return (
		<div className="LogCard">
			<img src={imageUrl} alt={userName} title={userName}></img>
			<div className="texts">
				<h1 className="userName">{userName}</h1>
				<div className="track">
					<h1 className="trackName">{trackName}</h1>
					<h1 className="artistName">{artistName}</h1>
				</div>
				<h1 className="timestamp">{timestamp}</h1>
			</div>
		</div>
	);
}

export default LogCard;
