<?php
// src/Draughts/DraughtsBundle/Entity/Draught.php

namespace Draughts\DraughtsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;



class Rules {
	
	public function checkColor ($id, $pt) {
		$id = 44;
		$pt = "playerToken1";
		if ($pt == "playerToken1") {
			
			$this->getMovesWhite();
		} else if ($pt == "playerToken2") {
			$this->getMovesBlack();
		}
	}
	
	public function getMovesWhite ($id) {
		global $id1;
		global $newId1;
		global $newId2;
	
		$id1 = intval($id);
		if (($id1 -7 >= 1) || ($id -9 >= 1)) {
			$newId1 -= 7;
			$newId2 -= 9;
			$this->checkWhiteSides();
		} else {
			// GODMODE
		}
	}

	public function getMovesBlack ($id) {
		global $id1;
		global $newId1;
		global $newId2;
	
		$id1 = intval($id);
		if (($id1 +7 <= 64) || ($id1 +9 <= 64)) {
			$newId1 += 7;
			$newId2 += 9;
			$this->checkBlackSides();
		} else {
			// GODMODE
		}
	}
	
	public function checkWhiteSides ($id, $newId1, $newId2) {
		if (($id == 49) || ($id == 41) || ($id == 33) || ($id == 25) || ($id == 17) || ($id == 9)) {
			$newId2 = NULL;
			// Klar i php
		} else if (($id == 56) || ($id == 48) || ($id == 40) || ($id == 32) || ($id == 24) || ($id == 16)) {
			$newId1 = NULL;
			// Klar i php
		} else {
			// Klar i php
		}
	}
	
	public function checkBlackSides ($id, $newId1, $newId2) {
		if (($id == 49) || ($id == 41) || ($id == 33) || ($id == 25) || ($id == 17) || ($id == 9)) {
			$newId1 = NULL;
			// Klar i php
		} else if (($id == 56) || ($id == 48) || ($id == 40) || ($id == 32) || ($id == 24) || ($id == 16)) {
			$newId2 = NULL;
			// Klar i php
		} else {
			// Klar i php
		}				
	}


}