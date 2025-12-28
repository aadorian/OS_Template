import React from 'react';
import { render } from '@testing-library/react-native';
import {
  Box,
  Text,
  TextVariant,
} from '@metamask/design-system-react-native';

import ExampleCard from './ExampleCard';

// Note: This is a simplified test. In a real project, you would use
// the proper testing utilities from the design system
describe('ExampleCard', () => {
  it('renders title and description correctly', () => {
    const title = 'Test Title';
    const description = 'Test Description';

    const { getByText } = render(
      <ExampleCard title={title} description={description} />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
  });

  it('displays provided title text', () => {
    const title = 'Custom Title';

    const { getByText } = render(
      <ExampleCard title={title} description="Description" />,
    );

    expect(getByText(title)).toBeTruthy();
  });

  it('displays provided description text', () => {
    const description = 'Custom Description';

    const { getByText } = render(
      <ExampleCard title="Title" description={description} />,
    );

    expect(getByText(description)).toBeTruthy();
  });
});


