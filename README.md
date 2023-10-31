# blog-express-sqlite
 
## Iniciar Api Blog (DEV)
1. Clonar repositorio
2. Ejecutar el comando  ```npm i```
3. Iniciar api en modo dev  ``` npm run dev```

## Iniciar Api Blog (PROD)
1. Clonar repositorio
2. Ejecutar el comando  ```npm i```
3. Build api  ``` npm run build```
4. Iniciar ```npm run start```
## Stack

**Server:** Node, Express, Sqlite

## AGREGAR TYPE REQUEST PERSONALIZADO DE EXPRESS
1. crear estructura para @types
   1. crear carpeta dentro de modules "@types/express/index.d.ts"
   2. modificar tsconfig.json
    ``` "typeRoots": [
      "./modules/@types",
      "./node_modules/@types"
    ]
    ```
2. editar auth service agregando antes de Next() ```req.usuario = decode.usuario```
3. dentro del servicio crear noticia leer req.usuario por ejemplo imprimir en el log ```req.usuario.nombre```
