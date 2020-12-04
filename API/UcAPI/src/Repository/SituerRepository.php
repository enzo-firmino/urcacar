<?php

namespace App\Repository;

use App\Entity\Situer;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Situer|null find($id, $lockMode = null, $lockVersion = null)
 * @method Situer|null findOneBy(array $criteria, array $orderBy = null)
 * @method Situer[]    findAll()
 * @method Situer[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SituerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Situer::class);
    }

    // /**
    //  * @return Situer[] Returns an array of Situer objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Situer
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
