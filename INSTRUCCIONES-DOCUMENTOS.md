# 📄 INSTRUCCIONES PARA AGREGAR DOCUMENTOS

## 🎯 Cómo agregar un nuevo documento

### 📍 PASO 1: Ubicar los lugares correctos
**IMPORTANTE**: Debes agregar el documento en DOS archivos:

**Para el carrusel de la página principal:**
1. Abrir el archivo `index.html`
2. Buscar la sección que dice: `<!-- ✅ AGREGAR NUEVOS DOCUMENTOS AQUÍ ✅ -->`
3. Colocar el cursor justo después de esa línea

**Para la página completa de documentos:**
1. Abrir el archivo `documentos.html`
2. Buscar la sección que dice: `<!-- ✅ AGREGAR NUEVOS DOCUMENTOS AQUÍ ✅ -->`
3. Colocar el cursor justo después de esa línea

### 📋 PASO 2: Código para index.html (carrusel)
Copia exactamente este código y pégalo en index.html:

```html
<div class="document-item carousel-item">
    <div class="doc-icon">
        <i class="fas fa-file-pdf"></i>
    </div>
    <h3>TÍTULO DEL DOCUMENTO</h3>
    <p>DESCRIPCIÓN BREVE DEL DOCUMENTO</p>
    <a href="documents/NOMBRE-ARCHIVO.pdf" class="doc-download" download>Descargar PDF</a>
</div>
```

### ✏️ PASO 3: Personalizar el contenido
Reemplaza estos elementos:

- **TÍTULO DEL DOCUMENTO**: El nombre que aparecerá en grande
- **DESCRIPCIÓN BREVE DEL DOCUMENTO**: Una explicación corta del contenido
- **NOMBRE-ARCHIVO.pdf**: El nombre real de tu archivo PDF

### 🎨 PASO 4: Elegir el ícono correcto
Cambia la clase del ícono según el tipo de documento:

- **PDF general**: `fas fa-file-pdf`
- **Informe/Reporte**: `fas fa-file-alt`
- **Gráficos/Estadísticas**: `fas fa-chart-line`
- **Manual/Guía**: `fas fa-book`
- **Presentación**: `fas fa-file-powerpoint`
- **Documento de texto**: `fas fa-file-word`

### 📁 PASO 5: Subir el archivo PDF
1. Coloca tu archivo PDF en la carpeta `documents/`
2. Asegúrate de que el nombre coincida con lo que pusiste en el código

### 📋 PASO 3: Código para documentos.html (página completa)
Copia exactamente este código y pégalo en documentos.html:

```html
<div class="document-item">
    <div class="doc-icon">
        <i class="fas fa-file-pdf"></i>
    </div>
    <h3>TÍTULO DEL DOCUMENTO</h3>
    <p>Descripción más detallada del documento para la página completa.</p>
    <div class="doc-meta">
        <span class="doc-size">TAMAÑO (ej: 2.5 MB)</span>
        <span class="doc-pages">PÁGINAS (ej: 45 páginas)</span>
    </div>
    <a href="documents/NOMBRE-ARCHIVO.pdf" class="doc-download">Descargar PDF</a>
</div>
```

## 📝 EJEMPLO COMPLETO

**Para index.html:**
```html
<div class="document-item carousel-item">
    <div class="doc-icon">
        <i class="fas fa-file-alt"></i>
    </div>
    <h3>Plan Estratégico 2024</h3>
    <p>Objetivos y metas para el desarrollo urbano del próximo año.</p>
    <a href="documents/plan-estrategico-2024.pdf" class="doc-download" download>Descargar PDF</a>
</div>
```

**Para documentos.html:**
```html
<div class="document-item">
    <div class="doc-icon">
        <i class="fas fa-file-alt"></i>
    </div>
    <h3>Plan Estratégico 2024</h3>
    <p>Objetivos y metas para el desarrollo urbano del próximo año, incluyendo estrategias de crecimiento y sostenibilidad.</p>
    <div class="doc-meta">
        <span class="doc-size">3.2 MB</span>
        <span class="doc-pages">28 páginas</span>
    </div>
    <a href="documents/plan-estrategico-2024.pdf" class="doc-download">Descargar PDF</a>
</div>
```

## ⚠️ IMPORTANTE
- **SIEMPRE agrega en AMBOS archivos** (index.html Y documentos.html)
- Agrega los documentos DESPUÉS del comentario indicado
- No borres los documentos existentes
- Guarda ambos archivos después de hacer cambios
- El archivo PDF debe estar en la carpeta `documents/`
- En documentos.html incluye el tamaño y número de páginas

## 🔧 ESPECIFICACIONES TÉCNICAS
- **Formato de archivo**: Solo PDF
- **Tamaño recomendado**: Máximo 10MB por archivo
- **Nombres de archivo**: Sin espacios, usar guiones (ejemplo: `mi-documento.pdf`)
- **Carpeta de destino**: `documents/`