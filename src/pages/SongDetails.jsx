import { useParams } from "react-router-dom";
import { songs } from "../data/songs";

const SongDetails = () => {
    const { id } = useParams();

    const song = songs.find(a => a.id === id);

    if (!song) {
        return <p>Song not found</p>
    }

    return ( 
        <div className="song-details details">
            <div className="song-image">
                <img src={song.image} alt={song.name} />
            </div>
             <div className="song-info">
                <h1>{song.name}</h1>
                <div className="artist-actions">
                    <div className="artist-buttons">
                        <img src="/icons/heart.png" />
                        <img src="/icons/share.png" />
                        <button className="kebab-btn">⁝</button>
                    </div>
                    <div className="play-btn">
                        <img src="/icons/play-button.png" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SongDetails;