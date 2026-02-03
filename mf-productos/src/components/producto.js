import styled from "styled-components";

const CardProducto = styled.div`
  border: 2px solid #007bff;
  padding: 16px;
  border-radius: 8px;
  width: 220px;
`;

const BotonComprar = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export default function Producto() {
  const comprarProducto = () => {
    const evento = new CustomEvent("producto-comprado", {
      detail: "Producto A",
    });

    window.dispatchEvent(evento);
  };

  return (
    <CardProducto>
      <h3>Producto A</h3>
      <BotonComprar onClick={comprarProducto}>
        Comprar
      </BotonComprar>
    </CardProducto>
  );
}

