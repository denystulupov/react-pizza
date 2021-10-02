const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

const getTotalPrice = (items) =>
  Object.keys(items).reduce((sum, key) => sum + items[key].totalPrice, 0);

const getTotalCount = (items) =>
  Object.keys(items).reduce((sum, key) => sum + items[key].items.length, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getPrice(currentPizzaItems),
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };
    }
    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getPrice(newObjItems),
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getPrice(newObjItems),
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };
    }
    case 'CLEAR_CART': {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    default:
      return state;
  }
};

export default cart;
