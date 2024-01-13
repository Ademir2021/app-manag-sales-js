const data  = new Date();
const day   = data.getUTCDate();
const year  = data.getFullYear();
const month = data.getMonth() + 1;
const H     = data.getHours();
const M     = data.getMinutes();
const S     = data.getSeconds();

let saudacao = ''
if (H <= 12 || H >=6 ){
    saudacao = 'Bom dia'
    if (H >= 19 || H >=13){
        saudacao = 'Boa tarde'
        if (H >=19 || H <=5 ){
            saudacao = 'Boa noite'
        }
    }
};

export  class Globais {
    static calendar = saudacao +'! ' + 'Hoje é, '+day+'/'+month+'/'+year+' ás '+ H+':'+M+':'+S
    static checksUserLogged = undefined;
    static privilAdmin = '2' 
    static rights_reserved = '2007 | '+ year +', All rights reserved CENTROINFO';
    static address = 'Avenida Castro Alves 1241, Barbosa Ferraz, PR. CEP 86960-000';
    static phone = '+55 (44) 98852-1033'
    static title = 'centroinfo store-online';

    static URL = 'https://app-centroinfo-aae9bffa47dc.herokuapp.com'
    static API_URL = 'https://api-centroinfo-05e63255c453.herokuapp.com'
    static URL_NOTE = 'https://api-centroinfo-05e63255c453.herokuapp.com/note/'
    
    // static URL = 'http://localhost:3001'; //endereço app-manager-sale
    // static API_URL = "http://localhost:3000";
    // static URL_NOTE = 'http://localhost:3000/note/' /**acrescentar na frente do / a variavel da nota */
    
    static URL_CENTROINFO = 'https://www.centroinfo.com.br'
}
