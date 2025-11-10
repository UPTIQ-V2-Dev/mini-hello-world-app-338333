# Build Instructions

## Issue Fixed: PNPM ENOENT Error

The project has been converted from pnpm to npm to resolve the "spawnSync pnpm ENOENT" error.

## Changes Made:

1. **Added package-lock.json** - Forces npm as the package manager
2. **Created .npmrc** - Configures npm preferences
3. **Verified Dockerfile** - Already uses `npm install`
4. **Verified entrypoint.preview.sh** - Already uses `npm run dev`

## Build Commands:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run eslint

# Run tests
npm run test
```

## Project Structure:

- **Frontend**: React 19 + TypeScript + Vite
- **Authentication**: Complete login system with protected routes
- **UI**: Shadcn/ui components with Tailwind CSS
- **State Management**: React Query for API calls
- **Routing**: React Router 7 with authentication guards

## Login Credentials (Mock Mode):

When `VITE_USE_MOCK_DATA=true`:
- Email: `user@example.com`
- Password: Any password

The login page includes:
- Form validation with Zod
- Error handling
- Loading states
- Responsive design
- Automatic redirect after login

## Ready for Backend Integration:

The frontend is fully prepared for backend integration with:
- Complete API service layer
- Type definitions
- Authentication flow
- Error handling
- Token refresh mechanism