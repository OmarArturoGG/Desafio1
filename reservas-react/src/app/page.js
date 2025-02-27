"use client";

import { useState } from 'react';
import SelectorDeporte from './components/SelectorDeporte';
import PlanoDeportivo from './components/PlanoDeportivo';
import ResumenReserva from './components/ResumenReserva';

export default function Home() {
  const [deporteSeleccionado, setDeporteSeleccionado] = useState(null);


  
  const [reserva, setReserva] = useState(null);

  const canchas = [
    { id: 1, nombre: 'Cancha 1', deporte: 'Fútbol', disponible: true },
    { id: 2, nombre: 'Cancha 2', deporte: 'Fútbol', disponible: false },
    { id: 3, nombre: 'Cancha 3', deporte: 'Baloncesto', disponible: true },
    { id: 4, nombre: 'Cancha 4', deporte: 'Baloncesto', disponible: true },
    { id: 5, nombre: 'Cancha 5', deporte: 'Tenis', disponible: false },
    { id: 6, nombre: 'Cancha 6', deporte: 'Tenis', disponible: true },
  ];







  const reservarCancha = (canchaId) => {
    const canchaReservada = canchas.find(cancha => cancha.id === canchaId);
    if (canchaReservada) {
      setReserva({
        deporte: deporteSeleccionado,
        cancha: canchaReservada.nombre,
        duracion: '2:30', 
        total: 100, 
      });
    }
  };

  return (
    <div className="container">


      <SelectorDeporte setDeporteSeleccionado={setDeporteSeleccionado} />
      {deporteSeleccionado && (
        <PlanoDeportivo 
          canchas={canchas} 
          deporteSeleccionado={deporteSeleccionado} 
          reservarCancha={reservarCancha} 
        />
      )}
      <ResumenReserva reserva={reserva} />
    </div>
  );


}



