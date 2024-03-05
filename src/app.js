const { envs } = require('./config/env')
const { startServer } = require('./server/server')

const main = ()=> {
   startServer({ 
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH 
   })
}

//funcion agnostica autoconvocada, sin nombre, se va a ejecutar
// sola

( async ()=> {
    main()
})()
