const data = new Date();
const day = data.getUTCDate();
const year = data.getFullYear();
const month = data.getMonth() + 1;
const H = data.getHours();
const M = data.getMinutes();
const S = data.getSeconds();

let saudacao = ''
if (H <= 12 || H >= 6) {
    saudacao = 'Bom dia'
    if (H >= 19 || H >= 13) {
        saudacao = 'Boa tarde'
        if (H >= 19 || H <= 5) {
            saudacao = 'Boa noite'
        }
    }
};

const setMonth = () => {
    if (month === 1)
        return "Janeiro"
    else if (month === 2)
        return "Fevereiro"
    else if (month === 3)
        return "Março"
    else if (month === 4)
        return "Abril"
    else if (month === 5)
        return "Maio"
    else if (month === 6)
        return "Junho"
    else if (month === 7)
        return "Julho"
    else if (month === 8)
        return "Agosto"
    else if (month === 9)
        return "Setembro"
    else if (month === 10)
        return "Outubro"
    else if (month === 11)
        return "Novembro"
    else if (month === 12)
        return "Dezembro"
}

export class Globais {
    static calendar = saudacao + ' - ' + day + ' de ' + setMonth() + ' de ' + year + ' ás ' + H + ':' + M + ':' + S
    static checksUserLogged = undefined;
    static privilAdmin = '2'
    static rights_reserved = '2007 | ' + year + ', All rights reserved Centro Informática';
    static address = 'Avenida Castro Alves 1241, Barbosa Ferraz, PR. CEP 86960-000';
    static phone = '+55 (44) 98462-3082'
    static title = 'Centro Informática';
    static company = "Centro Informática"

    static URL = 'https://centroinfo.com.br'
    static API_URL = 'https://api-centroinfo-05e63255c453.herokuapp.com'
    static URL_NOTE = 'https://api-centroinfo-05e63255c453.herokuapp.com/note/'

    // static URL = 'http://localhost:3001' /** endereço app-manager-sale */
    // static API_URL = "http://localhost:3000" /** api localhost */ 
    // static URL_NOTE = 'http://localhost:3000/note/' /** acrescentar na frente do / a variavel da nota */

    static URL_CENTROINFO = 'https://www.centroinfo.com.br'
}
