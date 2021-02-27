<?php

namespace App\Repository;

use App\Entity\CollectionOfUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CollectionOfUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method CollectionOfUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method CollectionOfUser[]    findAll()
 * @method CollectionOfUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CollectionOfUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CollectionOfUser::class);
    }

    // /**
    //  * @return CollectionOfUser[] Returns an array of CollectionOfUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?CollectionOfUser
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
