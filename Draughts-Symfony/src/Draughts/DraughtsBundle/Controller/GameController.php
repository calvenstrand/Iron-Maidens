<?php

namespace Draughts\DraughtsBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Draughts\DraughtsBundle\Entity\Rules;

class GameController extends Controller
{
	public function gameAction()
	{
		$test = new Rules();
		$test->ajaxTest();
		//$test->checkColor(45, 'playerToken1');
		
		
		return new Response(json_encode(array
		('newId1'=>$test->newId1
		,'newId2'=>$test->newId2
		,'newId3'=>$test->newId3
		,'newId4'=>$test->newId4)
		));
		
		
	}
 }

?>