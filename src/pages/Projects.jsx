const Projects = () => {
    return (
        <>  
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h1 style={{color: '#F0F0F0', textAlign:'center'}}>Web Projects</h1>
                <div style={{display: 'flex', flexDirection:'row', justifyContent:'center', gap: '30px'}}>
                    <a href="https://weatherclothesrecommendation-67b3a3b0816e.herokuapp.com/">
                        <img src="/img/weatherapp-preview.png" style={{borderRadius: '5px'}} alt="weatherapp preview" width="300px" height="200px"/> 
                    </a>
                    <a href="https://playpal.netlify.app/">
                        <img src="/img/playpal.png" style={{borderRadius: '5px'}} alt="weatherapp preview" width="300px" height="200px"/> 
                    </a>
                </div>
                <div>
                <h1 style={{color: '#F0F0F0', textAlign: 'center'}}>Mobile Projects</h1>
                </div>

            </div>
        </>
    )
}

export default Projects; 