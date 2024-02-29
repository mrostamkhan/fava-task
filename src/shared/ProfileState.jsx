// export const profileState = {
//     profiles: [],
//     profile: {},
//     searchTerm: ''
// }

import { useReducer } from "react";
import {ProfileService} from '../services/ProfileService'
import ProfileContext from './ProfileContext';


export const profileAction = {
    search: 1,
    getList: 2,
    get: 3,
    getRepos: 4,
    clearSearch: 5
}

export const profileReducer = (state, action) => {
    switch (action.type) {
        case profileAction.search:
            return {
                ...state,
                searchTerm: action.payload,
            };

        case profileAction.getList:
            return {
                ...state,
                profiles: action.payload,
            };

        case profileAction.get:
            return {
                ...state,
                profile: action.payload
            };

        case profileAction.getRepos:
            return {
                ...state,
                repos: action.payload
            };

        case profileAction.clearSearch:
            return {
                ...state,
                profiles: { term: '', data: [] },
                searchTerm: '',
            };

        default:
            return state;
    }
}

const profileState = (props) => {

    const initialState = {
        profiles: { term: '', data: [] },
        profile: {},
        repos: [],
        searchTerm: '',
    }

    const [state, dispatch] = useReducer(profileReducer, initialState);

    const getList = (term) => {
        ProfileService.getList(term)
            .then((res) => {
                dispatch({
                    type: profileAction.getList,
                    payload: { term: term, data: res }
                })
            })
    }

    const get = (profileLogin) => {
        ProfileService.get(profileLogin)
            .then((res) => {
                dispatch({
                    type: profileAction.get,
                    payload: res
                })
            })
    }

    const getRepos = (profileLogin) => {
        ProfileService.getRepos(profileLogin)
        .then((res) => {
                dispatch({
                    type: profileAction.getRepos,
                    payload: res
                })
            })
    }

    const setSearchTerm = (term) => {
        dispatch({
            type: profileAction.search,
            payload: term
        })
    }

    const clearSearch = () => {
        dispatch({
            type: profileAction.clearSearch,
        })
    }

    return (
        <ProfileContext.Provider
            value={{
                profiles: state.profiles,
                profile: state.profile,
                repos: state.repos,
                searchTerm: state.searchTerm,
                setSearchTerm,
                clearSearch,
                get,
                getList,
                getRepos,
            }}>
            {props.children}
        </ProfileContext.Provider>
    )
}

export default profileState;
