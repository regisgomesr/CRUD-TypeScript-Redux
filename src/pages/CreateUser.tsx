import React, { useState, useEffect } from "react";

import { Button, Select, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../actions/userActions";

interface UserFormData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  date: string;
  type: string;
}

const CreateUser: React.FC = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  const userSave = useSelector(
    (state: { user: UserFormData }) => state.userSave
  );
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = userSave;

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUser({ _id: id, name, email, password, date, type }));
  };

  const typeOptions = [
    { key: "adm", value: "adm", text: "Administrador" },
    { key: "clb", value: "clb", text: "Colaborador" },
    { key: "grt", value: "grt", text: "Gerente" },
  ];

  return (
    <div>
      <h1>Criar Usuario</h1>

      <div>
        {userInfo && <Redirect to="/" />}
        {loading && <div>Carregando...</div>}
        {error && <div>{error}</div>}
      </div>

      <Form onSubmit={handlerSubmit}>
        <Form.Field>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="rePassword">Confirmar Senha:</label>
          <input
            id="repassword"
            name="repassword"
            type="password"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="date">Data de Nascimento:</label>
          <input
            id="date"
            name="date"
            type="text"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="type">Tipo</label>
          <Select
            placeholder="Selecione tipo de usuario"
            options={typeOptions}
          />
        </Form.Field>
        <div>
          <Button type="submit" inverted color="blue" size="big">
            Salvar Usuario
          </Button>
        </div>
      </Form>
      {/* )} */}
    </div>
  );
};

export default CreateUser;
