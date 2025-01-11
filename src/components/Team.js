import './Team.css'
const Team=()=>{
    return(
        <div className="Team-section">
            <h2>Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc bibendum, justo sit amet maximus imperdiet, sapien felis molestie justo, vel placerat tellus enim vel tortor. </p>
           <div className='team-section-cards'>
            <div className="team-card">
                <div className='team-image-name'>
                    <img className="team-img" src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736594947/team1_ihjecs.png"/>
                    <p>John Smith<br/>Designation</p>
                    
                </div>
              <div className='team-description'>
                <p>Lorem ipsum dolor sit amet, vel placerat tellus enim vel tortor.  dignissim ante. Donec lobortis, ante vel laoreet feugiat, risus justo imperdiet mauris, Donec rutrum, sapien bibendum placerat laoreet, tellus massa euismod mauris, ut ultrices lorem magna vitae tellus. Fusce semper viverra sapien. Donec semper molestie mi in congue.  </p>
              </div>

            </div>

            <div className="team-card">
                <div className='team-image-name'>
                    <img className="team-img" src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736595987/tm2_ejbbk5.png"/>
                    <p>Ellian Williams<br/>Designation</p>
                    
                </div>
              <div className='team-description'>
                <p>Lorem ipsum dolor sit amet, vel placerat tellus enim vel tortor.  dignissim ante. Donec lobortis, ante vel laoreet feugiat, risus justo imperdiet mauris, Donec rutrum, sapien bibendum placerat laoreet, tellus massa euismod mauris, ut ultrices lorem magna vitae tellus. Fusce semper viverra sapien. Donec semper molestie mi in congue.  </p>
              </div>

            </div>

            <div className="team-card">
                <div className='team-image-name'>
                    <img className="team-img" src="https://res.cloudinary.com/dcyd67xgz/image/upload/v1736596112/tm3_p0jity.png"/>
                    <p>John Smith<br/>Designation</p>
                    
                </div>
              <div className='team-description'>
                <p>Lorem ipsum dolor sit amet, vel placerat tellus enim vel tortor.  dignissim ante. Donec lobortis, ante vel laoreet feugiat, risus justo imperdiet mauris, Donec rutrum, sapien bibendum placerat laoreet, tellus massa euismod mauris, ut ultrices lorem magna vitae tellus. Fusce semper viverra sapien. Donec semper molestie mi in congue.  </p>
              </div>

            </div>
           </div>
        </div>
    )
}
export default Team