# Migration from pnpm to npm

This project has been converted from pnpm to npm to resolve the "spawnSync pnpm ENOENT" error.

## Changes Made:
1. Updated `package.json` scripts to use `npm run` instead of `pnpm`
2. Changed packageManager field from `pnpm@10.14.0` to `npm@10.8.2`
3. Created `.npmrc` with equivalent configuration

## Manual Cleanup Required:
Please remove these pnpm-specific files:
- `pnpm-lock.yaml` 
- `pnpm-workspace.yaml`

## Next Steps:
1. Run `npm install` to generate `package-lock.json`
2. Run `npm run db:generate` to generate Prisma client
3. Run `npm run typecheck` to verify everything works
4. Run `npm run dev` to start the development server

## Files to Remove Manually:
```bash
rm pnpm-lock.yaml
rm pnpm-workspace.yaml
```

## Commands to Run:
```bash
npm install
npm run db:generate
npm run typecheck
```