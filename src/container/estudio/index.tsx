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


import { Container, Galeria } from "./styles";

export function Estudio() {
    return(
        <Container>
            <h1>Estudio</h1>
            <Galeria>
            <div className='container-galeria'>
                    <div className="item-galeria ">
                        <img src={externo1} alt="" className='img-galeria' />
                    </div>
                    <div className="item-galeria w-2 h-2">
                        <img src={externo2} alt="" className='img-galeria'/>
                    </div>
                    <div className="item-galeria h-1">
                        <img src={externo10} alt="" className='img-galeria'/>
                    </div>
                    <div className="item-galeria h-2">
                        <img src={externo4} alt="" className='img-galeria ft4'/>
                    </div>
                    <div className="item-galeria h-2=1">
                        <img src={externo5} alt="" className='img-galeria'/>
                    </div>
                    <div className="item-galeria h-3">
                        <img src={externo6} alt="" className='img-galeria' />
                    </div>
                    <div className="item-galeria h-3">
                        <img src={externo9} alt="" className='img-galeria'/>
                    </div>
                    <div className="item-galeria">
                        <img src={externo8} alt="" className='img-galeria'/>
                    </div>
                    <div className="item-galeria h-1">
                        <img src={externo7} alt="" className='img-galeria'/>
                    </div>
                    <div className="item-galeria h-1">
                        <img src={externo3} alt="" className='img-galeria'/>
                    </div>
                </div>
            </Galeria>
        </Container>
    );
}