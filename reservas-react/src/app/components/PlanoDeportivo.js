"use client";

export default function PlanoDeportivo({ canchas, deporteSeleccionado, reservarCancha }) {
  const canchasFiltradas = canchas.filter(cancha => cancha.deporte === deporteSeleccionado);

  return (
    <div className="container">
      <h1>reserve su dancha deportiva</h1>
      <div className="row">
        {canchasFiltradas.map((cancha) => (
          <div className="col" key={cancha.id}>
            <div
              className={`cancha ${cancha.disponible ? "" : "ocupada"}`}
              onClick={() => cancha.disponible && reservarCancha(cancha.id)}
            >
              {cancha.nombre}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

