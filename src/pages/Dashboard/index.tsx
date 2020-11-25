import React from "react";
import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./styles";
import { FiChevronRight } from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2711935?s=460&u=4c65cb439efc87350315b5984902f720a02a51cf&v=4"
            alt="Mayko Kioschi"
          />
          <div>
            <strong>nome/repositório</strong>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2711935?s=460&u=4c65cb439efc87350315b5984902f720a02a51cf&v=4"
            alt="Mayko Kioschi"
          />
          <div>
            <strong>nome/repositório</strong>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/2711935?s=460&u=4c65cb439efc87350315b5984902f720a02a51cf&v=4"
            alt="Mayko Kioschi"
          />
          <div>
            <strong>nome/repositório</strong>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
