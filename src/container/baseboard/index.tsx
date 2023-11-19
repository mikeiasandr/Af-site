import angelafoto from '../../assets/angela.jpeg';
import whatsappLogo from '../../assets/whatsappLogo.svg';
import { Container, Content } from "../baseboard/styles";



export function Baseboard(){
    return(
        <Container>
            <Content>
                <div className='a'>
                    <div className="card"></div>
                    <img className='top' src={angelafoto} alt="" />
                    <div className='bloco'>
                        <h2 >Angela Aparecida</h2> 
                        <h4 className='descricao'>Registrando histórias, revelando olhares
                        a mais de 5 anos! A fotografia é muito mais que um clique ou um simples disparar de flashs,
                        minha paixão é mostrar que cada história merece ser contada não somente atravez
                        de falas mas sim de arte!</h4>
                    </div>
                    <div className='contato' >
                        <img className='whatsLogo' src={whatsappLogo} alt="" />
                        <p className='botao'> <a href="https://wa.me/69996032345" target='_blanck'> entre em contato</a> </p>
                    </div>
                    <p className='endereco' > <a href="https://maps.app.goo.gl/uvrC2VUg4p3p8txM6" target='_blanck'>Av. Treze de Maio - Setor 13, Nova Brasilândia D'Oeste - RO, 76958-000</a> </p>
                </div>
            </Content>
            <h4 className='createBy'> Desenvolvido por ©Mikeias Andrade</h4>
        </Container>
    );
}