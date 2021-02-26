<?php

namespace App\Repository;

use App\Entity\Trajet;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Trajet|null find($id, $lockMode = null, $lockVersion = null)
 * @method Trajet|null findOneBy(array $criteria, array $orderBy = null)
 * @method Trajet[]    findAll()
 * @method Trajet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrajetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Trajet::class);
    }

    public function findTrajetsByUser(int $user)
    {
        // $em = $this->getEntityManager();

        // $statement = $em->getConnection()->prepare("

        //     SELECT a.prix,a.nb_place,a.date_depart,a.heure_arrivee,a.heure_depart
        //     FROM trajet a INNER JOIN adresse as ad INNER JOIN adresse as aa
        //     WHERE a.conducteur_id = :user

        //     SELECT a.prix,a.nbPlace,a.dateDepart,a.heureArrivee,a.heureDepart,ad,aa
        //     FROM trajet a INNER JOIN a.adresseDepart as ad INNER JOIN a.adresseArrivee as aa
        //     WHERE a.conducteur = :user"
        // );
        // $statement->bindValue('user', $user);
        // $statement->execute();
        // $result = $statement->fetchAll();

        // return $result;

        return $this->createQueryBuilder('a')
            ->where('a.conducteur = :user')
            ->setParameter('user', $user)
            ->orderBy('a.dateDepart', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
}
