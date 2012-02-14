<?php
    namespace Draughts\DraughtsBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Draughts\DraughtsBundle\Entity\Rules;
use Draughts\DraughtsBundle\Entity\DatabaseCheck;

class BoardController extends Controller
{
	public function boardAction()
	{
		
		$obj = new Rules();
		$obj->gameBoardQuery();
		
		
		
		
		return new Response(json_encode(array
		(
		 'jason'=>$obj->dbArray
		 
		
		)
		));
		
		
	}
	
 }
?>