  "use client";

export default function SelectorDeporte({ setDeporteSeleccionado }) {
  return (
    <div className="selector-deporte">
      <h3>Selecciona un Deporte</h3>
      <button className="btn" onClick={() => setDeporteSeleccionado('Fútbol')}>Fútbol</button>
      <button className="btn" onClick={() => setDeporteSeleccionado('Baloncesto')}>Baloncesto</button>
      <button className="btn" onClick={() => setDeporteSeleccionado('Tenis')}>Tenis</button>
    </div>
  );
}
