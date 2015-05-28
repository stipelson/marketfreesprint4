function GraficasReportes(reporte){

	var reporte = reporte;
	//alert(reporte);
	
	this.graficaReporteCantidadUsuarios = function(resultado){
		
		google.load('visualization', '1.0', {'packages':['corechart']});
		google.setOnLoadCallback(dibujaGrafica);

		function dibujaGrafica() {

			var data = new google.visualization.DataTable();
			datos = [];
			datos.push(['Usuarios Dados de Baja '+resultado[0].cantidad , parseInt(resultado[0].cantidad)]);
			datos.push(['Usuarios Activos '+resultado[1].cantidad , parseInt(resultado[1].cantidad)]);
				
			data.addColumn('string', 'Dadods de baja');
			data.addColumn('number', 'Activos');
			data.addRows(datos);

			var opciones = {'title':'Usuarios Activos VS Usuarios Dados de Baja',
			'width':800,
			'height':600};

			var chart = new google.visualization.PieChart(document.getElementById('grafica_resultado'));
			chart.draw(data, opciones);
		}
	}

	this.graficaGananciasPorVendedor = function(usuario_username, ganancias){

			google.load("visualization", "1", {packages:["corechart"]});
		    google.setOnLoadCallback(dibujarGrafico);
		    function dibujarGrafico() {
			     // Tabla de datos: valores y etiquetas de la grÃ¡fica
			    datos = [['Nombre de Usuario', 'Ganancias']];
				for (indice in usuario_username) {
				 	datos.push([usuario_username[indice], ganancias[indice]]);   
				}
				
				 var data = google.visualization.arrayToDataTable(datos);
			     var options = {
			       title: 'Ganacias Obtenidas Por Vendedor'
			     }
			     // Dibujar el grÃ¡fico
			     new google.visualization.ColumnChart( 
			       document.getElementById('grafica_resultado')
			     ).draw(data, options);
		    }
	}

	this.graficaVendedorVsCantidadVentas = function(resultado){

		google.load("visualization", "1", {packages:["corechart"]});
	    google.setOnLoadCallback(dibujarGrafico);
	    function dibujarGrafico() {
		     // Tabla de datos: valores y etiquetas de la grÃ¡fica
		    datos = [['Nombre de Usuario', 'Cantidad']];
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push([resultado[indice].usuario_username, cantidad]);   
			}
			
			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Cantidad de Ventas Realizadas Por Vendedor'
		     }
		     // Dibujar el grÃ¡fico
		     new google.visualization.ColumnChart( 
		       document.getElementById('grafica_resultado')
		     ).draw(data, options);
	    }
	}

	this.graficaComprasAprobadasVsCantidad = function(resultado){
		
		google.load("visualization", "1", {packages:["corechart"]});
	    google.setOnLoadCallback(dibujarGrafico);
	    function dibujarGrafico() {
		     // Tabla de datos: valores y etiquetas de la grÃ¡fica
		    datos = [['Estado', 'Cantidad']];
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push([resultado[indice].estado, cantidad]);   
			}
			
			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Cantidad de Compras Aprobadas'
		     }
		     // Dibujar el grÃ¡fico
		     new google.visualization.ColumnChart( 
		       document.getElementById('grafica_resultado')
		     ).draw(data, options);
	    }
	}

	this.graficaArticulosPorAprobarOEnviar = function(resultado){

    	var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
                tabla += '<caption>Listado de Articulos Pendientes</caption>';
                tabla += '<thead>';
                tabla += '<tr>';
                tabla += '<th>Nombre</th><th>Vendedor</th><th>Valor Unitario</th><th>Cantidad</th><th>Total</th>';
                tabla += '</tr>';
                tabla += '</thead>';
                tabla += '<tbody>';
                tr = '';
                for (indice in resultado) {
					tr += '<tr>';
                    tr += '<td>'+resultado[indice].nombre+'</td><td>'+resultado[indice].usuario_username+'</td><td>'+resultado[indice].valor_unitario+'</td><td>'+resultado[indice].cantidad+'</td><td>'+parseInt(resultado[indice].cantidad)*parseInt(resultado[indice].valor_unitario)+'</td>';
                    tr += '</tr>';
				}
 
                tabla += tr;
                tabla += '</tbody></table>';
 
        $('#grafica_resultado').html( tabla );
	}

	this.graficaPedidosSolicitadosVsCantidad = function(resultado){
		
		google.load("visualization", "1", {packages:["corechart"]});
	    google.setOnLoadCallback(dibujarGrafico);
	    function dibujarGrafico() {
		     // Tabla de datos: valores y etiquetas de la grÃ¡fica
		    datos = [['Numero Pedido', 'Cantidad']];
		    var id = 1;
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push(["Venta "+id, cantidad]);
			 	id++;   
			}
			
			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Mis Pedidos Solicitados'
		     }
		     // Dibujar el grÃ¡fico
		     new google.visualization.ColumnChart( 
		       document.getElementById('grafica_resultado')
		     ).draw(data, options);
	    }
	}

	this.graficaPedidosEnviadosVsCantidad = function(resultado){
		
		google.load("visualization", "1", {packages:["corechart"]});
	    google.setOnLoadCallback(dibujarGrafico);
	    function dibujarGrafico() {
		     // Tabla de datos: valores y etiquetas de la grÃ¡fica
		    datos = [['Numero Pedido', 'Cantidad']];
		    var id = 1;
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push(["Pedido "+id, cantidad]);
			 	id++;   
			}
			
			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Mis Pedidos Enviados'
		     }
		     // Dibujar el grÃ¡fico
		     new google.visualization.ColumnChart( 
		       document.getElementById('grafica_resultado')
		     ).draw(data, options);
	    }
	}

	this.graficaGananciasPorProductosVendidos = function(resultado){
		
		google.load("visualization", "1", {packages:["corechart"]});
	    google.setOnLoadCallback(dibujarGrafico);
	    function dibujarGrafico() {
		     // Tabla de datos: valores y etiquetas de la grÃ¡fica
		    datos = [['Nombre', 'Ganancia']];
			for (indice in resultado) {
				ganancia = (parseInt(resultado[indice].cantidad)*parseInt(resultado[indice].valor_unitario))*parseInt(resultado[indice].porcentaje);
			 	datos.push([resultado[indice].nombre, ganancia]);  
			}
			
			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Ganancia por Producto Vendido'
		     }
		     // Dibujar el grÃ¡fico
		     new google.visualization.ColumnChart( 
		       document.getElementById('grafica_resultado')
		     ).draw(data, options);
	    }
	}

	this.graficaCompradoresDeMisProductos = function(resultado){
		var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
            tabla += '<caption>Listado de Mis Compradores</caption>';
            tabla += '<thead>';
            tabla += '<tr>';
            tabla += '<th>Nombre Usuario</th><th>Nombre y Apellidos</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
            tr = '';
            for (indice in resultado) {
				tr += '<tr>';
                tr += '<td>'+resultado[indice].nombre_usuario+'</td><td>'+resultado[indice].nombre+" "+resultado[indice].apellidos+'</td>';
                tr += '</tr>';
			}

            tabla += tr;
            tabla += '</tbody></table>';
 
        $('#grafica_resultado').html(tabla);
	}

	this.graficaMisCompras = function(resultado){
		var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
            tabla += '<caption>Listado de Mis Compras</caption>';
            tabla += '<thead>';
            tabla += '<tr>';
            tabla += '<th>Nombre Producto</th><th>Cantidad</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
            tr = '';
            for (indice in resultado) {
				tr += '<tr>';
                tr += '<td>'+resultado[indice].nombre+'</td><td>'+resultado[indice].cantidad+'</td>';
                tr += '</tr>';
			}

            tabla += tr;
            tabla += '</tbody></table>';
 
        $('#grafica_resultado').html(tabla);
	}

	this.graficaArticulosPendiaentes = function(resultado){

		var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
            tabla += '<caption>Listado de Mis Compras Pendientes </caption>';
            tabla += '<thead>';
            tabla += '<tr>';
            tabla += '<th>Nombre Producto</th><th>Cantidad</th><th>Estado</th><th>Vendedor</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
            tr = '';
            for (indice in resultado) {
				tr += '<tr>';
                tr += '<td>'+resultado[indice].nombre+'</td><td>'+resultado[indice].cantidad+'</td><td>'+resultado[indice].estado+'</td><td>'+resultado[indice].usuario_username+'</td>';
                tr += '</tr>';
			}

            tabla += tr;
            tabla += '</tbody></table>';
 
        $('#grafica_resultado').html(tabla);
		//alert("reporte1");
	}

	this.graficaMisProductos = function(resultado){
		var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
            tabla += '<caption>Listado de Mis Productos </caption>';
            tabla += '<thead>';
            tabla += '<tr>';
            tabla += '<th>Nombre Producto</th><th>Cantidad</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
            tr = '';
            for (indice in resultado) {
				tr += '<tr>';
                tr += '<td>'+resultado[indice].nombre+'</td><td>'+resultado[indice].cantidad+'</td>';
                tr += '</tr>';
			}

            tabla += tr;
            tabla += '</tbody></table>';
 
        $('#grafica_resultado').html(tabla);
		//alert("reporte1");
	}

	this.graficaMisProductosSinVender = function(resultado){
		var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
            tabla += '<caption>Listado de Mis Productos con Unidades Disponibles</caption>';
            tabla += '<thead>';
            tabla += '<tr>';
            tabla += '<th>Nombre Producto</th><th>Cantidad</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
            tr = '';
            for (indice in resultado) {
				tr += '<tr>';
                tr += '<td>'+resultado[indice].nombre+'</td><td>'+resultado[indice].cantidad+'</td>';
                tr += '</tr>';
			}

            tabla += tr;
            tabla += '</tbody></table>';
 
        $('#grafica_resultado').html(tabla);
		//alert("reporte1");
	}

	this.graficaMisProductosPorCategoria = function(resultado){

		google.load("visualization", "1", {packages:["corechart"]});
	    google.setOnLoadCallback(dibujarGrafico);
	    function dibujarGrafico() {
		     // Tabla de datos: valores y etiquetas de la grÃ¡fica
		    datos = [['Nombre Categoria', 'Cantidad']];
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push([resultado[indice].nombre, cantidad]);  
			}
			
			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Cantidad de Productos por Categoria'
		     }
		     // Dibujar el grÃ¡fico
		     new google.visualization.ColumnChart( 
		       document.getElementById('grafica_resultado')
		     ).draw(data, options);
	    }
		//alert("reporte1");
	}

	this.graficaMisSeguidores = function(resultado){
		
		var tabla = '<table class="hoverable responsive-table centered indigo lighten-5">';
            tabla += '<caption>Listado de Mis Seguidores</caption>';
            tabla += '<thead>';
            tabla += '<tr>';
            tabla += '<th>Nombre Usuario</th><th>Nombre Y Apellidos</th>';
            tabla += '</tr>';
            tabla += '</thead>';
            tabla += '<tbody>';
            tr = '';
            for (indice in resultado) {
				tr += '<tr>';
                tr += '<td>'+resultado[indice].nombre_usuario+'</td><td>'+resultado[indice].nombre+" "+resultado[indice].apellidos+'</td>';
                tr += '</tr>';
			}

            tabla += tr;
            tabla += '</tbody></table>';
 
        $('#grafica_resultado').html(tabla);
		//alert("reporte1");
	}

}