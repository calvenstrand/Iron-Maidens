<?php
/*// src/Acme/DemoBundle/Controller/WelcomeController.php
namespace draughts\draughtsBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HaxController extends Controller {
	public function indexAction(){
		return $this->render('draughtsBundle:Hax:index.html.twig');
	}
}*/
// src/Acme/DemoBundle/Controller/WelcomeController.php
namespace Acme\DemoBundle\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
class WelcomeController extends Controller
{
public function indexAction()
{
return $this->render('AcmeDemoBundle:Welcome:index.html.twig');
}
}
