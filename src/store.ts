import { create } from "zustand"
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"
import { Cryptocurrency, CryptoPrice, Pair } from "./types"
import { devtools } from "zustand/middleware"

type CryptoStore = {
    cryptocurrencies: Cryptocurrency[],
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
    result: CryptoPrice
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {} as CryptoPrice,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result
        }))
    }
})))