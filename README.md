# Desafío Wayni BCRA

## Información General

Este proyecto fue creado con fines prácticos para la postulación de la vacante de Backend Developer. Consiste en la creación de un API donde se pueda enviar un archivo de deudores provistos por el Banco Central de la República Argentina.

Al enviar este archivo, se va a guardar en base de datos la información de los deudores bajo las siguientes condiciones:

* Si hay deudores repetidos se debe guardar un solo registro con la sumatoria de prestamos en el atributo `loan` y el status más alto en el atributo `status`.
* La entidad 72 está cargada a través de seeder pero se creo un middleware que crea entidades si en el archivo existen, por ende para cada entidad podría repetirse el deudor. Esto se realizó de esta manera debido a que el archivo recibido en sus primeros 5 campos viene con 00007 y no con 00072.

## Estado del proyecto

El proyecto actual se encuentro funcionando en `https://wayni-bcra.onrender.com` y lo primero que se puede observar apenas se ingresa al mismo es la documentación de Swagger, una forma de documentar y poder consumir las API's creadas:

![Image text](/images/home.png)

El el mismo podemos ver las API's para:

### Deudores

![Image text](/images/debtors.png)

* Se puede crear a través del archivo la subida masiva a la base de datos (tener en cuenta que en cada carga se borra toda la información anteriormente cargada, es un cambio no especificado al no utilizar el campo de fecha pero podría ser usado si en el futuro se quiere escalar la lógica de negocios).
* Se pueden eliminar todos los registros guardados.
* Se puede consultar todos los registros creados.
* Se puede encontrar los archivos de subida en el siguiente link: `https://github.com/rosendoalves/challenge_wayni_bcra/tree/dev/files`

### Entidades

![Image text](/images/entities.png)

* Solamente se pueden consultar las entidades y se pueden ver la sumatoria de prestamos según los deudores vinculados a la mismas.

### Modelos

![Image text](/images/schemas.png)

* Finalmente se pueden ver los modelos creados y como se confirman sus atributos.

## Requisitos

Para levantar el proyecto localmente previamente se debe tener instalado:
* Git
* Node versión > 18
* Tener el archivo `.env` en la raíz del proyecto, el mismo debe ser provisto de manera privada y sino se puede probar en la siguiente url: ```https://wayni-bcra.onrender.com```

*¡TENER EN CUENTA!* que el servidor onrender puede tardar en contestar debido a que entra estado de hibernación, por ende se debe intentar el ingreso y esperar unos minutos, debería funcionar luego de la primera petición.

## Instalación

***

```
$ git clone https://github.com/rosendoalves/challenge_wayni_bcra.git
$ cd challenge_wayni_bcra o abrir la terminal en la raíz del proyecto
$ npm install
$ npm start
```

## Lista de tecnologías

* [cors]: Version 2.8.5 
* [dotenv]: Version 16.3.1 
* [express]: Version  4.18.2
* [mongoose]: Version  8.0.3
* [morgan]: Version  1.10.0
* [multer]: Version  1.4.5-lst.1
* [swagger-jsdoc]: Version 6.2.8
* [swagger-ui-express]: Version 5.0.0

## Autor

### Rosendo Alves
### LinkedIn: https://www.linkedin.com/in/rosendoalves
### Email: rosendoalves05@gmail.com