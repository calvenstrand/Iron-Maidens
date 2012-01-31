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
		$nI1 = json_encode($test->newId1);
		$nI2 = json_encode($test->newId2);
		
		
		return new Response($nI1.$nI2);
	}
 }

?>