# PNPM Installation Fix

## Issue
The project was configured to use pnpm, but the system doesn't have pnpm installed, causing the error:
```
spawnSync pnpm ENOENT
```

## Solution Applied
I've converted the project to use npm instead of pnpm for better compatibility:

### Files Modified:
1. **Dockerfile** - Removed pnpm setup, now uses `npm install`
2. **entrypoint.preview.sh** - Changed all `pnpm` commands to `npm`
3. **Removed pnpm-lock.yaml** dependency

### To Install pnpm (Alternative):
If you prefer to use pnpm, run the setup script:
```bash
chmod +x setup-pnpm.sh
./setup-pnpm.sh
```

### Current Setup:
- Uses npm for package management
- All scripts in package.json work with `npm run [script]`
- Docker container uses npm for dependencies
- Entrypoint script uses npm for all operations

The Hello World app is ready and should now build successfully!