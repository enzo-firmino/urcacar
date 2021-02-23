<?php

namespace App\Controller\Api;

use App\Entity\Adresse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AdresseCreateController extends AbstractController
{
    public function __invoke(Adresse $data)
    {
        $repository = $this->getDoctrine()
            ->getRepository(Adresse::class);
        $query = $repository->findByCityAndRoad($data->getVille(),$data->getAdresse());
        if(count($query) == 0){
            return $data;
        }
        return new Response();
    }
}