#!/bin/bash

echo "========================================="
echo "  Setup Maderas Carrera - GitHub Pages"
echo "========================================="
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "ERROR: No se encuentra package.json"
    echo "Ejecuta este script desde la carpeta del proyecto"
    exit 1
fi

echo "[1/4] Creando carpeta .github/workflows..."
mkdir -p .github/workflows

echo "[2/4] Creando workflow de GitHub Actions..."
cat > .github/workflows/deploy.yml << 'WORKFLOW_EOF'
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
WORKFLOW_EOF

echo "[3/4] Verificando workflow..."
if [ -f ".github/workflows/deploy.yml" ]; then
    echo "✅ Workflow creado correctamente"
    echo ""
    echo "Contenido:"
    head -5 .github/workflows/deploy.yml
else
    echo "❌ Error al crear el workflow"
    exit 1
fi

echo ""
echo "[4/4] Listo! Ahora ejecuta:"
echo ""
echo "  git add ."
echo "  git commit -m 'Add GitHub Actions workflow'"
echo "  git push"
echo ""
echo "========================================="
