<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReserverRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ReserverRepository::class)
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
     * @ORM\JoinColumn(nullable=false)
     */
    private $passager;

    /**
     * @ORM\ManyToOne(targetEntity=Trajet::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $trajet;

    /**
     * @ORM\Column(type="boolean")
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
