<?php

namespace App\Controller;

use App\Entity\Card;
use App\Entity\Creature;
use App\Entity\Culture;
use App\Entity\Keyword;
use App\Entity\Rarity;
use App\Entity\Set;
use App\Form\CreatureType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


/**
 * Class DefaultController
 * @package App\Controller
 * @Route("/")
 */
class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     * @return Response
     */
    public function index(): Response
    {
        $this->denyAccessUnlessGranted('ROLE_USER');
        return $this->render("homepage.html.twig", []);
    }

    /**
     * @Route("/database", name="database")
     * @param Request $request
     * @param EntityManagerInterface $em
     * @return Response
     */
    public function viewDatabase(Request $request,EntityManagerInterface $em): Response
    {
        $newCreature = new Creature();
        $form = $this->createForm(CreatureType::class, $newCreature);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $request->isMethod('POST')) {
            $em->persist($newCreature);
            $em->flush();
            $this->redirect('homepage');
        }
        $cards = $em->getRepository(Card::class)->findAll();
        return $this->render("database.html.twig", ['cards' => $cards, 'form' => $form->createView()]);
    }

    /**
     * @Route("/autocomplete/rarity", name="autocomplete_rarity")
     * @param Request $request
     * @return JsonResponse
     */
    public function autoCompleteFormRarity(Request $request): JsonResponse
    {
        $query = $request->get('q');
        $acc = PropertyAccess::createPropertyAccessor();
        $result = $this->getDoctrine()
            ->getRepository(Rarity::class)
            ->findRarities($query);
        $data = [];
        /** @var Rarity $entity */
        foreach ($result as $entity) {
            $data[] = [
                'id' => $entity->getId(),
                'text' => $acc->getValue($entity, 'name'),
            ];
        }
        return new JsonResponse($data);
    }

    /**
     * @Route("/autocomplete/culture", name="autocomplete_culture")
     * @param Request $request
     * @return JsonResponse
     */
    public function autoCompleteFormCulture(Request $request): JsonResponse
    {
        $query = $request->get('q');
        $acc = PropertyAccess::createPropertyAccessor();
        $result = $this->getDoctrine()
            ->getRepository(Culture::class)
            ->findCultures($query);
        $data = [];
        /** @var Culture $entity */
        foreach ($result as $entity) {
            $data[] = [
                'id' => $entity->getId(),
                'text' => $acc->getValue($entity, 'name'),
            ];
        }
        return new JsonResponse($data);
    }

    /**
     * @Route("/autocomplete/keyword", name="autocomplete_keyword")
     * @param Request $request
     * @return JsonResponse
     */
    public function autoCompleteFormKeyword(Request $request): JsonResponse
    {
        $query = $request->get('q');
        $acc = PropertyAccess::createPropertyAccessor();
        $result = $this->getDoctrine()
            ->getRepository(Keyword::class)
            ->findKeywords($query);
        $data = [];
        /** @var Keyword $entity */
        foreach ($result as $entity) {
            $data[] = [
                'id' => $entity->getId(),
                'text' => $acc->getValue($entity, 'name'),
            ];
        }
        return new JsonResponse($data);
    }

    /**
     * @Route("/autocomplete/set", name="autocomplete_set")
     * @param Request $request
     * @return JsonResponse
     */
    public function autoCompleteFormSet(Request $request): JsonResponse
    {
        $query = $request->get('q');
        $acc = PropertyAccess::createPropertyAccessor();
        $result = $this->getDoctrine()
            ->getRepository(Set::class)
            ->findSets($query);
        $data = [];
        /** @var Set $entity */
        foreach ($result as $entity) {
            $data[] = [
                'id' => $entity->getId(),
                'text' => $acc->getValue($entity, 'name'),
            ];
        }
        return new JsonResponse($data);
    }
}