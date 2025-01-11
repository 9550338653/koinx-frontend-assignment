import './Chartsection.css'
import TradingViewWidget from './TradingViewWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Trendingcoins from './Trendingcoins'
const Chartsection=()=>{
    return(
        <div className="chart-section">
            <p>Cryptocurrencies Bitcoin</p>
        <div className="main-container1">
            <div className="Analysis-section">
                <div className="bitlogo">
                <img src='https://res.cloudinary.com/dcyd67xgz/image/upload/v1736570868/bitcoin_ragmuf.png'/>
                <h3>Bitcoin</h3>
                <p className="btc">BTC</p>
                <h3 className="rank">Rank #1</h3>
                </div>
            <div className="trading-widget-container">
            <hr className="line"/>
           <br/>
            <TradingViewWidget/>
            </div>
            </div>
        <div className="cards-container">
            <div className="getstarted-section">
                
                <h3>Get Started with Koinx For Free</h3>
                <p>with our range of features that you can equip for free, oinx allows to be more educated and aware of your tax reports</p>
                <img src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736577002/girllogo_m6gyhp.png"/>
                <button type='button' className='getStartedButton'>Get Started For FREE
                    <span className="arrow-ele"><FontAwesomeIcon icon={faArrowRight} /></span></button>
            </div> 
            <div className="trendcoins">
               <Trendingcoins/>
               </div>
            </div>
       
            </div>
        </div>
    )
}
export default Chartsection