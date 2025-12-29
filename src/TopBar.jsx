import { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
    const [on, setOn] = useState(false);

    return ( 
        <>
            <div className="top-bar">
                <div className="pulse">
                    <img src="../src/assets/icons/frequency.png" alt="" />
                    <h2>Pulse</h2>
                </div>
                <div className="call-nav">
                    <button>Open App</button>
                    <div className="menu-icon" onClick={() => setOn(!on)}>
                        &#9776;
                    </div>
                </div>
            </div>
            <nav className={on ? "active" : ""}>
                <div className="close-icon"  onClick={() => setOn(!on)}>
                    &times;
                </div>
                <div className="sign-up">
                    <h3><Link>Log in</Link></h3>
                    <h3><Link>Sign up</Link></h3>
                    <h3 className="divider"></h3>
                </div>
                <div className="nav-links">
                    <h4><Link>Premium</Link></h4>
                    <h4><Link>Help</Link></h4>
                    <h4><Link>Download</Link></h4>
                    <h4><Link>Privacy</Link></h4>
                    <h4><Link>Terms</Link></h4>
                </div>
            </nav>
        </>
     );
}
 
export default TopBar;