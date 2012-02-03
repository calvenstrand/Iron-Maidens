<?php
// src/Draughts/DraughtsBundle/Controller/PageController.php

namespace Draughts\DraughtsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PageController extends Controller
{
    public function indexAction()
    {
        return $this->render('DraughtsBundle:Page:index.html.twig');
    }
}