import React from "react";
import { render } from './testSetup/testUtils';
import userEvent from "@testing-library/user-event";
import App from "./App";

describe('<App />', () => {

    it('Renders the app starting with number 7', () => {
        const { getByText } = render(<App />);

        expect(getByText('Current number is 7')).toBeInTheDocument();
    });

    it('Changes to 9 after clicking', () => {
        const { getByText } = render(<App />);

        userEvent.click(getByText('Set new number'));

        expect(getByText('Current number is 10')).toBeInTheDocument();
    });
});
