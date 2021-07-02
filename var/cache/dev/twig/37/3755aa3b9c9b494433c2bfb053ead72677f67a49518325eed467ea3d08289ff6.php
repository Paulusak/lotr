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

/* base.html.twig */
class __TwigTemplate_dee2af225e5f6d1bb92c83891c2e5e40a27a96ead3c0cb9bed11c53c825def11 extends Template
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
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "base.html.twig"));

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
    <link rel=\"icon\" type=\"image/x-icon\" href=\"";
        // line 9
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("favicon.png"), "html", null, true);
        echo "\"/>
    ";
        // line 10
        $this->displayBlock('stylesheets', $context, $blocks);
        // line 16
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
<div id=\"page-container\" class=\"page-container fade page-sidebar-fixed page-header-fixed\">
    <!-- begin #header -->
    <div id=\"header\" class=\"header navbar-default\">
        <!-- begin navbar-header -->
        <div class=\"navbar-header\">
            <a href=\"";
        // line 31
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("database");
        echo "\" class=\"navbar-brand\"><img src=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("images/ring.png"), "html", null, true);
        echo "\" style=\"width: 2em\"><b>Card system</b></a>
            <button type=\"button\" class=\"navbar-toggle\" data-click=\"sidebar-toggled\">
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
            </button>
        </div>
        <!-- end navbar-header -->
        <!-- begin header-nav -->
        <ul class=\"navbar-nav navbar-right\">
            <li class=\"dropdown navbar-user\">
                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">
                    <div class=\"image image-icon bg-black text-grey-darker\">
                        <i class=\"fa fa-user\"></i>
                    </div>
                    <span class=\"d-none d-md-inline\">";
        // line 46
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 46, $this->source); })()), "user", [], "any", false, false, false, 46), "getUsername", [], "method", false, false, false, 46), "html", null, true);
        echo "</span></b>
                </a>
                ";
        // line 48
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_USER")) {
            // line 49
            echo "                    <div class=\"dropdown-menu dropdown-menu-right\">
                        <a href=\"";
            // line 50
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("logout");
            echo "\" class=\"dropdown-item\">Odhlásit</a>
                    </div>
                ";
        } else {
            // line 53
            echo "                <div class=\"dropdown-menu dropdown-menu-right\">
                    <a href=\"";
            // line 54
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("login");
            echo "\" class=\"dropdown-item\">Přihlášení</a>
                </div>
            ";
        }
        // line 57
        echo "            </li>
        </ul>
        <!-- end header-nav -->
    </div>
    <!-- end #header -->

    <!-- begin #sidebar -->
    <div id=\"sidebar\" class=\"sidebar\">
        <!-- begin sidebar scrollbar -->
        <div data-scrollbar=\"true\" data-height=\"100%\">
            <!-- begin sidebar user -->
            <!-- begin sidebar nav -->
            <ul class=\"nav\"><li class=\"nav-header\">Navigation</li>
                <li>
                    <a href=\"";
        // line 71
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("database");
        echo "\">
                        <i class=\"fa fa-file-invoice\"></i>
                        <span>Databáze</span>
                    </a>
                </li>
                <!-- begin sidebar minify button -->
                <li><a href=\"javascript:;\" class=\"sidebar-minify-btn\" data-click=\"sidebar-minify\"><i class=\"fa fa-angle-double-left\"></i></a></li>
                <!-- end sidebar minify button -->
            </ul>
            <!-- end sidebar nav -->
        </div>
        <!-- end sidebar scrollbar -->
    </div>
    <div class=\"sidebar-bg\"></div>
    <!-- end #sidebar -->

    <!-- begin #content -->
    <div id=\"content\" class=\"content\">
        <!-- begin breadcrumb -->
        <!-- end breadcrumb -->
        <!-- begin page-header -->
        ";
        // line 92
        $this->displayBlock('body', $context, $blocks);
        // line 93
        echo "        <!-- end panel -->
    </div>
    <!-- end #content -->

    <!-- begin scroll to top btn -->
    <a href=\"javascript:;\" class=\"btn btn-icon btn-circle btn-success btn-scroll-to-top fade\" data-click=\"scroll-top\"><i class=\"fa fa-angle-up\"></i></a>
    <!-- end scroll to top btn -->
</div>
<!-- end page container -->

";
        // line 103
        $this->displayBlock('javascripts', $context, $blocks);
        // line 109
        echo "

</body>
</html>
";
        
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

        echo "Card System";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 10
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 11
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

    // line 92
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 103
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 104
        echo "    <!-- ================== BEGIN BASE JS ================== -->
    <script src=\"";
        // line 105
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("jquery.js"), "html", null, true);
        echo "\"></script>
    ";
        // line 106
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("app");
        echo "
    <!-- ================== END BASE JS ================== -->
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "base.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  280 => 106,  276 => 105,  273 => 104,  263 => 103,  245 => 92,  229 => 11,  219 => 10,  200 => 5,  186 => 109,  184 => 103,  172 => 93,  170 => 92,  146 => 71,  130 => 57,  124 => 54,  121 => 53,  115 => 50,  112 => 49,  110 => 48,  105 => 46,  85 => 31,  66 => 16,  64 => 10,  60 => 9,  53 => 5,  47 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html lang=\"cs\">
<head>
    <meta charset=\"utf-8\" />
    <title>{% block title %}Card System{% endblock %}</title>
    <meta content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" name=\"viewport\" />
    <meta content=\"\" name=\"description\" />
    <meta content=\"\" name=\"author\" />
    <link rel=\"icon\" type=\"image/x-icon\" href=\"{{ asset('favicon.png') }}\"/>
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
<div id=\"page-container\" class=\"page-container fade page-sidebar-fixed page-header-fixed\">
    <!-- begin #header -->
    <div id=\"header\" class=\"header navbar-default\">
        <!-- begin navbar-header -->
        <div class=\"navbar-header\">
            <a href=\"{{ path('database') }}\" class=\"navbar-brand\"><img src=\"{{ asset('images/ring.png') }}\" style=\"width: 2em\"><b>Card system</b></a>
            <button type=\"button\" class=\"navbar-toggle\" data-click=\"sidebar-toggled\">
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
                <span class=\"icon-bar\"></span>
            </button>
        </div>
        <!-- end navbar-header -->
        <!-- begin header-nav -->
        <ul class=\"navbar-nav navbar-right\">
            <li class=\"dropdown navbar-user\">
                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">
                    <div class=\"image image-icon bg-black text-grey-darker\">
                        <i class=\"fa fa-user\"></i>
                    </div>
                    <span class=\"d-none d-md-inline\">{{ app.user.getUsername() }}</span></b>
                </a>
                {% if is_granted('ROLE_USER')%}
                    <div class=\"dropdown-menu dropdown-menu-right\">
                        <a href=\"{{ path('logout')}}\" class=\"dropdown-item\">Odhlásit</a>
                    </div>
                {% else %}
                <div class=\"dropdown-menu dropdown-menu-right\">
                    <a href=\"{{ path('login') }}\" class=\"dropdown-item\">Přihlášení</a>
                </div>
            {% endif %}
            </li>
        </ul>
        <!-- end header-nav -->
    </div>
    <!-- end #header -->

    <!-- begin #sidebar -->
    <div id=\"sidebar\" class=\"sidebar\">
        <!-- begin sidebar scrollbar -->
        <div data-scrollbar=\"true\" data-height=\"100%\">
            <!-- begin sidebar user -->
            <!-- begin sidebar nav -->
            <ul class=\"nav\"><li class=\"nav-header\">Navigation</li>
                <li>
                    <a href=\"{{ path('database') }}\">
                        <i class=\"fa fa-file-invoice\"></i>
                        <span>Databáze</span>
                    </a>
                </li>
                <!-- begin sidebar minify button -->
                <li><a href=\"javascript:;\" class=\"sidebar-minify-btn\" data-click=\"sidebar-minify\"><i class=\"fa fa-angle-double-left\"></i></a></li>
                <!-- end sidebar minify button -->
            </ul>
            <!-- end sidebar nav -->
        </div>
        <!-- end sidebar scrollbar -->
    </div>
    <div class=\"sidebar-bg\"></div>
    <!-- end #sidebar -->

    <!-- begin #content -->
    <div id=\"content\" class=\"content\">
        <!-- begin breadcrumb -->
        <!-- end breadcrumb -->
        <!-- begin page-header -->
        {% block body %}{% endblock %}
        <!-- end panel -->
    </div>
    <!-- end #content -->

    <!-- begin scroll to top btn -->
    <a href=\"javascript:;\" class=\"btn btn-icon btn-circle btn-success btn-scroll-to-top fade\" data-click=\"scroll-top\"><i class=\"fa fa-angle-up\"></i></a>
    <!-- end scroll to top btn -->
</div>
<!-- end page container -->

{% block javascripts %}
    <!-- ================== BEGIN BASE JS ================== -->
    <script src=\"{{ asset('jquery.js') }}\"></script>
    {{ encore_entry_script_tags('app') }}
    <!-- ================== END BASE JS ================== -->
{% endblock %}


</body>
</html>
", "base.html.twig", "/home/paulusak/card_system/card_system/templates/base.html.twig");
    }
}
