import { useState } from "react";
import "./App.css";
import  bandeja from "./assets/bandeja.jpg";
import  ajiaco from "./assets/ajiaco.jpg";
import  sancocho from "./assets/sancocho.jpg";
import  lechona from "./assets/lechona.jpg";

function App() {
  const platos = [
    {
      nombre: "Bandeja paisa",
      region: "Antioquia",
      descripcion: "Plato tradicional con arroz, frijoles, carne, huevo, chorizo y aguacate",
      imagen: bandeja
    },
    {
      nombre: "Ajiaco",
      region: "Bogotá",
      descripcion: "Sopa espesa con pollo, papas y mazorca",
      imagen: ajiaco
    },
    {
      nombre: "Sancocho",
      region: "Caribe",
      descripcion: "Sopa con carnes, plátano, yuca y papa",
      imagen: sancocho
    },
    {
      nombre: "Lechona",
      region: "Tolima",
      descripcion: "Cerdo relleno con arroz y especias",
      imagen: lechona
    }
  ];

  const [abierto, setAbierto] = useState(null);

  const toggle = (index) => {
    setAbierto(abierto === index ? null : index);
  };

  return (
    <div className="container">
      <h1>🇨🇴 Platos típicos de Colombia</h1>

      {platos.map((plato, index) => (
        <div key={index} className="card">
          <h2>{plato.nombre}</h2>
          <p><strong>Región:</strong> {plato.region}</p>

          <img src={plato.imagen} alt={plato.nombre} className="img" />

          <button onClick={() => toggle(index)}>
            {abierto === index ? "Ocultar descripción" : "Ver descripción"}
          </button>

          {abierto === index && (
            <p>{plato.descripcion}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;