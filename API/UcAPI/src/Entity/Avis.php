<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AvisRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=AvisRepository::class)
 */
class Avis
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $conduite;

    /**
     * @ORM\Column(type="integer")
     */
    private $ponctualite;

    /**
     * @ORM\Column(type="integer")
     */
    private $comportement;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisDonne")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateurDonner;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisRecu")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateurAvoir;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConduite(): ?int
    {
        return $this->conduite;
    }

    public function setConduite(int $conduite): self
    {
        $this->conduite = $conduite;

        return $this;
    }

    public function getPonctualite(): ?int
    {
        return $this->ponctualite;
    }

    public function setPonctualite(int $ponctualite): self
    {
        $this->ponctualite = $ponctualite;

        return $this;
    }

    public function getComportement(): ?int
    {
        return $this->comportement;
    }

    public function setComportement(int $comportement): self
    {
        $this->comportement = $comportement;

        return $this;
    }

    public function getUtilisateurDonner(): ?Utilisateur
    {
        return $this->utilisateurDonner;
    }

    public function setUtilisateurDonner(?Utilisateur $utilisateurDonner): self
    {
        $this->utilisateurDonner = $utilisateurDonner;

        return $this;
    }

    public function getUtilisateurAvoir(): ?Utilisateur
    {
        return $this->utilisateurAvoir;
    }

    public function setUtilisateurAvoir(?Utilisateur $utilisateurAvoir): self
    {
        $this->utilisateurAvoir = $utilisateurAvoir;

        return $this;
    }
}
