<?php
// src/Draughts/Draughts/Entity/Enquiry.php

namespace Draughts\DraughtsBundle\Entity;

class Enquiry
{
    protected $player1;

    protected $player2;
	
	protected $id;

     protected $body;
	 
    public function getPlayer1()
    {
        return $this->player1;
    }

    public function setPlayer1($player1)
    {
        $this->player1 = $player1;
    }

    public function getPlayer2()
    {
        return $this->player2;
    }

    public function setPlayer2($player2)
    {
        $this->player2 = $player2;
    }
	
	 public function getBody()
    {
        return $this->body;
    }
	public function setBody($body)
    {
        $this->body = $body;
    }

	
	 public function getId()
    {
        return $this->id;
    }
	public function setId($id)
    {
        $this->id = $id;
    }
	

}