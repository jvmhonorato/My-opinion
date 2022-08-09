import {  GoogleSpreadsheet } from 'google-spreadsheet';
import moment from 'moment';


//id da URL da planilha 
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
    const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
    return code.substring(0, 4) + '-' + code.substring(4, 8) +'-' + code.substring(8,12)
}


export default async(req, res) => {
    try {
        await doc.useServiceAccountAuth({
            client_email:process.env.SHEET_CLIENT_EMAIL,
            private_key:process.env.SHEET_CLIENT_KEY 
        })
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
             Cupom = genCupom()
             Promo =textoCell.value
        }   
        
        
        //Nome	Email	Whatsapp	Cupom	Promo
        await sheet.addRow({
            Nome:data.Nome,
            Email: data.Email,
            Whatsapp: data.Whatsapp,
            Nota: parseInt(data.Nota),
            'Data Preenchimento':moment().format('DD/MM/YYYY, HH:mm:ss SSS'),
            Cupom,
            Promo
           
    
        })
        res.end(JSON.stringify({
            showCoupon: Cupom !== '',
            Cupom,
            Promo
        }))
    
     } catch (err) {
        console.log(err)
        res.end('error')
     }
    
    
}