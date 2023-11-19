import fotoP from '../../assets/externos/externo (10).jpg'
import logoimg from '../../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
    return(
        <Container>
            <img src={fotoP} alt="" className='foto-principal' />
            <Content>
                <img src={logoimg} alt="af"  className='af'/>
                <h1>Angela Fotografia</h1>
                <h3> <a href="https://wa.me/69996032345" target='_blanck'>Contato</a></h3>
            </Content>
        </Container>
    )
}