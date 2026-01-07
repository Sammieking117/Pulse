import { useParams } from "react-router-dom";
import { albums } from "../data/albums";

const AlbumDetails = () => {
    const { id } = useParams();

    const album = albums.find(a => a.id === id);

    if (!album) {
        return <p>Album not found</p>
    }

    return ( 
        <div className="album-details details">
            <div className="album-image">
                <img src={album.image} alt={album.name} />
            </div>
             <div className="album-info">
                <h1>{album.name}</h1>
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
 
export default AlbumDetails;