<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\SituerRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=SituerRepository::class)
 */
class Situer
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
    private $idEtape;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idAd;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdEtape(): ?string
    {
        return $this->idEtape;
    }

    public function setIdEtape(string $idEtape): self
    {
        $this->idEtape = $idEtape;

        return $this;
    }

    public function getIdAd(): ?string
    {
        return $this->idAd;
    }

    public function setIdAd(string $idAd): self
    {
        $this->idAd = $idAd;

        return $this;
    }
}
