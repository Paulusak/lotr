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

/* @TetranzSelect2Entity/Form/fields.html.twig */
class __TwigTemplate_94cc6823442ae1b35ff446ee37434e59ccdc1a83729b3b6ebec5822c608cfbd5 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'tetranz_select2entity_widget' => [$this, 'block_tetranz_select2entity_widget'],
            'tetranz_select2entity_widget_select_option' => [$this, 'block_tetranz_select2entity_widget_select_option'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@TetranzSelect2Entity/Form/fields.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "@TetranzSelect2Entity/Form/fields.html.twig"));

        // line 1
        $this->displayBlock('tetranz_select2entity_widget', $context, $blocks);
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function block_tetranz_select2entity_widget($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "tetranz_select2entity_widget"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "tetranz_select2entity_widget"));

        // line 2
        echo "    ";
        $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 2, $this->source); })()), ["data-ajax--url" =>         // line 3
(isset($context["remote_path"]) || array_key_exists("remote_path", $context) ? $context["remote_path"] : (function () { throw new RuntimeError('Variable "remote_path" does not exist.', 3, $this->source); })()), "data-ajax--cache" => ((        // line 4
(isset($context["cache"]) || array_key_exists("cache", $context) ? $context["cache"] : (function () { throw new RuntimeError('Variable "cache" does not exist.', 4, $this->source); })())) ? ("true") : ("false")), "data-ajax--cache-timeout" => ((        // line 5
array_key_exists("cache_timeout", $context)) ? (_twig_default_filter((isset($context["cache_timeout"]) || array_key_exists("cache_timeout", $context) ? $context["cache_timeout"] : (function () { throw new RuntimeError('Variable "cache_timeout" does not exist.', 5, $this->source); })()), 0)) : (0)), "data-ajax--delay" =>         // line 6
(isset($context["delay"]) || array_key_exists("delay", $context) ? $context["delay"] : (function () { throw new RuntimeError('Variable "delay" does not exist.', 6, $this->source); })()), "data-ajax--data-type" => "json", "data-language" =>         // line 8
(isset($context["language"]) || array_key_exists("language", $context) ? $context["language"] : (function () { throw new RuntimeError('Variable "language" does not exist.', 8, $this->source); })()), "data-theme" =>         // line 9
(isset($context["theme"]) || array_key_exists("theme", $context) ? $context["theme"] : (function () { throw new RuntimeError('Variable "theme" does not exist.', 9, $this->source); })()), "data-minimum-input-length" =>         // line 10
(isset($context["minimum_input_length"]) || array_key_exists("minimum_input_length", $context) ? $context["minimum_input_length"] : (function () { throw new RuntimeError('Variable "minimum_input_length" does not exist.', 10, $this->source); })()), "data-placeholder" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(        // line 11
(isset($context["placeholder"]) || array_key_exists("placeholder", $context) ? $context["placeholder"] : (function () { throw new RuntimeError('Variable "placeholder" does not exist.', 11, $this->source); })()), [], (isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 11, $this->source); })())), "data-page-limit" =>         // line 12
(isset($context["page_limit"]) || array_key_exists("page_limit", $context) ? $context["page_limit"] : (function () { throw new RuntimeError('Variable "page_limit" does not exist.', 12, $this->source); })()), "data-scroll" => ((        // line 13
(isset($context["scroll"]) || array_key_exists("scroll", $context) ? $context["scroll"] : (function () { throw new RuntimeError('Variable "scroll" does not exist.', 13, $this->source); })())) ? ("true") : ("false")), "data-autostart" => ((        // line 14
(isset($context["autostart"]) || array_key_exists("autostart", $context) ? $context["autostart"] : (function () { throw new RuntimeError('Variable "autostart" does not exist.', 14, $this->source); })())) ? ("true") : ("false")), "class" => twig_trim_filter((((twig_get_attribute($this->env, $this->source,         // line 15
($context["attr"] ?? null), "class", [], "any", true, true, false, 15)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, ($context["attr"] ?? null), "class", [], "any", false, false, false, 15), "")) : ("")) . " select2entity form-control")), "data-name" => twig_escape_filter($this->env,         // line 16
(isset($context["name"]) || array_key_exists("name", $context) ? $context["name"] : (function () { throw new RuntimeError('Variable "name" does not exist.', 16, $this->source); })()), "html_attr")]);
        // line 18
        echo "
    ";
        // line 19
        if (twig_get_attribute($this->env, $this->source, (isset($context["allow_add"]) || array_key_exists("allow_add", $context) ? $context["allow_add"] : (function () { throw new RuntimeError('Variable "allow_add" does not exist.', 19, $this->source); })()), "enabled", [], "any", false, false, false, 19)) {
            // line 20
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 20, $this->source); })()), ["data-tags" => "true", "data-tags-text" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source,             // line 22
(isset($context["allow_add"]) || array_key_exists("allow_add", $context) ? $context["allow_add"] : (function () { throw new RuntimeError('Variable "allow_add" does not exist.', 22, $this->source); })()), "new_tag_text", [], "any", false, false, false, 22), [], (isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 22, $this->source); })())), "data-new-tag-prefix" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source,             // line 23
(isset($context["allow_add"]) || array_key_exists("allow_add", $context) ? $context["allow_add"] : (function () { throw new RuntimeError('Variable "allow_add" does not exist.', 23, $this->source); })()), "new_tag_prefix", [], "any", false, false, false, 23), [], (isset($context["translation_domain"]) || array_key_exists("translation_domain", $context) ? $context["translation_domain"] : (function () { throw new RuntimeError('Variable "translation_domain" does not exist.', 23, $this->source); })())), "data-token-separators" => twig_get_attribute($this->env, $this->source,             // line 24
(isset($context["allow_add"]) || array_key_exists("allow_add", $context) ? $context["allow_add"] : (function () { throw new RuntimeError('Variable "allow_add" does not exist.', 24, $this->source); })()), "tag_separators", [], "any", false, false, false, 24)]);
            // line 26
            echo "    ";
        }
        // line 27
        echo "
    ";
        // line 28
        if ((isset($context["multiple"]) || array_key_exists("multiple", $context) ? $context["multiple"] : (function () { throw new RuntimeError('Variable "multiple" does not exist.', 28, $this->source); })())) {
            // line 29
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 29, $this->source); })()), ["multiple" => "multiple"]);
            // line 30
            echo "    ";
        }
        // line 31
        echo "
    ";
        // line 32
        if ((isset($context["query_parameters"]) || array_key_exists("query_parameters", $context) ? $context["query_parameters"] : (function () { throw new RuntimeError('Variable "query_parameters" does not exist.', 32, $this->source); })())) {
            // line 33
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 33, $this->source); })()), ["data-query-parameters" => json_encode(            // line 34
(isset($context["query_parameters"]) || array_key_exists("query_parameters", $context) ? $context["query_parameters"] : (function () { throw new RuntimeError('Variable "query_parameters" does not exist.', 34, $this->source); })()))]);
            // line 36
            echo "    ";
        }
        // line 37
        echo "
    ";
        // line 38
        if ((isset($context["allow_clear"]) || array_key_exists("allow_clear", $context) ? $context["allow_clear"] : (function () { throw new RuntimeError('Variable "allow_clear" does not exist.', 38, $this->source); })())) {
            // line 39
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 39, $this->source); })()), ["data-allow-clear" => "true"]);
            // line 40
            echo "    ";
        }
        // line 41
        echo "
    ";
        // line 42
        if ((isset($context["width"]) || array_key_exists("width", $context) ? $context["width"] : (function () { throw new RuntimeError('Variable "width" does not exist.', 42, $this->source); })())) {
            // line 43
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 43, $this->source); })()), ["data-width" => (isset($context["width"]) || array_key_exists("width", $context) ? $context["width"] : (function () { throw new RuntimeError('Variable "width" does not exist.', 43, $this->source); })())]);
            // line 44
            echo "    ";
        }
        // line 45
        echo "
    ";
        // line 46
        if ((isset($context["render_html"]) || array_key_exists("render_html", $context) ? $context["render_html"] : (function () { throw new RuntimeError('Variable "render_html" does not exist.', 46, $this->source); })())) {
            // line 47
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 47, $this->source); })()), ["data-render-html" => "true"]);
            // line 48
            echo "    ";
        }
        // line 49
        echo "
    ";
        // line 50
        if ((isset($context["class_type"]) || array_key_exists("class_type", $context) ? $context["class_type"] : (function () { throw new RuntimeError('Variable "class_type" does not exist.', 50, $this->source); })())) {
            // line 51
            echo "        ";
            $context["attr"] = twig_array_merge((isset($context["attr"]) || array_key_exists("attr", $context) ? $context["attr"] : (function () { throw new RuntimeError('Variable "attr" does not exist.', 51, $this->source); })()), ["data-classtype" => (isset($context["class_type"]) || array_key_exists("class_type", $context) ? $context["class_type"] : (function () { throw new RuntimeError('Variable "class_type" does not exist.', 51, $this->source); })())]);
            // line 52
            echo "    ";
        }
        // line 53
        echo "
    ";
        // line 54
        ob_start();
        // line 55
        echo "        <select ";
        $this->displayBlock("widget_attributes", $context, $blocks);
        echo ">
            ";
        // line 56
        if (twig_test_iterable((isset($context["value"]) || array_key_exists("value", $context) ? $context["value"] : (function () { throw new RuntimeError('Variable "value" does not exist.', 56, $this->source); })()))) {
            // line 57
            echo "                ";
            if ((isset($context["allow_clear"]) || array_key_exists("allow_clear", $context) ? $context["allow_clear"] : (function () { throw new RuntimeError('Variable "allow_clear" does not exist.', 57, $this->source); })())) {
                // line 58
                echo "                        <option value=\"\"></option>
                ";
            }
            // line 60
            echo "                ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["value"]) || array_key_exists("value", $context) ? $context["value"] : (function () { throw new RuntimeError('Variable "value" does not exist.', 60, $this->source); })()));
            $context['loop'] = [
              'parent' => $context['_parent'],
              'index0' => 0,
              'index'  => 1,
              'first'  => true,
            ];
            if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
                $length = count($context['_seq']);
                $context['loop']['revindex0'] = $length - 1;
                $context['loop']['revindex'] = $length;
                $context['loop']['length'] = $length;
                $context['loop']['last'] = 1 === $length;
            }
            foreach ($context['_seq'] as $context["id"] => $context["label"]) {
                // line 61
                echo "                    ";
                $this->displayBlock('tetranz_select2entity_widget_select_option', $context, $blocks);
                // line 64
                echo "                ";
                ++$context['loop']['index0'];
                ++$context['loop']['index'];
                $context['loop']['first'] = false;
                if (isset($context['loop']['length'])) {
                    --$context['loop']['revindex0'];
                    --$context['loop']['revindex'];
                    $context['loop']['last'] = 0 === $context['loop']['revindex0'];
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['id'], $context['label'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 65
            echo "            ";
        }
        // line 66
        echo "        </select>
    ";
        $___internal_a3b97902c06133b28291e467ca54e0e0c382b4f033dd3ac31f3f96c5b5a4ffa0_ = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 54
        echo twig_spaceless($___internal_a3b97902c06133b28291e467ca54e0e0c382b4f033dd3ac31f3f96c5b5a4ffa0_);
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 61
    public function block_tetranz_select2entity_widget_select_option($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "tetranz_select2entity_widget_select_option"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "tetranz_select2entity_widget_select_option"));

        // line 62
        echo "                        <option value=\"";
        echo twig_escape_filter($this->env, (isset($context["id"]) || array_key_exists("id", $context) ? $context["id"] : (function () { throw new RuntimeError('Variable "id" does not exist.', 62, $this->source); })()), "html", null, true);
        echo "\" selected=\"selected\">";
        echo twig_escape_filter($this->env, (isset($context["label"]) || array_key_exists("label", $context) ? $context["label"] : (function () { throw new RuntimeError('Variable "label" does not exist.', 62, $this->source); })()), "html", null, true);
        echo "</option>
                    ";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "@TetranzSelect2Entity/Form/fields.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  242 => 62,  232 => 61,  222 => 54,  218 => 66,  215 => 65,  201 => 64,  198 => 61,  180 => 60,  176 => 58,  173 => 57,  171 => 56,  166 => 55,  164 => 54,  161 => 53,  158 => 52,  155 => 51,  153 => 50,  150 => 49,  147 => 48,  144 => 47,  142 => 46,  139 => 45,  136 => 44,  133 => 43,  131 => 42,  128 => 41,  125 => 40,  122 => 39,  120 => 38,  117 => 37,  114 => 36,  112 => 34,  110 => 33,  108 => 32,  105 => 31,  102 => 30,  99 => 29,  97 => 28,  94 => 27,  91 => 26,  89 => 24,  88 => 23,  87 => 22,  85 => 20,  83 => 19,  80 => 18,  78 => 16,  77 => 15,  76 => 14,  75 => 13,  74 => 12,  73 => 11,  72 => 10,  71 => 9,  70 => 8,  69 => 6,  68 => 5,  67 => 4,  66 => 3,  64 => 2,  45 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% block tetranz_select2entity_widget %}
    {% set attr = attr|merge({
    'data-ajax--url': remote_path,
    'data-ajax--cache': cache ? 'true' : 'false',
    'data-ajax--cache-timeout': cache_timeout|default(0),
    'data-ajax--delay': delay,
    'data-ajax--data-type': \"json\",
    'data-language' :language,
    'data-theme' :theme,
    'data-minimum-input-length': minimum_input_length,
    'data-placeholder': placeholder|trans({}, translation_domain),
    'data-page-limit': page_limit,
    'data-scroll': scroll ? 'true' : 'false',
    'data-autostart': autostart ? 'true' : 'false',
    'class': (attr.class|default('') ~ ' select2entity form-control')|trim,
    'data-name': name|e('html_attr')
    }) %}

    {% if allow_add.enabled %}
        {% set attr = attr|merge({
        'data-tags': 'true',
        'data-tags-text': allow_add.new_tag_text|trans({}, translation_domain),
        'data-new-tag-prefix': allow_add.new_tag_prefix|trans({}, translation_domain),
        'data-token-separators': allow_add.tag_separators,
        }) %}
    {% endif %}

    {% if multiple %}
        {% set attr = attr|merge({'multiple': 'multiple'}) %}
    {% endif %}

    {% if query_parameters %}
        {% set attr = attr|merge({
\t\t\t'data-query-parameters': query_parameters|json_encode
\t\t}) %}
    {% endif %}

    {% if allow_clear %}
        {% set attr = attr|merge({'data-allow-clear': 'true'}) %}
    {% endif %}

    {% if width %}
        {% set attr = attr|merge({'data-width': width}) %}
    {% endif %}

    {% if render_html %}
        {% set attr = attr|merge({'data-render-html': 'true'}) %}
    {% endif %}

    {% if class_type %}
        {% set attr = attr|merge({'data-classtype': class_type}) %}
    {% endif %}

    {% apply spaceless %}
        <select {{ block('widget_attributes') }}>
            {% if value is iterable %}
                {% if allow_clear %}
                        <option value=\"\"></option>
                {% endif %}
                {% for id, label in value %}
                    {% block tetranz_select2entity_widget_select_option %}
                        <option value=\"{{ id }}\" selected=\"selected\">{{ label }}</option>
                    {% endblock %}
                {% endfor %}
            {% endif %}
        </select>
    {% endapply %}
{% endblock %}
", "@TetranzSelect2Entity/Form/fields.html.twig", "/home/paulusak/card_system/card_system/vendor/tetranz/select2entity-bundle/Resources/views/Form/fields.html.twig");
    }
}
