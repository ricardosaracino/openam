--
-- Copyright 2018 ForgeRock AS. All Rights Reserved
--
-- Use of this code requires a commercial software license with ForgeRock AS.
-- or with one of its affiliates. All use shall be exclusively subject
-- to such license between the licensee and ForgeRock AS.
--

CREATE SCHEMA IF NOT EXISTS audit AUTHORIZATION audit ;

-- -----------------------------------------------------
-- Table audit.auditauthentication
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS audit.am_auditauthentication (
  id VARCHAR(56) NOT NULL ,
  timestamp_ VARCHAR(29) NULL ,
  transactionid VARCHAR(255) NULL ,
  eventname VARCHAR(50) NULL ,
  userid VARCHAR(255) NULL ,
  trackingids TEXT,
  result VARCHAR(255) NULL ,
  principals TEXT ,
  context TEXT ,
  entries TEXT ,
  component VARCHAR(50) NULL ,
  realm VARCHAR(255) NULL ,
  PRIMARY KEY (id)
);

COMMENT ON COLUMN audit.am_auditauthentication.timestamp_ IS 'Date format: 2011-09-09T14:58:17.654+02:00';

-- -----------------------------------------------------
-- Table audit.auditactivity
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS audit.am_auditactivity (
  id VARCHAR(56) NOT NULL ,
  timestamp_ VARCHAR(29) NULL ,
  transactionid VARCHAR(255) NULL ,
  eventname VARCHAR(255) NULL ,
  userid VARCHAR(255) NULL ,
  trackingids TEXT,
  runas VARCHAR(255) NULL ,
  objectid VARCHAR(255) NULL ,
  operation VARCHAR(255) NULL ,
  beforeObject TEXT NULL ,
  afterObject TEXT NULL ,
  changedfields VARCHAR(255) NULL ,
  rev VARCHAR(255) NULL ,
  component VARCHAR(50) NULL ,
  realm VARCHAR(255) NULL ,
  PRIMARY KEY (id)
);

CREATE INDEX idx_auditactivity_transactionid ON audit.am_auditactivity (transactionid ASC);
COMMENT ON COLUMN audit.am_auditactivity.timestamp_ IS 'Date format: 2011-09-09T14:58:17.654+02:00';

-- -----------------------------------------------------
-- Table audit.auditaccess
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS audit.am_auditaccess (
  id VARCHAR(56) NOT NULL ,
  timestamp_ VARCHAR(29) NULL  ,
  transactionid VARCHAR(255) NULL ,
  eventname VARCHAR(255) ,
  userid VARCHAR(255) NULL ,
  trackingids TEXT,
  server_ip VARCHAR(40) ,
  server_port VARCHAR(5) ,
  client_host VARCHAR(255) ,
  client_ip VARCHAR(40) ,
  client_port VARCHAR(5) ,
  request_protocol VARCHAR(255) NULL ,
  request_operation VARCHAR(255) NULL ,
  request_detail TEXT NULL ,
  http_request_secure BOOLEAN NULL ,
  http_request_method VARCHAR(7) NULL ,
  http_request_path VARCHAR(255) NULL ,
  http_request_queryparameters TEXT NULL ,
  http_request_headers TEXT NULL ,
  http_request_cookies TEXT NULL ,
  http_response_headers TEXT NULL ,
  response_status VARCHAR(10) NULL ,
  response_statuscode VARCHAR(255) NULL ,
  response_detail TEXT NULL ,
  response_elapsedtime VARCHAR(255) NULL ,
  response_elapsedtimeunits VARCHAR(255) NULL ,
  component VARCHAR(50) NULL ,
  realm VARCHAR(255) NULL ,
  PRIMARY KEY (id)
);

CREATE INDEX idx_auditaccess_status ON audit.am_auditaccess (response_status ASC);
CREATE INDEX idx_auditaccess_userid ON audit.am_auditaccess (userid ASC);
COMMENT ON COLUMN audit.am_auditaccess.timestamp_ IS 'Date format: 2011-09-09T14:58:17.654+02:00';

-- -----------------------------------------------------
-- Table audit.auditconfig
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS audit.am_auditconfig (
  id VARCHAR(56) NOT NULL ,
  timestamp_ VARCHAR(29) NULL ,
  transactionid VARCHAR(255) NULL ,
  eventname VARCHAR(255) NULL ,
  userid VARCHAR(255) NULL ,
  trackingids TEXT,
  runas VARCHAR(255) NULL ,
  objectid VARCHAR(255) NULL ,
  operation VARCHAR(255) NULL ,
  beforeObject TEXT NULL ,
  afterObject TEXT NULL ,
  changedfields VARCHAR(255) NULL ,
  rev VARCHAR(255) NULL ,
  component VARCHAR(50) NULL ,
  realm VARCHAR(255) NULL ,
  PRIMARY KEY (id)
);

CREATE INDEX idx_auditconfig_transactionid ON audit.am_auditconfig (transactionid ASC);
COMMENT ON COLUMN audit.am_auditconfig.timestamp_ IS 'Date format: 2011-09-09T14:58:17.654+02:00';
