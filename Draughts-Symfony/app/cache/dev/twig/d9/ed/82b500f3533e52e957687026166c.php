<?php

/* DraughtsBundle::layout.html.twig */
class __TwigTemplate_d9ed82b500f3533e52e957687026166c extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->blocks = array(
            'sidebar' => array($this, 'block_sidebar'),
        );
    }

    protected function doGetParent(array $context)
    {
        return "::base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $this->getParent($context)->display($context, array_merge($this->blocks, $blocks));
    }

    // line 4
    public function block_sidebar($context, array $blocks = array())
    {
        // line 5
        echo "    Sidebar content
";
    }

    public function getTemplateName()
    {
        return "DraughtsBundle::layout.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }
}
