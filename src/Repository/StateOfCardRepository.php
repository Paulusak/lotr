<?php

namespace App\Repository;

use App\Entity\StateOfCard;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method StateOfCard|null find($id, $lockMode = null, $lockVersion = null)
 * @method StateOfCard|null findOneBy(array $criteria, array $orderBy = null)
 * @method StateOfCard[]    findAll()
 * @method StateOfCard[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StateOfCardRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StateOfCard::class);
    }

    // /**
    //  * @return StateOfCard[] Returns an array of StateOfCard objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?StateOfCard
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
