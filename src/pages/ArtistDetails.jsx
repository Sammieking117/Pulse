import { useParams } from "react-router-dom";
import { artists } from "../data/artists";

const ArtistDetails = () => {
    const { id } = useParams();

    const artist = artists.find(a => a.id === id);

    if (!artist) {
        return <p>Artist not found</p>
    }

    return ( 
        <div className="artist-details details">
            <div className="artist-image">
                <img src={artist.image} alt={artist.name} />
            </div>
            <div className="artist-info">
                <h1>{artist.name}</h1>
                <p>{artist.listeners} monthly listeners</p>
                <div className="artist-actions">
                    <div className="artist-buttons">
                        <button className="follow-btn">Follow</button>
                        <img src="../src/assets/icons/share.png" />
                        <button className="kebab-btn">⁝</button>
                    </div>
                    <div className="play-btn">
                        <img src="../src/assets/icons/play-button.png" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ArtistDetails;