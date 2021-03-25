<?php

namespace App\Controller\Api;

use App\Entity\Message;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ConversationController extends AbstractController
{
    private $security;

    public function __construct(Security $security){
        $this->security = $security;
    }

    /**
     * @Route("/api/conversations", name="conversations")
     */
    public function getConversations()
    {
        $repository = $this->getDoctrine()
            ->getRepository(Message::class);

        return new JsonResponse($repository->findConversationsByUser($this->security->getUser()->getId()));
    }

    /**
     * @Route("/api/conversation", methods={"POST"}, name="conversation")
     */
    public function getConversation(Request $request)
    {
        $body = json_decode($request->getContent(),true);
        $repository = $this->getDoctrine()
            ->getRepository(Message::class);
        $response = $repository->findConversation($body["envoyeur_id"],$body["destinataire_id"]);
        return new JsonResponse($response);
    }
}
