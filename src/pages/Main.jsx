import '../App.css'; 
import { useState, useEffect } from 'react'; 
import EarthImage from '../img/earth.png';
import SitDownPersonImage from '../img/sit-down-person.png'; 

const Main = () => {

    const [timerToPrintTextOrImage, setTimerToPrintTextOrImage] = useState(false); 


    useEffect(() => {
        setTimeout(() => {
          setTimerToPrintTextOrImage(true);
        }, 3000); // Set timer to 3 seconds
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
                                                         fontSize: '50px'}}>
                    {!timerToPrintTextOrImage ?  
                            '<img src="earth.png"/>' 
                           :
                          
                            <img className='fade-in-text' src={EarthImage} style={{width: '400px', height: '400px'}}alt="Earth"/>

                            }
                    
                </div>
            </div>
        </>

    )
}

export default Main;