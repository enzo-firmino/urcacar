<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\EtapeRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=EtapeRepository::class)
 * @ApiResource(
 *      normalizationContext={"groups": {"etape:read"}},
 *      itemOperations={
 *          "get"
 *      },
 *      collectionOperations={
 *           "get"
 *      },
 * )
 */
class Etape
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="time")
     * @Groups({"etape:read"})
     */
    private $heure;

    /**
     * @ORM\ManyToOne(targetEntity=Adresse::class, inversedBy="etapes")
     * @ORM\JoinColumn(nullable=true)
     * @Groups({"etape:read"})
     */
    private $adresse;

    /**
     * @ORM\ManyToOne(targetEntity=Trajet::class, inversedBy="etapes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $trajet;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHeure(): ?\DateTimeInterface
    {
        return $this->heure;
    }

    public function setHeure(\DateTimeInterface $heure): self
    {
        $this->heure = $heure;

        return $this;
    }

    public function getAdresse(): ?Adresse
    {
        return $this->adresse;
    }

    public function setAdresse(?Adresse $adresse): self
    {
        $this->adresse = $adresse;

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
