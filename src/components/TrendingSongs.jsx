import { Link } from 'react-router-dom';
import { songs } from '../data/songs';

const TrendingSongs = () => {
    return ( 
        <div className="trending-songs dash-comps">
            <h3>Trending songs</h3>
            <div className="songs-row rows">
                {songs.map(song => (
                    <Link
                    key={song.id}
                    to={`/song/${song.id}`}
                    className='song-link'
                    >
                    <article>
                        <img src={song.image} />
                        <p>{song.name}</p>
                    </article>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default TrendingSongs;