import './Header.css'
const Header=()=>{
    return(
        <div className="header-section">
            <div className="image-logo">
                <img src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736568101/koinximg_fihebq.png"/>
            </div>
            <div className="nav-elements">
                <a>Crypto Taxes</a>
                <a>Free Tools</a>
                <a>Resource Center</a>
               <button>Get Started</button>
            </div>

        </div>
    )
}
export default Header