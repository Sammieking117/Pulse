import { Link } from "react-router-dom";

const FooterLinks = () => {
    return ( 
        <div className="footer-links">
            <div className="footer-flex">
                <ul className="links">
                    <li>Company</li>
                    <li><Link>About</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>For the Record</Link></li>
                </ul>
                <ul className="links">
                    <li>Communities</li>
                    <li><Link>For Artists</Link></li>
                    <li><Link>Developers</Link></li>
                    <li><Link>Advertising</Link></li>
                    <li><Link>Investors</Link></li>
                    <li><Link>Vendors</Link></li>
                </ul>
                <ul className="links">
                    <li>Useful links</li>
                    <li><Link>Support</Link></li>
                    <li><Link>Free Mobile App</Link></li>
                    <li><Link>Popular by Country</Link></li>
                    <li><Link>Import your Music</Link></li>
                </ul>
                <ul className="links">
                    <li>Pulse plans</li>
                    <li><Link>Premium Individual</Link></li>
                    <li><Link>Premium Duo</Link></li>
                    <li><Link>Premium Family</Link></li>
                    <li><Link>Premium Student</Link></li>
                    <li><Link>Pulse Free</Link></li>
                </ul>
                <div className="socials">
                    <img src="/icons/instagram (1).png" />
                    <img src="/icons/twitter (1).png" />
                    <img src="/icons/facebook (2).png" />
                </div>
            </div>

            <div className="bottom-links">
                <ul>
                    <li><Link>Legal</Link></li>
                    <li><Link>Safety & Privacy Center</Link></li>
                    <li><Link>PrivacyPolicy</Link></li>
                </ul>
                <ul>
                    <li><Link>Cookies</Link></li>
                    <li><Link>About Ads</Link></li>
                    <li><Link>Accessibilty</Link></li>
                </ul>
                <p>&copy; 2026 Pulse</p>
                <button><img src="/icons/world.png" /> English</button>
            </div>
        </div>
     );
}
 
export default FooterLinks;