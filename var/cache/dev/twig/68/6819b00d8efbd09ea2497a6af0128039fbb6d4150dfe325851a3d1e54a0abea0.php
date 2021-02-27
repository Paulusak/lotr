<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* registration.html.twig */
class __TwigTemplate_aa5d3b1cdd28395d94b2ea35c6fceb25257a0b64fa2a85d86808a3bb6c66ba60 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "registration.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "registration.html.twig"));

        // line 1
        echo "<!DOCTYPE html>
<html lang=\"cs\">
<head>
    <meta charset=\"utf-8\" />
    <title>";
        // line 5
        $this->displayBlock('title', $context, $blocks);
        echo "</title>
    <meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" name=\"viewport\" />
    <meta content=\"\" name=\"description\" />
    <meta content=\"\" name=\"author\" />
    ";
        // line 9
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 15
        echo "    ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
</head>
<body>
<!-- begin #page-loader -->
<div id=\"page-loader\" class=\"fade show\">
    <span class=\"spinner\"></span>
</div>
<!-- end #page-loader -->

<!-- begin #page-container -->
<div id=\"page-container\" class=\"fade\">
    <div class=\"login login-v1\">
        <!-- begin login-container -->
        <div class=\"login-container\">
            <!-- begin login-header -->
            <div class=\"login-header\">
                <div class=\"brand\">
                    <img src=\"";
        // line 32
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/ring.png"), "html", null, true);
        echo "\" style=\"width: 2em\">
                    <b style=\"margin-left: 1ex;\">Card System</b></a>
                </div>
                <div class=\"icon\">
                    <i class=\"fa fa-lock\"></i>
                </div>
            </div>
            <div class=\"login-body\">
                <div class=\"login-content\">
                    <h3 class=\"section-title-default margin-bottom-medium\">Registrace</h3>
                    ";
        // line 42
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 42, $this->source); })()), 'form_start');
        echo "
                    <div class=\"form-group\">
                        ";
        // line 44
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 44, $this->source); })()), "name", [], "any", false, false, false, 44), 'row');
        echo "
                    </div>
                    <div class=\"form-group\">
                    ";
        // line 47
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 47, $this->source); })()), "email", [], "any", false, false, false, 47), 'row');
        echo "
                    </div>
                        <div class=\"form-group\">
                    ";
        // line 50
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 50, $this->source); })()), "password", [], "any", false, false, false, 50), 'row');
        echo "
                        </div>
                            <div class=\"form-group\">
                    ";
        // line 53
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 53, $this->source); })()), "submit", [], "any", false, false, false, 53), 'widget', ["attr" => ["class" => "btn-block btn-primary"]]);
        // line 57
        echo "
                            </div>
                    ";
        // line 59
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 59, $this->source); })()), 'form_end');
        echo "
                </div>
                <!-- end login-content -->
            </div>
            <!-- end login-body -->
        </div>
        <!-- end login-container -->
    </div>
    <a href=\"javascript:;\" class=\"btn btn-icon btn-circle btn-success btn-scroll-to-top fade\" data-click=\"scroll-top\">
        <i class=\"fa fa-angle-up\"></i></a>
    <!-- end scroll to top btn -->
</div>
<!-- end page container -->

";
        // line 73
        $this->displayBlock('javascripts', $context, $blocks);
        // line 78
        echo "

</body>
</html>";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 5
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "Card system - registrace";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 9
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 10
        echo "        ";
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("app");
        echo "
        <!-- ================== BEGIN BASE CSS STYLE ================== -->
        <link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\" rel=\"stylesheet\" />
        <!-- ================== END BASE CSS STYLE ================== -->
    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 73
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 74
        echo "    <!-- ================== BEGIN BASE JS ================== -->
    ";
        // line 75
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
    <!-- ================== END BASE JS ================== -->
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "registration.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  214 => 75,  211 => 74,  201 => 73,  185 => 10,  175 => 9,  156 => 5,  143 => 78,  141 => 73,  124 => 59,  120 => 57,  118 => 53,  112 => 50,  106 => 47,  100 => 44,  95 => 42,  82 => 32,  61 => 15,  59 => 9,  52 => 5,  46 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"cs\">
<head>
    <meta charset=\"utf-8\" />
    <title>{% block title %}Card system - registrace{% endblock %}</title>
    <meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" name=\"viewport\" />
    <meta content=\"\" name=\"description\" />
    <meta content=\"\" name=\"author\" />
    {% block stylesheets %}
        {{ encore_entry_link_tags('app') }}
        <!-- ================== BEGIN BASE CSS STYLE ================== -->
        <link href=\"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700\" rel=\"stylesheet\" />
        <!-- ================== END BASE CSS STYLE ================== -->
    {% endblock %}
    {{ encore_entry_script_tags('app') }}
</head>
<body>
<!-- begin #page-loader -->
<div id=\"page-loader\" class=\"fade show\">
    <span class=\"spinner\"></span>
</div>
<!-- end #page-loader -->

<!-- begin #page-container -->
<div id=\"page-container\" class=\"fade\">
    <div class=\"login login-v1\">
        <!-- begin login-container -->
        <div class=\"login-container\">
            <!-- begin login-header -->
            <div class=\"login-header\">
                <div class=\"brand\">
                    <img src=\"{{ asset('images/ring.png') }}\" style=\"width: 2em\">
                    <b style=\"margin-left: 1ex;\">Card System</b></a>
                </div>
                <div class=\"icon\">
                    <i class=\"fa fa-lock\"></i>
                </div>
            </div>
            <div class=\"login-body\">
                <div class=\"login-content\">
                    <h3 class=\"section-title-default margin-bottom-medium\">Registrace</h3>
                    {{ form_start(form) }}
                    <div class=\"form-group\">
                        {{ form_row(form.name) }}
                    </div>
                    <div class=\"form-group\">
                    {{ form_row(form.email) }}
                    </div>
                        <div class=\"form-group\">
                    {{ form_row(form.password) }}
                        </div>
                            <div class=\"form-group\">
                    {{ form_widget(form.submit, {
                        'attr': {
                            'class': 'btn-block btn-primary'
                        },
                    }) }}
                            </div>
                    {{ form_end(form) }}
                </div>
                <!-- end login-content -->
            </div>
            <!-- end login-body -->
        </div>
        <!-- end login-container -->
    </div>
    <a href=\"javascript:;\" class=\"btn btn-icon btn-circle btn-success btn-scroll-to-top fade\" data-click=\"scroll-top\">
        <i class=\"fa fa-angle-up\"></i></a>
    <!-- end scroll to top btn -->
</div>
<!-- end page container -->

{% block javascripts %}
    <!-- ================== BEGIN BASE JS ================== -->
    {{ encore_entry_script_tags('app') }}
    <!-- ================== END BASE JS ================== -->
{% endblock %}


</body>
</html>", "registration.html.twig", "/home/paulusak/card_system/card_system/templates/registration.html.twig");
    }
}
