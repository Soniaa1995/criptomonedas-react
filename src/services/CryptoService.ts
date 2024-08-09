import axios from "axios"
import { CryptoCurrenciesResponseSchema } from "../schema/crypto-schema"


export async function getCryptos(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: {Data}} = await axios(url)
    const result = CryptoCurrenciesResponseSchema.safeParse(Data)  //revisar la respuesta
    if(result.success){
        return result.data
    }
}