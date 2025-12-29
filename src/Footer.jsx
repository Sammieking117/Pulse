const Footer = ({ onLibraryClick }) => {
    return ( 
        <div className="footer">
            <div className="footer-icon">
                <img src="../src/assets/icons/house.png" />
                <p className="home">Home</p>
            </div>
            <div className="footer-icon">
                <img src="../src/assets/icons/search.png" />
                <p>Search</p>
            </div>
            <div className="footer-icon" onClick={onLibraryClick}>
                <img src="../src/assets/icons/books.png" />
                <p>Your Library</p>
            </div>
            <div className="footer-icon premium">
                <img src="../src/assets/icons/frequency.png" />
                <p>Premium</p>
            </div>
        </div>
     );
}
 
export default Footer;