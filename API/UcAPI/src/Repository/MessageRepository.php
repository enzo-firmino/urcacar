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

    public function findByUser(int $user)
    {
        $em = $this->getEntityManager();

        $statement = $em->getConnection()->prepare("
            SELECT * 
            FROM message
            WHERE date IN 
            (SELECT MAX(date) AS maxdate
            FROM message
            WHERE
            envoyeur_id = '11'
                OR destinataire_id = '11'
            GROUP BY IF( envoyeur_id = '11', destinataire_id, envoyeur_id )
            )"
        );
        $statement->execute();
        $result = $statement->fetchAll();

        return $result;
    }
}
