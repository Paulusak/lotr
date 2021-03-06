<?php

namespace ContainerXOCxEu1;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_Dscbo06Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.dscbo06' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.dscbo06'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'loginFormAuthenticator' => ['privates', 'App\\Security\\LoginFormAuthenticator', 'getLoginFormAuthenticatorService', true],
        ], [
            'loginFormAuthenticator' => 'App\\Security\\LoginFormAuthenticator',
        ]);
    }
}
