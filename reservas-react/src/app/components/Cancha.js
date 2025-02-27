"use client";

export default function Cancha({ cancha, reservarCancha }) {
    const { id, nombre, disponible } = cancha;
    const botonClase = disponible ? "btn-primary" : "btn-warning";
  
    const manejarReserva = () => {
      if (disponible) {
        reservarCancha(id);
      }
    };
  
    return (
      <button
        className={`btn ${botonClase} w-100`}
        onClick={manejarReserva}
        disabled={!disponible}
      >
        {nombre}
      </button>
    );
  }
  