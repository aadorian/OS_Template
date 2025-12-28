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

import { ExampleCardProps } from './ExampleCard.types';

const ExampleCard = ({ title, description }: ExampleCardProps) => {
  const tw = useTailwind();

  return (
    <Box
      twClassName="bg-muted rounded-lg p-4 border border-border-default"
      flexDirection={BoxFlexDirection.Column}
      alignItems={BoxAlignItems.FlexStart}
      justifyContent={BoxJustifyContent.Center}
    >
      <Text
        variant={TextVariant.HeadingMd}
        twClassName="mb-2 text-primary"
      >
        {title}
      </Text>
      <Text variant={TextVariant.BodyMd} twClassName="text-secondary">
        {description}
      </Text>
    </Box>
  );
};

export default ExampleCard;


