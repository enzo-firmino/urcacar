<?php

namespace App\Repository;

use Doctrine\ORM\Query;
use App\Entity\Reserver;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Reserver|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reserver|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reserver[]    findAll()
 * @method Reserver[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReserverRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Reserver::class);
    }

    public function findReservationById(int $trajet)
    {
        return $this->createQueryBuilder('a')
            ->where('a.trajet = :id')
            ->setParameter('id', $trajet)
            ->orderBy('a.id', 'ASC')
            ->getQuery()
            ->getResult(Query::HYDRATE_ARRAY)
        ;
    }
}
