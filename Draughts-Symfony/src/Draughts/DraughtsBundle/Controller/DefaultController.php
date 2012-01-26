<?php

namespace Draughts\DraughtsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Draughts\DraughtsBundle\Entity\Draughts;
use Symfony\Component\HttpFoundation\Response;



class DefaultController extends Controller
{
	public function createAction()
{
	    $name = new Draughts();
	    $name->setName('A Player');
	    $name->setPlayerId('1');
	    $name->setDescription('Lorem ipsum dolor');
	
	    $em = $this->getDoctrine()->getEntityManager();
	    $em->persist($name);
	    $em->flush();
	
	    return new Response('Created player id '.$name->getId());
	}
    public function indexAction($name)
    {
        return $this->render('DraughtsBundle:Default:index.html.twig', array('name' => $name));
    }
	public function showAction($id) {
		
	    $name = $this->getDoctrine()
	        ->getRepository('DraughtsBundle:Draughts')
	        ->find($id);
	
	    if (!$name) {
	        throw $this->createNotFoundException('No player found for id '.$id);
    	}
		
		return new Response('Found player id'.$name->getId());

    // do something, like pass the $product object into a template
	}
	
	public function updateAction($id) {
	    $em = $this->getDoctrine()->getEntityManager();
	    $name = $em->getRepository('DraughtsBundle:Draughts')->find($id);
	
	    if (!$name) {
	        throw $this->createNotFoundException('No name found for id '.$id);
	    }
	
	    $name->setName('New name!');
	    $em->flush();
		return new Response('Updated player id'.$name->getId());
	    return $this->redirect($this->generateUrl('homepage'));
	}

	public function deleteAction($id) {
		
	    $em = $this->getDoctrine()->getEntityManager();
	    $name = $em->getRepository('DraughtsBundle:Draughts')->find($id);
	
	    if (!$name) {
	        throw $this->createNotFoundException('No name found for id '.$id);
	    }
	
	    $em->remove($name);
		$em->flush();
		return new Response('Deleted player id '.$id);
	    return $this->redirect($this->generateUrl('homepage'));
	}

}
