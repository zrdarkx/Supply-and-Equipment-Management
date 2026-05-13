# Sistema de Gestión de Suministros y Equipos

## Creación de Cuenta

### Detalles

- **Nombre**
- **Apellido**
- **Género**
- **Fecha de Nacimiento**
- **Contacto**
- **Dirección**
- **Correo Electrónico**
- **Contraseña / Confirmar Contraseña**
- **Tipo de Usuario (Roles del Sistema)**
  - Coordinador de Suministros del Departamento
  - Administrador
- **(Si el Tipo de Usuario es Coordinador de Suministros del Departamento)**
  - Oficinas (Cuadro combinado)

## Sistema de Inicio de Sesión

### Detalles

- **Correo Electrónico**
- **Contraseña**

## Roles

### Coordinador de Suministros del Departamento

Los Coordinadores de Suministros del Departamento tienen oficinas designadas y pueden seleccionarlas durante la creación de la cuenta. Los datos de las oficinas son generados por el Administrador.

#### Páginas / Paneles

- **Transacciones**
  - Crear Formulario o Solicitud SEM (Consulta el Flujo de Proceso de Transacciones)
- **Registros**
  - Suministros (Tabla con columnas para ver el RCI y el SEM liberados, Barra de Búsqueda)
  - Equipos (Tabla con columnas para ver el RRB y el SEM liberados, Barra de Búsqueda)
  - Formulario SEM Aprobado o Solicitud (Tabla, Barra de Búsqueda)
  - Formulario SEM Desaprobado / Rechazado o Solicitud (Tabla, Barra de Búsqueda)
  - Formulario SEM Pendiente o Solicitud (Tabla, Barra de Búsqueda)
- **Otra Página: Página de Escáner QR** (Aplicable solo al Equipo)
  - Cuando se aprueba la solicitud de equipo, se genera un código QR que se puede escanear para proporcionar detalles sobre el equipo.
  - Un botón para la Transferencia de Propiedad en los Detalles.

### Administrador

Los administradores gestionan los registros maestros y manejan las solicitudes de los Coordinadores de Suministros del Departamento.

#### Páginas / Paneles

- **Transacciones**
  - Ver Solicitudes Pendientes (El administrador puede ver las solicitudes creadas por los Coordinadores de Suministros del Departamento)
  - El administrador tiene botones para Rechazar y Aprobar (Consulta el Flujo de Proceso de Transacciones)
- **Registros Maestros**
  - Suministros (Tabla, CRUD)
  - Equipo (Tabla, CRUD)
  - Oficinas (Tabla, CRUD)
  - Solicitudes Aprobadas (Tabla con columnas para ver los formularios liberados, CRUD)

## Flujo de Proceso de Transacciones

1. El Coordinador de Suministros del Departamento crea un Formulario o Solicitud SEM.
2. Puede elegir suministros o equipos disponibles de los registros del administrador. Si no están disponibles, puede ingresar un suministro o equipo único.
3. El Formulario SEM se envía al administrador.
4. Si el Formulario SEM contiene categorías de Suministros y Equipo, el sistema los separará automáticamente.
5. El administrador recibe el Formulario SEM en el panel de Solicitud Pendiente.
6. El administrador puede aprobar o rechazar el Formulario SEM.
7. Si se aprueba, los artículos solicitados se agregan a los registros del Coordinador de Suministros del Departamento y las cantidades se ajustan en los registros del administrador.
8. Si se rechaza, el Formulario SEM se devuelve al Coordinador de Suministros del Departamento con una razón de rechazo.

## Atributos de Suministros

- **ID**
- **Cantidad**
- **Unidad**
- **Costo Unitario**
- **Costo Total**
- **Nombre**
- **Descripción**
- **Vida útil estimada**
- **PR (Recibo / Nombre de Compra)**
- **Nombre del Oficial de Suministros del Departamento**
- **Nombre del Administrador**
- **Número de Inventario**

## Atributos de Equipo

- **Cantidad**
- **Unidad**
- **Costo Unitario**
- **Costo Total**
- **Nombre**
- **Descripción**
- **PR (Recibo / Nombre de Compra)**
- **Nombre del Oficial de Suministros del Departamento**
- **Nombre del Administrador**
- **Número de Bien**

## Formularios

- **FORMULARIO SEM**
- **FORMULARIO RCI**
- **FORMULARIO RRB**

## Tecnologías

- **Frontend**: HTML, CSS, BOOTSTRAP, React JS
- **Backend**: Base de datos de Firebase (Firestore)

## Glosario de Acrónimos

- **SEM**: Solicitud y Entrega de Materiales
- **RCI**: Recibo de Custodia de Inventario
- **RRB**: Recibo de Reconocimiento de Bienes
- **CRUD**: Create, Read, Update, Delete (Crear, Leer, Actualizar, Eliminar)
