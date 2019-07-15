import React from "react";
import LabelledField from "./LabelledField";
import renderer from "react-test-renderer";

describe('<LabelledField />', () => {
   it('renders to its snapshot', () => {
       const tree = renderer
           .create(
               <LabelledField id="some-id" onChange={jest.fn()}  value="some-value" type="number">
                   Some label
               </LabelledField>
           )
           .toJSON();
       expect(tree).toMatchSnapshot();
   });
});
