import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const About=()=>{
    return(
        <div className="about-container">
            <h2>About Bitcoin</h2>
            <h3>What is Bitcoin?</h3>
            <p>Bitcoin (BTC) is a cryptocurrency (a virtual currency) designed to act as money and a form of payment outside the control of any one person, group, or entity. This removes the need for trusted third-party involvement (e.g., a mint or bank) in financial transactions.</p>
          <hr className="line"/>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <hr className="line"/>
          <h2>Already holding Bitcoin?</h2>
          <div className="bit-cards">
            <div className="bit-card">
                <div className="bit-image">
                 <img className="hand-image" src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736591950/alrey_c2cai8.png"/>
                </div>
                <div className="bit-content">
                <h3>Calculate Your Profits</h3>
                  <button type='button' className='checknowbutton'>Check Now
                        <span className="arrow-ele"><FontAwesomeIcon icon={faArrowRight} /></span></button>

                </div>
            </div>

            <div className="bit-card2">
                <div className="bit-image">
                 <img className="hand-image" src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736592736/alrey1_judcuh.png"/>
                </div>
                <div className="bit-content">
                <h3 >Check your tax liability</h3>
                  <button type='button' className='checknowbutton'>Check Now
                        <span className="arrow-ele"><FontAwesomeIcon icon={faArrowRight} /></span></button>

                </div>
            </div>
          </div>
          
        </div>
    )
}
export default About