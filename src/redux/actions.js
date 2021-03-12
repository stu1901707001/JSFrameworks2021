import actions from './action-types';
import networkClient from '../network/network-client';

export function setTVList(tvList) {
    return { type: actions.SET_TV_LIST, payload: tvList };
}

export const getTVs = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'discover/tv',
            params,
        )
        dispatch(setTVList(response.results.sort((a, b) => {
            return new Date(a.first_air_date).getTime() -
                new Date(b.first_air_date).getTime()
        })));
    } catch (error) {
        console.log(error)
    }
}

export const getGenres = params => async dispatch => {
    try {
        const response = await networkClient.get(
            'genre/tv/list',
            params,
        )
        dispatch(setGenres(response.genres));
    } catch (error) {
        console.log(error)
    }
}

export const getTV = params => async dispatch => {
    try {
        const response = await networkClient.get(
            `tv/${params.tvId}`,
        )
        dispatch(setTV(response));
    } catch (error) {
        console.log(error)
    }
}

export function setTV(tv) {
    return { type: actions.SET_TV, payload: tv };
}

export function setSelectedYear(year) {
    return { type: actions.SET_SELECTED_YEAR, payload: year };
}

export function setSelectedGenres(genres) {
    return { type: actions.SET_SELECTED_GENRES, payload: genres };
}

export function setGenres(genres) {
    return { type: actions.SET_GENRES, payload: genres };
}

export function setListView(value) {
    return { type: actions.SET_LIST_VIEW, payload: value };
}