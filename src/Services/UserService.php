<?php

namespace App\Services;

use App\Entity\User;
use App\Repository\UserForgottenPasswordRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
class UserService
{

    private EntityManagerInterface $entityManager;
    private UserPasswordEncoderInterface $userPasswordEncoder;
    private UserForgottenPasswordRepository $userForgottenPasswordRepository;
    private UserRepository $userRepository;
    public function __construct(
        EntityManagerInterface $entityManager,
        UserPasswordEncoderInterface $userPasswordEncoder,
        UserForgottenPasswordRepository $userForgottenPasswordRepository,
        UserRepository $userRepository
    )
    {
        $this->entityManager = $entityManager;
        $this->userPasswordEncoder = $userPasswordEncoder;
        $this->userForgottenPasswordRepository = $userForgottenPasswordRepository;
        $this->userRepository = $userRepository;
    }

    public function createUser(
        array $role,
        string $name,
        string $email,
        string $password = null,
        $userIP,
        $locale): User
    {
        $user = new User();
        $user->setName($name);
        $user->setEmail($email);
        $user->setRegistrationIP($userIP);
        $user->setLocale($locale);

        if (!empty($password)) {
            $user->setPassword($this->userPasswordEncoder->encodePassword($user, $password));
        }
        $user->setRoles($role);
        $this->entityManager->persist($user);
        $this->entityManager->flush();
        return $user;
    }
}