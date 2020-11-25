export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "Ajouter_au_panier":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "Supprimer_du_panier":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Impossible de supprimer le produit (id: ${action.id}) car il n'est pas dans le panier!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "Définir_l'utilisateur":
        return {
          ...state,
          user : action.user
        };


    default:
      return state;
  }
};

export default reducer;
