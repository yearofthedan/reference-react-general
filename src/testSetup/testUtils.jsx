import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../common/theme';
import ProfileProvider from "../profileProvider/ProfileProvider";

const AllTheProviders = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ProfileProvider id="some-id">
      {children}
    </ProfileProvider>
  </ThemeProvider>
);

AllTheProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
