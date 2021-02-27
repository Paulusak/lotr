<?php

namespace ContainerXOCxEu1;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getTetranzSelect2entity_Select2entityTypeService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'tetranz_select2entity.select2entity_type' shared service.
     *
     * @return \Tetranz\Select2EntityBundle\Form\Type\Select2EntityType
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/form/FormTypeInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/form/AbstractType.php';
        include_once \dirname(__DIR__, 4).'/vendor/tetranz/select2entity-bundle/Form/Type/Select2EntityType.php';

        return $container->privates['tetranz_select2entity.select2entity_type'] = new \Tetranz\Select2EntityBundle\Form\Type\Select2EntityType(($container->services['doctrine'] ?? $container->getDoctrineService()), ($container->services['router'] ?? $container->getRouterService()), $container->parameters['tetranz_select2_entity.config']);
    }
}
