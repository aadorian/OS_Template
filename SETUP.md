# Setup Guide

## Initial Setup

### 1. Install Dependencies

```bash
yarn install
```

**Note**: If you encounter issues with `@metamask/design-system-react-native` or `@metamask/design-system-twrnc-preset`, you may need to:

1. Check if these packages are available in your organization's npm registry
2. Replace them with alternative design system packages
3. Use standard React Native components as a fallback

### 2. Configure Environment

The template is pre-configured with:
- TypeScript paths (`@/`, `@components/`, `@utils/`, `@core/`)
- ESLint and Prettier
- Jest testing setup
- Expo configuration

### 3. Add Assets

Place your app assets in the `assets/` directory:
- `icon.png` - App icon (1024x1024)
- `splash.png` - Splash screen
- `adaptive-icon.png` - Android adaptive icon
- `favicon.png` - Web favicon

### 4. Update App Configuration

Edit `app.json` to customize:
- App name and slug
- Bundle identifiers
- App icons and splash screens

## Development Workflow

### Running the App

```bash
# Start Expo development server
yarn start

# Then press:
# - 'i' for iOS simulator
# - 'a' for Android emulator
# - 'w' for web browser
```

### Testing

```bash
# Run all tests
yarn test

# Watch mode for development
yarn test:watch

# Coverage report
yarn test:coverage
```

### Code Quality

```bash
# Check for linting errors
yarn lint

# Auto-fix linting issues
yarn lint:fix

# Type check
yarn type-check
```

## Customization

### Adding New Components

1. Create component directory in `app/component-library/components/`
2. Follow the structure:
   ```
   ComponentName/
   ├── ComponentName.tsx
   ├── ComponentName.types.ts
   ├── ComponentName.test.tsx
   └── index.ts
   ```
3. Use design system components first
4. Write tests following AAA pattern

### Adding New Screens

1. Create screen in `app/screens/`
2. Add route to `app/types/navigation.ts`
3. Add screen to navigation stack in `app/App.tsx`

### Adding Utilities

1. Create utility file in `app/utils/`
2. Export functions with proper TypeScript types
3. Add TSDoc comments for public functions
4. Write unit tests

## Troubleshooting

### Metro Bundler Issues

```bash
# Clear Metro cache
yarn start --clear
```

### TypeScript Errors

```bash
# Check for type errors
yarn type-check

# Restart TypeScript server in your IDE
```

### Package Installation Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules
yarn install
```

## Next Steps

1. Review `TEMPLATE_README.md` for detailed documentation
2. Check `.cursor/rules/` for development guidelines
3. Customize the template for your project needs
4. Start building your app!


