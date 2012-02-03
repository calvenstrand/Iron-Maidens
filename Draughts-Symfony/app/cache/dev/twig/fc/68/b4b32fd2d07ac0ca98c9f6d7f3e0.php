<?php

/* DraughtsBundle::layout.html.twig */
class __TwigTemplate_fc68b4b32fd2d07ac0ca98c9f6d7f3e0 extends Twig_Template
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
