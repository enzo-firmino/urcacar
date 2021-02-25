<?php

namespace App\Controller\Api;

use App\Entity\Message;
use App\Entity\Utilisateur;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ConversationController extends AbstractController
{
    private $repository;
    private $security;

    public function __construct(Security $security){
        $this->security = $security;
    }


    /**
     * @param $data
     *
     * @Route(
     *     name="conversations",
     *     path="/api/utilisateurs/{id}/conversations",
     *     methods={"GET"},
     *     defaults={
     *         "_api_resource_class"="App\Entity\Utilisateur",
     *         "_api_item_operation_name"="conversations"
     *     },
     * )
     *
     */
    public function __invoke(Utilisateur $data)
    {
        $repository = $this->getDoctrine()
            ->getRepository(Message::class);
        return $repository->findByUser($data->getId());
    }
}