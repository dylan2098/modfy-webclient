export default function reducer(state: any, action: any) {

  switch (action.type) {
    case 'init':
      return {
        query: action.payload.query,
        items: action.payload.items,
        paging: action.payload.paging,
        error: action.payload.error,
      };

    case 'get_item':
      return {
        item: action.payload.item,
      }

    case 'add_item':
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case 'update_query':
      return {
        ...state,
        query: action.payload.query,
      };


    case 'delete_item':
      return {
        query: action.payload.query,
        items: state.items.filter((item: any) => item.id != action.payload.query),
      };

    case 'update_item':
      return {
        query: action.payload.query,
        items: state.items.map((item: any) =>
          item.productId == action.payload.query ? action.payload.items : item
        ),
      };

    default:
      return state;
  }
}
