import {render, screen} from '@testing-library/react';
import {Main} from './Main';
import {groupTasksMock} from "../../mocks/groupTasks";
import {InitialState} from "../../hooks/types";

const params: InitialState = {
    groupTasks: [],
    isLoading: false,
    hasError: false,
}

// Mock the useFetchGroupTasksData hook
jest.mock('../../hooks/useFetchGroupTasksData');

// Spy on the useFetchGroupTasksData hook
const spyOnUseFetchGroupTasksDataHookFn = (customParams = params) => {
    jest.spyOn(require('../../hooks/useFetchGroupTasksData'), 'useFetchGroupTasksData').mockReturnValue({
        ...customParams
    });
}

describe('<Main />', () => {
    it('renders loading text when isLoading is true', () => {
        spyOnUseFetchGroupTasksDataHookFn({...params, isLoading: true})
        render(<Main/>);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error text when hasError is true', () => {
        spyOnUseFetchGroupTasksDataHookFn({...params, hasError: true})
        render(<Main/>);
        expect(screen.getByText('Something went wrong, Please try again later!')).toBeInTheDocument();
    });

    it('renders UserProfileCreationProgressWidget when data is loaded', () => {
        spyOnUseFetchGroupTasksDataHookFn({...params, groupTasks: groupTasksMock})
        render(<Main/>);
        expect(screen.getByText('Lodgify Grouped Tasks')).toBeInTheDocument();
    });
});
