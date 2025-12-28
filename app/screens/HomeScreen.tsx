import React from 'react';
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  Box,
  Text,
  TextVariant,
  BoxFlexDirection,
  BoxAlignItems,
  BoxJustifyContent,
} from '@metamask/design-system-react-native';

import ExampleCard from '../component-library/components/ExampleCard/ExampleCard';

const HomeScreen = () => {
  const tw = useTailwind();

  return (
    <Box
      twClassName="flex-1 bg-default"
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.Center}
      justifyContent={BoxJustifyContent.Center}
    >
      <Box twClassName="w-full px-4">
        <Text
          variant={TextVariant.HeadingLg}
          twClassName="text-center mb-6 text-primary"
        >
          Welcome to OS Template
        </Text>
        <Text
          variant={TextVariant.BodyMd}
          twClassName="text-center mb-8 text-secondary"
        >
          A TypeScript React Native template following Cursor rules
        </Text>
        <ExampleCard
          title="Example Card"
          description="This component follows the design system guidelines"
        />
      </Box>
    </Box>
  );
};

export default HomeScreen;


