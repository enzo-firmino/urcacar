<?php

namespace App\Controller\Api;

use App\Entity\Trajet;
use App\Entity\Adresse;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TrajetCreateController extends AbstractController
{
    private $repository;
    private $security;

    public function __construct(Security $security){
        $this->security = $security;
    }

    public function __invoke(Trajet $data)
    {
        $this->repository = $this->getDoctrine()
            ->getRepository(Adresse::class);
        $data->setConducteur($this->security->getUser());

        $depart = $this->CheckDepart($data);
        if($depart != null){
            $data->setAdresseDepart($depart);
        }

        $arrive = $this->CheckArrivee($data);
        if($arrive != null){
            $data->setAdresseArrivee($arrive);
        }

        return $data;
    }

    private function CheckArrivee($data){
        $arrive = $this->repository->findByCityAndRoad($data->getAdresseArrivee()->getVille(),$data->getAdresseArrivee()->getAdresse());
        if(count($arrive) == 0){
            return null;
        }else{
            return $arrive[0];
        }
    }

    private function CheckDepart($data){
        $depart = $this->repository->findByCityAndRoad($data->getAdresseDepart()->getVille(),$data->getAdresseDepart()->getAdresse());
        if(count($depart) == 0){
            return null;
        }else{
            return $depart[0];
        }
    }

    /**
     * @Route("/api/mesTrajets", name="mesTrajets")
     */
    public function getMesTrajets(SerializerInterface $serializer){
        $repository = $this->getDoctrine()
            ->getRepository(Trajet::class);
        $response = $repository->findTrajetsByUser($this->security->getUser()->getId());
        $entityAsArray = $serializer->normalize($response, null);
        foreach($entityAsArray as $key => $value){
            unset($entityAsArray[$key]["conducteur"]);
        }
        return new JsonResponse($entityAsArray);
    }
}