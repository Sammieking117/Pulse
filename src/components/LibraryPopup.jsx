const LibraryPopup = ({ onClose }) => {
    return ( 
        <div className="library-popup">
            <div className="popup-content">
                <h3>Enjoy Your Library</h3>
                <p>
                    See your saved songs, podcasts,
                    artists, and playlists in the
                    Pulse App.
                </p>
                <div className="popup-actions">
                    <button className="ghost"
                    onClick={onClose}>
                        Not now
                    </button>
                    <button className="primary">Get App</button>
                </div>
            </div>
        </div>
     );
}
 
export default LibraryPopup;