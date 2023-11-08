<template>
    <div class="exp-grid w-100% observing">
        
        <div class="items-center grid-container w-100%">
            <Box :corners="4" class="invert-color">
                <template #content>
                    <div class="p-10px pl-20px pr-20px">
                        <h3 class="invert-color">ESTUDIOS</h3>
                        <div class="flex gap-16px">
                            <Tag text="UCAM" />
                            <Tag text="2016-2018" />
                        </div>
                        <p class="invert-color max-w-500px">Formación profesional superior de desarrollo de aplicaciones web</p>
                    </div>
                </template>
            </Box>
            <Box :corners="4" class="invert-color ">
                <template #content>
                    <div class="p-10px pl-20px pr-20px">
                        <h3 class="invert-color">CURSOS</h3>
                        <div class="flex gap-16px">
                            <Tag text="UDEMY" />
                        </div>
                        <p class="invert-color max-w-500px">Cursos de diseño de interfaces, patrones de diseño y clean code</p>
                    </div>
                </template>
            </Box>
        </div>
        
        <Box :corners="4" class="invert-color mt-20px">
            <template #content>
                <div class="p-10px pl-20px pr-20px">
                    <h3 class="invert-color">DESARROLLADOR FULL-STACK</h3>
                    <div class="flex gap-16px">
                        <Tag text="COMANET" />
                        <Tag text="2018-2023" />
                    </div>
                    <ul class="invert-color">
                        <li>He realizado diseño de interfaces de usuario y maquetación.</li>
                        <li>He desarrollado servicios y paneles de datos (dashboard) para gestión de pólizas de seguros, generación de documentos legales y cálculos de primas.</li>
                        <li>He creado aplicaciones para Android e iOS como portal de gestión para pólizas de seguros.</li>
                        <li>He hecho plantillas, temas y componentes con Vue para aumentar la productividad.</li>
                        <li>Gestión bases de datos.</li>
                        <li>Despliegue en Windows Server</li>
                        <li>Investigación de nuevas tecnologías para aumentar la productividad.</li>
                        <li>Mantenimiento y despliegue de CMS como WordPress.</li>
                        <li>Creación de animaciones con SVG.</li>
                        <li>Atención al cliente</li>
                    </ul>
                </div>
            </template>
        </Box>
    </div>
</template>

<style scoped>
.exp-grid {
    opacity: 0;
}

.exp-grid.visible {
    opacity: 1;
    transition: opacity 1.6s;
}
</style>