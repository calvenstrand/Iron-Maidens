<?php

/* ::base.html.twig */
class __TwigTemplate_4d4a6fcf78b5746438aaffbf78da36b8 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->blocks = array(
            'title' => array($this, 'block_title'),
            'stylesheets' => array($this, 'block_stylesheets'),
            'javascripts' => array($this, 'block_javascripts'),
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        // line 1
        echo "<!-- app/Resources/views/base.html.twig -->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv=\"Content-Type\" content=\"text/html\"; charset=utf-8\" />
        <title>";
        // line 6
        $this->displayBlock('title', $context, $blocks);
        echo " - symblog</title>
        <!--[if lt IE 9]>
            <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>
        <![endif]-->
        ";
        // line 10
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 15
        echo "        <link rel=\"shortcut icon\" href=\"";
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("favicon.ico"), "html", null, true);
        echo "\" />
    </head>
    <body>
\t
\t\t<div id=\"mainGameWrapper\">
\t\t
\t\t\t<div id=\"numberWrapper\">
\t\t\t\t<div class=\"numberBox\">8</div>
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
\t\t\t\t<!-- Rad 1 -->
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 2 -->
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 3 -->
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 4 -->
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 5 -->
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 6 -->
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 7 -->
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t
\t\t\t\t<!-- Rad 8 -->
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
\t\t\t\t<div class=\"gameBox2\"></div>
\t\t\t\t<div class=\"gameBox1\"></div>
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
\t\t</div>
\t

        ";
        // line 136
        $this->displayBlock('javascripts', $context, $blocks);
        // line 137
        echo "    </body>
</html>";
    }

    // line 6
    public function block_title($context, array $blocks = array())
    {
        echo "symblog";
    }

    // line 10
    public function block_stylesheets($context, array $blocks = array())
    {
        // line 11
        echo "            <link href='http://fonts.googleapis.com/css?family=Irish+Grover' rel='stylesheet' type='text/css'>
            <link href='http://fonts.googleapis.com/css?family=La+Belle+Aurore' rel='stylesheet' type='text/css'>
            <link href=\"";
        // line 13
        echo twig_escape_filter($this->env, $this->env->getExtension('assets')->getAssetUrl("css/screen.css"), "html", null, true);
        echo "\" type=\"text/css\" rel=\"stylesheet\" />
        ";
    }

    // line 136
    public function block_javascripts($context, array $blocks = array())
    {
    }

    public function getTemplateName()
    {
        return "::base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }
}
