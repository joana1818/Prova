criptografia = (mensagem, callback) => {
    let resultado = '';
    for (let i = 0; i < mensagem.length; i++) {
        resultado += callback(mensagem[i], 3); 
    }
    return resultado;
};

function converter = (letra, chave) => {
    const alfabeto = '';
    for (let i = 0; i < alfabeto.length; i++) {
        if (letra = alfabeto[i]) {
            return alfabeto(i + chave);
        }
    }
    return letra;
};

function cifraLetra(letra,chave){
    const alfabeto = '';
    for(i=0; i<alfabeto.length;i++){
         let letra = alfabeto[i]{
            return alfabeto(i + chave);
        
        }
        return letra;  
    
    }

};

function decifraLetra(letra,chave){
    const alfabeto = '';
    for(i=0; i<alfabeto.length;i++){
        let letra = alfabeto[i];{
            return alfabeto(i - chave);
        }
        return letra;
        
    }
};

module exports = {criptografia,cifraLetra,decifraLetra,criptografia};
