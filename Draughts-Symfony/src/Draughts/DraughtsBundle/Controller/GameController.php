<?php

namespace Draughts\DraughtsBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Draughts\DraughtsBundle\Entity\Rules;
use Draughts\DraughtsBundle\Entity\DatabaseCheck;

class GameController extends Controller
{
	public function gameAction()
	{
		
		$test = new Rules();
		//$test->ajaxTest();
		//$test->sendNew();
		$test->tryMove();
		
		
		
		
		
		
		return new Response(json_encode(array
		(
		 'works'=>$test->works
		,'nextPlayersTurn'=>$test->nextPlayersTurn
		,'pt'=>$test->playerToken
		)
		));
		
		
	}
	
	public function newBoardAction()
	{
		$board = new Rules();
		$board->flushDb();
		$board->sendNew();
		
		return new Response ();
	}
	
 }

?>
