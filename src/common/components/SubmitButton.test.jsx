import React from "react";
import SubmitButton from "./SubmitButton";
import renderer from "react-test-renderer";

describe('<SubmitButton />', () => {
   it('renders to its snapshot', () => {
       const tree = renderer
           .create(<SubmitButton />)
           .toJSON();
       expect(tree).toMatchSnapshot();
   });
});
