import '../App.css'; 
import { useState, useEffect } from 'react'; 


const Main = () => {

    const [timerToPrintTextOrImage, setTimerToPrintTextOrImage] = useState(false); 


    useEffect(() => {
        setTimeout(() => {
          setTimerToPrintTextOrImage(true);
        }, 4000); // Set timer to 3 seconds
      }, []);
    return (
        <>  
            <div style={{display: 'flex', 
                         flexDirection: 'row', 
                         padding: '17% 0 0 20%',
                         gap: '150px',
                         color: '#F0F0F0'}}>
                <div className='fade-in-text' >
                    <h1>Hello, I'm Hyun Seong Lee</h1>
                    <h2>Full Stack, backend developer</h2>
                </div>
                <div className="anim-typewriter" style={{color: '#5CD2E6',
                                                         width: '50%', 
                                                         fontSize: '50px'}}>
                    {!timerToPrintTextOrImage ?  
                            '<div>Earth</div>' 
                           : 
                            <img src="../img/earth.png" alt="Earth"/>}
                    
       
                {/* <img className='face-in-text' src="/img/earth.png" style={{position: 'absolute', top: '35%', zIndex: '-1'}} alt="neptune planet" width="300px" height="300px"/>  */}       
                </div>
            </div>
        </>

    )
}

export default Main;