<?php

namespace Draughts\DraughtsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;



class ColorChecker extends Controller {
	
	function checkColor (id, pt) {
		if (pt == "playerToken1") {
			// Till MovesForWhite
		} else if (pt == "playerToken2") {
			// Till MovesForBlack
		}
	}
	
}

class MovesForWhite {
	
	global $id1;
	global $newId1;
	global $newId2;
	
	function getMoves(id) {
		$id1 = intval(id);
		if ((id1 -7 >= 1) || (id -9 >= 1)) {
			$newId1 -= 7;
			$newId2 -= 9;
			return ($id, newId1, newId2);
		} else {
			// GODMODE
		}
	}
	
}

class MovesForBlack {
	
	global $id1;
	global $newId1;
	global $newId2;
	
	function getMoves (id) {
		$id1 = intval(id);
		if ((id1 +7 <= 64) || (id1 +9 <= 64)) {
			$newId1 += 7;
			$newId2 += 9;
			// Till BlackSides
		} else {
			// GODMODE
		}
	}
	
}

class WhiteSides extends MovesForWhite {
	
	function checkWhiteSides (id, newId1, newId2) {
		if ((id == 49) || (id == 41) || (id == 33) || (id == 25) || (id == 17) || (id == 9)) {
			$newId2 = NULL;
			// Klar i php
		} else if ((id == 56) || (id == 48) || (id == 40) || (id == 32) || (id == 24) || (id == 16)) {
			$newId1 = NULL;
			// Klar i php
		} else {
			// Klar i php
		}
	}

}

class BlackSides extends MovesForBlack {
	
	function checkBlackSides (id, newId1, newId2) {
		if ((id == 49) || (id == 41) || (id == 33) || (id == 25) || (id == 17) || (id == 9)) {
			$newId1 = NULL;
			// Klar i php
		} else if ((id == 56) || (id == 48) || (id == 40) || (id == 32) || (id == 24) || (id == 16)) {
			$newId2 = NULL;
			// Klar i php
		} else {
			// Klar i php
		}				
	}
	
}



?>