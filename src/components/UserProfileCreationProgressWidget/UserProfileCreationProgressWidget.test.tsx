import {render, screen, fireEvent} from "@testing-library/react";
import {Props, UserProfileCreationProgressWidget} from "./UserProfileCreationProgressWidget";
import {groupTasksMock} from "../../mocks/groupTasks";

const props = {
    title: 'Lodgify grouped tasks',
    groupTasks: groupTasksMock,
}

// helper function to render the renderUserProfileCreationProgressWidgetComponent component with props
const renderUserProfileCreationProgressWidgetComponent = (customProps: Props = props) => {
    return render(<UserProfileCreationProgressWidget {...customProps} />)
}

describe('<UserProfileCreationProgressWidget />', () => {
    it('renders the component with the correct title and group name', () => {
        renderUserProfileCreationProgressWidgetComponent();
        expect(screen.getByText(/Lodgify grouped tasks/i)).toBeInTheDocument();
        expect(screen.getByText(/Group1/i)).toBeInTheDocument();
        expect(screen.getByText(/Group2/i)).toBeInTheDocument();
    })

    it('should display the correct progress', () => {
        renderUserProfileCreationProgressWidgetComponent();
        const progressPercentage = screen.getByText(/71%/i);
        expect(progressPercentage).toBeInTheDocument();
    });

    it('should display the tasks when clicked on accordion header', () => {
        renderUserProfileCreationProgressWidgetComponent();
        const group1AccordionHeader = screen.getByText(/Group1/i);
        expect(group1AccordionHeader).toBeInTheDocument();

        fireEvent.click(group1AccordionHeader);
        expect(screen.getByText(/Task1/i)).toBeInTheDocument();
        expect(screen.getByText(/Task2/i)).toBeInTheDocument();
    })

    it('should not display the tasks when accordion is closed after expanding', () => {
        renderUserProfileCreationProgressWidgetComponent();
        const group1AccordionHeader = screen.getByText(/Group1/i);
        expect(group1AccordionHeader).toBeInTheDocument();

        //open accordion
        fireEvent.click(group1AccordionHeader);
        //close accordion
        fireEvent.click(group1AccordionHeader);
        expect(screen.queryByText(/Task1/i)).toBeNull();
        expect(screen.queryByText(/Task2/i)).toBeNull();
    })

    it('should update the progress correctly when selecting/deselecting a task', () => {
        renderUserProfileCreationProgressWidgetComponent();
        const group1AccordionHeader = screen.getByText(/Group1/i);
        expect(group1AccordionHeader).toBeInTheDocument();
        fireEvent.click(group1AccordionHeader);

        const task1 = screen.getByText(/Task1/i);
        expect(task1).toBeInTheDocument();

        //select task
        fireEvent.click(task1);
        const updatedProgressAfterSelect = screen.getByText(/100%/i);
        expect(updatedProgressAfterSelect).toBeInTheDocument();

        //deselect task
        fireEvent.click(task1);
        const updatedProgressAfterDeselect = screen.getByText(/71%/i);
        expect(updatedProgressAfterDeselect).toBeInTheDocument();
    })
})