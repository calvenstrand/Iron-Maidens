<?php

/* DraughtsBundle:Page:index.html.twig */
class __TwigTemplate_bed390663f27ce08c54f3897175b4ed8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->blocks = array(
            'body' => array($this, 'block_body'),
            'form' => array($this, 'block_form'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "DraughtsBundle::layout.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->getParent($context)->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_body($context, array $blocks = array())
    {
        // line 5
        echo "
    <div id=\"numberWrapper\">
    \t\t\t<div class=\"numberBox\">8</div>
\t\t\t\t<div class=\"numberBox\">7</div>
\t\t\t\t<div class=\"numberBox\">6</div>
\t\t\t\t<div class=\"numberBox\">5</div>
\t\t\t\t<div class=\"numberBox\">4</div>
\t\t\t\t<div class=\"numberBox\">3</div>
\t\t\t\t<div class=\"numberBox\">2</div>
\t\t\t\t<div class=\"numberBox\">1</div>
\t\t\t</div>
\t\t\t
\t\t\t<div id=\"gameWrapper\">
\t\t\t
\t\t\t\t<!-- Rad 8 -->
\t\t\t\t<div id=\"64\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"63\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"62\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"61\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"60\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"59\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"58\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"57\" class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 7 -->
\t\t\t\t<div id=\"56\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"55\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"54\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"53\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"52\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"51\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"50\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"49\" class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 6 -->
\t\t\t\t<div id=\"48\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"47\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"46\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"45\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"44\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"43\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"42\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"41\" class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 5 -->
\t\t\t\t<div id=\"40\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"39\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"38\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"37\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"36\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"35\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"34\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"33\" class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 4 -->
\t\t\t\t<div id=\"32\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"31\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"30\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"29\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"28\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"27\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"26\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"25\" class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 3 -->
\t\t\t\t<div id=\"24\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"23\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"22\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"21\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"20\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"19\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"18\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"17\" class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 2 -->
\t\t\t\t<div id=\"16\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"15\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"14\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"13\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"12\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"11\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"10\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"9\" class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 1 -->
\t\t\t\t<div id=\"8\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"7\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"6\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"5\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"4\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"3\" class=\"gameBox1\"></div>
\t\t\t\t<div id=\"2\" class=\"gameBox2\"></div>
\t\t\t\t<div id=\"1\" class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t\t
\t\t\t</div>
\t\t\t
\t\t\t<div id=\"letterWrapper\">
\t\t\t
\t\t\t\t<!-- Rad 9 -->
\t\t\t\t<div class=\"letterBox\">a</div>
\t\t\t\t<div class=\"letterBox\">b</div>
\t\t\t\t<div class=\"letterBox\">c</div>
\t\t\t\t<div class=\"letterBox\">d</div>
\t\t\t\t<div class=\"letterBox\">e</div>
\t\t\t\t<div class=\"letterBox\">f</div>
\t\t\t\t<div class=\"letterBox\">g</div>
\t\t\t\t<div class=\"letterBox\">h</div>
\t\t\t\t
\t\t\t</div>
\t\t
    \t
  
  ";
    }

    // line 121
    public function block_form($context, array $blocks = array())
    {
        // line 122
        echo "  \t\t
\t\t\t<input id=\"startBtn\" type=\"submit\" value=\"Starta!\">
\t\techo \"hej\";
\t\t  ";
    }

    // line 127
    public function block_javascripts($context, array $blocks = array())
    {
        echo " 
        <script type=\"text/javascript\" src=\"jquery-1.7.min.js\"></script>
        <script type=\"text/javascript\" src=\"game.js\"></script>
        ";
    }

    public function getTemplateName()
    {
        return "DraughtsBundle:Page:index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }
}
