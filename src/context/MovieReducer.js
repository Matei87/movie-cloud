//actions
const MovieReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'MOVIE_POPULAR':
            return {
                ...state,
                moviesPopular: action.payload
            }
        default:
            return state;
    }
}

export default MovieReducer;