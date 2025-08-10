# Guía de Cuidados Paliativos - UmbraMed

## Descripción

Esta herramienta integral está diseñada para apoyar tanto a profesionales médicos como a familiares y cuidadores de pacientes en cuidados paliativos. Proporciona:

### Para Médicos:
- **Verificador de Interacciones**: Analiza compatibilidad entre medicamentos para perfusiones subcutáneas
- **Generador de Protocolos**: Utiliza IA para crear guías detalladas de preparación y dosificación

### Para Familiares y Cuidadores:
- **Cartas de Apoyo**: Genera contenido personalizado con consejos prácticos y apoyo emocional
- **Guías de Cuidado**: Información comprensible sobre el proceso de cuidados paliativos

## Funcionalidades Implementadas

### Verificador de Interacciones de Medicamentos
- Base de datos de medicamentos comunes en cuidados paliativos
- Detección automática de incompatibilidades
- Alertas visuales para interacciones peligrosas

### Generación de Contenido con IA
- Protocolos de preparación de medicamentos personalizados
- Cartas de apoyo empático para familias
- Integración con Google Gemini AI

### Medicamentos Incluidos
1. Morfina
2. Midazolam  
3. Haloperidol
4. Levomepromazina
5. Butilescopolamina
6. Metoclopramida
7. Dexametasona
8. Fentanilo
9. Ketamina
10. Ondansetrón

## Configuración

### API Key de Google Gemini

Para utilizar las funciones de generación de contenido con IA, necesita configurar una API key de Google Gemini:

1. Vaya a [Google AI Studio](https://aistudio.google.com/)
2. Cree una cuenta o inicie sesión
3. Genere una nueva API key
4. Cuando use la aplicación por primera vez, se le solicitará ingresar la API key

### Instalación

1. Copie todos los archivos al servidor web
2. Asegúrese de que el servidor soporte HTTPS (requerido para las llamadas a la API)
3. No se requiere instalación adicional - funciona con HTML/CSS/JavaScript vanilla

## Estructura de Archivos

```
cuidados_paliativos.html          # Página principal
js/cuidados-paliativos.js         # Lógica principal de la aplicación
js/common.js                      # Componentes comunes (actualizado)
styles.css                        # Estilos base
```

## Uso

### Acceso
1. Navegue a `/cuidados_paliativos.html`
2. Seleccione su rol (Médico o Familiar/Cuidador)
3. Si es la primera vez usando las funciones de IA, ingrese su API key cuando se solicite

### Flujo para Médicos
1. Seleccione "Soy Médico"
2. Añada medicamentos a la perfusión usando el selector
3. El sistema detectará automáticamente interacciones
4. Si no hay interacciones, genere el protocolo de preparación

### Flujo para Familiares
1. Seleccione "Soy Familiar o Cuidador"
2. Haga clic en "Generar Carta"
3. Revise el contenido personalizado
4. Use la función de impresión si lo desea

## Características Técnicas

### Compatibilidad
- Navegadores modernos con soporte ES6+
- Responsive design para móviles y tablets
- Funciona sin dependencias externas (excepto Tailwind CSS para estilos)

### Seguridad
- La API key se almacena solo en memoria durante la sesión
- No se almacenan datos personales del paciente
- Comunicación HTTPS con la API de Google

### Rendimiento
- Carga rápida con JavaScript vanilla
- Interfaz reactiva sin frameworks
- Optimizado para conexiones lentas

## Integración con UmbraMed

Esta herramienta se integra completamente con el ecosistema UmbraMed:

- Navegación consistente con otras herramientas
- Estilos coherentes con el diseño del portal
- Sistema de autenticación compatible
- Accesible desde la página de herramientas

## Limitaciones Conocidas

- Requiere conexión a internet para funciones de IA
- La base de datos de medicamentos es limitada pero expandible
- Requiere API key válida de Google Gemini

## Soporte y Mantenimiento

Para reportar problemas o sugerir mejoras:
1. Revise la consola del navegador para errores
2. Verifique que la API key sea válida
3. Confirme que el navegador soporte las características requeridas

## Roadmap

Futuras mejoras planificadas:
- Ampliación de la base de datos de medicamentos
- Integración con sistemas hospitalarios
- Múltiples idiomas
- Funcionalidades offline
- Histórico de consultas

---

**Nota**: Esta herramienta es para apoyo profesional y no sustituye el juicio clínico. Siempre verifique las recomendaciones con fuentes oficiales y guías clínicas actualizadas.
