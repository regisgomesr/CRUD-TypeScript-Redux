import React, { useCallback, useRef } from "react";
import { Table, Button, Segment, Icon } from "semantic-ui-react";

import { Link, useHistory } from "react-router-dom";

interface UserFormData {
  name: string;
  email: string;
  password: string;
  date: string;
  type: string;
}

const User: React.FC = () => {
  const renderUser = () => {
    console.log();
    return (
      <Table.Row>
        <Table.Cell>nome</Table.Cell>
        <Table.Cell>email</Table.Cell>
        <Table.Cell>tipo</Table.Cell>
        <Table.Cell>
          <Button inverted color="blue" as={Link} to={`/users/edit`}>
            Editar
          </Button>
          <Button inverted color="red" onClick={() => {}}>
            Remover
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  };

  return (
    <div>
      <h1>Usuários</h1>

      <Button animated color="green" size="big" as={Link} to="/create-user">
        <Button.Content visible>Criar usuario</Button.Content>
        <Button.Content hidden>
          <Icon name="angle double right" />
        </Button.Content>
      </Button>

      {/* 
      {this.props.users.isLoading && <p>Carregando...</p>}

      {!this.props.users.isLoading && this.props.users.data.length === 0 && (
        <Segment color="blue">Nenhum Usuário Cadastrado!</Segment>
      )} */}

      {/* {!this.props.users.isLoading && this.props.users.data.length > 0 && ( */}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Tipo</Table.HeaderCell>
            <Table.HeaderCell>Ações</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body></Table.Body>
      </Table>
      {/* )} */}
    </div>
  );
};

export default User;
