-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2014 at 03:43 PM
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
  `id` int(11) NOT NULL,
  `first` varchar(50) NOT NULL,
  `last` varchar(50) NOT NULL,
  `conditionally_approved` tinyint(1) NOT NULL,
  `conditionally_approved_date` date NOT NULL,
  `appraisal_ordered` tinyint(1) NOT NULL,
  `appraisal_ordered_date` date NOT NULL,
  `appraisal_approved` tinyint(1) NOT NULL,
  `appraisal_approved_date` date NOT NULL,
  `appraisal_comments` varchar(600) NOT NULL,
  `loan_status` varchar(25) NOT NULL,
  `loan_status_comments` varchar(600) NOT NULL,
  `title_work_ordered` varchar(25) NOT NULL,
  `title_work_ordered_date` date NOT NULL,
  `title_work_approved` tinyint(1) NOT NULL,
  `title_work_approved_date` date NOT NULL,
  `title_comments` varchar(600) NOT NULL,
  `target_closing_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `id_2` (`id`),
  KEY `id_3` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `first`, `last`, `conditionally_approved`, `conditionally_approved_date`, `appraisal_ordered`, `appraisal_ordered_date`, `appraisal_approved`, `appraisal_approved_date`, `appraisal_comments`, `loan_status`, `loan_status_comments`, `title_work_ordered`, `title_work_ordered_date`, `title_work_approved`, `title_work_approved_date`, `title_comments`, `target_closing_date`) VALUES
(0, 'Jordan', 'Elder', 0, '0000-00-00', 1, '2014-08-13', 0, '0000-00-00', 'Appraisal Comment for the win', 'processing-underwriting', 'Loan Status should not have a date', 'bank', '2014-08-13', 1, '2014-08-13', 'Title Comments for the win', '2014-08-13'),
(1, 'Test', 'User', 0, '0000-00-00', 0, '0000-00-00', 0, '0000-00-00', 'Appraisal Comment for the test', 'awaiting_response', 'Loan Status should not have a date', 'realtor', '0000-00-00', 1, '2014-08-13', 'Title Comments for the test', '2014-08-13');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
