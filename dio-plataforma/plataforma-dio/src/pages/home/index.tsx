/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
/* eslint-disable no-unused-vars */
import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, Title, TitleHighLight, TextContent } from "./styles";

const Home = () => {
  const navigateNew = useNavigate();
  const handleClickSignIn = () => {
    navigateNew("/login");
  };
  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSignIn}
          />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem Principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
