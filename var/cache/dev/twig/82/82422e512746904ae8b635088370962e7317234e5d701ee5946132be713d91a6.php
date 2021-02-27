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

/* login.html.twig */
class __TwigTemplate_9219beb264cdd94fa6bf3b19d9e0eb422da5d711909a5cfb7335c9fa6fa5ed13 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "login.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "login.html.twig"));

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
                <!-- begin login-content -->
                <div class=\"login-content\">
                    <form method=\"post\" class=\"margin-bottom-0\">
                        ";
        // line 43
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 43, $this->source); })())) {
            // line 44
            echo "                            <div class=\"alert alert-danger\">";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 44, $this->source); })()), "messageKey", [], "any", false, false, false, 44), twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 44, $this->source); })()), "messageData", [], "any", false, false, false, 44), "security"), "html", null, true);
            echo "</div>
                        ";
        }
        // line 46
        echo "
                        ";
        // line 47
        if (twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 47, $this->source); })()), "user", [], "any", false, false, false, 47)) {
            // line 48
            echo "                        <div class=\"text-center\">
                            <p>You are logged in as <strong>";
            // line 49
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 49, $this->source); })()), "user", [], "any", false, false, false, 49), "username", [], "any", false, false, false, 49), "html", null, true);
            echo "</strong></p>
                        </div>
                        <div class=\"text-center mt-3\">
                            <a href=\"";
            // line 52
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            echo "\" class=\"btn btn-secondary\">Logout</a>
                        </div>
                        ";
        } else {
            // line 55
            echo "                        <div class=\"form-group\">
                            <label for=\"inputEmail\" class=\"col-form-label required\">E-mail</label>
                            <input type=\"email\" value=\"";
            // line 57
            echo twig_escape_filter($this->env, (isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 57, $this->source); })()), "html", null, true);
            echo "\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"\" required autofocus>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"inputPassword\" class=\"col-form-label required\">Heslo</label>
                            <input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"\" required>
                        </div>
                        <div class=\"form-actions\">
                            <button class=\"btn btn__block btn-primary\" type=\"submit\">
                                Přihlásit
                            </button>
                            <a href=\"";
            // line 67
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("register");
            echo "\" class=\"btn btn__block btn-primary\" role=\"button\">Registrovat</a>
                        </div>
                            <input type=\"hidden\" name=\"_csrf_token\" value=\"";
            // line 69
            echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("authenticate"), "html", null, true);
            echo "\">
                        ";
        }
        // line 71
        echo "                    </form>
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
        // line 85
        $this->displayBlock('javascripts', $context, $blocks);
        // line 90
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

        echo "Card system - login";
        
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

    // line 85
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 86
        echo "    <!-- ================== BEGIN BASE JS ================== -->
    ";
        // line 87
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
    <!-- ================== END BASE JS ================== -->
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  240 => 87,  237 => 86,  227 => 85,  211 => 10,  201 => 9,  182 => 5,  169 => 90,  167 => 85,  151 => 71,  146 => 69,  141 => 67,  128 => 57,  124 => 55,  118 => 52,  112 => 49,  109 => 48,  107 => 47,  104 => 46,  98 => 44,  96 => 43,  82 => 32,  61 => 15,  59 => 9,  52 => 5,  46 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"cs\">
<head>
    <meta charset=\"utf-8\" />
    <title>{% block title %}Card system - login{% endblock %}</title>
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
                <!-- begin login-content -->
                <div class=\"login-content\">
                    <form method=\"post\" class=\"margin-bottom-0\">
                        {% if error %}
                            <div class=\"alert alert-danger\">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
                        {% endif %}

                        {% if app.user %}
                        <div class=\"text-center\">
                            <p>You are logged in as <strong>{{ app.user.username }}</strong></p>
                        </div>
                        <div class=\"text-center mt-3\">
                            <a href=\"{{ path('app_logout') }}\" class=\"btn btn-secondary\">Logout</a>
                        </div>
                        {% else %}
                        <div class=\"form-group\">
                            <label for=\"inputEmail\" class=\"col-form-label required\">E-mail</label>
                            <input type=\"email\" value=\"{{ last_username }}\" name=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"\" required autofocus>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"inputPassword\" class=\"col-form-label required\">Heslo</label>
                            <input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"\" required>
                        </div>
                        <div class=\"form-actions\">
                            <button class=\"btn btn__block btn-primary\" type=\"submit\">
                                Přihlásit
                            </button>
                            <a href=\"{{ path('register') }}\" class=\"btn btn__block btn-primary\" role=\"button\">Registrovat</a>
                        </div>
                            <input type=\"hidden\" name=\"_csrf_token\" value=\"{{ csrf_token('authenticate') }}\">
                        {% endif %}
                    </form>
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
</html>", "login.html.twig", "/home/paulusak/card_system/card_system/templates/login.html.twig");
    }
}
