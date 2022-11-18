import logoimg from '../../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
    return(
        <Container>
            <Content>
                <img src={logoimg} alt="af" />
                <h1>Angela Fotografia</h1>
                <h3> <a href="https://wa.me/69996032345">Contato</a></h3>
            </Content>
        </Container>
    )
}