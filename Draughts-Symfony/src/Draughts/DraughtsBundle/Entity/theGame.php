<?php
// src/Draughts/DraughtsBundle/Entity/theGame.php

namespace Draughts\DraughtsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="users")
 */
class theGame
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
  	protected $id;
	
	/**
	 * @ORM\Column(type="string", length="40")
	 */
	protected $player1;
	
	/**
	 * @ORM\Column(type="string", length="40")
	 */
	protected $player2;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
	public function createTheGame($player1,$player2, $id){
		$this -> player1 = $player1;
		$this -> player2 = $player2;
		$this -> id = $id;
	}

    /**
     * Set player1
     *
     * @param string $player1
     */
    public function setPlayer1($player1)
    {
        $this->player1 = $player1;
    }

    /**
     * Get player1
     *
     * @return string 
     */
    public function getPlayer1()
    {
        return $this->player1;
    }

    /**
     * Set player2
     *
     * @param string $player2
     */
    public function setPlayer2($player2)
    {
        $this->player2 = $player2;
    }

    /**
     * Get player2
     *
     * @return string 
     */
    public function getPlayer2()
    {
        return $this->player2;
    }
}