import {fireEvent, render, RenderResult, screen} from '@testing-library/react';
import {Accordion, Props} from "./Accordion";

const props: Props = {
    header: 'Test header',
    content: 'Test content',
    expanded: false,
    onAccordionToggle: jest.fn()
}

// helper function to render the Accordion component with props
const renderAccordion = (customProps: Props = props): RenderResult => {
    return render(
        <Accordion {...customProps} />
    );
}

describe('<Accordion />', () => {
    it('renders header and not the content when accordion is not expanded', () => {
        renderAccordion({...props, expanded: false});

        expect(screen.getByText(/Test Header/i)).toBeInTheDocument();
        expect(screen.getByText(/Show/i)).toBeInTheDocument();
        expect(screen.queryByText(/Test Content/i)).toBeNull();
        expect(screen.queryByText(/Hide/i)).toBeNull();

        const imgElement = screen.getByAltText('arrow-icon');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'arrow-down-icon.svg');
    });

    it('renders content when accordion is expanded', () => {
        renderAccordion({...props, expanded: true});

        expect(screen.getByText(/Test Header/i)).toBeInTheDocument();
        expect(screen.queryByText(/Show/i)).toBeNull();
        expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
        expect(screen.getByText(/Hide/i)).toBeInTheDocument();

        const imgElement = screen.getByAltText('arrow-icon');
        expect(imgElement).toBeInTheDocument();
        expect(imgElement).toHaveAttribute('src', 'arrow-up-icon.svg');
    });

    it('calls onAccordionToggle when header is clicked', () => {
        const onAccordionToggleMock = jest.fn();
        renderAccordion({...props, onAccordionToggle: onAccordionToggleMock});

        fireEvent.click(screen.getByText(/Test Header/i));
        expect(onAccordionToggleMock).toHaveBeenCalled();
    });

});