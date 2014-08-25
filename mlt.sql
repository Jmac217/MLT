-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2014 at 02:37 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `mlt`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first` varchar(50) NOT NULL,
  `last` varchar(50) NOT NULL,
  `conditionally_approved` varchar(5) NOT NULL,
  `conditionally_approved_date` date NOT NULL,
  `appraisal_ordered` varchar(5) NOT NULL,
  `appraisal_ordered_date` date NOT NULL,
  `appraisal_approved` varchar(5) NOT NULL,
  `appraisal_approved_date` date NOT NULL,
  `appraisal_comments` varchar(600) NOT NULL,
  `loan_status` varchar(25) NOT NULL,
  `loan_status_comments` varchar(600) NOT NULL,
  `title_work_ordered` varchar(25) NOT NULL,
  `title_work_ordered_date` date NOT NULL,
  `title_work_approved` varchar(5) NOT NULL,
  `title_work_approved_date` date NOT NULL,
  `title_comments` varchar(600) NOT NULL,
  `target_closing_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`),
  KEY `id_3` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first`, `last`, `conditionally_approved`, `conditionally_approved_date`, `appraisal_ordered`, `appraisal_ordered_date`, `appraisal_approved`, `appraisal_approved_date`, `appraisal_comments`, `loan_status`, `loan_status_comments`, `title_work_ordered`, `title_work_ordered_date`, `title_work_approved`, `title_work_approved_date`, `title_comments`, `target_closing_date`) VALUES
(1, 'Jordan', 'Elder', 'true', '2015-02-01', 'true', '2014-03-05', 'true', '2015-04-10', 'none', 'awaiting_response', 'none', 'realtor', '0000-00-00', 'false', '2014-05-20', 'none', '2015-06-30'),
(16, 'New', 'Customer', 'true', '2014-01-25', 'true', '2014-01-25', 'true', '2014-01-25', 'ddd', 'closing_prep', 'eee', 'realtor', '0000-00-00', 'true', '2014-01-25', 'fff', '2014-01-25'),
(18, 'Test', 'User', 'true', '2014-08-25', 'false', '2014-08-25', 'true', '2014-08-25', 'aaa', 'awaiting_response', 'bbb', 'realtor', '0000-00-00', 'false', '2014-08-25', 'ccc', '2014-08-25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(50) NOT NULL,
  `pass` varchar(1000) NOT NULL,
  `prefs` varchar(5000) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user`, `pass`, `prefs`) VALUES
(1, 'jordan', '123456', ''),
(2, 'jeanie', '123456', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
