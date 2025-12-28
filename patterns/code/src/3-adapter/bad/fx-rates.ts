// // internal algorithm to fetch FX rates
// class FXRates {
//     fetchFxRates(source:string, target:string, amount:number):number {
//        // Simulate fetching FX rates from an external service
//        return amount * 1.2; // Dummy conversion rate
//     }
// }



// // 3rd party library from JPMorgan
// class JPMFxRates {
//     fetchJPMFxRates(amount:number, source:string, target:string):number {
//        // Simulate fetching FX rates from JPMorgan's service
//        return amount * 1.8; // Dummy conversion rate
//     }
// }

// // 3rd party library from Barcalys
// class BarcalysFxRates {
//     fetchBarcalysFxRates(amount:number, source:string, target:string):number {
//        // Simulate fetching FX rates from Barcalys' service
//        return amount * 1.8; // Dummy conversion rate
//     }
// }



// const fx_rates_obj = new FXRates();
// fx_rates_obj.fetchFxRates("USD", "EUR", 100); // initial call

// const jpm_fx_rates_obj = new JPMFxRates();
// jpm_fx_rates_obj.fetchJPMFxRates(100, "USD", "EUR");
