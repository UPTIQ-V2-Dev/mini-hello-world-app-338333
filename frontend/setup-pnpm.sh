#!/bin/bash

# Script to install pnpm if it's not available
set -e

echo "Checking if pnpm is available..."

if ! command -v pnpm &> /dev/null; then
    echo "pnpm not found. Installing pnpm..."
    
    # Check if Node.js is available
    if ! command -v node &> /dev/null; then
        echo "Error: Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    # Check if corepack is available (comes with Node.js 16.9+)
    if command -v corepack &> /dev/null; then
        echo "Installing pnpm via corepack..."
        corepack enable
        corepack install -g pnpm
    else
        echo "Installing pnpm via npm..."
        npm install -g pnpm
    fi
    
    echo "pnpm installed successfully!"
else
    echo "pnpm is already available."
fi

# Verify installation
echo "pnpm version: $(pnpm --version)"