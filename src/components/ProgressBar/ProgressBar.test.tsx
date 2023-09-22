import {screen, RenderResult, render} from "@testing-library/react";
import {ProgressBar, Props} from "./ProgressBar";

const props: Props = {
    progressPercentage: 36
}

// helper function to render the ProgressBar component with props
const renderProgressBar = (customProps: Props = props): RenderResult => {
    return render(
        <ProgressBar {...customProps} />
    );
}

describe('<ProgressBar />', () => {
    it('should not render the progress bar value when progressPercentage = 0', () => {
        renderProgressBar({progressPercentage: 0});
        expect(screen.queryByTestId('progress-percentage')).toBeNull();
    })

    it('should render the progress bar value when progressPercentage > 0 with correct width', () => {
        renderProgressBar();
        expect(screen.getByText(/36%/)).toBeInTheDocument();

        const percentageSection = screen.getByTestId('progress-percentage');
        expect(percentageSection).toBeInTheDocument();
        expect(percentageSection).toHaveStyle({width: `${props.progressPercentage}%`})
    })
})