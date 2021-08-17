export enum Status {
  ERROR,
  IDLE,
  UPDATING,
  LOADING,
}

export interface CountryItem {
  id: number;
  code: string;
  name: string;
}

export interface ExchangeItem {
  id: string;
  selectedFromCurrency: string;
  selectedFromAmount: number;
  selectedToCurrency: string;
  selectedToAmount: number;
  showAdd: boolean;
}

export interface GlobalState {
  date: string;
  countries: CountryItem[];
  rates: Record<string, number>;
  exchange: ExchangeItem[];
  status: Status;
}

export interface StateWrapper {
  currencyExchange: GlobalState;
}
