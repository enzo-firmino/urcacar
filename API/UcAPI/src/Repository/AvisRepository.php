<?php

namespace App\Repository;

use App\Entity\Avis;
use Doctrine\ORM\Query;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Avis|null find($id, $lockMode = null, $lockVersion = null)
 * @method Avis|null findOneBy(array $criteria, array $orderBy = null)
 * @method Avis[]    findAll()
 * @method Avis[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AvisRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Avis::class);
    }

    public function findAvisById(int $user)
    {
        return $this->createQueryBuilder('a')
            ->where('u.id = :user')
            ->innerJoin('a.destinataire', 'u')
            ->setParameter('user', $user)
            ->getQuery()
            ->getResult(Query::HYDRATE_ARRAY)
        ;
    }
}
