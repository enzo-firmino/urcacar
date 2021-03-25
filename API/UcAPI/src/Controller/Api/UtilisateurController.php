<?php

namespace App\Controller\Api;

use App\Entity\Avis;
use App\Entity\Utilisateur;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class UtilisateurController extends AbstractController
{
    private $security;

    public function __construct(Security $security){
        $this->security = $security;
    }

    /**
     * @Route("/api/utilisateur", name="utilisateur", methods={"GET"})
     */
    public function index(SerializerInterface $serializer): Response
    {
        $user = $serializer->normalize($this->security->getUser(), null);
        
        return new JsonResponse($user);
    }

    /**
     * @Route("/api/utilisateur/{id}", methods={"GET"}, name="utilisateurs")
     */
    public function getUserById(int $id,SerializerInterface $serializer): Response
    {
        $repository = $this->getDoctrine()
            ->getRepository(Utilisateur::class);
        $response = $repository->findby(['id' => $id]);
        $entityAsArray = $serializer->normalize($response, null);
        return new JsonResponse($entityAsArray[0]);
    }

    /**
     * @Route("/api/utilisateur/{id}/avis", name="AvisUtilisateur")
     */
    public function getAvis(int $id,SerializerInterface $serializer): Response
    {
        $repository = $this->getDoctrine()
            ->getRepository(Avis::class);
        $response = $repository->findAvisById($id);
        return new JsonResponse($response);
    }
}
