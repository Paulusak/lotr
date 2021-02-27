<?php

namespace App\Repository;

use App\Entity\Culture;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Culture|null find($id, $lockMode = null, $lockVersion = null)
 * @method Culture|null findOneBy(array $criteria, array $orderBy = null)
 * @method Culture[]    findAll()
 * @method Culture[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CultureRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Culture::class);
    }

    /**
     * @param $query
     * @return array
     */
    public function findCultures($query): array
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
