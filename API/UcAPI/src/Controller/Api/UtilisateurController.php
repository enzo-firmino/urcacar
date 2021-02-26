<?php

namespace App\Controller\Api;

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
     * @Route("/api/utilisateur", name="utilisateur")
     */
    public function index(SerializerInterface $serializer): Response
    {
        $user = $serializer->normalize($this->security->getUser(), null);
        
        return new JsonResponse($user);
    }
}
