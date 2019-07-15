import React from "react";
import {when} from "jest-when";
import userEvent from "@testing-library/user-event";
import { render } from './testSetup/testUtils';
import App from "./App";
import fetchProfile from './profileProvider/profiles';

jest.mock('./profileProvider/profiles');

describe('<App />', () => {

    it('Renders the app starting with number 7 and no profile', () => {
        when(fetchProfile)
            .calledWith('some-id')
            .mockReturnValue(new Promise(() => {}));

        const { getByText, queryByText } = render(<App />);

        expect(getByText('Current number is 7')).toBeInTheDocument();
        expect(getByText('No profile loaded')).toBeInTheDocument();
        expect(queryByText('Current email is')).not.toBeInTheDocument();
    });

    it('Changes to 9 after clicking', async () => {
        when(fetchProfile)
            .calledWith('some-id')
            .mockResolvedValue({ email: 'some@email.com'});

        const { getByText } = await render(<App />);

        userEvent.click(getByText('Set new number'));

        expect(getByText('Current number is 10')).toBeInTheDocument();
        expect(getByText('Current email is some@email.com')).toBeInTheDocument();
    });
});
