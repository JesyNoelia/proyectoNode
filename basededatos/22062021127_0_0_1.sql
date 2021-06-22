-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-06-2021 a las 12:28:12
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bbdd_colegios`
--
DROP DATABASE IF EXISTS `bbdd_colegios`;
CREATE DATABASE IF NOT EXISTS `bbdd_colegios` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bbdd_colegios`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `precio` decimal(10,2) UNSIGNED NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `talla` varchar(6) CHARACTER SET utf8mb4 DEFAULT NULL,
  `curso` varchar(20) CHARACTER SET utf8mb4 DEFAULT NULL,
  `estado` varchar(30) CHARACTER SET utf8mb4 NOT NULL,
  `imagen` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `disponible` tinyint(1) NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `fk_categoria` int(11) NOT NULL,
  `fk_colegio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `titulo`, `precio`, `descripcion`, `talla`, `curso`, `estado`, `imagen`, `disponible`, `fk_usuario`, `fk_categoria`, `fk_colegio`) VALUES
(3, 'Jersey granate cuello pico', '15.00', 'Jersey granate con cuello de pico y manga larga.', 's', '2', 'Bueno', 'https://asset1.cxnmarksandspencer.com/is/image/mands/SD_04_T76_3920_XM_X_EC_1?$PDP_INT_IMAGE_DESKTOP_DOUBLE$', 1, 1, 1, 0),
(4, 'Mochila azul ', '7.00', 'Mochila tela vaquera azul, doble cierre de cremalleras', NULL, NULL, 'Bueno', 'https://img.milanuncios.com/fg/3621/96/362196940_1.jpg?VersionId=4hlH5bTFFgpQGJNJUOMyIyXj4nJvOk..', 1, 2, 2, 0),
(5, 'Estuche completo', '5.00', 'estuche de cremallera para pinturas y lapices', NULL, NULL, 'Falta la gomna', 'https://eresmama.com/wp-content/uploads/2018/04/estuche-colegio.jpg', 1, 1, 2, 0),
(6, 'Compás', '10.00', 'Compás en caja con recambio de minas', NULL, NULL, 'Usado, minas un poc gastadas', 'https://www.carlin.es/archivos/productos/16085-550-02.jpg-1584983790.jpg', 1, 9, 2, 1),
(7, 'LIbros Lengua Castellana', '12.00', 'Liros de lengua Castellana. Todos los trimestres y libro de ejercicios', NULL, '4', 'Usado y borrado', 'https://i.imgur.com/M8f5l0y.jpg', 1, 6, 4, 3),
(8, 'Libro de matemáticas', '8.00', 'Libro de matematicas con ejercicios', NULL, '3', 'Sin usar', 'https://images-na.ssl-images-amazon.com/images/I/71l-f936NyL.jpg', 1, 7, 4, 2),
(9, 'Matemáticas', '7.50', 'Libro de matemáticas anual con ejercicios', NULL, '5', 'Bueno, esquinas desgastadas', 'https://relibrea.com/imagenes/23970/179044/libro-de-matematicas-5-de-primaria-editorial-santillana_1.jpg?v2', 1, 6, 4, 1),
(10, 'Libro de geografía', '10.50', 'Libro de geografia, anexo con mapas', NULL, '5', 'Muy usado', 'https://www.elsotano.com/imagenes_grandes/7506007/750600758762.JPG', 1, 5, 4, 3),
(11, 'Calculadora científica', '15.00', 'Calculadora científica', NULL, NULL, 'Usado, pilas recién cambiadas', 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201805/30/00106652175156____6__640x640.jpg', 1, 2, 5, 2),
(12, 'Pelota de baloncesto', '8.00', 'Pelota de baloncesto naranja', NULL, NULL, 'muy bueno', 'https://images-na.ssl-images-amazon.com/images/I/81KIDFmwumL._AC_SL1500_.jpg', 1, 3, 3, 1),
(13, 'kimono Karate', '15.50', 'Kimono de karate blanco, sin cinturon', 'm', NULL, 'Bueno', 'https://static.carrefour.es/hd_510x_/imagenes/products/84254/02224/670/8425402224670/imagenGrande1.jpg', 1, 5, 3, 2),
(14, 'Raqueta de tenis', '9.00', 'Raqueta de tenis, color azul. Buen agarre para manos pequeñas', NULL, NULL, 'Usado', 'https://shop.wilson.com/es-es/media/catalog/product/cache/152/image/9df78eab33525d08d6e5fb8d27136e95/0/d/0d489e9d43bdecd1a8385fb4cca137c40649905e_WRT30560U_US_Open_Version_2_Gloss_Blue_Yellow_Front.jpg', 1, 3, 3, 1),
(15, 'Tablet Samsung', '125.00', 'Tablet Samsunf Galaxy comprada en 2020', NULL, NULL, 'Usada', 'https://i.blogs.es/42aebd/porti/1366_2000.png', 1, 4, 5, 3),
(20, 'Pantalon largo azul marino', '9.50', 'Pantalón largo azul marino. ', 'm', '4', 'Bueno', 'https://www.pronens.com/sites/default/files/pantalon_vestir.png', 1, 2, 1, 3),
(21, 'Falda de cuadros grises', '10.00', 'Falda corta de cuadros grises.', 's', '2', 'Usado', 'https://ruisell.com/wp-content/uploads/2019/05/ref-8046-falda-plisada01-800x800.jpg', 1, 7, 1, 2),
(22, 'Falda plisada gris', '12.50', 'Falda gris con tirantes', 'm', '5', 'Sin usar', 'https://cdn.shopify.com/s/files/1/2992/2084/products/falda-de-colegio-de-tablas-lana-todoparaelcole-2_2048x.jpg?v=1620291028', 1, 3, 1, 0),
(23, 'Zapatos azul marino', '5.50', 'Zapatos azul marino con velcro', '30', '1', 'Bueno', 'https://calzadosnicolas.es/wp-content/uploads/2015/08/COLEGIAL-VELCRO-SLADAM-8451.jpg', 1, 4, 1, 2),
(24, 'Carpetas anillas azul y rosa', '2.00', 'carpetas 4 anillas azul y rosa', NULL, NULL, 'Bueno', 'https://www.carlinasturias.com/archivos/productos/0406701AZ.jpg', 1, 2, 2, 3),
(30, 'Lápices de colores', '4.00', 'Varios lapices de colores', 'null', 'null', 'Como Nuevo', 'http://localhost:3000/images/72bc54e4335ade00382621258ba3f79d.jpeg', 1, 12, 2, 1),
(31, 'Pelota', '3.00', 'Pelota de futbol con dibujos de unicornios', 'null', NULL, 'En buen estado', 'http://localhost:3000/images/4670309e960ca0406fdc20363871af96.jpeg', 1, 12, 3, 2),
(32, 'Zapatilla de niño', '15.00', 'Zapatillas adidas para niños', NULL, NULL, 'En buen estado', 'http://localhost:3000/images/92d4f2419277f990dfc17a629a1e11c3.jpeg', 1, 12, 3, 2),
(33, 'Falda gris', '3.00', 'Falda Gris', '5', '2 Primaria', 'En buen estado', 'http://localhost:3000/images/3fef8a1b5c62d08f408cd2971d3de55d.jpeg', 1, 12, 1, 2),
(34, 'Abaco', '5.00', 'Abaco', NULL, NULL, 'En buen estado', 'http://localhost:3000/images/3d925f07f9fa3d72930c1269edc28f5c.jpeg', 1, 12, 6, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'Uniformes'),
(2, 'Material Escolar'),
(3, 'Material Deportivo'),
(4, 'Libros'),
(5, 'Tecnología'),
(6, 'Juguetes Didácticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colegios`
--

DROP TABLE IF EXISTS `colegios`;
CREATE TABLE `colegios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `direccion` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf8mb4 NOT NULL,
  `codigo_centro` char(8) CHARACTER SET utf8mb4 NOT NULL,
  `web` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `longitud` float NOT NULL,
  `latitud` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `colegios`
--

INSERT INTO `colegios` (`id`, `nombre`, `direccion`, `telefono`, `codigo_centro`, `web`, `longitud`, `latitud`) VALUES
(1, 'La Merced', 'C. Luis de Góngora, 5, 28004 Madrid', '915 23 22 99', '28013255', 'https://www.colegiolamerced.es/', 40.4241, -3.69703),
(2, 'Purisima Concepcion', 'C. Puebla 20', '915 219 758', '28008791', 'https://pconcepcion.escuelateresiana.com/', 40.4236, -3.70332),
(3, 'Real Colegio de Santa Isabel la Asunción', 'C. Santa Isabel, 46', '91 527 31 81', '28009549', 'http://www.santaisabelmadrid.com/', 40.4099, -3.69678);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `fk_usuario` int(11) NOT NULL,
  `fk_articulo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `fk_usuario`, `fk_articulo`) VALUES
(1, 2, 8),
(2, 5, 9),
(3, 3, 15),
(4, 8, 7),
(5, 14, 4),
(6, 14, 5),
(7, 14, 11),
(8, 14, 14);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `numero_pedido` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `fecha_pedido` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fk_usuario` int(11) NOT NULL,
  `fk_articulo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `numero_pedido`, `fecha_pedido`, `fk_usuario`, `fk_articulo`) VALUES
(1, 'pedido_1623854089241', '2021-06-16 14:34:49', 5, 3),
(2, 'pedido_1623924229060', '2021-06-17 10:03:49', 5, 14),
(3, 'pedido_1624346543818', '2021-06-22 07:22:23', 5, 12),
(4, 'pedido_1624346543818', '2021-06-22 07:22:23', 5, 11),
(5, 'pedido_1624351520863', '2021-06-22 08:45:20', 12, 8),
(6, 'pedido_1624351520863', '2021-06-22 08:45:20', 12, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) CHARACTER SET utf8mb4 NOT NULL,
  `apellidos` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `telefono` varchar(15) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp(),
  `fk_colegio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `email`, `telefono`, `password`, `fecha_registro`, `fk_colegio`) VALUES
(1, 'Alicia', 'García', 'ali@gmail.com', '123456789', '123456', '2021-06-02 14:46:49', 0),
(2, 'Jesica', 'Rosales', 'jesi@gmail.com', '987654321', '123456', '2021-06-02 14:46:49', 0),
(3, 'Carlos', 'López', 'carlos@gmail.com', '778654534', '2323', '2021-06-14 09:10:39', 1),
(6, 'Lucia', 'Estrella', 'lucia@gmail.com', '998987867', '1111', '2021-06-14 09:12:15', 2),
(7, 'Maria', 'Rúiz', 'mari@gmail.com', '445453432', '12389', '2021-06-14 09:12:15', 2),
(8, 'Pedro', 'Alvarez', 'pedro@gmail.com', '2345456768', '3434', '2021-06-14 09:12:15', 1),
(9, 'Alberto', 'Hervas', 'alberto@gmail.com', '667675656', '121212', '2021-06-14 09:12:45', 2),
(10, 'Maria', 'Perez Gonzalez', 'marian@hotmail.com', '654789321', '123456', '2021-06-15 12:22:54', 3),
(11, 'Jimena', 'Morales', 'jimemorales@hotmail.com', '569874258', '123456', '2021-06-16 08:09:13', 3),
(12, 'Jose', 'Martinez', 'josemartinez@hotmail.com', '654789321', '$2a$10$JpeELKLWbRSUIO/C5SMeh.41EOrU4oEGcF0SUfTG5nxRtstJalYh6', '2021-06-16 08:36:18', 3),
(14, 'Juan Pablo', 'Gimenez', 'jpgimenez@gmail.com', '+34569871236', '$2a$10$fL.1/Um7KhDHvkBptnJN5uEejbMiT1UibVIDC2CwmK59KYJX674ZO', '2021-06-22 08:49:23', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_CATEGORIA` (`fk_categoria`),
  ADD KEY `FK_USUARIO` (`fk_usuario`),
  ADD KEY `FK_COLEGIO` (`fk_colegio`);

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colegios`
--
ALTER TABLE `colegios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `codigo_centro_UNIQUE` (`codigo_centro`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_USUARIO` (`fk_usuario`),
  ADD KEY `FK_ARTICULO` (`fk_articulo`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_USUARIO` (`fk_usuario`),
  ADD KEY `FK_ARTICULO` (`fk_articulo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `FK_COLEGIO` (`fk_colegio`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `colegios`
--
ALTER TABLE `colegios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
