// Adaptee - 3rd party library from SBI
class SBIFxRates {
    fetchSBIFxRates(target:string, amount:number, source:string):string {
       // Simulate fetching FX rates from SBI's service
       return (amount * 1.8).toString(); // Dummy conversion rate
    }
}


// Adaptee - 3rd party library from JPMorgan
class JPMFxRates {
    fetchJPMFxRates(amount:number, source:string, target:string):string {
       // Simulate fetching FX rates from JPMorgan's service
       return (amount * 1.8).toString(); // Dummy conversion rate
    }
}


interface IFxAdapter {
    fetchFXRates(source:string, target:string, amount:number):number;
}

// Adapters for JPM
class JPMFxAdapter implements IFxAdapter {

    private jpmFxRates: JPMFxRates = new JPMFxRates();

    fetchFXRates(source: string, target: string, amount: number): number {
        return Number(this.jpmFxRates.fetchJPMFxRates(amount, source, target))
    }
}


// Adapters for SBI
class SBIFxAdapter implements IFxAdapter {
    private sbiFxRates: SBIFxRates = new SBIFxRates();

    fetchFXRates(source: string, target: string, amount: number): number {
        return Number(this.sbiFxRates.fetchSBIFxRates(target, amount, source));
    }
}


// Client
class FxService {
    private fxAdapter: IFxAdapter;

    setFxAdapterStrategy(fxAdapter: IFxAdapter) {
        this.fxAdapter = fxAdapter;
    }

    fetchFXRates(source: string, target: string, amount: number): number {
        return this.fxAdapter.fetchFXRates(source, target, amount);
    }

}


const fx_service = new FxService();
fx_service.setFxAdapterStrategy(new JPMFxAdapter());
fx_service.fetchFXRates('USD', 'INR', 100); // for fetching from JPMorgan

fx_service.setFxAdapterStrategy(new SBIFxAdapter());
fx_service.fetchFXRates('USD', 'INR', 300); // for fetching from SBI

