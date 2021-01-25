<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Avis
 *
 * @ORM\Table(name="avis", indexes={@ORM\Index(name="FK_donner", columns={"idUser"}), @ORM\Index(name="FK_Avoir", columns={"Uti_idUser"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Avis
{
    /**
     * @var int
     *
     * @ORM\Column(name="idAvis", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idavis;

    /**
     * @var int|null
     *
     * @ORM\Column(name="conduite", type="integer", nullable=true)
     */
    private $conduite;

    /**
     * @var int|null
     *
     * @ORM\Column(name="ponctualite", type="integer", nullable=true)
     */
    private $ponctualite;

    /**
     * @var int|null
     *
     * @ORM\Column(name="comportement", type="integer", nullable=true)
     */
    private $comportement;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisDonnés")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateurDonne;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisRecu")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateurRecu;

    public function getIdavis(): ?int
    {
        return $this->idavis;
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

    public function getUtilisateurDonne(): ?Utilisateur
    {
        return $this->utilisateurDonne;
    }

    public function setUtilisateurDonne(?Utilisateur $utilisateurDonne): self
    {
        $this->utilisateurDonne = $utilisateurDonne;

        return $this;
    }

    public function getUtilisateurRecu(): ?Utilisateur
    {
        return $this->utilisateurRecu;
    }

    public function setUtilisateurRecu(?Utilisateur $utilisateurRecu): self
    {
        $this->utilisateurRecu = $utilisateurRecu;

        return $this;
    }


}
