<?php


namespace App\Controller;


use App\Entity\User;
use App\Form\RegistrationType;
use App\Repository\UserRepository;
use App\Security\LoginFormAuthenticator;
use App\Services\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class RegistrationController extends AbstractController
{
    private UserService $userService;
    private UserRepository $userRepository;
    private GuardAuthenticatorHandler $guardAuthenticatorHandler;

    /**
     * RegistrationController constructor.
     * @param GuardAuthenticatorHandler $guardAuthenticatorHandler
     * @param UserService $userService
     * @param UserRepository $userRepository
     */
    public function __construct(GuardAuthenticatorHandler $guardAuthenticatorHandler,
                                UserService $userService, UserRepository $userRepository)
    {
        $this->userService = $userService;
        $this->userRepository = $userRepository;
        $this->guardAuthenticatorHandler = $guardAuthenticatorHandler;
    }

    /**
     * @Route("/register", name="register")
     * @param Request $request
     * @param LoginFormAuthenticator $loginFormAuthenticator
     * @return Response
     */
    public function registerAction(Request $request, LoginFormAuthenticator $loginFormAuthenticator)
    {
        if($this->getUser()){
            return $this->redirectToRoute('user_detail');
        }

        $form = $this->createForm(RegistrationType::class, null);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            if ($this->userRepository->count(['email' => $form->getData()->getEmail()]) > 0){
                $form->get('email')->addError(new FormError('Účet s tímto emailem již existuje'));
            }
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $userIP = $request->getClientIp();
            $locale = $request->getLocale();

            $user = $this->userService->createUser(
                [],
                $data->getName(),
                $data->getEmail(),
                $data->getPassword(),
                $userIP,
                $locale

            );
            if (!$user instanceof User) {
                $form->addError(new FormError('Nepodařilo se vytvořit uživatele'));
            } else {
                $response = $this->guardAuthenticatorHandler->authenticateUserAndHandleSuccess($user, $request, $loginFormAuthenticator, 'main');
                if ($response instanceof Response) {
                    $this->addFlash('success', 'Uživatelský účet byl vytvořen');
                    return $response;
                }
            }
        }

        return $this->render('registration.html.twig', array(
            'form' => $form->createView(),
        ));

    }
}