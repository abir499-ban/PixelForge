import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'], 
  outDir: 'dist',
  target: 'node16',
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  bundle: true,
  noExternal: ['common', 'db'], // Ensure shared packages are bundled
});
