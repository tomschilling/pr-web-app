-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Erstellungszeit: 08. Feb 2017 um 21:22
-- Server-Version: 10.1.19-MariaDB
-- PHP-Version: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `db669600236`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `tblInstitution`
--

CREATE TABLE `tblInstitution` (
  `institutionAnsprechpartner` varchar(20) DEFAULT NULL,
  `institutionName` varchar(18) DEFAULT NULL,
  `institutionStrasse` varchar(24) DEFAULT NULL,
  `institutionPLZ` varchar(10) DEFAULT NULL,
  `  institutionOrt` varchar(24) DEFAULT NULL,
  `institutionEmail` varchar(34) DEFAULT NULL,
  `institutionKvRegion` varchar(20) DEFAULT NULL,
  `institutionFachgruppe` varchar(21) DEFAULT NULL,
  `institutionAusrichtung` varchar(14) DEFAULT NULL,
  `institutionWebsite` varchar(18) DEFAULT NULL,
  `institutionIdPk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `tblInstitution`
--

INSERT INTO `tblInstitution` (`institutionAnsprechpartner`, `institutionName`, `institutionStrasse`, `institutionPLZ`, `  institutionOrt`, `institutionEmail`, `institutionKvRegion`, `institutionFachgruppe`, `institutionAusrichtung`, `institutionWebsite`, `institutionIdPk`) VALUES
(' Frau Dr. Neele ', 'MVZ Kain ', 'Mersmannsstiege 78', '10115', ' Osterbruch ', ' n.kain@mail.xyz ', 'Berlin', 'Innere Medizin', 'Grundversorger', 'http://www.bmvz.de', 1),
(' Frau Dr. Lana ', 'MVZ Kohl ', 'Langestr. 13', '10117', ' Gauting ', ' l.kohl@mail.xyz ', 'Berlin', 'Angiologie', 'Fachgleich', '  ', 2),
(' Frau Dr. Rike ', 'MVZ Gellert ', 'Am Getterbach 111', '10119', ' Starkenburg ', '', 'Berlin', 'Diabetologie', 'Fachgleich', 'http://www.bmvz.de', 3),
(' Herr Dr. Fabian ', 'MVZ Faulhaber ', 'Nienkamp 84', '10119', ' Neitersen ', ' fabian.faulhaber@mail.xyz ', 'Berlin', 'Endokronologie', 'Fachgleich', '  ', 4),
(' Frau Dr. Melina ', 'MVZ Pohl ', 'Grevener Str. 60', '10178', 'Berlin ', '', 'Berlin', 'Gastroenterologie', 'Spezial', '  ', 5),
(' Frau Dr. Alexandra ', 'MVZ Brandenburger ', 'Schubertstr. 47', '10179', 'Lübeck ', ' alexandra.brandenburger@mail.xyz ', 'Berlin', 'Hämatologie/Onkologie', 'Grundversorger', 'http://www.bmvz.de', 6),
(' Frau Dr. Emely ', 'MVZ Wilkerson ', 'Angelstr. 105', '65189', 'Wiesbaden ', ' emely.wilkerson@mail.xyz ', 'Hamburg', 'Infektiologie', 'Fachgleich', '  ', 7),
(' Herr Dr.  Matthias ', 'MVZ Reinicke ', 'Friedrich-Ebert-Str. 179', '25474', 'Hasloh ', ' matthias.reinicke@mail.xyz ', 'Hamburg', 'Kardiologie', 'Grundversorger', 'http://www.bmvz.de', 8),
(' Herr Dr. Mats ', 'MVZ Zabel ', 'Memmertweg 149', '27801', 'Dötlingen ', '', 'Hamburg', 'Nephrologie', 'Spezial', '  ', 9),
(' Herr Dr. Bennett ', 'MVZ Schweikert ', 'Rohrkampstr. 62', '67808', 'Imsweiler ', ' bennett.schweikert@mail.xyz ', 'Hamburg', 'Pulmologie', 'Fachgleich', 'http://www.bmvz.de', 10),
(' Frau Dr. Catrin ', 'MVZ Scharf ', 'Am Ziegelofen 101', '31195', 'Neuhof ', ' catrin.scharf@mail.xyz ', 'Hamburg', 'Rheumatologie', 'Grundversorger', '  ', 11),
(' Frau Dr. Mara ', 'MVZ Both ', 'Äußere Kanalstr. 139', '79677', 'Aitern ', ' m.both@mail.xyz ', 'Hamburg', 'Anästhesiologie', 'Grundversorger', 'http://www.bmvz.de', 12),
(' Frau Dr. Meike ', 'MVZ Schnell ', 'Deutz-Kalker Str. 72', '67822', 'Oberhausen an der Appel ', '', 'Hamburg', 'Augenheilkunde', 'Fachgleich', 'http://www.bmvz.de', 13),
(' Frau Dr. Lena ', 'MVZ Häussler ', 'Eulenbergstr. 15', '38379', ' Wolsdorf ', ' l.haeussler@mail.xyz ', 'Nordrhein ', 'Chirurgie', 'Grundversorger', '  ', 14),
(' Herr Dr. Chris ', 'MVZ Schön ', 'Albachtener Str. 51', '31535', 'Neustadt am Rübenberge ', ' chris.schoen@mail.xyz ', 'Nordrhein ', 'Dermatologie', 'Grundversorger', 'http://www.bmvz.de', 15),
(' Frau Dr. Rosemarie ', 'MVZ Jäckel ', 'Langestr. 88', '29565', ' Wriedel ', ' r.jaeckel@mail.xyz ', 'Nordrhein ', 'Innere Medizin', 'Grundversorger', 'http://www.bmvz.de', 16),
(' Frau Dr. Nicole ', 'MVZ Färber ', 'Hofstr. 40', '56825', ' Urschmitt ', ' nicole.faerber@mail.xyz ', 'Nordrhein ', 'Angiologie', 'Grundversorger', '  ', 17),
(' Herr Dr. Michael ', 'MVZ Reinsch ', 'Jakobusstr. 64', '74722', ' Buchen ', ' michael.reinsch@mail.xyz ', 'Thüringen', 'Diabetologie', 'Fachgleich', 'http://www.bmvz.de', 18),
(' Frau Dr.  Waltraud ', 'MVZ Scheck ', 'Norbertstr. 102', '54636', ' Röhl ', '', 'Thüringen', 'Endokronologie', 'Grundversorger', 'http://www.bmvz.de', 19),
(' Herr  Dr.  Marten ', 'MVZ Robinson ', 'Rinkerodeweg 107', '6556', ' Reinsdorf ', ' m.robinson@mail.xyz ', 'Thüringen', 'Gastroenterologie', 'Spezial', 'http://www.bmvz.de', 20),
(' Frau Dr. Christel ', 'MVZ Moll ', 'Hansaring 180', '76879', ' Ottersheim ', ' c.moll@mail.xyz ', 'Sachsen', 'Hämatologie/Onkologie', 'Grundversorger', '  ', 21),
(' Frau Prof. Manuela ', 'MVZ Nichols ', 'Oscar-Wilde-Str. 135', '92709', ' Moosbach ', '', 'Sachsen', 'Infektiologie', 'Fachgleich', 'http://www.bmvz.de', 22),
(' Frau Dr. Andrea ', 'MVZ Fink ', 'Steinfurter Str. 95', '92548', ' Schwarzach ', ' andrea.fink@mail.xyz ', 'Sachsen', 'Kardiologie', 'Fachgleich', '  ', 23),
(' Frau Dr. Juli ', 'MVZ Hack ', 'Am Römerhof 135', '42899', ' Remscheid ', '', 'Sachsen', 'Nephrologie', 'Grundversorger', 'http://www.bmvz.de', 24),
(' Frau  Dr. Klara ', 'MVZ Meyer ', 'Stolbergstr. 9', '79692', ' Sallneck ', ' k.meyer@mail.xyz ', 'Bayern', 'Pulmologie', 'Spezial', '  ', 25),
(' Frau Dr. Lotta ', 'MVZ Selzer ', 'Sanddornweg 80', '74670', ' Forchtenberg ', ' lotta.selzer@mail.xyz ', 'Bayern', 'Rheumatologie', 'Grundversorger', 'http://www.bmvz.de', 26),
(' Frau Dr. Mila ', 'MVZ Rothe ', 'Piusstr. 144', '94571', ' Schaufling ', '', 'Bayern', 'Anästhesiologie', 'Fachgleich', '  ', 27),
(' Herr Dr. Samuel ', 'MVZ Nguyen ', 'Oberschlesier Str. 136', '35315', ' Homberg ', ' s.nguyen@mail.xyz ', 'Bayern', 'Augenheilkunde', 'Grundversorger', 'http://www.bmvz.de', 28),
(' Frau Dr. Joelle ', 'MVZ Weller ', 'Gropiusstr. 166', '17217', ' Lapitz ', '', 'Baden-Württemberg', 'Chirurgie', 'Grundversorger', 'http://www.bmvz.de', 29),
(' Herr Dr. Chris ', 'MVZ Kim ', 'Widdeshover Weg 34', '39638', ' Roxförde ', ' c.kim@mail.xyz ', 'Baden-Württemberg', 'Dermatologie', 'Spezial', 'http://www.bmvz.de', 30);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `tblInstitution`
--
ALTER TABLE `tblInstitution`
  ADD PRIMARY KEY (`institutionIdPk`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `tblInstitution`
--
ALTER TABLE `tblInstitution`
  MODIFY `institutionIdPk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
