<?php

namespace Draughts\DraughtsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class DefaultController extends Controller
{
    
    public function indexAction($name)
    {
        return $this->render('DraughtsBundle:Default:index.html.twig', array('name' => $name));
    }
}
