export const API_KEY =
  "35acdc2d800fbd8faecdcef4ca2b87ce4a68266695498275a951a08768d921d8";
export const COUNTRIES_URL = `https://swop.cx/rest/currencies`;
export const RATES_URL = `https://swop.cx/rest/rates?`;

export const MAIN_HEADING = "Currency Converter";
export const INFO = " Exchange values are rounded to 2 decimals.";
export const ERROR_MESSAGE =
  "Some Error has occured. Please try after sometime.";
export const BASE_CUR = "EUR";
export const BASE_TO_CUR = "USD";

export const ARIA = {
  date: "Date for Conversion",
  fromCurrency: "Convert From Currency Field",
  toCurrency: "Convert To Currency Field",
  sourceAmount: "Source Amount Field",
  targetAmount: "Target Amount Field",
  exchange: "Exchange Button",
};

export const CONVERTER = {
  fromKey: "Convert From",
  fromLabel: "From",
  toKey: "Convert To",
  toLabel: "To",
  add: "Add",
  delete: "Delete",
};

export const STATUS = {
  ERROR: "error",
  IDLE: "idle",
  UPDATING: "updating",
  LOADING: "loading",
};

export const CurrencyTypes = {
  FETCH_COUNTRIES: "countries/fetch",
  FETCH_INITAL_DATA: "initial/fetch",
  FETCH_LOADING: "loading",
  ERROR: "error",
  UPDATE_DATE: "update/date",
  UPDATE_EXCHANGE_DATE: "update/date/exchange",
  UPDATE_EXCHANGE: "exchange/update",
  ADD_EXCHANGE: "exchange/add",
  DELETE_EXCHANGE: "exchange/delete",
};

export const ConvertTypes = {
  INITIAL_DATA: "convert/initial",
  UPDATE_FROM_COUNTRIES: "update/country/from",
  UPDATE_TO_COUNTRIES: "update/country/to",
  SWITCH: "convert/switch",
  TOGGLE_ADD: "convert/toggle",
};
