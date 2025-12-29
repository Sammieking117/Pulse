import FooterLinks from "./FooterLinks";
import PopularAlbums from "./PopularAlbums";
import PopularArtists from "./PopularArtists";
import PopularRadio from "./PopularRadio";
import TrendingSongs from "./TrendingSongs";

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