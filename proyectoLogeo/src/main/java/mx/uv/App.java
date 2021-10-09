package mx.uv;

import static spark.Spark.*;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        get("/hola", (rq, rs) -> {
            System.out.println("Request: " + rq.queryParams("usu") + " " + rq.queryParams("pass"));
            String msj;
            if (rq.queryParams("usu").equals("Bryan"))
                msj = "Bienvenido!" + " " + rq.queryParams("usu");
            else
                msj = "Usuario equivocado";
            //return "Hola get " + msj + " " + "<a href='//127.0.0.1:5500/formulario.html'>regresar</a>";
            return "Hola get " + msj;
            
        });
    }

}
