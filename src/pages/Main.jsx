const Main = () => {
    return (

        <>  <video src={"/video/space.mp4"} autoPlay loop muted
             style={{position: 'absolute', 
                     objectFit: 'cover',
                     width: '100vw',
                     height: '100vh',
                     zIndex: '-1'}}>

            </video>
            <header>
                    <div style={{display: 'flex', flexDirection: 'row', color: '#0092CC'}}>
                        <h2 style={{marginLeft: '2%'}}>Codniverse</h2>
                    </div>
            </header>
        </>

    )
}

export default Main;