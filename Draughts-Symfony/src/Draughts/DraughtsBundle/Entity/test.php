<?php
// src/Draughts/DraughtsBundle/Entity/Draught.php

namespace Draughts\DraughtsBundle\Entity;
use Doctrine\ORM\Mapping as ORM;

class Rules {
	public $lol;
	public $id;
	public $id1;
	public $newId1;
	public $newId2;
	public $newId3;
	public $newId4;
	public $target;
	public $pt;
	
	public $lowerRow;
	public $upperRow; 
	
	public function ajaxTest (){
		if (isset($_GET['target'])) {
			$this->id = $_GET['target'];
			$this->pt = $_GET['token'];
		
			$this->checkColor($this->id, $this->pt);
		}
		else{
			echo "inget funkar";
		}	
	}

	public function checkColor ($id, $pt) {
		$this->id = $id;

		//$results = array("key" => "value");
//echo $_GET['callback'] . '(' . json_encode($results) . ')';

		if ($pt == "playerToken1") {
			$this->getMovesWhite($id);
		} else if ($pt == "playerToken2") {
			$this->getMovesBlack($id);
		}
	}
	
	// Bestämmer hur de vita brickorna får röra sig
	public function getMovesWhite ($id) {
		global $id1;
		global $newId1;
		$this->newId1 = $id;
		global $newId2;
		$this->newId2 = $id;
	
		$this->id1 = intval($id);
		if (($id1 -7 >= 1) || ($id -9 >= 1)) {
			$this->newId1 -= 7;
			$this->newId2 -= 9;
			$this->checkWhiteSides($id, $newId1, $newId2);
		} else {
			$this->godMode($id);
		}
	}
	
	// Bestämmer hur de svarta brickorna får röra sig
	public function getMovesBlack ($id) {
		global $id1;
		global $newId1;
		$this->newId1 = $id;
		global $newId2;
		$this->newId2 = $id;
		
		$id1 = intval($id);
		if (($id1 +7 <= 64) || ($id1 +9 <= 64)) {
			$this->newId1 += 7;
			$this->newId2 += 9;
			$this->checkBlackSides($id, $newId1, $newId2);
		} else {
			$this->godMode($id);
		}
	}
	
	// Bestämmer hur krönta brickor får röra sig
	public function godMode ($id) {
		global $id1;
		global $newId1;
		$this->newId1 = $id;
		global $newId2;
		$this->newId2 = $id;
		
		global $id3;
		global $newId3;
		$this->newId3 = $id;
		global $newId4;
		$this->newId4 = $id;
		
		$this->id1 = intval($id);
		if (($id1 -7 >= 1) || ($id1 -9 >= 1) || ($id1 +7 <= 64) || ($id1 +9 <= 64)) {
			$this->newId1 -= 7;
			$this->newId2 -= 9;
			$this->newId3 += 7;
			$this->newId4 += 9;
			$this->checkAllSides($id, $newId1, $newId2, $newId3, $newId4);
		} else if ($id1 = $lowerRow)  {
			$lowerRow = array(1, 2, 3, 4, 5, 6, 7, 8);
			$this->newId1 = NULL;
			$this->newId2 = NULL;
			
		} else if ($id1 = $upperRow) {
			$upperRow = array(57, 58 ,59, 60, 61, 62, 63, 64);
			$this->newId3 = NULL;
			$this->newId4 = NULL;
		}
	}
	
	//Kontrollerar så att man bara kan göra korrekta drag längst sidorna för vita
	public function checkWhiteSides ($id, $newId1, $newId2) {
		//kollar den högra sidan	
		if (($id == 49) || ($id == 33) || ($id == 17) || ($id == 1)) {
			$this->newId2 = NULL;
		
		//Kollar den vänstra sidan		
		} else if (($id == 64) || ($id == 48) || ($id == 32) || ($id == 16)) {
			$this->newId1 = NULL;
			
		} else {
			$this->lol = $this->newId1 . " " . $this->newId2;
		}
	}

	//Kontrollerar så att man bara kan göra korrekta drag längst sidorna för svarta	
	public function checkBlackSides ($id, $newId1, $newId2) {
		//kollar den högra sidan	
		if (($id == 49) || ($id == 33) || ($id == 17) || ($id == 1)) {
			$this->newId1 = NULL;
		
		//Kollar den vänstra sidan	
		} else if (($id == 64) || ($id == 48) || ($id == 32) || ($id == 16)) {
			$this->newId2 = NULL;

		} else {
			$this->lol = $this->newId1 . " " . $this->newId2;
		}				
	}
	
	//Kontrollerar så att man bara kan göra korrekta drag längst sidorna för Kungar	
	public function checkAllsides ($id, $newId1, $newId2, $newId3, $newId4) {
		
		//kollar den högra sidan
		if(($id == 49) || ($id == 33) || ($id == 17) || ($id == 1)) {
			$this->newId1 = NULL;
			$this->newId3 = NULL;
		
		//Kollar den vänstra sidan	
		} else if (($id == 64) || ($id == 48) || ($id == 32) || ($id == 16)) {
			$this->newId2 = NULL;
			$this->newId4 = NULL;
			
		} else {
			$this->lol = ($this->newId1 . " " . $this->newId2) || ($this->newId3 . " " . $this->newId4);
			
		}	
		
		
	}
}