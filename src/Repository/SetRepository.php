<?php

namespace App\Repository;

use App\Entity\Set;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Set|null find($id, $lockMode = null, $lockVersion = null)
 * @method Set|null findOneBy(array $criteria, array $orderBy = null)
 * @method Set[]    findAll()
 * @method Set[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Set::class);
    }

    /**
     * @param $query
     * @return array
     */
    public function findSets($query): array
    {
        return $this->createQueryBuilder('f')
            ->select('f')
            ->where('f.name LIKE :query')
            ->setParameter('query', '%' . $query . '%')
            ->orderBy('f.name', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
