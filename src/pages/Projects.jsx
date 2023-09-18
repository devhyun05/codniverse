const Projects = () => {
    return (
        <>  
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '8%'}}>
                    <ul style={{display: 'flex', 
                                flexDirection: 'row',
                                width: '100%', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                gap: '100px', 
                                color: '#F0F0F0', 
                                fontSize: '20px', 
                                fontWeight: 'bold',
                                listStyle: 'none'}}>
                        <li>ALL</li>
                        <li>REACT-JS / NODE</li>
                        <li>REACT-JS / JAVA-SPRING</li>
                        <li>REACT-NATIVE / C#</li>
                    </ul>


                <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', gap: '100px'}}>
                    <div className='project-item'>
                        <img src="/img/weatherapp-preview.png" style={{borderRadius: '5px'}} alt="weatherapp preview" width="400px" height="250px"/> 
                        <div className="content">
                            <div className="text">
                                <h2 className="project-title">Weather Clothes Recommendation</h2>
                                <p className="project-stack-list">React JS / Node JS</p>
                                <a href="https://weatherclothesrecommendation-67b3a3b0816e.herokuapp.com/">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className='project-item'>
                        <img src="/img/playpal.png" style={{borderRadius: '5px'}} alt="weatherapp preview" width="400px" height="250px"/> 
                        <div className="content">
                            <div className="text">
                                <h2 className="project-title">Sports League Management</h2>
                                <p className="project-stack-list">React JS / Node JS / Express JS / MongoDB</p>
                                <a href="https://playpal.netlify.app/">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Projects; 