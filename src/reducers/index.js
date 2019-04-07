export const productDetails = (state={}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        id: 0,
        name: action.name,
        image: action.image,
        desc: action.desc,
        price: action.price,
        inCart: false // default to false
      }
    case "TOGGLE_IN_CART":
      return state.id !== action.id ?
        state :
        {
          ...state,
          inCart: !state.inCart
        }
    default:
      return state
  }
}

export const productList = (state=[], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        productDetails(undefined, action)
      ]
    case "TOGGLE_IN_CART":
      return state.map(prod => productDetails(prod, action))
    default:
      return state
  }
}
