<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AvisRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AvisRepository::class)
 * @ApiResource(
 *      itemOperations={
 *          "get"
 *      },
 *      collectionOperations={
 *           "get"
 *      },
 * )
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
     * @ORM\Column(type="integer", nullable=true)
     */
    private $conduite;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $ponctualite;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $comportement;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisEmis")
     * @ORM\JoinColumn(nullable=false)
     */
    private $emetteur;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisRecu")
     * @ORM\JoinColumn(nullable=false)
     */
    private $destinataire;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConduite(): ?int
    {
        return $this->conduite;
    }

    public function setConduite(?int $conduite): self
    {
        $this->conduite = $conduite;

        return $this;
    }

    public function getPonctualite(): ?int
    {
        return $this->ponctualite;
    }

    public function setPonctualite(?int $ponctualite): self
    {
        $this->ponctualite = $ponctualite;

        return $this;
    }

    public function getComportement(): ?int
    {
        return $this->comportement;
    }

    public function setComportement(?int $comportement): self
    {
        $this->comportement = $comportement;

        return $this;
    }

    public function getEmetteur(): ?Utilisateur
    {
        return $this->emetteur;
    }

    public function setEmetteur(?Utilisateur $emetteur): self
    {
        $this->emetteur = $emetteur;

        return $this;
    }

    public function getDestinataire(): ?Utilisateur
    {
        return $this->destinataire;
    }

    public function setDestinataire(?Utilisateur $destinataire): self
    {
        $this->destinataire = $destinataire;

        return $this;
    }
}
