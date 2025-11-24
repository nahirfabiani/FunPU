# 📰 CÓMO AGREGAR NOVEDADES

## Pasos simples para agregar una nueva card de novedad:

### 1. Agregar en DOS archivos (IMPORTANTE)
**Debes agregar la novedad en ambos archivos para que aparezca en toda la web:**

**A) En index.html (carrusel de inicio):**
- Buscar: `<!-- ✅ AGREGAR NUEVAS NOVEDADES AQUÍ ✅ -->`
- Pegar el código justo después

**B) En novedades.html (página completa):**
- Buscar: `<!-- ✅ AGREGAR NUEVAS NOVEDADES AQUÍ ✅ -->`
- Pegar el código adaptado justo después

### 2. Código para index.html (carrusel):

```html
<article class="news-item carousel-item">
    <div class="news-image">
        <img src="img/NOMBRE-DE-TU-IMAGEN.jpg" alt="Descripción de la imagen">
    </div>
    <div class="news-content">
        <h3>TÍTULO DE TU NOVEDAD</h3>
        <p>Descripción de tu novedad aquí. Máximo 2 líneas para que se vea bien.</p>
        <span class="news-date">FECHA (ej: 25 de Enero, 2024)</span>
    </div>
</article>
```

### 3. Personalizar tu novedad:
- **NOMBRE-DE-TU-IMAGEN.jpg**: Cambia por el nombre de tu imagen (debe estar en la carpeta `img/`)
- **TÍTULO DE TU NOVEDAD**: Escribe el título de tu noticia
- **Descripción**: Escribe una descripción corta (máximo 2 líneas)
- **FECHA**: Coloca la fecha de tu novedad

### 4. Subir tu imagen:
- Guarda tu imagen en la carpeta `img/`
- Formatos recomendados: .jpg, .png
- Tamaño recomendado: 400x300 píxeles

### 3. Código para novedades.html (página completa):

```html
<article class="news-item">
    <div class="news-image">
        <img src="img/NOMBRE-DE-TU-IMAGEN.jpg" alt="Descripción de la imagen">
    </div>
    <div class="news-content">
        <h3>TÍTULO DE TU NOVEDAD</h3>
        <p>Descripción más larga de tu novedad aquí. En esta página puedes usar más texto y detalles.</p>
        <span class="news-date">FECHA (ej: 25 de Enero, 2024)</span>
    </div>
</article>
```

## ✅ Ejemplo completo:

**Para index.html:**
```html
<article class="news-item carousel-item">
    <div class="news-image">
        <img src="img/nueva-oficina.jpg" alt="Nueva oficina en Córdoba">
    </div>
    <div class="news-content">
        <h3>Apertura de Nueva Oficina en Córdoba</h3>
        <p>Inauguramos nuestra nueva sede en el centro de Córdoba.</p>
        <span class="news-date">25 de Enero, 2024</span>
    </div>
</article>
```

**Para novedades.html:**
```html
<article class="news-item">
    <div class="news-image">
        <img src="img/nueva-oficina.jpg" alt="Nueva oficina en Córdoba">
    </div>
    <div class="news-content">
        <h3>Apertura de Nueva Oficina en Córdoba</h3>
        <p>Inauguramos nuestra nueva sede en el centro de Córdoba para brindar mejor atención a nuestros clientes y expandir nuestros servicios en la región.</p>
        <span class="news-date">25 de Enero, 2024</span>
    </div>
</article>
```

## 📍 Ubicación exacta:
Busca esta línea en index.html (aproximadamente línea 95):
```html
                            </article>
                        </div>
                    </div>
```

Pega tu nueva card ANTES de `</div>` y DESPUÉS de la última `</article>`.

## ⚠️ Importante:
- Siempre haz una copia de respaldo del archivo antes de editarlo
- Mantén el mismo formato y estructura
- Las imágenes deben estar en la carpeta `img/`
- Guarda el archivo como UTF-8