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



var correo;
var id;

var btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", () => {
    axios.post("http://localhost:4567/enviar", {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    })
        .then(function (res) {
            alert("Usuario:" + res.data.status + " id:" + res.data.id);
            correo = document.getElementById("email").value;
            id = res.data.id;
        })
        .catch(function (error) {
            console.log(error)
        })
});



var btnLista = document.getElementById("btnLista");
btnLista.addEventListener("click", () => {
    let params = new URLSearchParams();
    params.append("email", correo);
    params.append("id", id);
    window.location.replace("http://127.0.0.1:5500/lista.html?" + params);
});

var btnTabla = document.getElementById("btnTabla");
btnTabla.addEventListener("click", () => {
    axios.get("http://localhost:4567/usuarios")
        .then(function (res) {
            let json = res.data;
            let listaTareas = document.getElementById("usuarios");
            for (var clave in json) {
                // Controlando que json realmente tenga esa propiedad
                if (json.hasOwnProperty(clave)) {
                    // Mostrando en pantalla la clave junto a su valor
                    // alert("La clave es " + clave + " y el valor es " + json[clave]);
                    let tarea = document.createElement("li");
                    tarea.textContent = clave + " " + json[clave].email;
                    listaTareas.appendChild(tarea);
                }
            }
        })
        .catch()
})

var btnRedireccion = document.getElementById("btnRedireccion");
btnRedireccion.addEventListener("click", () => {
    window.location.replace("http://localhost:4567/hola");
});
