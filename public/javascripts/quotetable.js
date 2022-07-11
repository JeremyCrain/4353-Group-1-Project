import FuelQuoteHistory from "./classes/fuel_quote_history_class";


document.onload(() =>
{
    // GET user quote history from DB
    
    document.writeln(
        history.forEach(quote => {
            let quote = new FuelQuoteHistry();
            let quoteInfo = quote.retrieveQuote(quote);

            <tr>
                <td>quoteInfo["amount"]</td>
                <td>quoteInfo["address"]</td>
                <td>quoteInfo["date"]</td>
                <td>quoteInfo["rate"]</td>
                <td>quoteInfo["amount"] * quoteInfo["rate"] </td>
            </tr>
        })
    );
});