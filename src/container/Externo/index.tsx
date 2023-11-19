import { useRef } from 'react';
import back from '../../assets/next.png';
import { Container, Galeria } from "./styles";
import externo1 from '../../assets/externos/externo (1).jpg';
import externo2 from '../../assets/externos/externo (2).jpg';
import externo3 from '../../assets/externos/externo (3).jpg';
import externo4 from '../../assets/externos/externo (4).jpg';
import externo5 from '../../assets/externos/externo (5).jpg';
import externo6 from '../../assets/externos/externo (6).jpg';
import externo7 from '../../assets/externos/externo (7).jpg';
import externo8 from '../../assets/externos/externo (8).jpg';
import externo9 from '../../assets/externos/externo (9).jpg';
import externo10 from '../../assets/externos/externo (10).jpg';


export function Externo() {
    const containerGaleria = useRef(null);
    
    const objback = document.getElementById("ft0" );
    
    //const carrossel = document.getElementById("#ft10");

    function handleNext() {
        var cont =+ 1;
        if (cont === 1){
            const objnext = document.getElementById("ft8" );
            objnext!.scrollIntoView({block: "nearest", behavior: "smooth"});
        }
        

        //carrossel.scrollIntoView();
        //console.log(containerGaleria.current)
        //containerGaleria.current.scrollLeft += 
    }

    function handleBack() {
        var cont =- 1;
        if (cont === -1){
            const objnext = document.getElementById("ft1" );
            objnext!.scrollIntoView({block: "nearest", behavior: "smooth"});
        }
        
        
        /*console.log(containerGaleria.current)
        Element.scroll({
            top:5000,
            //left: 500
            
        });*/
    }

    return(
        <Container>
            <h1>Externos</h1>
            <Galeria>
                    <img onClick={handleBack} className='back' src={back} alt="" />
                    <img onClick={handleNext} className='next' src={back} alt="" />

                <div className='container-galeria' ref={containerGaleria}>
                    <div className="item-galeria ">
                        <img src={externo1} alt="" className='img-galeria' id='ft1' />
                    </div>
                    <div className="item-galeria w-2 h-2">
                        <img src={externo2} alt="" className='img-galeria' id='ft2'/>
                    </div>
                    <div className="item-galeria h-1">
                        <img src={externo10} alt="" className='img-galeria' id='ft3'/>
                    </div>
                    <div className="item-galeria h-2">
                        <img src={externo4} alt="" className='img-galeria ft4' id='ft4'/>
                    </div>
                    <div className="item-galeria h-2=1">
                        <img src={externo5} alt="" className='img-galeria' id='ft5'/>
                    </div>
                    <div className="item-galeria h-3">
                        <img src={externo6} alt="" className='img-galeria' id='ft6'/>
                    </div>
                    <div className="item-galeria h-3">
                        <img src={externo9} alt="" className='img-galeria' id='ft7'/>
                    </div>
                    <div className="item-galeria">
                        <img src={externo8} alt="" className='img-galeria' id='ft8'/>
                    </div>
                    <div className="item-galeria h-1">
                        <img src={externo7} alt="" className='img-galeria' id='ft9'/>
                    </div>
                    <div className="item-galeria h-1" id='ft11'>
                        <img src={externo3} alt="" className='img-galeria' id='ft10'/>
                    </div>
                </div>
            </Galeria>

        </Container>
    );
}