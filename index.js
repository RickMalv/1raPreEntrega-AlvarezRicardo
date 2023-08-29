function PiedraPapelTijera() {
    do {
      let cantidad = prompt("¿Cuántas veces quieres jugar? (1-10)");
  
      cantidad = parseInt(cantidad);
      if (isNaN(cantidad) || cantidad < 1 || cantidad > 10) {
        alert("Por favor, ingresa un número válido entre 1 y 10.");
        continue;
      }
  
      for (let i = 0; i < cantidad; i++) {
        let jugador = prompt("Elige: piedra, papel o tijera").toLowerCase();
        let opciones = ["piedra", "papel", "tijera"];
        let maquina = opciones[Math.floor(Math.random() * 3)];
  
        if (opciones.indexOf(jugador) === -1) {
          alert("Ingresa una opción válida: piedra, papel o tijera.");
          i--;
          continue;
        }
  
        alert("Elegiste: " + jugador + "\nLa máquina eligió: " + maquina);
  
        if (jugador === maquina) {
          alert("Empate!");
        } else if (
          (jugador === "piedra" && maquina === "tijera") ||
          (jugador === "papel" && maquina === "piedra") ||
          (jugador === "tijera" && maquina === "papel")
        ) {
          alert("¡Ganaste!");
        } else {
          alert("¡Perdiste!");
        }
      }
  
      let volverAJugar = prompt("¿Quieres volver a jugar? (si/no)").toLowerCase();
      if (volverAJugar !== "si") {
        break;
      }
  
    } while (true);
  }
  
  PiedraPapelTijera();
  