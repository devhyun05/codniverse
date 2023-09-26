import PlaypalImage from '../img/playpal.png';
import WeatherAppImage from '../img/weatherapp-preview.png';

const Projects = () => {
    return (
        <>  
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '8%'}}>
                    <h1 style={{textAlign: 'center', color: '#F0F0F0'}}>Projects</h1>


                <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', gap: '30px'}}>
                    <div className='project-item'>
                        <img src={WeatherAppImage} style={{borderRadius: '5px'}} alt="weatherapp preview" width="400px" height="250px"/> 
                        <div className="content">
                            <div className="text">
                                <h2 className="project-title">Weather Clothes Recommendation</h2>
                                <p className="project-stack-list">React JS / Node JS</p>
                                <a className="project-website-link" href="https://weatherclothesrecommendation-67b3a3b0816e.herokuapp.com/">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-item'>
                        <img src={PlaypalImage} style={{borderRadius: '5px'}} alt="weatherapp preview" width="400px" height="250px"/> 
                        <div className="content">
                            <div className="text">
                                <h2 className="project-title">Sports League Management</h2>
                                <p className="project-stack-list">React JS / Node JS / Express JS / MongoDB</p>
                                <a className="project-website-link" href="https://playpal.netlify.app/">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Projects; 