# TypeScript React Native Template

A comprehensive TypeScript React Native template that complies with Cursor AI rules and follows MetaMask Mobile development guidelines.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

```bash
# Install dependencies
yarn install

# Start the development server
yarn start

# Run on iOS
yarn ios

# Run on Android
yarn android

# Run on Web
yarn web
```

## 📁 Project Structure

```
app/
├── App.tsx                          # Main app entry point
├── screens/                         # Screen components
│   └── HomeScreen.tsx
├── component-library/               # Reusable components
│   └── components/
│       └── ExampleCard/
│           ├── ExampleCard.tsx
│           ├── ExampleCard.types.ts
│           ├── ExampleCard.test.tsx
│           └── index.ts
├── utils/                           # Utility functions
│   ├── example.ts
│   └── example.test.ts
└── types/                           # TypeScript type definitions
    └── navigation.ts
```

## 🛠️ Technologies

### Core
- **React Native** 0.73.2 - Mobile framework
- **Expo** ~50.0.0 - Development platform
- **TypeScript** ~5.3.3 - Type safety

### UI & Styling
- **@metamask/design-system-react-native** - Design system components
- **@metamask/design-system-twrnc-preset** - Tailwind CSS preset
- **React Navigation** - Navigation library

### Testing
- **Jest** - Test runner
- **@testing-library/react-native** - React Native testing utilities
- **@testing-library/jest-native** - Jest matchers

### Code Quality
- **ESLint** - Linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

## 📋 Key Features

### ✅ Design System Compliance

All components follow the design system hierarchy:

1. **First**: Use `@metamask/design-system-react-native` components
2. **Second**: Use `app/component-library` components
3. **Last Resort**: Custom components with StyleSheet

### ✅ Styling Patterns

- Uses `useTailwind()` hook (not direct `twrnc` import)
- Uses `Box` component instead of `View`
- Uses `Text` component with variants
- Uses `twClassName` for static styles
- Uses `tw.style()` for dynamic styles

### ✅ Testing Standards

- No "should" in test names
- AAA pattern (Arrange, Act, Assert)
- Proper test isolation
- Mock external dependencies

### ✅ TypeScript Best Practices

- Strict type checking enabled
- Path aliases configured (`@/`, `@components/`, `@utils/`, `@core/`)
- Proper type definitions
- TSDoc comments for public functions

## 🧪 Testing

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

## 🔍 Code Quality

```bash
# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Type check
yarn type-check
```

## 📝 Component Example

The `ExampleCard` component demonstrates the proper patterns:

```typescript
import { useTailwind } from '@metamask/design-system-twrnc-preset';
import {
  Box,
  Text,
  TextVariant,
  BoxFlexDirection,
} from '@metamask/design-system-react-native';

const ExampleCard = ({ title, description }: ExampleCardProps) => {
  const tw = useTailwind();

  return (
    <Box
      twClassName="bg-muted rounded-lg p-4"
      flexDirection={BoxFlexDirection.Column}
    >
      <Text variant={TextVariant.HeadingMd}>{title}</Text>
      <Text variant={TextVariant.BodyMd}>{description}</Text>
    </Box>
  );
};
```

## 🎯 Cursor Rules Compliance

This template is designed to work seamlessly with Cursor AI rules:

- ✅ Follows file organization patterns
- ✅ Uses design system components
- ✅ Implements proper testing patterns
- ✅ Follows TypeScript guidelines
- ✅ Uses functional components with hooks
- ✅ Proper naming conventions (PascalCase for components, camelCase for functions)

## 📚 Additional Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/)

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `.eslintrc.js` - ESLint rules
- `.prettierrc.js` - Prettier formatting
- `jest.config.js` - Jest test configuration
- `babel.config.js` - Babel transpilation
- `metro.config.js` - Metro bundler configuration

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start Expo development server |
| `yarn ios` | Run on iOS simulator |
| `yarn android` | Run on Android emulator |
| `yarn web` | Run on web browser |
| `yarn test` | Run tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:coverage` | Run tests with coverage |
| `yarn lint` | Lint code |
| `yarn lint:fix` | Fix linting issues |
| `yarn type-check` | Type check without emitting |

## 🚨 Important Notes

1. **Design System First**: Always check if `@metamask/design-system-react-native` has the component you need before creating custom ones.

2. **Tailwind Usage**: Always use `useTailwind()` hook, never import `twrnc` directly.

3. **Testing**: Never use "should" in test names. Use action-oriented descriptions.

4. **Type Safety**: Enable strict TypeScript checking. Avoid `any` types.

5. **File Organization**: Follow the component structure pattern with separate files for types, tests, and exports.

## 🤝 Contributing

When adding new components or features:

1. Follow the file organization pattern
2. Use design system components first
3. Write tests following AAA pattern
4. Add TypeScript types
5. Update this README if needed

## 📄 License

This template is provided as-is for use in your projects.


