// Transforma a data do formato ISO 8601 para o formato 'DD/MM/YYYY às HH:MM'
function formatarData(dataISO: string): string {
  const data = new Date(dataISO);
  const dia = data.getUTCDate().toString().padStart(2, "0");
  const mes = (data.getUTCMonth() + 1).toString().padStart(2, "0"); // Janeiro é 0
  const ano = data.getUTCFullYear();
  const horas = data.getUTCHours().toString().padStart(2, "0");
  const minutos = data.getUTCMinutes().toString().padStart(2, "0");

  return `${dia}/${mes}/${ano} de ${horas}:${minutos}h`;
}

// Coloca o primeiro caractere de uma string em maiúsculo e o restante em minúsculo
function capitalizeFirstLetter(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

export { formatarData, capitalizeFirstLetter };
