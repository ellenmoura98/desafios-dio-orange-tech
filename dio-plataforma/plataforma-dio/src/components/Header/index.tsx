import React from "react";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
/* eslint-disable no-unused-vars */
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";
import { IHeader } from "./types";
const Header = ({ autenticado }: IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>{" "}
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/104863587?s=400&u=95a94c28797d54413879f6e640491b6d8dc5c027&v=4" />
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button
                title="Entrar"
                placeholder={""}
                leftIcon={undefined}
                name={""}
              />
              <Button
                title="Cadastrar"
                placeholder={""}
                leftIcon={undefined}
                name={""}
              />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
