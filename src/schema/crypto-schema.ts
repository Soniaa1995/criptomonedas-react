import {z} from 'zod'


export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrencyResponseSchema = z.object({
    CoinInfo : z.object({ //se ponen los nombres tal cual aparecen en el log
        FullName: z.string(),
        Name: z.string()
    })
})

export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)  //coge es eesquema y lo convierte ne un arreglo

export const PairSchema = z.object({
    currency: z.string(),
    criptocurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    CHANGEPCT24HOUR: z.string(),
    LASTUPDATE: z.string(),
})