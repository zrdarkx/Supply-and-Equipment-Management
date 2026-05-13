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
=======
# Sistema de Información para la Gestión de Equipos Petroleros (SIGEP) - J&N31 A1 Importaciones C.A.

Este sistema de información fue desarrollado bajo la metodología **DSDM (Dynamic Systems Development Method)** para optimizar los procesos de control, seguimiento y mantenimiento de activos en la empresa **J&N31 A1 Importaciones C.A.**, ubicada en Maturín, Estado Monagas. Reemplaza la gestión tradicional basada en hojas de cálculo por una solución centralizada y automatizada.

## Registro y Gestión de Cuentas

### Detalles de Usuario

**Nombres y Apellidos** 

* **Género y Fecha de Nacimiento**
* **Datos de Contacto:** Teléfono y Dirección.
  
**Credenciales:** Correo electrónico y Contraseña.

**Roles del Sistema:**

* **Administrador:** Responsable de la gestión integral de la plataforma y control de registros maestros.

* **Coordinador de Suministros del Departamento:** Usuario operativo encargado de las solicitudes y gestión de inventario por oficina.

* **Asignación de Oficinas:** Los Coordinadores deben seleccionar su oficina correspondiente (previamente creada por el Administrador) al registrarse.



## Sistema de Autenticación

* Acceso mediante correo electrónico y contraseña.
* Validación de seguridad robusta a través de **Firebase Authentication** y **Firestore**.

## Roles y Permisos

### Coordinador de Suministros del Departamento

Interactúa con la plataforma para gestionar los recursos asignados a su oficina.

#### Paneles y Funcionalidades

**Transacciones:**
* Crear solicitudes mediante el formulario **RIS** (Requisición e Informe de Suministros).

**Registros:**

* **Suministros:** Tabla para visualizar formularios **ICS** y **RIS** liberados, con barra de búsqueda.

* **Equipos:** Tabla para visualizar formularios **PAR** y **RIS** liberados.

* **Historial de Solicitudes:** Paneles específicos para solicitudes Aprobadas, Rechazadas y Pendientes.

**Escáner QR (Solo Equipos):** (Falta por implementar)
* Al aprobarse una solicitud de equipo, se genera un código QR que permite visualizar detalles técnicos al ser escaneado.
* Opción de **Transferencia de Propiedad** dentro de los detalles del equipo.

### Administrador

Supervisa la información y controla los flujos de trabajo de la organización.

#### Paneles y Funcionalidades

* **Transacciones:**
* Gestión de solicitudes pendientes enviadas por los Coordinadores.
* Capacidad para **Aprobar** o **Rechazar** (con motivo de rechazo) las solicitudes.
* **Registros Maestros (CRUD):**
* Gestión completa (Crear, Leer, Actualizar, Eliminar) de **Suministros**, **Equipos** y **Oficinas**.
* Visualización de registros aprobados y formas liberadas.

## Flujo del Proceso de Transacción

1. El **Coordinador** genera una solicitud o Formulario RIS.
2. Se seleccionan materiales disponibles en el inventario maestro o se ingresan suministros/equipos únicos si es necesario.
3. El sistema separa automáticamente los ítems si la solicitud incluye tanto suministros como equipos.
4. El **Administrador** recibe la notificación en su panel de pendientes.
5. Tras la revisión, el Administrador aprueba o rechaza la solicitud.
6. **Si se aprueba:** Los artículos se asignan al registro del Coordinador y el inventario maestro se actualiza automáticamente (ajuste de stock).
7. **Si se rechaza:** El formulario regresa al Coordinador con la observación correspondiente.

## Atributos de Inventario

### Atributos de Suministros

* ID e Inventario.
* Cantidad, Unidad, Costo Unitario y Costo Total.
* Nombre y Descripción.
* Vida útil estimada.
* Referencia de Recepción (PR).
* Responsables (Coordinador y Administrador).

### Atributos de Equipos

* Cantidad, Unidad, Costo Unitario y Costo Total.
* Nombre y Descripción.
* Número de Propiedad.
* Referencia de Recepción (PR).
* Responsables (Coordinador y Administrador).

## Formatos Estándar

* **RIS:** Requisición e Informe de Suministros.
* **ICS:** Inventario de Consumo de Suministros.
* **PAR:** Propiedad, Planta y Equipo (Acta de asignación).

## Stack Tecnológico

**Frontend:** React JS, Vite, Bootstrap, HTML5, CSS3.
**Backend/Base de Datos:** Node.js y Firebase (Cloud Firestore).
>>>>>>> master
