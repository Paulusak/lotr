<?php

namespace App\Repository;

use App\Entity\UserForgottenPassword;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserForgottenPassword|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserForgottenPassword|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserForgottenPassword[]    findAll()
 * @method UserForgottenPassword[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserForgottenPasswordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserForgottenPassword::class);
    }
}