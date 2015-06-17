function GraficasReportes(reporte){

	var reporte = reporte;

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

	this.graficaReporteCantidadUsuariosPDF = function(resultado){

		google.load('visualization', '1.0', {'packages':['corechart']});

		function dibujaGraficaPDF() {

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

			var grafica = new google.visualization.PieChart(document.getElementById('grafica_resultado'));
			google.visualization.events.addListener(grafica, 'ready', function () {
			     	alert("OK");
			     	var doc = new jsPDF();
					doc.setFontSize(20);
					doc.text(25, 25, "Reporte Cantidad Usuarios Activos VS Dados de Baja");
					doc.addImage(grafica.getImageURI(), 'PNG', 0, 40, 240, 170);

				    doc.save("ReporteCantidadUsuariosPDF.pdf");
		    });
			grafica.draw(data, opciones);
		}
		dibujaGraficaPDF();
	}

	this.graficaGananciasPorVendedor = function(usuario_username, ganancias){


		var totalTodo = 0;

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

			     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado'));
				 google.visualization.events.addListener(grafica, 'ready', function () {

		    });

				 grafica.draw(data, options);

		    }

		    var tabla = '<br><table class="hoverable responsive-table centered indigo lighten-5">';
		    tabla += '<caption><b>Total ganancias obtenidas</b><br></caption>';
		    tabla += '<thead>';
		    tabla += '<tr>';

		    for (indice in usuario_username) {
		    	totalTodo += ganancias[indice];
		    }

		    tabla += '<th>Total: </th><th>'+totalTodo+'</th>';
		    tabla += '</tr>';
		    tabla += '</thead>';
		    tabla += '<tbody>';
		    tabla += '</tbody></table><br><br>';


		    $("#caja").append(tabla);

	}

	this.graficaGananciasPorVendedorPDF = function(usuario_username, ganancias){

			google.load("visualization", "1", {packages:["corechart"]});
		    function dibujarGraficoPDF() {

		    	datos = [['Nombre de Usuario', 'Ganancias']];
				for (indice in usuario_username) {
				 	datos.push([usuario_username[indice], ganancias[indice]]);
				}

				 var data = google.visualization.arrayToDataTable(datos);
			     var options = {
			       title: 'Ganacias Obtenidas Por Vendedor'
			     }
			     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
				 google.visualization.events.addListener(grafica, 'ready', function () {
			     	alert("OK");
			     	var doc = new jsPDF();
					doc.setFontSize(20);
					doc.text(25, 25, "Reporte Ganancias Obtenidas Por Vendedor");
					doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

				    doc.save("GananciasPorVendedorPDF.pdf");
		    });
				 grafica.draw(data, options);
		    }
		    dibujarGraficoPDF();
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

	this.graficaVendedorVsCantidadVentasPDF = function(resultado){

	    google.load("visualization", "1", {packages:["corechart"]});
	    function dibujarGraficoPDF() {

	    	datos = [['Nombre de Usuario', 'Cantidad']];
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push([resultado[indice].usuario_username, cantidad]);
			}

			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Cantidad de Ventas Realizadas Por Vendedor'
		     }
		     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
			 google.visualization.events.addListener(grafica, 'ready', function () {
		     	alert("OK");
		     	var doc = new jsPDF();
				doc.setFontSize(20);
				doc.text(25, 25, "Reporte Cantidad de Ventas Realizadas Por Vendedor");
				doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

			    doc.save("VendedorVsCantidadVentasPDF.pdf");
	    });
			 grafica.draw(data, options);
	    }
	    dibujarGraficoPDF();
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
	    var valorTotal = 0;
	    var tabla = '<br><table class="hoverable responsive-table centered indigo lighten-5">';
	    tabla += '<caption><b>Total compras aprobadas</b><br></caption>';
	    tabla += '<thead>';
	    tabla += '<tr>';
	    tabla += '<th>Compras: </th><th>Total</th>';
	    tabla += '</tr>';
	    tabla += '</thead>';
	    tabla += '<tbody>';

	    tr = '';
	    for (indice in resultado) {
	    	valorTotal += parseInt(resultado[indice].cantidad);
	    	tr += '<tr>';
	    	tr += '<td>'+resultado[indice].estado+'</td><td>'+parseInt(resultado[indice].cantidad)+'</td>';
	    	tr += '</tr>';
	    }


	    tabla += tr;
	    tabla += '<tr><td><b>Suma total</b></td><td>'+valorTotal+'</td></tr>';

	    tabla += '</tbody></table><br><br>';


	    $("#caja").append(tabla);
	}

	this.graficaComprasAprobadasVsCantidadPDF = function(resultado){

		google.load("visualization", "1", {packages:["corechart"]});
	    function dibujarGraficoPDF() {

	    	datos = [['Estado', 'Cantidad']];
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push([resultado[indice].estado, cantidad]);
			}

			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Cantidad de Compras Aprobadas'
		     }
		     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
			 google.visualization.events.addListener(grafica, 'ready', function () {
		     	alert("OK");
		     	var doc = new jsPDF();
				doc.setFontSize(20);
				doc.text(25, 25, "Reporte Cantidad de Compras Aprobadas");
				doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

			    doc.save("ComprasAprobadasVsCantidadPDF.pdf");
	    });
			 grafica.draw(data, options);
	    }
	    dibujarGraficoPDF();
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
	/*
	this.graficaArticulosPorAprobarOEnviarPDF = function(resultado){

	    var pdf = new jsPDF('p', 'pt', 'letter');
	    pdf.setFontSize(20);
		pdf.text(35, 25, "Reporte Articulos Por Aprobar o Por Enviar");
		source = $('#grafica_resultado')[0];
		specialElementHandlers = {
			'#bypassme': function(element, renderer){
				return true
			}
		}
		margins = {
		    top: 50,
		    left: 60,
		    width: 545
		  };
		pdf.fromHTML(
		  	source // HTML string or DOM elem ref.
		  	, margins.left // x coord
		  	, margins.top // y coord
		  	, {
		  		'width': margins.width // max width of content on PDF
		  		, 'elementHandlers': specialElementHandlers
		  	},
		  	function (dispose) {
		  	  // dispose: object with X, Y of the last line add to the PDF
		  	  //          this allow the insertion of new lines after html
		        pdf.save('html2pdf.pdf');
		      }
		  )
	}*/

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

	    var valorTotal = 0;
	    var tabla = '<br><table class="hoverable responsive-table centered indigo lighten-5">';
	    tabla += '<caption><b>Total pedidos solicitados</b><br></caption>';
	    tabla += '<thead>';
	    tabla += '<tr>';
	    tabla += '<th>Venta </th><th>Total</th>';
	    tabla += '</tr>';
	    tabla += '</thead>';
	    tabla += '<tbody>';

	    tr = '';
	    var ids = 1;
	    for (indice in resultado) {
	    	valorTotal += parseInt(resultado[indice].cantidad);
	    	tr += '<tr>';
	    	tr += '<td>Venta '+ids+'</td><td>'+parseInt(resultado[indice].cantidad)+'</td>';
	    	tr += '</tr>';
	    	ids ++ ;
	    }


	    tabla += tr;
	    tabla += '<tr><td><b>Suma total</b></td><td>'+valorTotal+'</td></tr>';

	    tabla += '</tbody></table><br><br>';


	    $("#caja").append(tabla);



	}

	this.graficaPedidosSolicitadosVsCantidadPDF = function(resultado){

	    google.load("visualization", "1", {packages:["corechart"]});
	    function dibujarGraficoPDF() {

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
		     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
			 google.visualization.events.addListener(grafica, 'ready', function () {
		     	alert("OK");
		     	var doc = new jsPDF();
				doc.setFontSize(20);
				doc.text(45, 25, "Reporte Mis Pedidos Solicitados");
				doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

			    doc.save("PedidosSolicitadosVsCantidadPDF.pdf");
	    });
			 grafica.draw(data, options);
	    }
	    dibujarGraficoPDF();
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

	    var valorTotal = 0;
	    var tabla = '<br><table class="hoverable responsive-table centered indigo lighten-5">';
	    tabla += '<caption><b>Total pedidos enviados</b><br></caption>';
	    tabla += '<thead>';
	    tabla += '<tr>';
	    tabla += '<th>Venta </th><th>Total</th>';
	    tabla += '</tr>';
	    tabla += '</thead>';
	    tabla += '<tbody>';

	    tr = '';
	    var ids = 1;
	    for (indice in resultado) {
	    	valorTotal += parseInt(resultado[indice].cantidad);
	    	tr += '<tr>';
	    	tr += '<td>Pedido '+ids+'</td><td>'+parseInt(resultado[indice].cantidad)+'</td>';
	    	tr += '</tr>';
	    	ids ++ ;
	    }


	    tabla += tr;
	    tabla += '<tr><td><b>Suma total</b></td><td>'+valorTotal+'</td></tr>';

	    tabla += '</tbody></table><br><br>';


	    $("#caja").append(tabla);



	}

	this.graficaPedidosEnviadosVsCantidadPDF = function(resultado){

	    google.load("visualization", "1", {packages:["corechart"]});
	    function dibujarGraficoPDF() {

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
		     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
			 google.visualization.events.addListener(grafica, 'ready', function () {
		     	alert("OK");
		     	var doc = new jsPDF();
				doc.setFontSize(20);
				doc.text(45, 25, "Reporte Mis Pedidos Enviados");
				doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

			    doc.save("PedidosEnviadosVsCantidadPDF.pdf");
		    });
			 grafica.draw(data, options);
	    }
	    dibujarGraficoPDF();
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
	    	    var totalTodo = 0;
		    var tabla = '<br><table class="hoverable responsive-table centered indigo lighten-5">';
		    tabla += '<caption><b>Ganancia total por productos vendidos</b><br></caption>';
		    tabla += '<thead>';
		    tabla += '<tr>';

		    for (indice in resultado) {
		    	totalTodo += (parseInt(resultado[indice].cantidad)*parseInt(resultado[indice].valor_unitario))*parseInt(resultado[indice].porcentaje);
		    }

		    tabla += '<th>Total: </th><th>'+totalTodo+'</th>';
		    tabla += '</tr>';
		    tabla += '</thead>';
		    tabla += '<tbody>';
		    tabla += '</tbody></table><br><br>';


		    $("#caja").append(tabla);


	}

	this.graficaGananciasPorProductosVendidosPDF = function(resultado){

	    google.load("visualization", "1", {packages:["corechart"]});
	    function dibujarGraficoPDF() {

	    	datos = [['Nombre', 'Ganancia']];
			for (indice in resultado) {
				ganancia = (parseInt(resultado[indice].cantidad)*parseInt(resultado[indice].valor_unitario))*parseInt(resultado[indice].porcentaje);
			 	datos.push([resultado[indice].nombre, ganancia]);
			}

			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Ganancia por Producto Vendido'
		     }
		     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
			 google.visualization.events.addListener(grafica, 'ready', function () {
		     	alert("OK");
		     	var doc = new jsPDF();
				doc.setFontSize(20);
				doc.text(45, 25, "Reporte Ganancia por Producto Vendido");
				doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

			    doc.save("GananciasPorProductosVendidosPDF.pdf");
		    });
			 grafica.draw(data, options);
	    }
	    dibujarGraficoPDF();
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

	this.graficaMisProductosPorCategoriaPDF = function(resultado){

	    google.load("visualization", "1", {packages:["corechart"]});
	    function dibujarGraficoPDF() {

	    	datos = [['Nombre Categoria', 'Cantidad']];
			for (indice in resultado) {
				cantidad = parseInt(resultado[indice].cantidad);
			 	datos.push([resultado[indice].nombre, cantidad]);
			}

			 var data = google.visualization.arrayToDataTable(datos);
		     var options = {
		       title: 'Cantidad de Productos por Categoria'
		     }
		     var grafica = new google.visualization.ColumnChart(document.getElementById('grafica_resultado_pdf'));
			 google.visualization.events.addListener(grafica, 'ready', function () {
		     	alert("OK");
		     	var doc = new jsPDF();
				doc.setFontSize(20);
				doc.text(35, 25, "Reporte Cantidad de Productos por Categoria");
				doc.addImage(grafica.getImageURI(), 'PNG', 15, 40, 180, 60);

			    doc.save("MisProductosPorCategoriaPDF.pdf");
		    });
			 grafica.draw(data, options);
	    }
	    dibujarGraficoPDF();
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

	this.generarTablaPDF = function(titulo, nombre_pdf){

	    var pdf = new jsPDF('p', 'pt', 'letter');
	    pdf.setFontSize(20);
		pdf.text(105, 35, titulo);
		source = $('#grafica_resultado')[0];
		specialElementHandlers = {
			'#bypassme': function(element, renderer){
				return true
			}
		}
		margins = {
		    top: 50,
		    left: 60,
		    width: 545
		  };
		pdf.fromHTML(
		  	source // HTML string or DOM elem ref.
		  	, margins.left // x coord
		  	, margins.top // y coord
		  	, {
		  		'width': margins.width // max width of content on PDF
		  		, 'elementHandlers': specialElementHandlers
		  	},
		  	function (dispose) {
		  	  // dispose: object with X, Y of the last line add to the PDF
		  	  //          this allow the insertion of new lines after html
		        pdf.save(nombre_pdf);
		      }
		  )
	}
}