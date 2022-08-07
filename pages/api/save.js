import {  GoogleSpreadsheet } from 'google-spreadsheet';

import credentials from '../../credentials.json';

//id da URL da planilha 
const doc = new GoogleSpreadsheet('1Wa4rPaJCRDJU6gbkzq99pDdBjhSvYiOj-pHBbPG8r9k')


export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        //Pegar planilha 1
        const sheet = doc.sheetsByIndex[1]
        const data = JSON.parse(req.body)
    
        //Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome:'Victor Honorato',
            Email: 'vituhonorato.89@gmail.com',
            Whatsapp: '71 987840407',
            Cupom: 'aefdtw1232',
            Promo: 'asdhgjhjka'
    
        })
    
     } catch (err) {
        console.log(err)
     }
    console.log(JSON.parse(req.body))
    res.end(req.body)
}