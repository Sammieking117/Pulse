import FooterLinks from "../components/FooterLinks";
import PopularAlbums from "../components/PopularAlbums";
import PopularArtists from "../components/PopularArtists";
import PopularRadio from "../components/PopularRadio";
import TrendingSongs from "../components/TrendingSongs";

const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <TrendingSongs />
            <PopularArtists />
            <PopularAlbums />
            <PopularRadio />
            <FooterLinks />
        </div>
     );
}
 
export default Dashboard;