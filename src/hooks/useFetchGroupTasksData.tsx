import {useEffect, useState} from "react";
import {InitialState} from "./types";

const API_URL: string =
    "https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress";

const initialState: InitialState = {
    isLoading: false,
    groupTasks: [],
    hasError: false,
}

export const useFetchGroupTasksData = (): InitialState => {
    const [state, setState] = useState<InitialState>(initialState);

    useEffect(() => {
        const fetchData = async () => {
            setState((prevState => ({...prevState, isLoading: true})));
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setState((prevState => ({...prevState, groupTasks: data, isLoading: false})));
            } catch (error) {
                setState((prevState => ({...prevState, isLoading: false, hasError: true})));
            }

        }
        fetchData();
    }, [])
    return state;
}