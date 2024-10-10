function tratadorDeCliqueExercicio2() {
    let agora = new Date(); 

    let horas = agora.getHours(); 
    let minutos = agora.getMinutes(); 
    let segundos = agora.getSeconds(); 

    let periodo = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12 || 12; 

    let horarioFormatado = `Horário: ${horas} ${periodo} : ${minutos}m : ${segundos}s`;

    alert(horarioFormatado);
}
