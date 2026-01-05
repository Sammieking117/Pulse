import { Link } from "react-router-dom";
import { artists } from "../data/artists";

const PopularArtists = () => {
    return ( 
        <div className="popular-artists dash-comps">
            <h3>Popular artistes</h3>
            <div className="artists-row rows">
                {artists.map(artist => (
                    <Link
                    key={artist.id}
                    to={`/artist/${artist.id}`}
                    className="artist-link"
                    >
                    <article className="artist-card">
                        <img src={artist.image} />
                        <p>{artist.name}</p>
                    </article>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default PopularArtists;