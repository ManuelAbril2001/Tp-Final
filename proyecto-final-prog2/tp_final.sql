-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2020 a las 20:47:56
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp_final`
--
CREATE DATABASE IF NOT EXISTS `tp_final` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tp_final`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenias`
--

CREATE TABLE `resenias` (
  `id` int(11) NOT NULL,
  `id_pelicula` int(11) DEFAULT NULL,
  `id_usuario` int(11) UNSIGNED DEFAULT NULL,
  `texto_resenia` varchar(200) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `puntaje` decimal(3,1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenias`
--

INSERT INTO `resenias` (`id`, `id_pelicula`, `id_usuario`, `texto_resenia`, `fecha_creacion`, `fecha_actualizacion`, `puntaje`) VALUES
(36, 419704, 14, 'Buenisima!', '2020-06-07 23:30:50', '2020-06-07 23:30:50', '9.0'),
(37, 419704, 14, 'Muy buena', '2020-06-07 23:31:06', '2020-06-07 23:31:06', '8.0'),
(38, 454626, 14, 'Me encanto!', '2020-06-07 23:32:42', '2020-06-07 23:32:42', '9.0'),
(39, 244786, 14, 'Esta no me gusto para nada', '2020-06-07 23:32:56', '2020-06-07 23:32:56', '2.0'),
(40, 419704, 15, 'Genial!', '2020-06-07 23:33:23', '2020-06-07 23:33:23', '3.0'),
(41, 19404, 15, 'Buenarda', '2020-06-07 23:33:37', '2020-06-07 23:33:37', '10.0'),
(42, 419704, 16, 'Epica', '2020-06-07 23:34:08', '2020-06-07 23:34:08', '9.0'),
(43, 385103, 16, 'Me encanto!', '2020-06-07 23:34:21', '2020-06-07 23:34:21', '5.0'),
(44, 385103, 15, 'Me encanto!', '2020-06-07 23:34:30', '2020-06-07 23:34:30', '4.0'),
(45, 385103, 14, 'Genial', '2020-06-07 23:34:39', '2020-06-07 23:34:39', '9.0'),
(46, 574982, 14, 'Malarda', '2020-06-07 23:34:54', '2020-06-07 23:34:54', '1.0'),
(47, 574982, 15, 'no me gusto', '2020-06-07 23:35:02', '2020-06-07 23:35:02', '3.0'),
(48, 574982, 16, 'No era lo que esperaba', '2020-06-07 23:35:26', '2020-06-07 23:35:26', '3.0'),
(49, 419704, 17, 'Ida', '2020-06-07 23:36:04', '2020-06-07 23:36:04', '7.0'),
(50, 19404, 17, 'No me gustan las romanticas', '2020-06-07 23:36:20', '2020-06-07 23:36:20', '3.0'),
(51, 238, 17, 'Un clasico!', '2020-06-07 23:36:40', '2020-06-07 23:36:40', '9.0'),
(52, 68718, 17, 'Me encanta este genero!!!!!!!!!', '2020-06-07 23:37:08', '2020-06-07 23:37:08', '8.0'),
(53, 68718, 14, 'no me gusto', '2020-06-07 23:37:39', '2020-06-07 23:37:39', '4.0'),
(54, 68718, 16, 'No me gusto', '2020-06-07 23:37:46', '2020-06-07 23:37:46', '2.0'),
(55, 68718, 15, 'Buenarda!', '2020-06-07 23:37:53', '2020-06-07 23:37:53', '3.0'),
(56, 419704, 18, 'Medio mala', '2020-06-07 23:38:30', '2020-06-07 23:38:30', '2.0'),
(57, 19404, 18, 'esperaba mas', '2020-06-07 23:38:40', '2020-06-07 23:38:40', '4.0'),
(58, 522938, 18, 'me encantan los personajes!!!', '2020-06-07 23:38:54', '2020-06-07 23:38:54', '5.0'),
(59, 514847, 18, 'Me encanto!', '2020-06-07 23:39:12', '2020-06-07 23:39:12', '6.0'),
(60, 338762, 18, 'creo que mi perro podria actuar mejor', '2020-06-07 23:39:41', '2020-06-07 23:39:41', '3.0'),
(61, 419704, 19, 'Muy BBuena', '2020-06-08 18:36:01', '2020-06-08 00:00:00', '8.0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre_de_usuario` varchar(200) NOT NULL,
  `email` varchar(200) DEFAULT NULL,
  `id` int(6) UNSIGNED NOT NULL,
  `contrasenia` varchar(200) DEFAULT NULL,
  `fecha_de_nacimiento` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre_de_usuario`, `email`, `id`, `contrasenia`, `fecha_de_nacimiento`) VALUES
('manu', 'manu1@gmail.com', 14, '$2a$10$ALm1FLCumj7K7VsdZK7kEuEJMpuCRbKeP8wYP1XGIJhOELdVej67y', '2020-06-01 00:00:00'),
('lautaro', 'manu2@gmail.com', 15, '$2a$10$EUJlEGbC55rUcYBWvt2aLulRJmym842CmAmKMi0whOQrPQ8yJFH5K', '2020-06-01 00:00:00'),
('julian', 'manu3@gmail.com', 16, '$2a$10$gnAcYHczYzShTDgTwPhLKeTtR7u3GrVI2Gx.VZkhW9HrSc1uFNzMm', '2020-06-24 00:00:00'),
('Santiago', 'manu4@gmail.com', 17, '$2a$10$C3bvB41wUTlgUnl6YW8P4eMA6wmnw/9vSiqeqYUm0UOGX0rnzB2Y2', '2020-06-01 00:00:00'),
('gonzalo', 'manu5@gmail.com', 18, '$2a$10$lI0K5b1gYQSIsO1p4PHkXedQKAXOgxJPm9dGoFUEgwiPlN1idjMFi', '2020-01-29 00:00:00'),
('manuel', 'mabril@udesa.edu.ar', 19, '$2a$10$QO9N/VxoX9uN0qNMjq.hcOXIsnuy.RPrtYOQ4GSppr6P8iuWuDpGS', '2020-06-02 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenias`
--
ALTER TABLE `resenias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD CONSTRAINT `resenias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
