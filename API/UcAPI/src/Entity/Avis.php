<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AvisRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=AvisRepository::class)
 * @ApiResource(
 *      normalizationContext={"groups": {"infoAvis"}},
 *      itemOperations={
 *          "get",
 *      },
 *      collectionOperations={
 *           "get",
 *           "post"={"security"="is_granted('ROLE_USER')"}
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
     * @Groups({"infoAvis"})
     */
    private $conduite;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"infoAvis"})
     */
    private $ponctualite;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"infoAvis"})
     */
    private $comportement;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="avisEmis")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"infoAvis"})
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
