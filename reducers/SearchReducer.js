export const SearchReducer = (state, action) => {

    switch (action.type) {
        case ACTIONS.SET_QUERY:

            return { ...state, query: action.payload }

        case ACTIONS.SET_DATA:

            return { ...state, DATA: action.payload }

        case ACTIONS.SET_DATA:

            return { ...state, loading: action.payload }

        case ACTIONS.SET_LOADING_MORE:

            return { ...state, loadingMore: action.payload }

        case ACTIONS.SET_PAGE:

            return { ...state, page: action.payload }

        case ACTIONS.SET_ERROR:

            return { ...state, error: action.payload }

        default:
            return state;
    }

}

export const ACTIONS = {
  SET_LOADING :"set_Loading",
  SET_DATA :"set_DATA" ,
  SET_LOADING_MORE :"set_Loading_More",
  SET_ERROR :"set_Error",
  SET_PAGE : "set_Page",
  SET_QUERY : "set_Query"
}

export const initialState = {
    query: "",
    page: 1,
    error: null,
    loading: false,
    loadingMore: false,
    DATA: []
}