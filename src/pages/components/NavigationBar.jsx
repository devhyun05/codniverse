import '../../App.css';
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
            <h2 style={{marginLeft: '2%'}}>
                <a href="/" style={{textDecoration: 'none', color:'#F0F0F0'}}>Codniverse</a>
            </h2>
            <ul style={{display: 'flex', flexDirection: 'row',width: '100%', justifyContent: 'center', alignItems: 'center', gap: '200px', fontSize: '20px', listStyle: 'none'}}>
                <li><a className="nav-link" href="/resume">Blog</a></li>
                <li><a className="nav-link" href="/projects">Projects</a></li>
                <li><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
        </nav>
       </header>
        </>
    )
}

export default navigationBar; 