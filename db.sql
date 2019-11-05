CREATE SCHEMA `itx_usage` ;

CREATE TABLE `itx_usage`.`data` 
( `sourcepartner` VARCHAR(100) NOT NULL , `targetpartner` VARCHAR(100) NOT NULL , `sourceformat` VARCHAR(100) NULL , `targetformat` VARCHAR(100) NULL , `createdate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP , `id` int auto_increment , primary key(id), `transactioncount` BIGINT NULL DEFAULT '1'  ) 
ENGINE = InnoDB; 

INSERT INTO `itx_usage`.`data`(`sourcepartner`, `targetpartner`, `sourceformat`, `targetformat`) VALUES ('bank1','centralbank','MT101','pain.009.001.02');

INSERT INTO `itx_usage`.`data`(`sourcepartner`, `targetpartner`, `sourceformat`, `targetformat`) VALUES ('bank2','centralbank','MT900','MX054');

INSERT INTO `itx_usage`.`data`(`sourcepartner`, `targetpartner`, `sourceformat`, `targetformat`) VALUES ('bank1','bank1','MT701','camt.053.001.03');

USE `itx_usage`;
CREATE  OR REPLACE VIEW `Report` AS
SELECT 
		`itx_usage`.`data`.`sourcepartner` AS `Partner`,
        YEAR(`itx_usage`.`data`.`createdate`) AS `ReportYear`,
        MONTH(`itx_usage`.`data`.`createdate`) AS `ReportMonth`,
        SUM(`itx_usage`.`data`.`transactioncount`) AS `TotalTransaction`,
        COUNT(0) AS `TotalRequest`
FROM    itx_usage.data 
group by sourcepartner, year(createdate), month(createdate);
