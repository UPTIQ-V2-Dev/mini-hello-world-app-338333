# IMPORTANT: This project uses NPM, not PNPM

## Issue Fixed
The original `pnpm-lock.yaml` file has been renamed to `pnpm-lock.yaml.bak` to prevent the build system from trying to use pnpm.

## Current Setup
- Package manager: **npm**
- Lock file: **package-lock.json** 
- Install command: `npm install`
- Build command: `npm run build`
- Dev command: `npm run dev`

## Why the change?
The build system was failing with:
```
spawnSync pnpm ENOENT
```

This error occurs because pnpm is not available in the build environment, but the presence of `pnpm-lock.yaml` was causing the system to attempt pnpm usage.

## Solution Applied
1. Renamed `pnpm-lock.yaml` to `pnpm-lock.yaml.bak`
2. Created `package-lock.json` for npm
3. Updated package.json with npm-friendly engines field
4. Created proper .npmrc configuration

The project will now build successfully using npm!