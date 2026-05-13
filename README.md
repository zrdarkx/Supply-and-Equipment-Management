Este es el archivo `README.md` editado y traducido al español, integrando la terminología técnica y el contexto institucional de tu trabajo de grado:

# Sistema de Información para la Gestión de Equipos Petroleros (SIGEP) - J&N31 A1 Importaciones C.A.

Este sistema de información fue desarrollado bajo la metodología **DSDM (Dynamic Systems Development Method)** para optimizar los procesos de control, seguimiento y mantenimiento de activos en la empresa **J&N31 A1 Importaciones C.A.**, ubicada en Maturín, Estado Monagas. Reemplaza la gestión tradicional basada en hojas de cálculo por una solución centralizada y automatizada.

## Registro y Gestión de Cuentas

### Detalles de Usuario

* 
**Nombres y Apellidos** 


* **Género y Fecha de Nacimiento**
* **Datos de Contacto:** Teléfono y Dirección.
* 
**Credenciales:** Correo electrónico y Contraseña (con validación en tiempo real).


* **Roles del Sistema:**
* 
**Administrador:** Responsable de la gestión integral de la plataforma y control de registros maestros.
* 
**Coordinador de Suministros del Departamento:** Usuario operativo encargado de las solicitudes y gestión de inventario por oficina.
* 
**Asignación de Oficinas:** Los Coordinadores deben seleccionar su oficina correspondiente (previamente creada por el Administrador) al registrarse.



## Sistema de Autenticación

* Acceso mediante correo electrónico y contraseña.
* Validación de seguridad robusta a través de **Firebase Authentication** y **Firestore**.

## Roles y Permisos

### Coordinador de Suministros del Departamento

Interactúa con la plataforma para gestionar los recursos asignados a su oficina.

#### Paneles y Funcionalidades

* **Transacciones:**
* Crear solicitudes mediante el formulario **RIS** (Requisición e Informe de Suministros).

* **Registros:**
* 
**Suministros:** Tabla para visualizar formularios **ICS** y **RIS** liberados, con barra de búsqueda.

* 
**Equipos:** Tabla para visualizar formularios **PAR** y **RIS** liberados.

* 
**Historial de Solicitudes:** Paneles específicos para solicitudes Aprobadas, Rechazadas y Pendientes.

* **Escáner QR (Solo Equipos):**
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

* 
**Frontend:** React JS, Vite, Bootstrap, HTML5, CSS3.
* 
**Backend/Base de Datos:** Node.js y Firebase (Cloud Firestore).
