import Server from './classes/server';
import  router  from './routes/router';

import bodyParser from 'body-parser';
import cors from 'cors';



const server = new Server();


//body parser

server.app.use(bodyParser.urlencoded( { extended: true } ) );
server.app.use( bodyParser.json() );


//CORS
server.app.use( cors({ origin: true, credentials: true}))


server.app.use('/', router);




server.start( () => {
    console.log(`El servdior esta corriendo en: ${ server.port }`);
})