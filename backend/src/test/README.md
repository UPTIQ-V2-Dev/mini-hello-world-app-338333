# Backend Testing

This directory contains the test files for the backend application using Vitest.

## Structure

```
src/test/
├── setup.ts              # Global test setup and teardown
├── ApiError.test.ts      # Tests for ApiError utility
├── pick.test.ts          # Tests for pick utility
├── catchAsync.test.ts    # Tests for catchAsync utility
└── validation.test.ts    # Tests for custom validations
```

## Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:ci

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Writing Tests

Example test structure:

```typescript
import { describe, it, expect } from 'vitest';

describe('MyFunction', () => {
    it('should do something', () => {
        const result = myFunction();
        expect(result).toBe(expectedValue);
    });
});
```

## Test Coverage

Coverage reports are generated in the `coverage/` directory when running `npm run test:coverage`.

## Configuration

Test configuration is defined in `vitest.config.ts` at the root of the backend directory.
