import {  GoogleSpreadsheet } from 'google-spreadsheet';

import credentials from '../../credentials.json';

//id da URL da planilha 
const doc = new GoogleSpreadsheet('1Wa4rPaJCRDJU6gbkzq99pDdBjhSvYiOj-pHBbPG8r9k')



export default async (req, res) => {

    try {
        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        console.log()
        
    
         // estanciando a planilha de configurções  
        const sheet = doc.sheetsByIndex[2]
        //carregar celulas
        await sheet.loadCells('A2:B2')
        console.log(sheet.value)
        
        //pegar dados da celula linha:1, coluna:0 
        const mostrarPromocaoCell = sheet.getCell(1, 0)
        
        //pegar dados da linha: 1 coluna: 1
        const textoCell = sheet.getCell(1,1)
        

        res.end(JSON.stringify({
            showCoupon:mostrarPromocaoCell.value === 'VERDADEIRO',
            message: textoCell.value
        }))
        // se der erro :
    } catch (err) {
        res.end(JSON.stringify({
            showCoupon:false,
            message: ''
        }))
        console.log(err)
    }


}