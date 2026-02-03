import { useState } from "react";
import styled from "styled-components";

const PerfilUsuario = styled.div`
  border: 2px solid green;
  padding: 16px;
  border-radius: 8px;
  width: 220px;
`;

const Boton = styled.button`
  background-color: green;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`;

const Input = styled.input`
  padding: 6px;
  width: 100%;
  margin-bottom: 10px;
`;

export default function Usuario() {
  const [nombre, setNombre] = useState("Eddie");
  const [editando, setEditando] = useState(false);

  const guardarCambios = () => {
    setEditando(false);
  };

  return (
    <PerfilUsuario>
      <h3>Usuario</h3>

      {editando ? (
        <>
          <Input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <Boton onClick={guardarCambios}>Guardar</Boton>
        </>
      ) : (
        <>
          <p><strong>{nombre}</strong></p>
          <Boton onClick={() => setEditando(true)}>Editar</Boton>
        </>
      )}
    </PerfilUsuario>
  );
}


