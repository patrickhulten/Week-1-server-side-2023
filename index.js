
let myHTTP = require("http");


let myserver = myHTTP.createServer( 
  function( myrequest, myresponse ) {

    let mytext;
    if ( myrequest.url === "/speakeasy" ) {
      mytext = "Come on in";
    } else {
      mytext = "Who sent you?";
    }


   // 
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext + "\n" );
  }

 );

myserver.listen(8080, "0.0.0.0");

console.log("server has started");