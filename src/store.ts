import { create } from "zustand"
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"
import { Cryptocurrency, CryptoPrice, Pair } from "./types"
import { devtools } from "zustand/middleware"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[],
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
    result: CryptoPrice
    loading: boolean
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: ''
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))