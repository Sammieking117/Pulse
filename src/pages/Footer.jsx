const Footer = ({ onLibraryClick }) => {
    return ( 
        <div className="footer">
            <div className="footer-icon">
                <img src="/public/icons/house.png" />
                <p className="home">Home</p>
            </div>
            <div className="footer-icon">
                <img src="/public/icons/search.png" />
                <p>Search</p>
            </div>
            <div className="footer-icon library" onClick={onLibraryClick}>
                <img src="/public/icons/books.png" />
                <p>Your Library</p>
            </div>
            <div className="footer-icon premium">
                <img src="/public/icons/frequency.png" />
                <p>Premium</p>
            </div>
        </div>
     );
}
 
export default Footer;