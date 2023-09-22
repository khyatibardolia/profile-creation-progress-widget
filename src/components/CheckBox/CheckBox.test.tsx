import {screen, fireEvent, render, RenderResult} from "@testing-library/react";
import {CheckBox, Props} from "./CheckBox";

const props: Props = {
    onToggleCheck: jest.fn(),
    text: 'Task1',
    checked: false,
}

// helper function to render the CheckBox component with props
const renderCheckBox = (customProps: Props = props): RenderResult => {
    return render(
        <CheckBox {...customProps} />
    );
}

describe('<CheckBox />', () => {
    it('should contain checkbox text value and unchecked icon', () => {
        renderCheckBox();
        expect(screen.getByText(/Task1/i)).toBeInTheDocument();
        const uncheckedIcon = screen.getByAltText('checkbox-icon');
        expect(uncheckedIcon).toBeInTheDocument();
        expect(uncheckedIcon).toHaveAttribute('src', 'checkbox-unchecked-icon.svg');
    })

    it('should contain checkedIcon when checked' , () => {
        renderCheckBox({...props, checked: true});

        const checkedIcon = screen.getByAltText('checkbox-icon');
        expect(checkedIcon).toBeInTheDocument();
        expect(checkedIcon).toHaveAttribute('src','checkbox-checked-icon.svg');
    })

    it('calls onToggleCheck function when checked' , () => {
        renderCheckBox({...props, checked: true});

        const labelText = screen.getByText(/Task1/i);
        fireEvent.click(labelText);
        expect(props.onToggleCheck).toHaveBeenCalled();
    })
});