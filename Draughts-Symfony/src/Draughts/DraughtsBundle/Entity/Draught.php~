<?php
// src/Draughts/DraughtsBundle/Entity/Draught.php

namespace Draughts\DraughtsBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="draught")
 */
class Draught
{
	 /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
	
	/**
     * @ORM\Column(type="string")
     */
    protected $moves;
	
	/**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    protected $gameId;


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set moves
     *
     * @param string $moves
     */
    public function setMoves($moves)
    {
        $this->moves = $moves;
    }

    /**
     * Get moves
     *
     * @return string 
     */
    public function getMoves()
    {
        return $this->moves;
    }

    /**
     * Get gameId
     *
     * @return integer 
     */
    public function getGameId()
    {
        return $this->gameId;
    }
}