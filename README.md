# 🧮 Calculadora TypeScript

Una calculadora web moderna y funcional desarrollada con TypeScript, Vite y RxJS.

## ✨ Características

- **Operaciones básicas**: Suma, resta, multiplicación y división
- **Conversión de bases numéricas**: 
  - Binario (Bin)
  - Hexadecimal (Hex)
- **Reloj en tiempo real**: Muestra la hora actual utilizando RxJS
- **Soporte de teclado**: Utiliza el teclado para realizar operaciones
- **Interfaz moderna**: Diseño limpio y responsive
- **Validación de errores**: Prevención de división por cero

## 🚀 Instalación

### Requisitos previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Mariogarluu/Calculadora-TS.git
cd Calculadora-TS
```

2. Instala las dependencias:
```bash
npm install
```

## 💻 Uso

### Modo desarrollo

Inicia el servidor de desarrollo:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Compilar para producción

```bash
npm run build
```

Los archivos compilados se generarán en el directorio `dist/`

### Vista previa de producción

```bash
npm run preview
```

## 🎮 Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `0-9` | Ingresa números |
| `.` | Punto decimal |
| `+` `-` `*` `/` | Operadores matemáticos |
| `Enter` o `=` | Calcular resultado |
| `Backspace` | Borrar último carácter |
| `Escape` o `C` | Limpiar pantalla |

## 🎯 Funcionalidades de la interfaz

### Botones disponibles

- **Números (0-9)**: Entrada numérica
- **Operadores (+, -, *, /)**: Operaciones aritméticas
- **C**: Limpiar pantalla
- **⌫**: Borrar último carácter
- **=**: Calcular resultado
- **Bin**: Convertir a binario
- **Hex**: Convertir a hexadecimal

### Reloj

La aplicación incluye un reloj digital que se actualiza cada segundo, implementado con RxJS Observables.

## 🛠️ Tecnologías utilizadas

- **TypeScript**: Lenguaje de programación tipado
- **Vite**: Herramienta de construcción y servidor de desarrollo
- **RxJS**: Librería para programación reactiva
- **HTML5**: Estructura de la aplicación
- **CSS3**: Estilos y diseño

## 📁 Estructura del proyecto

```
Calculadora-TS/
├── src/
│   ├── index.html      # Estructura HTML
│   ├── index.ts        # Lógica de la calculadora
│   └── style.css       # Estilos
├── dist/               # Archivos compilados (generados)
├── package.json        # Dependencias y scripts
├── tsconfig.json       # Configuración de TypeScript
├── vite.config.js      # Configuración de Vite
└── README.md           # Este archivo
```

## 👨‍💻 Autor

**Mario García Luque**

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Haz un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Confirma tus cambios (`git commit -m 'Añade nueva característica'`)
4. Sube tus cambios (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

---

⭐ Si te ha gustado este proyecto, ¡dale una estrella en GitHub!
