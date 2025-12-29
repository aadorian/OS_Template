import React from 'react';
import { View, Text } from 'react-native';

import { ExampleCardProps } from './ExampleCard.types';

const ExampleCard = ({ title, description }: ExampleCardProps) => {
  return (
    <View className="bg-gray-100 rounded-lg p-4 border border-gray-300 flex flex-col items-start justify-center">
      <Text className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </Text>
      <Text className="text-base text-gray-600">{description}</Text>
    </View>
  );
};

export default ExampleCard;


