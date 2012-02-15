<?php

namespace Draughts\DraughtsBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Draughts\DraughtsBundle\Entity\Draughts;
use Symfony\Component\HttpFoundation\Response;
use Draughts\DraughtsBundle\Entity\Enquiry;
use Draughts\DraughtsBundle\Entity\theGame;
use Draughts\DraughtsBundle\Form\EnquiryType;



class DefaultController extends Controller
{
	public function create1Action($userName, $positionId)
	{
	    $name = new Draughts();
	    $name->setName($userName);
	    $name->setPlayerId('1');
	    $name->setDescription('Player 1');
		$name->setPositionId($positionId);
	
	    $em = $this->getDoctrine()->getEntityManager();
	    $em->persist($name);
	    $em->flush();
	
	    return new Response('Created player id '.$name->getId());
	}
	
	public function create2Action($userName, $positionId)
	{
	    $name = new Draughts();
	    $name->setName($userName);
	    $name->setPlayerId('1');
	    $name->setDescription('Player 2');
		$name->setPositionId($positionId);
	
	    $em = $this->getDoctrine()->getEntityManager();
	    $em->persist($name);
	    $em->flush();
	
	    return new Response('Created player id '.$name->getId());
	}
	
    public function indexAction()
    {
    	
    $enquiry = new Enquiry();
    $form = $this->createForm(new EnquiryType(), $enquiry);

    $request = $this->getRequest();
    if ($request->getMethod() == 'POST') {
        $form->bindRequest($request);

        if ($form->isValid()) {
            // Perform some action, such as sending an email

            // Redirect - This is important to prevent users re-posting
            // the form if they refresh the page
            return $this->redirect($this->generateUrl('DraughtsBundle_form'));
        }
    }

    return $this->render('DraughtsDraughtsBundle:Page:index.html.twig', array(
        'form' => $form->createView()
    ));
    }
	
	
	
	public function formAction()  //Hämta och lägger användarnamn och id i databasen
{
	if (isset($_GET['player1']) && (isset($_GET['player2'])) ){
$player1 = $_GET['player1'];
$player2 = $_GET['player2'];
}
$current_game = new theGame(); // En instans av classen theGame som finss i TheGame filen
$current_game -> createTheGame($player1, $player2); // Hämta metoden creatTheGame som finns i Enquiery

$em = $this -> getDoctrine()-> getEntityManager(); //Anslutning till database med hjälp av doctrine
$em -> persist($current_game); // Lägger allt i database
$em -> flush(); // Ordna gör i ordning allt i database

// }
$this->render('DraughtsBundle:Page:form.html.twig', array(
'player1' => $player1,
'player2' => $player2

));
return new Response(json_encode(array
(
'player1'=>$player1
,'player2'=>$player2
)
)
);}

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
	
	public function updateAction($id, $positionId) {
	    $em = $this->getDoctrine()->getEntityManager();
	    $name = $em->getRepository('DraughtsBundle:Draughts')->find($id);
		$name->getPositionId($id);
		
		
	    if (!$name) {
	        throw $this->createNotFoundException('No name found for id '.$id);
	    }
	    $name->setPositionId($positionId);
	    $em->flush();
		return new Response('Den nya positionen är: '.$name->getPositionId($positionId));
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
