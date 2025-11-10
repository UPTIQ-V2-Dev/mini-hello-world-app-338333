#!/bin/bash

# NPM Wrapper Script
# This script ensures npm is used instead of pnpm

# If pnpm is called, redirect to npm
if [[ "$0" == *"pnpm"* ]] || [[ "$1" == "pnpm" ]]; then
    echo "🔄 Redirecting pnpm command to npm..."
    shift # Remove pnpm from arguments if it's first argument
    exec npm "$@"
fi

# Otherwise, just run npm
exec npm "$@"