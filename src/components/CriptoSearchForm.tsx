import { currencies } from "../data"
import { useCryptoStore } from "../store"

export default function CriptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies) //extraer el state de nuestra store

  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Moneda</label>
            <select 
                name="currency" 
                id="currency"
            >
                <option value="">Seleccione</option>
                {currencies.map(currency => (
                    <option 
                        key={currency.code} 
                        value={currency.code}
                    >   
                        {currency.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="criptoCurrency">Criptomoneda</label>
            <select 
                name="criptoCurrency" 
                id="criptoCurrency"
            >
                <option value="">Seleccione</option>
                {cryptocurrencies.map(crypto => (
                    <option
                        key={crypto.CoinInfo.FullName}
                        value={crypto.CoinInfo.Name}>
                            {crypto.CoinInfo.FullName}
                    </option>
                ))}
                
            </select>
        </div>

        <input type="submit" value="Cotizar" />
    </form>
  )
}
