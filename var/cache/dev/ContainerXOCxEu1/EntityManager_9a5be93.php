<?php

namespace ContainerXOCxEu1;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHoldera1fd8 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializere3996 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties7ed0d = [
        
    ];

    public function getConnection()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getConnection', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getMetadataFactory', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getExpressionBuilder', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'beginTransaction', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->beginTransaction();
    }

    public function getCache()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getCache', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getCache();
    }

    public function transactional($func)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'transactional', array('func' => $func), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->transactional($func);
    }

    public function commit()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'commit', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->commit();
    }

    public function rollback()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'rollback', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getClassMetadata', array('className' => $className), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'createQuery', array('dql' => $dql), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'createNamedQuery', array('name' => $name), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'createQueryBuilder', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'flush', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'clear', array('entityName' => $entityName), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->clear($entityName);
    }

    public function close()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'close', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->close();
    }

    public function persist($entity)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'persist', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'remove', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'refresh', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'detach', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'merge', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getRepository', array('entityName' => $entityName), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'contains', array('entity' => $entity), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getEventManager', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getConfiguration', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'isOpen', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getUnitOfWork', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getProxyFactory', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'initializeObject', array('obj' => $obj), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'getFilters', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'isFiltersStateClean', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'hasFilters', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return $this->valueHoldera1fd8->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializere3996 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHoldera1fd8) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHoldera1fd8 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHoldera1fd8->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, '__get', ['name' => $name], $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        if (isset(self::$publicProperties7ed0d[$name])) {
            return $this->valueHoldera1fd8->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera1fd8;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHoldera1fd8;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, '__set', array('name' => $name, 'value' => $value), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera1fd8;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHoldera1fd8;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, '__isset', array('name' => $name), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera1fd8;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHoldera1fd8;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, '__unset', array('name' => $name), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHoldera1fd8;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHoldera1fd8;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, '__clone', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        $this->valueHoldera1fd8 = clone $this->valueHoldera1fd8;
    }

    public function __sleep()
    {
        $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, '__sleep', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;

        return array('valueHoldera1fd8');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializere3996 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializere3996;
    }

    public function initializeProxy() : bool
    {
        return $this->initializere3996 && ($this->initializere3996->__invoke($valueHoldera1fd8, $this, 'initializeProxy', array(), $this->initializere3996) || 1) && $this->valueHoldera1fd8 = $valueHoldera1fd8;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHoldera1fd8;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHoldera1fd8;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
