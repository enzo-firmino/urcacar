<?php

namespace App\Repository;

use App\Entity\Message;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Message|null find($id, $lockMode = null, $lockVersion = null)
 * @method Message|null findOneBy(array $criteria, array $orderBy = null)
 * @method Message[]    findAll()
 * @method Message[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MessageRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Message::class);
    }

    public function findConversationsByUser(int $user)
    {
        $em = $this->getEntityManager();

        $statement = $em->getConnection()->prepare("
            SELECT * 
            FROM message
            WHERE date IN 
            (SELECT MAX(date) AS maxdate
            FROM message
            WHERE envoyeur_id = :user
                OR destinataire_id = :user
            GROUP BY IF( envoyeur_id = :user, destinataire_id, envoyeur_id )
            )"
        );
        $statement->bindValue('user', $user);
        $statement->execute();
        $result = $statement->fetchAll();

        return $result;
    }

    public function findConversation(int $trajet, int $p, int $d)
    {
        // $this->createQueryBuilder('a')
        //     ->andWhere('a.trajet = :trajet')
        //     ->andWhere('a.envoyeur = :p OR a.envoyeur = :p')
        //     ->andWhere('a.destinataire = :d OR a.destinataire = :d')
        //     ->setParameter('trajet', $trajet)
        //     ->setParameter('p', $p)
        //     ->setParameter('d', $d)
        //     ->orderBy('a.date', 'ASC')
        //     ->getQuery()
        //     ->getResult()

        $em = $this->getEntityManager();
        $statement = $em->getConnection()->prepare("
            SELECT * 
            FROM `message` 
            WHERE (destinataire_id = :p
                OR envoyeur_id = :p)
            AND (destinataire_id = :d
                OR envoyeur_id = :d)
            ORDER BY date ASC"
        );
        $statement->bindValue('p', $p);
        $statement->bindValue('d', $d);
        $statement->execute();
        $result = $statement->fetchAll();
        return $result;
    }
}
