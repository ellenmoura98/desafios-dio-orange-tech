import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import foto from "../../assets/foto.jpg";

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={foto} alt="Foto do projeto" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/104863587?s=400&u=95a94c28797d54413879f6e640491b6d8dc5c027&v=4" />
          <div>
            <h4>Ellen Moura</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito para o curso de HTML e CSS no Bootcamp Inter + em
            parceria com a Dio... <strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
