<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AdresseRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=AdresseRepository::class)
 */
class Adresse
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $villeAd;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $cpAd;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adresseAd;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVilleAd(): ?string
    {
        return $this->villeAd;
    }

    public function setVilleAd(string $villeAd): self
    {
        $this->villeAd = $villeAd;

        return $this;
    }

    public function getCpAd(): ?string
    {
        return $this->cpAd;
    }

    public function setCpAd(string $cpAd): self
    {
        $this->cpAd = $cpAd;

        return $this;
    }

    public function getAdresseAd(): ?string
    {
        return $this->adresseAd;
    }

    public function setAdresseAd(string $adresseAd): self
    {
        $this->adresseAd = $adresseAd;

        return $this;
    }
}
