function counterVogal(string){

    if(typeof(string) === "number"){
        return 0;
    }
    let cont=0;
    let vogais= ["A","E","I","O","U"]

    for(let i=0; i < string.length; i++){
        vogais.forEach(x=> {
            
            if(string[i].toUpperCase() == x){
                cont++
            }
        })
    };

    return cont;
}

module.exports = counterVogal;
