import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Link } from 'react-router-dom';

import { Table, Button, Icon, Segment } from 'semantic-ui-react';

import { User } from '../store/ducks/users/types';
import { ApplicationState } from '../store';
import * as UsersActions from '../store/ducks/users/actions';

interface StateProps {
  users: User[];
  loading: boolean;
}

interface DispatchProps {
  loadRequest(): void;
}

interface UserProps {
  id: number;
  name: string;
  email: string;
  type: string;
}

type Props = StateProps & DispatchProps & UserProps;

class UserList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  renderUser = ({ id, name, email, type }: UserProps) => {
    return (
      <Table.Row key={id}>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>{email}</Table.Cell>
        <Table.Cell>{type}</Table.Cell>
        <Table.Cell>
          <Button inverted color="blue" as={Link} to={`/users/edit`}>
            Editar
          </Button>
          <Button inverted color="red">
            Remover
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  };

  render() {
    const { users, loading } = this.props;

    return (
      <div>
        <h1>Usuários</h1>

        <Button animated color="green" size="big" as={Link} to="/create-user">
          <Button.Content visible>Criar usuario</Button.Content>
          <Button.Content hidden>
            <Icon name="angle double right" />
          </Button.Content>
        </Button>

        {loading && <p>Carregando...</p>}

        {!loading && users.length === 0 && (
          <Segment color="blue">Nenhum Usuário Cadastrado!</Segment>
        )}

        {!loading && users.length > 0 && (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nome</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Tipo</Table.HeaderCell>
                <Table.HeaderCell>Ações</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{users.map(this.renderUser)}</Table.Body>
          </Table>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  users: state.users.data,
  loading: state.users.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
