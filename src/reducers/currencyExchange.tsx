import { BASE_CUR, BASE_TO_CUR, CurrencyTypes } from "../Constants";
import { GlobalState, StateWrapper, Status, ExchangeItem } from "../types";

export const currencyExchangeInitialState: GlobalState = {
  date: "",
  countries: [],
  exchange: [],
  rates: {},
  status: Status.LOADING,
};

export const currencyExchangeReducer = (
  state: StateWrapper,
  action: Action
) => {
  switch (action.type) {
    case CurrencyTypes.FETCH_INITAL_DATA: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        ...action.payload,
      };
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.ADD_EXCHANGE: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        ...action.payload,
      };
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.DELETE_EXCHANGE: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        exchange: action.payload.exchange,
      };
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.UPDATE_EXCHANGE: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
      };
      const { exchangeObj } = action.payload;
      const updatedExchange = newState.exchange.map((item) => {
        if (item.id === exchangeObj.id) {
          item = { ...exchangeObj };
        }
        return item;
      });
      newState.exchange = [...updatedExchange];
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.FETCH_LOADING: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        ...action.payload,
      };
      newState.status = Status.LOADING;
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.ERROR: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        ...action.payload,
      };
      newState.status = Status.ERROR;
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.UPDATE_DATE: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        ...action.payload,
      };
      newState.status = Status.UPDATING;
      return { ...state, currencyExchange: newState };
    }
    case CurrencyTypes.UPDATE_EXCHANGE_DATE: {
      const newState: GlobalState = {
        ...{},
        ...currencyExchangeInitialState,
        ...state.currencyExchange,
        ...action.payload,
      };
      newState.status = Status.IDLE;
      newState.rates = action.payload.rates;
      newState.date = action.payload.date;
      let obj: ExchangeItem = {
        id: `${BASE_CUR}-${BASE_TO_CUR}-0`,
        selectedFromCurrency: BASE_CUR,
        selectedFromAmount: 1,
        selectedToCurrency: BASE_TO_CUR,
        selectedToAmount: newState.rates[BASE_TO_CUR],
        showAdd: true,
      };
      newState.exchange = [obj];
      return { ...state, currencyExchange: newState };
    }
    default:
      return state;
  }
};
