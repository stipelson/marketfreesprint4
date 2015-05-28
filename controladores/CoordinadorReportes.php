<?php
	/**
	* 	Esta clase se encarga de manejar los distintos reportes 
	*/

require_once '../modelos/Reportes.php';

class CoordinadorReportes
{
	private $modeloReportes;
	
	function __construct()
	{
		$this->modeloReportes = new Reportes();
	}

	/**
	 * [obtenerSeguidos description]
	 * Devuelve un array con los usuarios a quien el parametro de entrada esta siguiendo
	 * @param  [String] $nombreUsuario	[Es el nombre del usuario]
	 */
	public function obtenerReporteCantidadUsuarios()
	{
		return $this->modeloReportes->usuariosRegistrados();
	}

	public function obtenerGananciasPorVendedor()
	{
		return $this->modeloReportes->gananciasPorVendedor();
	}

	public function obtenerVendedorVsCantidadVentas()
	{
		return $this->modeloReportes->vendedorVsCantidadVentas();
	}

	public function obtenerComprasAprobadasVsCantidad()
	{
		return $this->modeloReportes->comprasAprobadasVsCantidad();
	}

	public function obtenerArticulosPorAprobarOEnviar()
	{
		return $this->modeloReportes->articulosPorAprobarOEnviar();
	}

	public function obtenerPedidosSolicitadosVsCantidad()
	{
		return $this->modeloReportes->pedidosSolicitadosVsCantidad($_SESSION['user']);
	}

	public function obtenerPedidosEnviadosVsCantidad()
	{
		return $this->modeloReportes->pedidosEnviadosVsCantidad($_SESSION['user']);
	}

	public function obtenerGananciasPorProductosVendidos()
	{
		return $this->modeloReportes->gananciasPorProductosVendidos($_SESSION['user']);
	}

	public function obtenerCompradoresDeMisProductos()
	{
		return $this->modeloReportes->compradoresDeMisProductos($_SESSION['user']);
	}

	public function obtenerMisCompras()
	{
		return $this->modeloReportes->misCompras($_SESSION['user']);
	}

	public function obtenerArticulosPendiaentes()
	{
		return $this->modeloReportes->articulosPendiaentes($_SESSION['user']);
	}

	public function obtenerMisProductos()
	{
		return $this->modeloReportes->misProductos($_SESSION['user']);
	}

	public function obtenerMisProductosSinVender()
	{
		return $this->modeloReportes->misProductosSinVender($_SESSION['user']);
	}

	public function obtenerMisProductosPorCategoria()
	{
		return $this->modeloReportes->misProductosPorCategoria($_SESSION['user']);
	}

	public function obtenerMisSeguidores()
	{
		return $this->modeloReportes->misSeguidores($_SESSION['user']);
	}
}

if(isset($_POST['reporteElegido'])){
	//echo $_POST['reporteElegido'];
	
	session_start();
	$_SESSION['reporteElegido'] = $_POST['reporteElegido'];
	$reporte = new CoordinadorReportes(); 
	
	if($_POST['reporteElegido'] == 1){
		$resultado = serialize($reporte->obtenerReporteCantidadUsuarios());
	
	}else if($_POST['reporteElegido'] == 2){
		$resultado = serialize($reporte->obtenerGananciasPorVendedor());

    }else if($_POST['reporteElegido'] == 3){
    	$resultado = serialize($reporte->obtenerVendedorVsCantidadVentas());

    }else if($_POST['reporteElegido'] == 4){
    	$resultado = serialize($reporte->obtenerComprasAprobadasVsCantidad());

    }else if($_POST['reporteElegido'] == 5){
    	$resultado = serialize($reporte->obtenerArticulosPorAprobarOEnviar());

    }else if($_POST['reporteElegido'] == 6){
    	$resultado = serialize($reporte->obtenerPedidosSolicitadosVsCantidad());

    }else if($_POST['reporteElegido'] == 7){
    	$resultado = serialize($reporte->obtenerPedidosEnviadosVsCantidad());

    }else if($_POST['reporteElegido'] == 8){
    	$resultado = serialize($reporte->obtenerGananciasPorProductosVendidos());

    }else if($_POST['reporteElegido'] == 9){
    	$resultado = serialize($reporte->obtenerCompradoresDeMisProductos());

    }else if($_POST['reporteElegido'] == 10){
    	$resultado = serialize($reporte->obtenerMisCompras());

    }else if($_POST['reporteElegido'] == 11){
    	$resultado = serialize($reporte->obtenerArticulosPendiaentes());

    }else if($_POST['reporteElegido'] == 12){
    	$resultado = serialize($reporte->obtenerMisProductos());

    }else if($_POST['reporteElegido'] == 13){
    	$resultado = serialize($reporte->obtenerMisProductosSinVender());

    }else if($_POST['reporteElegido'] == 14){
    	$resultado = serialize($reporte->obtenerMisProductosPorCategoria());

    }else if($_POST['reporteElegido'] == 15){
    	$resultado = serialize($reporte->obtenerMisSeguidores());
    	
    }else if($_POST['reporteElegido'] == 16){

    }else if($_POST['reporteElegido'] == 17){

    }else if($_POST['reporteElegido'] == 18){

    }

	$resultado = urlencode($resultado);
	header('Location: ../vistas/mostrarReportes.php?resultado='.$resultado);
}

?>




