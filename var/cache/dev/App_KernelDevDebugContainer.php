<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerXOCxEu1\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerXOCxEu1/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerXOCxEu1.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerXOCxEu1\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerXOCxEu1\App_KernelDevDebugContainer([
    'container.build_hash' => 'XOCxEu1',
    'container.build_id' => 'f94ad7b6',
    'container.build_time' => 1625002425,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerXOCxEu1');
