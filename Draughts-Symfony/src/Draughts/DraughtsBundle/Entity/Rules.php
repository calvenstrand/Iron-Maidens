<?php
// src/Draughts/DraughtsBundle/Entity/Draught.php

namespace Draughts\DraughtsBundle\Entity;
use Doctrine\ORM\Mapping as ORM;

class Rules {
	public $positionId;
	public $idTester;
	public $downLeft;
	public $downRight;
	public $upLeft;
	public $upRight;
	public $playerToken;
	public $tryTakeId = null;
	public $moveToken;
	public $stood;
	public $dbArray;
	public $nextPlayersTurn;
	public $works;
	public $takeDownLeft;
	public $takeDownRight;
	public $takeUpLeft;
	public $takeUpRight;
	public $downLeftSql;
	public $downLeftSqlArr;
	public $downRightSql;
	public $downRightSqlArr;
	public $upLeftSql;
	public $upLeftSqlArr;
	public $upRightSql;
	public $upRightSqlArr;
	public $downLeftFetch;
	public $downRightFetch;
	public $upLeftFetch;
	public $upRightFetch;
	
	// Funktion för att hämta gameboarden
	public function gameBoardQuery () {
		mysql_connect('localhost', 'root', 'pocxtr') or die ('Error'.mysql_error());
		mysql_select_db('draughts') or die ('Error'.mysql_error());;	
		$this->checkIfGoRoyal();
		$query = "SELECT * FROM draughts WHERE playerId";
		$sqlQuery = mysql_query($query);
		while ($fetch = mysql_fetch_array($sqlQuery)) {
			$key = $fetch['positionId'];
			$value = $fetch['playerId'];
			$this->dbArray[] = Array("keys" => $key, "values" => $value);
		}
	}
	
	public function connectDbSelectDraughts(){
		mysql_connect('localhost', 'root', 'pocxtr') or die ('Error'.mysql_error());
		mysql_select_db('draughts') or die ('Error'.mysql_error());
	}
	
	public function sendNew (){
		$this->connectDbSelectDraughts();
		mysql_query("CREATE TABLE draughts(
		  id INT NOT NULL AUTO_INCREMENT
		, PRIMARY KEY(id)
		, positionId INT
		, name VARCHAR(30)
		, playerId INT
		, description VARCHAR (30)
		)");
		
		$query = "INSERT INTO draughts (id, positionId, name, playerId, description) VALUES
		   ('', '64', 'name', '1', 'desc')
		  ,('', '62', 'name', '1', 'desc')
		  ,('', '60', 'name', '1', 'desc')
		  ,('', '58', 'name', '1', 'desc')
		  ,('', '55', 'name', '1', 'desc')
		  ,('', '53', 'name', '1', 'desc')
		  ,('', '51', 'name', '1', 'desc')
		  ,('', '49', 'name', '1', 'desc')
		  ,('', '48', 'name', '1', 'desc')
		  ,('', '46', 'name', '1', 'desc')
		  ,('', '44', 'name', '1', 'desc')
		  ,('', '42', 'name', '1', 'desc')
		  ,('', '23', 'name', '2', 'desc')
		  ,('', '21', 'name', '2', 'desc')
		  ,('', '19', 'name', '2', 'desc')
		  ,('', '17', 'name', '2', 'desc')
		  ,('', '16', 'name', '2', 'desc')
		  ,('', '14', 'name', '2', 'desc')
		  ,('', '12', 'name', '2', 'desc')
		  ,('', '10', 'name', '2', 'desc')
		  ,('', '7', 'name', '2', 'desc')
		  ,('', '5', 'name', '2', 'desc')
		  ,('', '3', 'name', '2', 'desc')
		  ,('', '1', 'name', '2', 'desc')
		  ";
		mysql_query($query) or die ('error'.mysql_error());
		mysql_close();
	}

	public function flushDb () {
		$this->connectDbSelectDraughts();
		mysql_query("DROP TABLE draughts");
		mysql_close();
	}

	public function tryMove(){
		if (isset($_GET['target'])) {
			$this->id = $_GET['target'];
			$this->stood = intval($_GET['target']);
			$this->connectDbSelectDraughts();
			$strSQL = "SELECT * FROM draughts WHERE (positionId = $this->id)";
			$try = mysql_query($strSQL) or die ('error'.mysql_error());
			mysql_close();
			$row = mysql_fetch_array($try);
			$this->checkColor($row['positionId'], $row['playerId']);
		}else{
			// Nothing
		}
	}
	
	public function sqlCrap ($downLeft, $downRight, $upLeft, $upRight) {
		$this->connectDbSelectDraughts();
		$this->downLeftSql     = "SELECT * FROM draughts WHERE (positionId = $this->downLeft)";
		$this->downLeftSqlArr  = mysql_query($this->downLeftSql); //or die ('1'.mysql_error());
		$this->downRightSql    = "SELECT * FROM draughts WHERE (positionId = $this->downRight)";
		$this->downRightSqlArr = mysql_query($this->downRightSql); //or die ('2'.mysql_error());
		$this->upLeftSql       = "SELECT * FROM draughts WHERE (positionId = $this->upLeft)";
		$this->upLeftSqlArr    = mysql_query($this->upLeftSql); //or die ('3'.mysql_error());
		$this->upRightSql      = "SELECT * FROM draughts WHERE (positionId = $this->upRight)";
		$this->upRightSqlArr   = mysql_query($this->upRightSql); //or die ('4'.mysql_error());
		if ($this->downLeftSqlArr) {
			$this->downLeftFetch   = mysql_fetch_array($this->downLeftSqlArr);
		} 
		if ($this->downRightSqlArr) {
			$this->downRightFetch  = mysql_fetch_array($this->downRightSqlArr);
		}
		if ($this->upLeftSqlArr) {
			$this->upLeftFetch     = mysql_fetch_array($this->upLeftSqlArr);
		}
		if ($this->upRightSqlArr) {
			$this->upRightFetch    = mysql_fetch_array($this->upRightSqlArr);
		}
	}

	public function checkColor ($positionId, $playerToken) {
		$this->positionId = $positionId;
		$this->playerToken = intval($playerToken);
		if (($playerToken == 1) || ($playerToken == 11)) {
			$this->getMovesWhite($positionId, $playerToken);
		} else if (($playerToken == 2) || ($playerToken == 22)) {
			$this->getMovesBlack($positionId, $playerToken);
		}
	}
	
	// Bestämmer hur de vita brickorna får röra sig
	public function getMovesWhite ($positionId, $playerToken) {
		global $idTester;
		global $downLeft;
		global $downRight;
		global $upLeft;
		global $upRight;
		$this->idTester  = intval($positionId);
		$this->downLeft  = ($positionId - 7);
		$this->downRight = ($positionId - 9);
		$this->upLeft    = ($positionId + 9);
		$this->upRight   = ($positionId + 7);
		$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
		if ($playerToken == 1) {
			$this->upLeft = null;
			$this->upRight = null;
			if (($this->idTester - 7 >= 1) || ($this->idTester - 9 >= 1)) {
				if (($this->downLeftSqlArr['playerId'] == '1') || ($this->downLeftSqlArr['playerId'] == '11')) {
					echo "getMovesWhite fail!";
					$this->downLeft = null;
				} else {}
				
				if (($this->downLeftSqlArr['playerId'] == '2') || ($this->downLeftSqlArr['playerId'] == '22')) {
					$this->downLeft = ($this->downLeft - 7);
				} else {}
				
				if (($this->downRightSqlArr['playerId'] == '1') || ($this->downRightSqlArr['playerId'] == '11')) {
					$this->downRight = null;
				} else {}

				if (($this->downRightSqlArr['playerId'] == '2') || ($this->downRightSqlArr['playerId'] == '22')) {
					$this->downRight = ($this->downRight - 9);
				} else {}
				
				$this->checkSides($playerToken, $this->positionId, $this->downLeft, $this->downRight
				, $this->upLeft, $this->upRight);
			} else {
				echo "Borde vara kung.";
			}
		} else if ($playerToken == 11) {
			if (($idTester - 7 >= 1) || ($idTester - 9 >= 1) || ($idTester + 7 <= 64) || ($idTester + 9 <= 64)) {
				if (($this->downLeftSqlArr['playerId'] == '1') || ($this->downLeftSqlArr['playerId'] == '11')) {
					$this->downLeft = null;
				} else {}
				
				if (($this->downLeftSqlArr['playerId'] == '2') || ($this->downLeftSqlArr['playerId'] == '22')) {
					$this->downLeft = ($this->downLeft - 7);
				} else {}
				
				if (($this->downRightSqlArr['playerId'] == '1') || ($this->downRightSqlArr['playerId'] == '11')) {
					$this->downRight = null;
				} else {}
				
				if (($this->downRightSqlArr['playerId'] == '2') || ($this->downRightSqlArr['playerId'] == '22')) {
					$this->downRight = ($this->downRight - 9);
				} else {}
				
				if (($this->upLeftSqlArr['playerId'] == '1') || ($this->upLeftSqlArr['playerId'] == '11')) {
					$this->upLeft = null;
				} else {}
				
				if (($this->upLeftSqlArr['playerId'] == '2') || ($this->upLeftSqlArr['playerId'] == '22')) {
					$this->upLeft = ($this->upLeft + 9);
				} else {}
				
				if (($this->upRightSqlArr['playerId'] == '1') || ($this->upRightSqlArr['playerId'] == '11')) {
					$this->upRight = null;
				} else {}
				
				if (($this->upRightSqlArr['playerId'] == '2') || ($this->upRightSqlArr['playerId'] == '22')) {
					$this->upRight = ($this->upRight + 7);
				} else {}
				
				$this->checkSides($playerToken, $this->positionId, $this->downLeft, $this->downRight
				, $this->upLeft, $this->upRight);
			}
		} else {
			echo "White fail.";
		}
	}
	
	// Bestämmer hur de svarta brickorna får röra sig
	public function getMovesBlack ($positionId, $playerToken) {
		global $idTester;
		global $downLeft;
		global $downRight;
		global $upLeft;
		global $upRight;
		$this->idTester  = intval($positionId);
		$this->downLeft  = ($positionId - 7);
		$this->downRight = ($positionId - 9);
		$this->upLeft    = ($positionId + 9);
		$this->upRight   = ($positionId + 7);
		$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
		
		if ($playerToken == 2) {
			$this->downLeft = null;
			$this->downRight = null;
			if (($this->idTester + 7 <= 64) || ($this->idTester + 9 <= 1)) {
				if (($this->downLeftSqlArr['playerId'] == '2') || ($this->downLeftSqlArr['playerId'] == '22')) {
					$this->downLeft = null;
				} else {}
				
				if (($this->downLeftSqlArr['playerId'] == '1') || ($this->downLeftSqlArr['playerId'] == '11')) {
					$this->downLeft = ($this->downLeft - 7);
				} else {}
				
				if (($this->downRightSqlArr['playerId'] == '2') || ($this->downRightSqlArr['playerId'] == '22')) {
					$this->downRight = null;
				} else {}

				if(($this->downRightSqlArr['playerId'] == '1') || ($this->downRightSqlArr['playerId'] == '11')){
					$this->downRight = ($this->downRight - 9);
				} else {}
				
				$this->checkSides($playerToken, $this->positionId, $this->downLeft, $this->downRight
				, $this->upLeft, $this->upRight);
			} else {
				echo "Borde vara kung.";
			}
		} else if ($playerToken == 22) {
			if (($idTester - 7 >= 1) || ($idTester - 9 >= 1) || ($idTester + 7 <= 64) || ($idTester + 9 <= 64)) {
				if (($this->downLeftSqlArr['playerId'] == '2') || ($this->downLeftSqlArr['playerId'] == '22')) {
					$this->downLeft = null;
				} else {}
				
				if (($this->downLeftSqlArr['playerId'] == '1') || ($this->downLeftSqlArr['playerId'] == '11')) {
					$this->downLeft = ($this->downLeft - 7);
				} else {}
				
				if (($this->downRightSqlArr['playerId'] == '2') || ($this->downRightSqlArr['playerId'] == '22')) {
					$this->downRight = null;
				} else {}
				
				if (($this->downRightSqlArr['playerId'] == '1') || ($this->downRightSqlArr['playerId'] == '11')) {
					$this->downRight = ($this->downRight - 9);
				} else {}
				
				if (($this->upLeftSqlArr['playerId'] == '2') || ($this->upLeftSqlArr['playerId'] == '22')) {
					$this->upLeft = null;
				} else {}
				
				if (($this->upLeftSqlArr['playerId'] == '1') || ($this->upLeftSqlArr['playerId'] == '11')) {
					$this->upLeft = ($this->upLeft + 9);
				} else {}
				
				if (($this->upRightSqlArr['playerId'] == '2') || ($this->upRightSqlArr['playerId'] == '22')) {
					$this->upRight = null;
				} else {}
				
				if (($this->upRightSqlArr['playerId'] == '1') || ($this->upRightSqlArr['playerId'] == '11')) {
					$this->upRight = ($this->upRight + 7);
				} else {}
				
				$this->checkSides($playerToken, $this->positionId, $this->downLeft, $this->downRight
				, $this->upLeft, $this->upRight);
			}
		} else {
			echo "Black fail.";
		}
	}
	
	public function checkSides ($playerToken, $positionId, $downLeft, $downRight, $upLeft, $upRight) {
		global $idTester;
		global $downLeft;
		global $downRight;
		global $upLeft;
		global $upRight;
		$this->idTester  = intval($positionId);
		if (($playerToken == 1) || ($playerToken == 11)) {
			if ($playerToken == 1) {
				if (($positionId == 49) || ($positionId == 33) || ($positionId == 17) || ($positionId == 1)) {
					$this->downRight = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else if (($positionId == 64) || ($positionId == 48) || ($positionId == 32) || ($positionId == 16)) {
					$this->downLeft = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else {
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				}
			} else if ($playerToken == 11) {
				if (($positionId == 49) || ($positionId == 33) || ($positionId == 17) || ($positionId == 1)) {
					$this->downRight = null;
					$this->upRight   = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else if (($positionId == 64) || ($positionId == 48) || ($positionId == 32) || ($positionId == 16)) {
					$this->downLeft = null;
					$this->upLeft  = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else {
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				}
			} else {
				echo "White checkSides fail!";
			}
		} else if (($playerToken == 2) || ($playerToken == 22)) {
			if ($playerToken == 2) {
				if (($positionId == 49) || ($positionId == 33) || ($positionId == 17) || ($positionId == 1)) {
					$this->upRight = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else if (($positionId == 64) || ($positionId == 48) || ($positionId == 32) || ($positionId == 16)) {
					$this->upLeft = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else {
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				}
			} else if ($playerToken == 22) {
				if (($positionId == 49) || ($positionId == 33) || ($positionId == 17) || ($positionId == 1)) {
					$this->downRight = null;
					$this->upRight   = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else if (($positionId == 64) || ($positionId == 48) || ($positionId == 32) || ($positionId == 16)) {
					$this->downLeft = null;
					$this->upLeft  = null;
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				} else {
					$this->checkSecondToken($playerToken, $positionId, $this->downLeft, $this->downRight, $this->upLeft
					, $this->upRight);
				}
			} else {
				echo "Black checkSides fail!";
			}
		}
	}
	
	public function checkSecondToken ($playerToken, $positionId, $downLeft, $downRight, $upLeft, $upRight) {
		global $works;
		global $nextPlayersTurn;
		global $playerToken;
		global $idTester;
		global $downLeft;
		global $downRight;
		global $upLeft;
		global $upRight;
		$this->idTester  = intval($positionId);
		//echo $this->downLeftFetch;
		if (isset ($_GET['tryTake'])) {
			$this->moveToken = intval($_GET['tryTake']);
			$downLeftExists  = ($this->tryTakeId) == ($this->downLeft);
			$downRightExists = ($this->tryTakeId) == ($this->downRight);
			$upLeftExists    = ($this->tryTakeId) == ($this->upLeft);
			$upRightExists   = ($this->tryTakeId) == ($this->upRight);
		} // EL SCENARIO pt: 2 han står ruta 39, han vill gå till 53, han vill ta 46 med andra ord, om DU inte förstod det...
		//$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
		
		if (($this->playerToken == 1) || ($this->playerToken == 2)) {
			if ($this->playerToken == 1) {
				if ($this->downLeftFetch != null) {
					$this->downLeft = ($this->downLeft - 7);
					$this->takeDownLeft  = ($this->downLeft + 7);
					$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
					if ($this->downLeftFetch != null) {
						$this->downLeft = null;
						$this->takeDownLeft = null;
					} else {}
				} else {}
				
				if ($this->downRightFetch != null) {
					$this->downRight = ($this->downRight - 9);
					$this->takeDownRight = ($this->downRight + 9);
					$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
					if ($this->downRightFetch != null) {
						$this->downRight = null;
						$this->takeDownRight = null;
					} else {}
				} else {}
				
				$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
			} else if ($this->playerToken == 2) {
				if ($this->upLeftFetch != null) {
					$this->upLeft = ($this->upLeft + 9);
					$this->takeUpLeft = ($this->upLeft - 9);
					$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
					if ($this->upLeftFetch != null) {
						$this->upLeft = null;
						$this->takeUpLeft = null;
					} else {}
				} else {}
				
				if ($this->upRightFetch != null) {
					$this->upRight = ($this->upRight + 7);
					$this->takeUpRight = ($this->upRight - 7);
					$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
					if ($this->upRightFetch != null) {
						$this->upRight = null;
						$this->takeUpRight = null;
					} else {}
				} else {}
			} else {
				echo "checkSecondToken fail!";
			}
		}		
		
		if (($this->playerToken == 11) || ($this->playerToken == 22)) {
			if ($this->downLeftFetch != null) {
				$this->downLeft = ($this->downLeft - 7);
				$this->takeDownLeft  = ($this->downLeft + 7);
				$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
				if ($this->downLeftFetch != null) {
					$this->downLeft = null;
					$this->takeDownLeft = null;
				} else {}
			} else {}
			
			if ($this->downRightFetch != null) {
				$this->downRight = ($this->downRight - 9);
				$this->takeDownRight = ($this->downRight + 9);
				$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
				if ($this->downRightFetch != null) {
					$this->downRight = null;
					$this->takeDownRight = null;
				} else {}
			} else {}
			
			if ($this->upLeftFetch != null) {
				$this->upLeft = ($this->upLeft + 9);
				$this->takeUpLeft = ($this->upLeft - 9);
				$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
				if ($this->upLeftFetch != null) {
					$this->upLeft = null;
					$this->takeUpLeft = null;
				} else {}
			} else {}
			
			if ($this->upRightFetch != null) {
				$this->upRight = ($this->upRight + 7);
				$this->takeUpRight = ($this->upRight - 7);
				$this->sqlCrap($this->downLeft, $this->downRight, $this->upLeft, $this->upRight);
				if ($this->upRightFetch != null) {
					$this->upRight = null;
					$this->takeUpRight = null;
				} else {}
			} else {}
		}

		if (($this->downLeftFetch != null) || ($this->downRightFetch != null) || ($this->upLeftFetch != null) || ($this->upRightFetch != null)) {
			
			if (($this->moveToken == $this->downLeft) || ($this->moveToken == $this->downRight)
			|| ($this->moveToken == $this->upLeft) || ($this->moveToken == $this->upRight)) {
				$this->move($this->moveToken);
				if ($this->moveToken == $this->downLeft) {
					$this->deleteToken($this->takeDownLeft);
				}
				if ($this->moveToken == $this->downRight) {
					$this->deleteToken($this->takeDownRight);
				}
				if ($this->moveToken == $this->upLeft) {
					$this->deleteToken($this->takeUpLeft);
				}
				if ($this->moveToken == $this->upRight) {
					$this->deleteToken($this->takeUpRight);
				}
				$this->works = 1;
			} else {
				$this->works = 0;
				if ($this->playerToken == 11) {
					$this->nextPlayersTurn = ($this->playerToken - 10);
				} else if ($this->playerToken == 22) {
					$this->nextPlayersTurn = ($this->playerToken - 22);
				} else {
					$this->nextPlayersTurn = ($this->playerToken - 1);
				}
			}
					
		} else {
			if (($this->moveToken == $this->downLeft) || ($this->moveToken == $this->downRight)
			|| ($this->moveToken == $this->upLeft) || ($this->moveToken == $this->upRight)) {
				$this->move($this->moveToken);
				if ($this->moveToken == $this->downLeft) {
					$this->deleteToken($this->takeDownLeft);
				}
				if ($this->moveToken == $this->downRight) {
					$this->deleteToken($this->takeDownRight);
				}
				if ($this->moveToken == $this->upLeft) {
					$this->deleteToken($this->takeUpLeft);
				}
				if ($this->moveToken == $this->upRight) {
					$this->deleteToken($this->takeUpRight);
				}
				$this->works = 1;	
			} else {
				$this->works = 0;
				if ($this->playerToken == 11) {
					$this->nextPlayersTurn = ($this->playerToken - 10);
				} else if ($this->playerToken == 22) {
					$this->nextPlayersTurn = ($this->playerToken - 22);
				} else {
					$this->nextPlayersTurn = ($this->playerToken - 1);
				}		
			}	
		}
		mysql_close();
	}

	public function deleteToken($value) {
		mysql_query("UPDATE draughts SET positionId='0' WHERE positionId='$value'") or die(mysql_error());
	}

	public function move($moveToken) {
		mysql_query("UPDATE draughts SET positionId='$moveToken' WHERE positionId='$this->stood'") or die(mysql_error());
		if (($this->playerToken == 2) || ($this->playerToken == 22)) {
			$this->nextPlayersTurn = 0;
		} else if (($this->playerToken == 1) || ($this->playerToken == 11)) {
			$this->nextPlayersTurn = 1;
		} else {}
	}

	public function checkIfGoRoyal (){
		//Funktion för att kröna bricka till kung om man är på motsatt sida
		$tempArray = Array(
			"7"
			,"5"
			,"3"
			,"1"
		);
		$tempArray1 = Array(
			"64"
			,"62"
			,"60"
			,"58"
		);
		
		for ($i = 0; $i < 4; $i++) {
			mysql_query("UPDATE draughts SET playerId='11' WHERE positionId='$tempArray[$i]' AND playerId='1'");
		}
		for ($i = 0; $i < 4; $i++) {
			mysql_query("UPDATE draughts SET playerId='22' WHERE positionId='$tempArray1[$i]' AND playerId='2'");
		}
	}
}
