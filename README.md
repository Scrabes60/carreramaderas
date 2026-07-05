# Maderas Carrera

Landing page profesional para distribuidor de madera y tableros.

## IMPORTANTE: Configuracion de GitHub Pages

### Paso 1: Subir el codigo
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/maderas-carrera.git
git push -u origin main
```

### Paso 2: Configurar GitHub Pages (MUY IMPORTANTE)
1. Ve a **Settings → Pages**
2. En **Source** selecciona **GitHub Actions** (NO "Deploy from a branch")
3. Guarda

### Paso 3: Esperar el deploy
- Ve a **Actions** y espera a que el workflow termine
- Tu sitio estara en: `https://TU-USUARIO.github.io/maderas-carrera/`

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

El output estara en la carpeta `dist/`.
