<?php

namespace App\Controller\Api;

use App\Entity\Reserver;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReservationController extends AbstractController
{
    /**
     * @Route("/api/reservation/{id}", methods={"GET"},  name="reservation")
     */
    public function index(int $id, SerializerInterface $serializer): Response
    {
        $repository = $this->getDoctrine()
            ->getRepository(Reserver::class);
        $response = $repository->findReservationById($id);
        return new JsonResponse($response);
    }
}
