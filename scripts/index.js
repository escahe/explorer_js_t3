const a = ()=>{
    const boton = document.getElementById("calcular");
    const input_nombre = document.getElementById("nombre");
    const input_horas = document.getElementById("horas");
    const input_valor = document.getElementById("valorHora");
    const output_total = document.getElementById("total");

    boton.addEventListener("click",(e)=>{
        const nombre = input_nombre.value;
        const horas = parseFloat(input_horas.value);
        const valorHora = parseFloat(input_valor.value);
        if(nombre == "" || isNaN(horas) || isNaN(valorHora)){
            alert("Faltan datos o ha introducido datos inválidos")
        }else{
            output_total.value = `${nombre} debe recibir $${horas*valorHora}`
        }

    });

}
a();
