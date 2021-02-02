<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\VoitureRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=VoitureRepository::class)
 * @ApiResource(
 *      normalizationContext={"groups": {"infoCar"}},
 *      itemOperations={
 *          "get",
 *          "delete"={"security"="is_granted('ROLE_USER')"},
 *          "put"={
 *              "path"="/voiture/{id}.{_format}",
 *              "security"="is_granted('ROLE_USER')"
 *          },
 *      },
 *      collectionOperations={
 *           "get",
 *           "post"={"security"="is_granted('ROLE_USER')"}
 *      },
 * )
 */
class Voiture
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infoCar"})
     */
    private $modele;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"infoCar"})
     */
    private $annee;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infoCar"})
     */
    private $couleur;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infoCar"})
     */
    private $marque;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infoCar"})
     */
    private $immatriculation;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infoCar"})
     */
    private $photo;

    /**
     * @ORM\OneToOne(targetEntity=Utilisateur::class, inversedBy="voiture", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $proprietaire;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModele(): ?string
    {
        return $this->modele;
    }

    public function setModele(?string $modele): self
    {
        $this->modele = $modele;

        return $this;
    }

    public function getAnnee(): ?\DateTimeInterface
    {
        return $this->annee;
    }

    public function setAnnee(?\DateTimeInterface $annee): self
    {
        $this->annee = $annee;

        return $this;
    }

    public function getCouleur(): ?string
    {
        return $this->couleur;
    }

    public function setCouleur(?string $couleur): self
    {
        $this->couleur = $couleur;

        return $this;
    }

    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(?string $marque): self
    {
        $this->marque = $marque;

        return $this;
    }

    public function getImmatriculation(): ?string
    {
        return $this->immatriculation;
    }

    public function setImmatriculation(?string $immatriculation): self
    {
        $this->immatriculation = $immatriculation;

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getProprietaire(): ?Utilisateur
    {
        return $this->proprietaire;
    }

    public function setProprietaire(Utilisateur $proprietaire): self
    {
        $this->proprietaire = $proprietaire;

        return $this;
    }
}
