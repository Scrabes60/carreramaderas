@echo off
echo =========================================
echo   Setup Maderas Carrera - GitHub Pages
echo =========================================
echo.

if not exist package.json (
    echo ERROR: No se encuentra package.json
    echo Ejecuta este script desde la carpeta del proyecto
    exit /b 1
)

echo [1/4] Creando carpeta .github\workflows...
if not exist .github\workflows mkdir .github\workflows

echo [2/4] Creando workflow de GitHub Actions...
(
echo name: Deploy to GitHub Pages
echo.
echo on:
echo   push:
echo     branches: [main]
echo   workflow_dispatch:
echo.
echo permissions:
echo   contents: read
echo   pages: write
echo   id-token: write
echo.
echo concurrency:
echo   group: "pages"
echo   cancel-in-progress: false
echo.
echo jobs:
echo   build:
echo     runs-on: ubuntu-latest
echo     steps:
echo       - uses: actions/checkout@v4
echo       - uses: actions/setup-node@v4
echo         with:
echo           node-version: "20"
echo           cache: "npm"
echo       - run: npm ci
echo       - run: npm run build
echo       - uses: actions/configure-pages@v5
echo       - uses: actions/upload-pages-artifact@v3
echo         with:
echo           path: dist
echo.
echo   deploy:
echo     environment:
echo       name: github-pages
echo       url: ${{ steps.deployment.outputs.page_url }}
echo     runs-on: ubuntu-latest
echo     needs: build
echo     steps:
echo       - id: deployment
echo         uses: actions/deploy-pages@v4
) > .github\workflows\deploy.yml

echo [3/4] Verificando workflow...
if exist .github\workflows\deploy.yml (
    echo ✅ Workflow creado correctamente
) else (
    echo ❌ Error al crear el workflow
    exit /b 1
)

echo.
echo [4/4] Listo! Ahora ejecuta:
echo.
echo   git add .
echo   git commit -m "Add GitHub Actions workflow"
echo   git push
echo.
echo =========================================
pause
