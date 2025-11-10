#!/bin/bash

# Setup script to complete pnpm to npm migration
# This script removes pnpm files and initializes npm

echo "🔄 Starting pnpm to npm migration..."

# Remove pnpm-specific files
if [ -f "pnpm-lock.yaml" ]; then
    echo "🗑️  Removing pnpm-lock.yaml..."
    rm pnpm-lock.yaml
fi

if [ -f "pnpm-workspace.yaml" ]; then
    echo "🗑️  Removing pnpm-workspace.yaml..."
    rm pnpm-workspace.yaml
fi

# Install dependencies with npm
echo "📦 Installing dependencies with npm..."
npm install

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npm run db:generate

# Run typecheck to verify everything works
echo "✅ Running typecheck to verify installation..."
npm run typecheck

if [ $? -eq 0 ]; then
    echo "🎉 Migration completed successfully!"
    echo "✅ You can now use:"
    echo "   - npm run dev (start development server)"
    echo "   - npm run db:generate (generate Prisma client)"
    echo "   - npm run typecheck (type check code)"
    echo ""
    echo "🗑️  You can safely delete this setup script:"
    echo "   rm setup-npm.sh"
else
    echo "❌ Migration completed but typecheck failed. Please check for errors."
fi