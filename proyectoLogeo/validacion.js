// defino dos constantes que recuperan los valores del formulario
//var email = document.getElementById("exampleInputEmail1").value;
//var pass = document.getElementById("exampleInputPassword1").value;

// ******************* LOGIN.HTML ***********************************
// uso del llamado post con parámetros en json
var BotonValidar = document.getElementById("validar");
BotonValidar.addEventListener("click", function () {
    var params = new URLSearchParams();
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    params.append("usu", usuario);
    params.append("pass", password);
    console.log("---------------------------------------")
    console.log("{" + "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'}");
    //var params2 = "{" + "name:'" + params.get("nombre") + "'," + "pass:'" + params.get("pass") + "'}";  // forma de equívoca de construir el objeto, ya que le sobran las llaves
    var params3 =  "name:'" + params.get("usu") + "'," + "pass:'" + params.get("pass") + "'";
    /*axios.post("http://localhost:4567/hola?", { "usu": params.get("usu"), pass: params.get("pass") } )
        .then(function (rs) {
            console.log(rs.data);
            alert(rs.data)
        })
        .catch(function (error) {
            console.log(error);
        });*/

        //Validar si los datos son correctos y no se dejo ningun campo vacio en el login
         
        if(params.get("usu") == "" || params.get("pass")==""){
            window.alert('No puede dejar campos vacios')
            console.log('el campo contraseña es obligatorio')
            evt.preventDefault();
            return false;
        }else{
        if(params.get("usu") == "Bryan"){
            if(params.get("pass") == "123456789"){
                console.log("Si entro a los if´s");
                window.location.replace('ListaUsuarios.html'); //Me redirige a la pagina que deseo si se cumple la condicion.
            }else{
                window.alert('Password incorrecto') 
            }
        }else{
            window.location.replace('Registrarse.html');  //Me redirige a la pagina que deseo si se cumple la condicion.
             
        }
       }

});
