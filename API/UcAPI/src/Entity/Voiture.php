<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VoitureRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=VoitureRepository::class)
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
     */
    private $modeleCar;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $anneCar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $couleurCar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $marqueCar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $plaqueCar;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photoCar;

    /**
     * @ORM\OneToOne(targetEntity=Utilisateur::class, inversedBy="voiture", cascade={"persist", "remove"})
     */
    private $idUser;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getModeleCar(): ?string
    {
        return $this->modeleCar;
    }

    public function setModeleCar(?string $modeleCar): self
    {
        $this->modeleCar = $modeleCar;

        return $this;
    }

    public function getAnneCar(): ?\DateTimeInterface
    {
        return $this->anneCar;
    }

    public function setAnneCar(?\DateTimeInterface $anneCar): self
    {
        $this->anneCar = $anneCar;

        return $this;
    }

    public function getCouleurCar(): ?string
    {
        return $this->couleurCar;
    }

    public function setCouleurCar(?string $couleurCar): self
    {
        $this->couleurCar = $couleurCar;

        return $this;
    }

    public function getMarqueCar(): ?string
    {
        return $this->marqueCar;
    }

    public function setMarqueCar(?string $marqueCar): self
    {
        $this->marqueCar = $marqueCar;

        return $this;
    }

    public function getPlaqueCar(): ?string
    {
        return $this->plaqueCar;
    }

    public function setPlaqueCar(?string $plaqueCar): self
    {
        $this->plaqueCar = $plaqueCar;

        return $this;
    }

    public function getPhotoCar(): ?string
    {
        return $this->photoCar;
    }

    public function setPhotoCar(?string $photoCar): self
    {
        $this->photoCar = $photoCar;

        return $this;
    }

    public function getIdUser(): ?Utilisateur
    {
        return $this->idUser;
    }

    public function setIdUser(?Utilisateur $idUser): self
    {
        $this->idUser = $idUser;

        return $this;
    }
}
