const navigationBar = () => {
    return(
        <>
            <video src={"/video/space.mp4"} autoPlay loop muted
             style={{position: 'absolute', 
                     objectFit: 'cover',
                     width: '100vw',
                     height: '100vh',
                     zIndex: '-1'}}>

            </video>
      <header>

        <nav style={{display: 'flex', flexDirection: 'row'}}>
            <h2 style={{marginLeft: '2%', color:'#F0F0F0'}}>Codniverse</h2>
            <ul style={{display: 'flex', flexDirection: 'row',width: '100%', justifyContent: 'center', alignItems: 'center', gap: '200px', fontSize: '20px', listStyle: 'none'}}>

                <li><a href="/resume">Resume</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
       </header>
        </>
    )
}

export default navigationBar; 