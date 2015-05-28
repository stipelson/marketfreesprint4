<?php 
#Debi colocar tal cual el script de gestionar categorias aca porque de incluirlo, daba una Notice relacio-
#nado con en el session_start().
require'../scripts/gestionarProductos.php';
#++++++++++++++++++PONGO EL SCRIPT DE gestionarCategorias+++++++++++++++++
/*require_once'../modelos/CategoriaBuscar.php';
require_once'../controladores/CoordinadorSeguir.php';
$busquedaCat = new CategoriaBuscar();

$_SESSION['categorias'] = $busquedaCat->mostrarCategorias();
if(isset($_SESSION['exitoBuscarCategoria'])){
  $exitoBuscarCategoria = $_SESSION['exitoBuscarCategoria'];
}
#===========================================================
if(isset($_SESSION['exitoEditarCategoria'])){
  $exitoEditarCategoria = $_SESSION['exitoEditarCategoria'];
}
#===========================================================
if(isset($_SESSION['exitoCrearCategoria'])){
  $exitoCrearCategoria = $_SESSION['exitoCrearCategoria'];
} 
#++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  if (isset($_SESSION['exitoRegistrar'])) {
    $exitoRegistrar = $_SESSION['exitoRegistrar'];
  }
  if (isset($_SESSION['exitoModificar'])) {
    $exitoModificar = $_SESSION['exitoModificar'];
  }
  if (isset($_SESSION['eBuscar'])) {
    $eBuscar = $_SESSION['eBuscar'];
  }
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="../assets/materialize/css/materialize.min.css" type="text/css">
  <link rel="stylesheet" href="../assets/css/styles.css" type="text/css">
  <link href='http://fonts.googleapis.com/css?family=Dancing+Script:400,700' rel='stylesheet' type='text/css'/>
  <script src="../assets/jquery-2.1.3.min.js"></script>
  <script src="../assets/materialize/js/materialize.min.js"></script>
  <script src="../assets/js/styles.js"></script>
  <script type="text/javascript" src="https://www.google.com/jsapi"></script>
  <script src="../assets/js/graficasReportes.js"></script>
  <title>Desarrollo2</title>
</head>


<body>
  <?php if ((isset($_SESSION['logueado']))){
      include("barraMenu.php");
 }else{ header('Location: ../index.php');}?>    
  <?php #aca iba a $perfiles ?>
  <!--  #================================================================== -->
  <div class="container ">   
    <br>
   
    <div id="grafica_resultado"></div>

    <?php 
      if(isset($_SESSION['reporteElegido'])){
        //echo $_SESSION['reporteElegido'];

        if(isset($_GET['resultado'])){
          $resultadoObtenido = $_GET['resultado'];
          $resultado = stripslashes($resultadoObtenido);
          $resultado = urldecode($resultado);
          $resultado = unserialize($resultado);
         // var_dump($resultado);

          if(empty($resultado)){  
            echo'no se encontraron datos';
          }
          
          if($_SESSION['reporteElegido'] == 1){
            /*foreach ($resultado as $valor) {
              echo "<br>".$valor['cantidad'];  
            }*/
            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaReporteCantidadUsuarios(".json_encode($resultado).");
                  </script>";
          }else if($_SESSION['reporteElegido'] == 2){
            $ganancias = array();
            $usuario = array();
           
            foreach ($resultado as $valor) {
              //echo "<br>"."nombre: ".$valor['usuario_username']." ganancias: ".($valor['valor_unitario']*$valor['cantidad'])*$valor['porcentaje'];  
              
              if(in_array($valor['usuario_username'], $usuario) == false){
                array_push($usuario, $valor['usuario_username']);
                array_push($ganancias, ($valor['valor_unitario']*$valor['cantidad'])*$valor['porcentaje']);

              }else{
                $indice = array_search($valor['usuario_username'], $usuario);
                $ganancias[$indice] = ($ganancias[$indice]+(($valor['valor_unitario']*$valor['cantidad'])*$valor['porcentaje']));
              }  
            }

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaGananciasPorVendedor(".json_encode($usuario).", ".json_encode($ganancias).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 3){

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaVendedorVsCantidadVentas(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 4){
            /*foreach ($resultado as $valor) {
              echo "<br>"."estado: ".$valor['estado']." cantidad: ".$valor['cantidad'];  
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaComprasAprobadasVsCantidad(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 5){
            /*foreach ($resultado as $valor) {
              echo "<br>"."nombre: ".$valor['nombre']." nick: ".$valor['usuario_username']." valor: ".$valor['valor_unitario']." cantidad: ".$valor['cantidad'];  
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaArticulosPorAprobarOEnviar(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 6){
            /*foreach ($resultado as $valor) {
              echo "<br>"."id: ".$valor['id']." cantidad: ".$valor['cantidad'];  
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaPedidosSolicitadosVsCantidad(".json_encode($resultado).");
                  </script>";
          }else if($_SESSION['reporteElegido'] == 7){
            /*foreach ($resultado as $valor) {
              echo "<br>"."id: ".$valor['id']." cantidad: ".$valor['cantidad'];  
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaPedidosEnviadosVsCantidad(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 8){
            /*foreach ($resultado as $valor) {
              echo "<br>"."usuario: ".$valor['usuario_username']." ganancias: ".($valor['valor_unitario']*$valor['cantidad'])*$valor['porcentaje'];
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaGananciasPorProductosVendidos(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 9){
            /*foreach ($resultado as $valor) {
              echo "<br>"."usuario: ".$valor['nombre_usuario']." nombre: ".$valor['nombre']." ".$valor['apellidos'];
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaCompradoresDeMisProductos(".json_encode($resultado).");
                  </script>";
          }else if($_SESSION['reporteElegido'] == 10){
            /*foreach ($resultado as $valor) {
              echo "<br>"."nombre: ".$valor['nombre']." cantidad: ".$valor['cantidad'];
            }*/
            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaMisCompras(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 11){
            /*foreach ($resultado as $valor) {
              echo "<br>"."nombre: ".$valor['nombre']." cantidad: ".$valor['cantidad']." estado: ".$valor['estado']." vendedor: ".$valor['usuario_username'];
            }*/
            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaArticulosPendiaentes(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 12){
            /*foreach ($resultado as $valor) {
              echo "<br>"."nombre: ".$valor['nombre']." cantidad: ".$valor['cantidad'];
            }*/
            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaMisProductos(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 13){
            /*foreach ($resultado as $valor) {
              echo "<br>"."nombre: ".$valor['nombre']." cantidad: ".$valor['cantidad'];
            }*/
            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaMisProductosSinVender(".json_encode($resultado).");
                  </script>";

          }else if($_SESSION['reporteElegido'] == 14){
            /*foreach ($resultado as $valor) {
              echo "<br>"."categoria: ".$valor['nombre']." cantidad: ".$valor['cantidad'];
            }*/
            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaMisProductosPorCategoria(".json_encode($resultado).");
                  </script>";


          }else if($_SESSION['reporteElegido'] == 15){
            /*foreach ($resultado as $valor) {
              echo "<br>"."usuario: ".$valor['nombre_usuario']." nombre: ".$valor['nombre']." ".$valor['apellidos'];
            }*/

            echo "<script>
                    reporte = new GraficasReportes(".$_SESSION['reporteElegido'].");
                    reporte.graficaMisSeguidores(".json_encode($resultado).");
                  </script>";
          }else if($_SESSION['reporteElegido'] == 16){
            
          }else if($_SESSION['reporteElegido'] == 17){
            
          }else if($_SESSION['reporteElegido'] == 18){
            
          }
        }
      }

    ?>

  </div>
  <div class="fixed-action-btn" style="bottom: 45px; right: 45px;">
    <a class="btn-floating btn-large waves-effect waves-light red right modal-trigger tooltipped" href="#modal" data-tooltip="Nuevo Reporte"><i class="mdi-content-add"></i></a>
  </div>
  
  <div class="col s12 m8 offset-m2 l4 offset-l3 valign">
   <div id="modal" class="modal">
    <div class="card login">
      <div class="card-content">
      <!-- #==================Crear Producto===================== -->
        <span class="card-title teal-text">Elegir Reporte</span>  
        <form action="../controladores/CoordinadorReportes.php" method="POST">
          <div class="row">
            <div class="input-field col s12">                
              <select id ="reporteElegido" name = "reporteElegido">	
                <?php  
                  if($_SESSION['permisoDeGestionarPerfiles'] == 1 && $_SESSION['permisoDeGestionarUsuarios'] == 1 && $_SESSION['permisoDeVender'] == 1){
                    //El sistema mostrará al administrador por medio del Dashboard una gráfica de pastel, mostrando el número total de usuarios registrados en la aplicación, diferenciando en ella los usuarios dados de baja y los usuarios activos.
                    echo '<option value="1">usarios activos vs usuarios dados de Baja</option>';
          			    //El sistema mostrará al administrador por medio del Dashboard un diagrama de barras, en donde se apreciaran las ganancias obtenidas por las ventas de los usuarios vendedores.
                    echo '<option value="2">Ganancias obtenidas de cada vendedor</option>';
          			    //El sistema mostrará al administrador por medio del Dashboard un diagrama de barras donde se apreciará la cantidad de ventas por vendedor. (vendedor vs cantidad de ventas).
                    echo '<option value="3">vendedor vs cantidad de ventas</option>';
          			    //El sistema mostrará al administrador por medio del Dashboard un diagrama de barras (compras aprobadas vs cantidad), evidenciando la cantidad de compras que ha aprobado.
                    echo '<option value="4">compras aprobadas vs cantidad</option>';
          			    //El sistema mostrará al comprador a través del Dashboard una lista de los articulos pendientes (por aprobar o por enviar).
                    echo '<option value="5">articulos por aprobar o por enviar</option>';
        			    }
                
                  if($_SESSION['permisoDeVender'] == 1){
                    //El sistema mostrará al vendedor por medio del Dashboard una gráfica de barras (pedidos solicitados vs cantidad), mostrando cuántos pedidos ha tenido.
                    echo '<option value="6">mis pedidos solicitados vs cantidad</option>';
          			    //El sistema mostrará al vendedor por medio del Dashboard una gráfica de barras (pedidos enviados vs cantidad) con las ventas que ha realizado.
                    echo '<option value="7">mis pedidos enviados vs cantidad</option>';
          			    //El sistema mostrará al vendedor por medio del Dashboard el dato de las ganancias que este ha tendio por la venta de sus productos.
                    echo '<option value="8">mis ganacias obtenidas</option>';
          			    //El sistema presentará una lista en el Dashboard, pradores de mis productos.
                    echo '<option value="9">mis compradores</option>';
                   } 
      			    ?>

                <!--El sistema mostrará al comprador a través del Dashboard una lista mostrando la cantidad de compras que el comprador ha recibido (nombre del producto y cantidad).-->
                <option value="10">mi cantidad de compras</option>
      			    <!--El sistema mostrará al comprador a través del Dashboard una gráfica de barras (compras canceladas vs cantidad), mostrando la cantidad de compras que ha cancelado.-->

                <!--El sistema mostrará al comprador a través del Dashboard una lista de los articulos pendientes (por aprobar o por enviar).-->
                <option value="11">mis articulos pendientes</option>

                <?php 
                  if($_SESSION['permisoDeVender'] == 1){ 
          			    //El sistema mostrará en el Dashboard una lista con el nombre de de todos los productos que he creado en la aplicación, junto con su cantidad.
                    echo '<option value="12">mis productos</option>';
          			    //El sistema mostrará una lista de todos mis productos que no han sido vendidos.  
                    echo '<option value="13">mis productos disponibles</option>';
          			    //El sistema mostrará al usuario a través del Dashboard una gráfica de barras (categoria vs cantidad), mostrando la cantidad de productos que el usuario tiene por cada categoría.
                    echo '<option value="14">mis productos por categoria</option>';
      			      }
                ?>

                <!--El sistema mostrará al ususario, una lista con los nombres de los usuarios que actualmente lo siguen.-->
                <option value="15">mis seguidores</option>
                
                <?php 
                  if($_SESSION['permisoDeVender'] == 1){ 
                    //El sistema generará un documento en formato pdf que contendrá todos la informacion relacionada con la venta de ese vendedor, dicha información es la que se ha generado previamente en el Dashboard (listas, diagramas de barras, de pastel, etc.).-->
                    echo '<option value="16">generar pdf para mis reportes</option>';
                  }
                ?>

                <!--El sistema generará un documento en formato pdf que contendrá todos la informacion relacionada con la compra de ese comprador, dicha información es la que se ha generado previamente en el Dashboard (listas, diagramas de barras, de pastel, etc.).-->
                <option value="17">generar pdf para mis reportes</option>
                
                <?php  
                  if($_SESSION['permisoDeGestionarPerfiles'] == 1 && $_SESSION['permisoDeGestionarUsuarios'] == 1 && $_SESSION['permisoDeVender'] == 1){
                    //El sistema generará un documento en formato pdf que contendrá todos la informacion relacionada con actividades administrativas, dicha información es la que se ha generado previamente en el Dashboard (listas, diagramas de barras, de pastel, etc.).
                    echo '<option value="18">generar pdf para mis reportes</option>';
                  }  
                ?>
              </select>
              <!--<label for="reporteElegido">Reporte</label>-->
            </div>
          </div>  

          <!-- Boton para crear Producto -->  
          <input class="btn-flat orange-text " type="submit" value="Enviar" name="elegirReporte">
          <!--  FALTA DARLE FUNCINALIDAD PARA REGRESAR  -->
        </form><!-- Cierra formulario crear prducto -->                     
      </div>
    </div>
  </div>


  <!-- Notificacion de exito al editar -->
  <?php if (isset($_SESSION['erroresCrearProducto'])) {
      echo "<script language='javascript'> $('#modal').openModal(); </script>"; 
    } ?>
</div>

    <!--<div id="modal2" class="modal modalLogin">
      <div class="card login">
        <div class="card-content">
            <span class="card-title teal-text">Exito</span> 
            <p>Se ha creado correctamente el Producto</p> 
        </div>
          <?php /* if (isset($exitoCrearProducto)) {
             echo "<script language='javascript'> $('#modal2').openModal(); </script>"; 
             unset($_SESSION['exitoCrearProducto']);
          } */?>                      
      </div>
    </div>-->

    <div id="modal7" class="modal modalLogin">
      <div class="card login">
        <div class="card-content">
          <span class="card-title teal-text">Cambiar Contrasena</span>  
          <form action="../controladores/CoordinadorUsuario.php" method="post">   
              <?php if (isset($erroresCambiarPass)) {  ?>          
                <div class="card">
                  <div class="card-content">
                  <?php foreach ($erroresCambiarPass as $key) { ?>
                    <p><?php echo $key; ?></p>
                  <?php } ?>
                  </div>
                </div>        
              <?php } ?>           
            <div class="input-field">
              <input id="password" type="password" class="validate" name="passwordVieja">
              <label for="password">Contrasena Actual</label>
            </div> 
            <div class="input-field">
              <input id="password" type="password" class="validate" name="passwordNueva">
              <label for="password">Contrasena Nueva</label>
            </div>  
            <div class="input-field">
              <input id="password" type="password" class="validate" name="passwordNuevaC">
              <label for="password">Repite la Contrasena</label>
            </div>  
            <input class="btn-flat orange-text" type="submit" value="Guardar" name="cambiarPass">        
          </form>            
           <?php if (isset($erroresCambiarPass)) {
             echo "<script language='javascript'> $('#modal7').openModal(); </script>"; 
             unset($erroresCambiarPass);
             unset($_SESSION['eCambiarPass']);
             // header('Location: index.php');
          } ?>               
        </div>
      </div>
    </div>
</body>
</html>
