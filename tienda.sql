-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-05-2015 a las 06:28:50
-- Versión del servidor: 5.6.21
-- Versión de PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `tienda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE IF NOT EXISTS `categoria` (
`id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(150) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id`, `nombre`, `descripcion`) VALUES
(3, 'Salones', 'Poltronas mesas'),
(4, 'Perfumes', 'Encuentra perfumes de todas las fragancias'),
(5, 'Celulares', 'Encuentra celulares de todas las gamas'),
(6, 'Camas', 'Encuentra la cama que desees'),
(7, 'Almohadas', 'Encuentra almohadas ortopedicas'),
(8, 'Inmuebles', 'Encuentra desde casas hasta mansiones'),
(9, 'Ocio', 'Para juegos de mesa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comision`
--

CREATE TABLE IF NOT EXISTS `comision` (
`id` int(11) NOT NULL,
  `porcentaje` varchar(191) DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comision`
--

INSERT INTO `comision` (`id`, `porcentaje`, `fecha`) VALUES
(1, '0.01', '2015-04-09 05:00:30'),
(2, '0.16', '2015-05-05 02:15:49'),
(3, '0.1', '2015-05-05 20:46:51'),
(4, '0.1', '2015-05-05 20:48:03'),
(5, '0.1', '2015-05-05 20:48:37'),
(6, '0.1', '2015-05-05 20:48:50'),
(7, '0.1', '2015-05-05 21:03:38'),
(8, '0.1', '2015-05-05 21:03:53'),
(9, '0.1', '2015-05-05 21:04:33'),
(10, '0.2', '2015-05-05 21:09:52'),
(11, '0.2', '2015-05-05 21:10:24'),
(12, '0.2', '2015-05-05 21:10:49'),
(13, '0.2', '2015-05-05 21:15:30'),
(14, '0.2', '2015-05-05 21:17:41'),
(15, '0.16', '2015-05-05 21:24:31'),
(16, '0.01', '2015-05-05 21:25:06'),
(17, '1.0', '2015-05-05 22:08:36'),
(18, '1.1', '2015-05-05 22:09:21'),
(19, '1.0', '2015-05-05 22:10:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE IF NOT EXISTS `detalle` (
`id` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `id_factura` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `detalle`
--

INSERT INTO `detalle` (`id`, `id_producto`, `cantidad`, `id_factura`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(4, 4, 1, 2),
(5, 9, 1, 2),
(6, 13, 1, 3),
(7, 15, 2, 3),
(8, 14, 2, 3),
(9, 1, 1, 4),
(10, 4, 1, 4),
(11, 7, 4, 4),
(12, 13, 5, 4),
(13, 15, 1, 4),
(14, 14, 7, 5),
(15, 15, 1, 5),
(16, 14, 1, 6),
(17, 15, 21, 6),
(19, 1, 3, 8),
(20, 4, 4, 8),
(21, 5, 2, 8),
(22, 14, 1, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE IF NOT EXISTS `factura` (
`id` int(11) NOT NULL,
  `id_cliente` int(11) unsigned NOT NULL,
  `id_comision` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(30) NOT NULL DEFAULT 'pendiente',
  `total` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`id`, `id_cliente`, `id_comision`, `fecha`, `estado`, `total`) VALUES
(1, 12, 19, '2015-05-24 19:22:08', 'Recibido', 4200000),
(2, 1, 19, '2015-05-24 20:01:53', 'Recibido', 140000),
(3, 12, 19, '2015-05-24 20:05:51', 'Recibido', 4100000),
(4, 1, 19, '2015-05-24 21:20:18', 'aprobado', 2100000),
(5, 12, 19, '2015-05-24 21:47:18', 'enviado', 9200000),
(6, 12, 19, '2015-05-25 08:23:15', 'aprobado', 18000000),
(8, 1, 19, '2015-05-25 08:33:25', 'pendiente', 2580000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil`
--

CREATE TABLE IF NOT EXISTS `perfil` (
`id` int(11) unsigned NOT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `permiso_gestionar_usuarios` tinyint(1) DEFAULT NULL,
  `permiso_vender` tinyint(1) DEFAULT NULL,
  `permiso_gestionar_perfiles` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `perfil`
--

INSERT INTO `perfil` (`id`, `nombre`, `permiso_gestionar_usuarios`, `permiso_vender`, `permiso_gestionar_perfiles`) VALUES
(1, 'Admin', 1, 1, 1),
(2, 'Default', 0, 1, 0),
(3, 'Krusty', 1, 1, 0),
(4, 'Popeto', 0, 0, 0),
(5, 'hola mund', 1, 1, 1),
(9, 'Super Admin', 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE IF NOT EXISTS `producto` (
`id` int(11) NOT NULL,
  `usuario_username` varchar(30) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `cantidad` int(4) NOT NULL,
  `valor_unitario` int(5) NOT NULL,
  `estado` varchar(30) NOT NULL DEFAULT 'En venta',
  `url_imagen` varchar(200) NOT NULL,
  `usuario_id` varchar(191) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `usuario_username`, `categoria_id`, `nombre`, `cantidad`, `valor_unitario`, `estado`, `url_imagen`, `usuario_id`) VALUES
(1, 'prueba', 9, 'caja', 44, 200000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(2, 'prueba', 5, 'iphone', 16, 4000000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(3, 'prueba', 5, 'nokia', 34, 200000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(4, 'prueba', 3, 'silla', 11, 120000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(5, 'prueba', 3, 'tableros', 2, 150000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(6, 'prueba', 4, 'tommy', 99, 230000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(7, 'prueba', 4, 'polo', 10, 120000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(8, 'prueba', 4, 'lacoste', 78, 450000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(9, 'prueba', 7, 'sueño', 0, 20000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(10, 'prueba', 7, 'descanso', 21, 40000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(11, 'prueba', 3, 'muebles', 134, 400000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(12, 'prueba', 8, 'closet', 49, 30000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(13, 'juanTwo', 3, 'pupitre', 66, 100000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(14, 'juanTwo', 9, 'televisor', 3, 1200000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL),
(15, 'juanTwo', 9, 'computador', 31, 800000, 'En venta', 'http://verjaja.blogia.com/upload/20081027102924-caja-carton-box.jpg', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguir`
--

CREATE TABLE IF NOT EXISTS `seguir` (
`id` int(11) NOT NULL,
  `seguidor` int(11) unsigned NOT NULL,
  `seguido` int(11) unsigned NOT NULL,
  `estado` bit(1) DEFAULT b'1'
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `seguir`
--

INSERT INTO `seguir` (`id`, `seguidor`, `seguido`, `estado`) VALUES
(1, 1, 12, b'1'),
(2, 12, 1, b'1'),
(3, 5, 12, b'1'),
(4, 1, 5, b'1'),
(5, 12, 5, b'1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
`id` int(11) unsigned NOT NULL,
  `documento` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `apellidos` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre_usuario` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo_perfil` int(11) DEFAULT '2',
  `estado` int(4) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `documento`, `nombre`, `apellidos`, `email`, `nombre_usuario`, `password`, `tipo_perfil`, `estado`) VALUES
(1, '116264525', 'Juanito', 'Velasquez', 'Velasquez94@hotmail.com', 'juanTwo', '1234asdf', 2, 1),
(5, '888834343', 'Oscar', 'Morocho', 'morocho@oscar.com', 'morochoscar', 'morocho', 4, 1),
(9, '12331231', 'Pepeto', 'pepone', 'vadfgdfgsfdg', 'popocho', 'poposito', 2, 0),
(10, '436523676', 'Barrera', 'Sebastian', 'barreroide@barrera', 'barreroide', 'barreroide', 2, 1),
(11, '12345678431', 'Carlos Andres', 'Moreno', 'camv_123@hotmail.com', 'camv', 'camv', 1, 1),
(12, '123456789', 'prueba', 'prueba', 'prueba@hotmail.com', 'prueba', 'prueba', 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vogoo_ads`
--

CREATE TABLE IF NOT EXISTS `vogoo_ads` (
  `ad_id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `mini` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vogoo_ads_products`
--

CREATE TABLE IF NOT EXISTS `vogoo_ads_products` (
  `ad_id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vogoo_links`
--

CREATE TABLE IF NOT EXISTS `vogoo_links` (
  `item_id1` int(11) NOT NULL,
  `item_id2` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `cnt` int(11) DEFAULT NULL,
  `diff_slope` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vogoo_links`
--

INSERT INTO `vogoo_links` (`item_id1`, `item_id2`, `category`, `cnt`, `diff_slope`) VALUES
(1, 14, 9, 1, 0),
(1, 15, 9, 1, 0),
(14, 1, 9, 1, 0),
(14, 15, 9, 1, 0),
(15, 1, 9, 1, 0),
(15, 14, 9, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vogoo_ratings`
--

CREATE TABLE IF NOT EXISTS `vogoo_ratings` (
  `member_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `rating` float NOT NULL,
  `ts` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `vogoo_ratings`
--

INSERT INTO `vogoo_ratings` (`member_id`, `product_id`, `category`, `rating`, `ts`) VALUES
(1, 4, 3, 1, '2015-05-24 20:14:34'),
(1, 9, 7, 1, '2015-05-24 20:14:34'),
(12, 1, 9, 1, '2015-05-24 19:55:00'),
(12, 2, 5, 1, '2015-05-24 19:55:00'),
(12, 13, 3, 1, '2015-05-24 20:13:18'),
(12, 14, 9, 1, '2015-05-24 20:13:18'),
(12, 15, 9, 1, '2015-05-24 20:13:18');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `uniqueNombre` (`nombre`);

--
-- Indices de la tabla `comision`
--
ALTER TABLE `comision`
 ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
 ADD PRIMARY KEY (`id`), ADD KEY `fk_id_producto` (`id_producto`), ADD KEY `fk_id_factura` (`id_factura`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
 ADD PRIMARY KEY (`id`), ADD KEY `fk_id_comision` (`id_comision`), ADD KEY `fk_id_cliente` (`id_cliente`);

--
-- Indices de la tabla `perfil`
--
ALTER TABLE `perfil`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
 ADD PRIMARY KEY (`id`), ADD KEY `fk_categoria_id` (`categoria_id`);

--
-- Indices de la tabla `seguir`
--
ALTER TABLE `seguir`
 ADD PRIMARY KEY (`id`), ADD KEY `seguidor` (`seguidor`), ADD KEY `seguido` (`seguido`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `documento` (`documento`), ADD UNIQUE KEY `nombre_usuario` (`nombre_usuario`);

--
-- Indices de la tabla `vogoo_ads`
--
ALTER TABLE `vogoo_ads`
 ADD KEY `ad_id` (`ad_id`);

--
-- Indices de la tabla `vogoo_ads_products`
--
ALTER TABLE `vogoo_ads_products`
 ADD KEY `ad_id` (`ad_id`), ADD KEY `category` (`category`);

--
-- Indices de la tabla `vogoo_links`
--
ALTER TABLE `vogoo_links`
 ADD UNIQUE KEY `vogoo_links_ix` (`item_id1`,`item_id2`,`category`), ADD KEY `vogoo_links_i1ix` (`item_id1`), ADD KEY `vogoo_links_i2ix` (`item_id2`);

--
-- Indices de la tabla `vogoo_ratings`
--
ALTER TABLE `vogoo_ratings`
 ADD UNIQUE KEY `vogoo_ratings_mpix` (`member_id`,`product_id`,`category`), ADD KEY `vogoo_ratings_mix` (`member_id`), ADD KEY `vogoo_ratings_pix` (`product_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `comision`
--
ALTER TABLE `comision`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT de la tabla `factura`
--
ALTER TABLE `factura`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `perfil`
--
ALTER TABLE `perfil`
MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT de la tabla `seguir`
--
ALTER TABLE `seguir`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
MODIFY `id` int(11) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle`
--
ALTER TABLE `detalle`
ADD CONSTRAINT `fk_id_factura` FOREIGN KEY (`id_factura`) REFERENCES `factura` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_id_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
ADD CONSTRAINT `fk_id_cliente` FOREIGN KEY (`id_cliente`) REFERENCES `usuario` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `fk_id_comision` FOREIGN KEY (`id_comision`) REFERENCES `comision` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
ADD CONSTRAINT `fk_categoria_id` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `seguir`
--
ALTER TABLE `seguir`
ADD CONSTRAINT `seguir_ibfk_1` FOREIGN KEY (`seguidor`) REFERENCES `usuario` (`id`),
ADD CONSTRAINT `seguir_ibfk_2` FOREIGN KEY (`seguido`) REFERENCES `usuario` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
