<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ReserverRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ReserverRepository::class)
 * @ApiResource(
 *      normalizationContext={"groups": {"infoReservation"}},
 *      itemOperations={
 *          "get",
 *          "delete"={"security"="is_granted('ROLE_ADMIN')"}
 *      },
 *      collectionOperations={
 *           "get",
 *           "post"={"security"="is_granted('ROLE_USER')"}
 *      },
 * )
 */
class Reserver
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="reservations")
     * @ORM\JoinColumn(onDelete="CASCADE",nullable=false)
     */
    private $passager;

    /**
     * @ORM\ManyToOne(targetEntity=Trajet::class, inversedBy="reservations")
     * @ORM\JoinColumn(onDelete="CASCADE",nullable=false)
     */
    private $trajet;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"infoReservation", "infoTrajet"})
     */
    private $acceptee;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPassager(): ?Utilisateur
    {
        return $this->passager;
    }

    public function setPassager(?Utilisateur $passager): self
    {
        $this->passager = $passager;

        return $this;
    }

    public function getTrajet(): ?Trajet
    {
        return $this->trajet;
    }

    public function setTrajet(?Trajet $trajet): self
    {
        $this->trajet = $trajet;

        return $this;
    }

    public function getAcceptee(): ?bool
    {
        return $this->acceptee;
    }

    public function setAcceptee(bool $acceptee): self
    {
        $this->acceptee = $acceptee;

        return $this;
    }
}
