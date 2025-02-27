"use client";

import './globals.css'; 

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Reserva de Canchas</title>
      </head>
      <body>
        {children} {}
      </body>
    </html>
  );
}

