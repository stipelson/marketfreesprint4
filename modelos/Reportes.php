<?php

require_once '../libs/rb.php';
require_once 'ConexionBD.php';
class Reportes
{

	function __construct() {

	}

	//Funcion para mostrar el numero de usuarios registrados en el sistema --> reporte 1
	public function usuariosRegistrados()
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT count(estado) cantidad FROM usuario GROUP BY estado' );
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para mostrar las ganancias obtenidas por cada vendedor --> reporte 2 (HU 1 CA 1)
	public function gananciasPorVendedor()
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT p.usuario_username, c.porcentaje, p.valor_unitario, d.cantidad
								FROM factura f, detalle d, producto p, comision c
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND f.id_comision = c.id AND (f.estado ="Recibido" OR f.estado = "enviado")
								GROUP BY p.id
								ORDER BY p.usuario_username');
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para mostrar las cantidas de ventas por vendedor --> reporte 3
	public function vendedorVsCantidadVentas()
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT p.usuario_username, SUM(d.cantidad) AS cantidad
								FROM factura f, detalle d, producto p, comision c
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND f.id_comision = c.id AND (f.estado ="Recibido" OR f.estado = "enviado")
								GROUP BY p.usuario_username
								ORDER BY p.usuario_username' );
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para mostrar las compras aprobadas contra las solicitadas --> reporte 4
	public function comprasAprobadasVsCantidad()
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT estado, COUNT(estado) cantidad
								FROM factura
								WHERE estado <> "pendiente"
								GROUP BY estado' );
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para mostrar los articulos que faltan por aporbar o enviar --> reporte 5
	public function articulosPorAprobarOEnviar()
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT p.nombre, p.usuario_username, c.porcentaje, p.valor_unitario, d.cantidad
								FROM factura f, detalle d, producto p, comision c
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND f.id_comision = c.id AND f.estado = "pendiente"
								GROUP BY p.id
								ORDER BY p.nombre' );
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para cuantos pedidos ha tenido un usuario --> reporte 6
	public function pedidosSolicitadosVsCantidad($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT f.id, SUM(d.cantidad) cantidad
								FROM factura f, detalle d, producto p
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND p.usuario_username = ? AND f.estado != "pendiente"
								GROUP BY f.id
								ORDER BY p.usuario_username', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para saber la cantidad de pedidos enviados --> reporte 7
	public function pedidosEnviadosVsCantidad($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT f.id, SUM(d.cantidad) cantidad
								FROM factura f, detalle d, producto p
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND (f.estado = "enviado" OR f.estado = "Recibido") AND p.usuario_username = ?
								GROUP BY f.id
								ORDER BY p.usuario_username', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver la ganancias de ventas de un usuario --> reporte 8
	public function gananciasPorProductosVendidos($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT p.nombre, p.usuario_username, c.porcentaje, p.valor_unitario, d.cantidad
								FROM factura f, detalle d, producto p, comision c
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND f.id_comision = c.id AND (f.estado = "enviado" OR f.estado = "Recibido") AND p.usuario_username = ?
								GROUP BY p.id
								ORDER BY p.usuario_username', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver los compradores de mis productos --> reporte 9
	public function compradoresDeMisProductos($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT nombre_usuario, nombre, apellidos
								FROM usuario
								WHERE id IN(
								SELECT f.id_cliente
								FROM factura f, detalle d, producto p
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND(f.estado = "enviado" OR f.estado = "Recibido") AND p.usuario_username = ?
								GROUP BY f.id_cliente)', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver la cantidad de compras realizadas por el usuario --> reporte 10
	public function misCompras($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT p.nombre, d.cantidad
								FROM factura f, detalle d, producto p, usuario u
								WHERE f.id = d.id_factura AND p.id = d.id_producto AND f.estado = "Recibido" AND u.id = f.id_cliente AND u.nombre_usuario = ?
								GROUP BY d.id
								ORDER BY p.usuario_username', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver la cantidad de articulos pendientes por aprobar o por enviar --> reporte 11
	public function articulosPendiaentes($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT f.id, p.nombre, d.cantidad, f.estado, p.usuario_username
								FROM factura f, detalle d, producto p, usuario u
								WHERE f.id = d.id_factura AND p.id = d.id_producto  AND f.estado <> "enviado" AND f.estado <> "Recibido" AND u.id = f.id_cliente AND u.nombre_usuario = ?
								ORDER BY p.usuario_username', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver la lista de productos de un usuario --> reporte 12
	public function misProductos($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT nombre, cantidad
								FROM producto
								WHERE usuario_username = ?', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver la lista de productos sin vender de un usuario --> reporte 13
	public function misProductosSinVender($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT nombre, cantidad
								FROM producto
								WHERE usuario_username = ? AND cantidad <> 0', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
	//Funcion para ver la cantidad de productos por categoria de un usuario --> reporte 14
	public function misProductosPorCategoria($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT c.nombre, SUM(p.cantidad) cantidad
								FROM categoria c, producto p
								WHERE c.id = p.categoria_id AND p.usuario_username = ?
								GROUP BY c.id', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}

	//Funcion para ver la lista de seguidores de un usuario --> reporte 15
	public function misSeguidores($usuario_username)
	{
		R::selectDatabase('default');#Se selecciona la BD por default (tienda.sql)
		$resultado = R::getAll( 'SELECT u.nombre_usuario, u.nombre, u.apellidos
								FROM usuario u, seguir s
								WHERE u.id = s.seguidor AND s.estado = 1 AND s.seguido IN(
								SELECT id
								FROM usuario u
								WHERE u.nombre_usuario = ?)', [$usuario_username]);
		R::close();#se cierra el almacén de Beans
		return $resultado;
	}
}


?>