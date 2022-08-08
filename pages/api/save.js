import {  GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';

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

        
         // estanciando a planilha de configurções  
         const sheetConfig = doc.sheetsByIndex[2]
         //carregar celulas
         await sheetConfig.loadCells('A2:B2')
        //pegar dados da celula linha:2, coluna:1 
         const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
         //pegar dados da linha: 2 coluna: 2
         const textoCell = sheetConfig.getCell(1,1)

         let Cupom = ''
         let Promo = ''

        if(mostrarPromocaoCell.value === 'VERDADEIRO'){
             Cupom = 'temporário'
             Promo =textoCell.value
        }   
        
        
        //Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome:data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            'Data Preenchimento':moment().format('DD/MM/YYYY, HH:mm:ss'),
            Cupom,
            Promo
           
    
        })
        res.end(req.body)
    
     } catch (err) {
        console.log(err)
        res.end('error')
     }
    
    
}