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
		echo $test->checkColor->$id;
		return new Response("wsedrfgt");
	}
 }

?>