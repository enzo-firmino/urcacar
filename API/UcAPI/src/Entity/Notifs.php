<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Notifs
 *
 * @ORM\Table(name="notifs", indexes={@ORM\Index(name="FK_Regarder", columns={"idUser"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Notifs
{
    /**
     * @var int
     *
     * @ORM\Column(name="idNotif", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idnotif;

    /**
     * @var string|null
     *
     * @ORM\Column(name="titreNotif", type="string", length=255, nullable=true)
     */
    private $titrenotif;

    /**
     * @var string|null
     *
     * @ORM\Column(name="texteNotif", type="string", length=255, nullable=true)
     */
    private $textenotif;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="notifs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateur;

    public function getIdnotif(): ?int
    {
        return $this->idnotif;
    }

    public function getTitrenotif(): ?string
    {
        return $this->titrenotif;
    }

    public function setTitrenotif(?string $titrenotif): self
    {
        $this->titrenotif = $titrenotif;

        return $this;
    }

    public function getTextenotif(): ?string
    {
        return $this->textenotif;
    }

    public function setTextenotif(?string $textenotif): self
    {
        $this->textenotif = $textenotif;

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


}
