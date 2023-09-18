const Projects = () => {
    return (
        <>  
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '8%'}}>
                    <ul style={{display: 'flex', 
                                flexDirection: 'row',
                                width: '100%', 
                                justifyContent: 'center', 
                                alignItems: 'center', 
                                gap: '50px', 
                                color: '#F0F0F0', 
                                fontSize: '20px', 
                                fontWeight: 'bold',
                                listStyle: 'none'}}>
                        <li>ALL</li>
                        <li>REACT-JS / NODE</li>
                        <li>REACT-JS / JAVA-SPRING</li>
                        <li>REACT-NATIVE / C#</li>
                    </ul>


                <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', gap: '30px'}}>
                    <a href="https://weatherclothesrecommendation-67b3a3b0816e.herokuapp.com/">
                        <img src="/img/weatherapp-preview.png" style={{borderRadius: '5px'}} alt="weatherapp preview" width="400px" height="250px"/> 
                    </a>
                    <a href="https://playpal.netlify.app/">
                        <img src="/img/playpal.png" style={{borderRadius: '5px'}} alt="weatherapp preview" width="400px" height="250px"/> 
                    </a>
                </div>


            </div>
        </>
    )
}

export default Projects; 