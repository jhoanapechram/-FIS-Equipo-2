// Datos de la estructura de carpetas y archivos
const data = {
    inicio: [
        {
            title: "Documentación Principal",
            type: "cards", // Especificamos que esta sección usa cards
            folders: [
                {
                    name: "1era Entrega",
                    icon: "folder-open",
                    description: "Contenido de la primera entrega del proyecto",
                    files: []
                },
                {
                    name: "Competencias",
                    icon: "graduation-cap",
                    description: "Documentación sobre competencias genéricas y específicas",
                    files: [
                        { 
                            name: "Competencias genericas y especificas_1.pdf", 
                            type: "pdf",
                            path: "Competencias/Competencias genericas y especificas_1.pdf"
                        },
                        { 
                            name: "Competencias.md", 
                            type: "md",
                            path: "Competencias/Competencias.md"
                        }
                    ]
                },
                {
                    name: "Proceso",
                    icon: "cogs",
                    description: "Documentación del proceso de desarrollo",
                    files: []
                },
                {
                    name: "Producto",
                    icon: "box",
                    description: "Información sobre el producto desarrollado",
                    files: [
                        { 
                            name: "FIS producto.pdf", 
                            type: "pdf",
                            path: "Producto/FIS producto.pdf"
                        },
                        { 
                            name: "Producto.md", 
                            type: "md",
                            path: "Producto/Producto.md"
                        },
                        { 
                            name: "Video_Presentacion.md", 
                            type: "video",
                            path: "Producto/Video_Presentacion.md"
                        }
                    ]
                },
                {
                    name: "Requisitos",
                    icon: "list-alt",
                    description: "Especificaciones y criterios de aceptación",
                    files: [
                        { 
                            name: "Caso de Uso con Criterios de Aceptacion.pdf", 
                            type: "pdf",
                            path: "Requisitos/Caso de Uso con Criterios de Aceptacion.pdf"
                        },
                        { 
                            name: "FIS_REQUISITOS.pdf", 
                            type: "pdf",
                            path: "Requisitos/FIS_REQUISITOS.pdf"
                        },
                        { 
                            name: "REQUISITOS PRIORIZACION.pdf", 
                            type: "pdf",
                            path: "Requisitos/REQUISITOS PRIORIZACION.pdf"
                        },
                        { 
                            name: "Requisitos.md", 
                            type: "md",
                            path: "Requisitos/Requisitos.md"
                        }
                    ]
                }
            ]
        }
    ],
    pruebas: [
        {
            title: "Pruebas de Desempeño",
            type: "folders",
            folders: [
                {
                    name: "Pruebas de Desempeño",
                    files: [
                        { 
                            name: "README.md", 
                            type: "md",
                            path: "Pruebas de Desempeño/README.md"
                        },
                        { 
                            name: "INFO_A_LIS.pdf", 
                            type: "pdf",
                            path: "Pruebas de Desempeño/INFO_A_LIS.pdf"
                        },
                        { 
                            name: "Infografía PD1 (1).pdf", 
                            type: "pdf",
                            path: "Pruebas de Desempeño/Infografía PD1 (1).pdf"
                        },
                        { 
                            name: "PD1.md", 
                            type: "md",
                            path: "Pruebas de Desempeño/PD1.md"
                        }
                    ]
                }
            ]
        }
    ],
    entregas: [
        {
            title: "Entregas del Proyecto",
            type: "folders",
            folders: [
                {
                    name: "1era Entrega",
                    files: [
                        { 
                            name: "Competencias genericas y especificas_1.pdf", 
                            type: "pdf",
                            path: "1era Entrega/Competencias/Competencias genericas y especificas_1.pdf"
                        },
                        { 
                            name: "Competencias.md", 
                            type: "md",
                            path: "1era Entrega/Competencias/Competencias.md"
                        },
                        { 
                            name: "FIS producto.pdf", 
                            type: "pdf",
                            path: "1era Entrega/Producto/FIS producto.pdf"
                        },
                        { 
                            name: "Producto.md", 
                            type: "md",
                            path: "1era Entrega/Producto/Producto.md"
                        },
                        { 
                            name: "Video_Presentacion.md", 
                            type: "video",
                            path: "1era Entrega/Producto/Video_Presentacion.md"
                        },
                        { 
                            name: "Caso de Uso con Criterios de Aceptacion.pdf", 
                            type: "pdf",
                            path: "1era Entrega/Requisitos/Caso de Uso con Criterios de Aceptacion.pdf"
                        },
                        { 
                            name: "FIS_REQUISITOS.pdf", 
                            type: "pdf",
                            path: "1era Entrega/Requisitos/FIS_REQUISITOS.pdf"
                        },
                        { 
                            name: "REQUISITOS PRIORIZACION.pdf", 
                            type: "pdf",
                            path: "1era Entrega/Requisitos/REQUISITOS PRIORIZACION.pdf"
                        },
                        { 
                            name: "Requisitos.md", 
                            type: "md",
                            path: "1era Entrega/Requisitos/Requisitos.md"
                        }
                    ]
                }
            ]
        }
    ]
};

// Función para obtener el icono según el tipo de archivo
function getFileIcon(type) {
    switch(type) {
        case 'pdf': return 'fa-file-pdf';
        case 'md': return 'fa-file-alt';
        case 'video': return 'fa-file-video';
        case 'word': return 'fa-file-word';
        case 'code': return 'fa-file-code';
        case 'archive': return 'fa-file-archive';
        case 'powerpoint': return 'fa-file-powerpoint';
        case 'csv': return 'fa-file-csv';
        case 'chart-bar': return 'fa-chart-bar';
        case 'chart-pie': return 'fa-chart-pie';
        default: return 'fa-file';
    }
}

// Función para generar el contenido HTML de una sección
function generateSectionContent(sectionId) {
    const sectionData = data[sectionId];
    let html = '';
    
    sectionData.forEach(category => {
        if (category.type === "cards") {
            // Generar diseño de tarjetas para la sección de inicio
            html += `<div class="documentation-grid">`;
            
            category.folders.forEach(folder => {
                html += `
                    <div class="doc-card">
                        <div class="doc-icon">
                            <i class="fas fa-${folder.icon}"></i>
                        </div>
                        <h3 class="doc-title">${folder.name}</h3>
                        <p class="doc-description">${folder.description}</p>
                        <div class="doc-files">
                `;
                
                if (folder.files.length === 0) {
                    html += `<div class="empty-message">No hay archivos disponibles</div>`;
                } else {
                    folder.files.forEach(file => {
                        const target = file.type === 'pdf' ? ' target="_blank"' : '';
                        html += `
                            <a class="file" href="${file.path}"${target}>
                                <i class="fas ${getFileIcon(file.type)}"></i> ${file.name}
                            </a>
                        `;
                    });
                }
                
                html += `</div></div>`;
            });
            
            html += `</div>`;
        } else {
            // Generar diseño de carpetas para otras secciones
            html += `
                <div class="folder-category">
                    <h3 class="category-title">${category.title}</h3>
            `;
            
            category.folders.forEach(folder => {
                html += `
                    <div class="folder" onclick="toggleFolder('${sectionId}-${folder.name.replace(/\s+/g, '-')}')">
                        <i class="fas fa-folder"></i> ${folder.name}
                    </div>
                    <div id="${sectionId}-${folder.name.replace(/\s+/g, '-')}" class="folder-content">
                `;
                
                if (folder.files.length === 0) {
                    html += `
                        <div class="file">
                            <i class="fas fa-info-circle"></i> No hay archivos
                        </div>
                    `;
                } else {
                    folder.files.forEach(file => {
                        const target = file.type === 'pdf' ? ' target="_blank"' : '';
                        html += `
                            <a class="file" href="${file.path}"${target}>
                                <i class="fas ${getFileIcon(file.type)}"></i> ${file.name}
                            </a>
                        `;
                    });
                }
                
                html += `</div>`;
            });
            
            html += `</div>`;
        }
    });
    
    return html;
}

// Función para inicializar el contenido de las secciones
function initializeSections() {
    const sections = ['inicio', 'pruebas', 'entregas'];
    
    sections.forEach(section => {
        const container = document.getElementById(`${section}-container`);
        if (container) {
            container.innerHTML = generateSectionContent(section);
        }
    });
}

// Función para cambiar entre secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remover clase active de todas las pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Activar pestaña clickeada
    event.currentTarget.classList.add('active');
}

// Función para expandir/contraer carpetas
function toggleFolder(folderId) {
    const folderContent = document.getElementById(folderId);
    const isVisible = folderContent.style.display === 'block';
    
    // Cerrar todos los folders primero (opcional)
    document.querySelectorAll('.folder-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Abrir/cerrar el folder clickeado
    folderContent.style.display = isVisible ? 'none' : 'block';
}

// Inicializar: cerrar todas las carpetas al cargar y generar contenido
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el contenido de las secciones
    initializeSections();
    
    // Cerrar todas las carpetas al cargar
    document.querySelectorAll('.folder-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Añadir event listeners a las pestañas
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
});
