"use client";

export default function ResumenReserva({ reserva }) {
  if (!reserva) {
    return (
      <div className="resumen">
        <h3>Seleccione una cancha</h3>
        <p>Elige una cancha para comenzar a reservar.</p>
      </div>
    );
  }

  return (
    <div className="resumen">
      <h3>Resumen de tu Reserva</h3>
      <p><strong>Deporte:</strong> {reserva.deporte}</p>
      <p><strong>Cancha:</strong> {reserva.cancha}</p>
      <p><strong>Duración:</strong> {reserva.duracion} horas</p>
      <p><strong>Total:</strong> ${reserva.total}</p>
    </div>
  );
}

  