import FooterLinks from "../components/FooterLinks";
import PopularAlbums from "../components/PopularAlbums";
import PopularArtists from "../components/PopularArtists";
import PopularRadio from "../components/PopularRadio";
import TrendingSongs from "../components/TrendingSongs";
import Playlist from "./Playlist";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <Playlist />
            <div className="comp-B">
                <TrendingSongs />
                <PopularArtists />
                <PopularAlbums />
                <PopularRadio />
                <FooterLinks />
            </div>
        </div>
     );
}
 
export default Dashboard;