<?php

namespace App\Repository;

use App\Entity\Keyword;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Keyword|null find($id, $lockMode = null, $lockVersion = null)
 * @method Keyword|null findOneBy(array $criteria, array $orderBy = null)
 * @method Keyword[]    findAll()
 * @method Keyword[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class KeywordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Keyword::class);
    }

    /**
     * @param $query
     * @return array
     */
    public function findKeywords($query): array
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
