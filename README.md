En esta rama he instalado una fake api para que la tengáis de ejemplo con un CRUD completo. En el router hay unos "cargadores de datos" para cada vista, cada ruta tiene un loader cuya función está definida más abajo. Eso permite que los datos se carguen en las vistas usando el hook useLoaderData, que es simplifica mucho el código.

Es como una capa más en el viaje de los datos desde el archivo json hasta el frontend cuando se hace un método GET. Si al principio habíamos visto que este flujo era:

COMPONENTE >>llama a>> HANDLER >>llama a> SERVICE >>llama a>> archivo.JSON

COMPONENTE (useLoaderData) >>llama a>> LOADER (en router) >>llama a>> HANDLER >>llama a>> SERVICE >>llama a>> archivo.JSON


 Si preferís usar useState como hasta ahora o cualquier otra manera, comentad esos loader del router, sus funciones y el useLoaderData() de los componentes y hacedlo como queráis.

 En el componente Detailview hay comentado un ejemplo de cómo sería el código si no usáramos este useLoaderData.

El método delete funciona tanto en las cards como en la vista de card individual, el registro se borra del archivo json, pero hay que recargar la página manualmente para que desaparezca la card del frontend. Estoy trabajando en ese detalle!!

Ánimo!!! 

