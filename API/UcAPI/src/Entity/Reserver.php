<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Reserver
 *
 * @ORM\Table(name="reserver", indexes={@ORM\Index(name="FK_Reserver2", columns={"idUser"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Reserver
{

    /**
     * @var bool|null
     *
     * @ORM\Column(name="valider", type="boolean", nullable=true)
     */
    private $valider;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateur;

    /**
     * @ORM\ManyToOne(targetEntity=Trajet::class, inversedBy="reservations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $trajet;


    public function getValider(): ?bool
    {
        return $this->valider;
    }

    public function setValider(?bool $valider): self
    {
        $this->valider = $valider;

        return $this;
    }

    public function getUtilisateur(): ?Utilisateur
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?Utilisateur $utilisateur): self
    {
        $this->utilisateur = $utilisateur;

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


}
