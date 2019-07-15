import React from "react";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpFlow from "./SignUpFlow";

const { click, type } = userEvent;

describe('<SignUpFlow />', () => {

    let rendered;

    beforeEach(() => {
        rendered = render(<SignUpFlow />);
    });

    it('Displays a welcome message', () => {
        expect(rendered.getByText('Welcome to sign up')).toBeInTheDocument();
    });

    it('Lets me order some cats', async () => {
        await type(rendered.getByLabelText('Enter your income'), '500');
        await type(rendered.getByLabelText('How many cats exactly?'), '2');
        await click(rendered.getByText('Order now'));

        expect(rendered.getByText('All done. You ordered 2 cats')).toBeInTheDocument();
    });
});

