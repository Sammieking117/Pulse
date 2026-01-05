import { Link } from 'react-router-dom';
import { albums } from '../data/albums';

const PopularAlbums = () => {
    return ( 
        <div className="popular-albums dash-comps">
            <h3>Popular albums and singles</h3>
            <div className="albums-row rows">
                {albums.map(album => (
                    <Link
                    key={album.id}
                    to={`/album/${album.id}`}
                    className='album-link'
                    >
                    <article>
                        <img src={album.image} />
                        <p>Curtain call 2</p>
                    </article>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default PopularAlbums;