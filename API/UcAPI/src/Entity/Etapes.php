<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Etapes
 *
 * @ORM\Table(name="etapes", indexes={@ORM\Index(name="FK_Contenir", columns={"idTrajet"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Etapes
{
    /**
     * @var int
     *
     * @ORM\Column(name="idEtape", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idetape;

    /**
     * @var int|null
     *
     * @ORM\Column(name="idTrajet", type="integer", nullable=true)
     */
    private $idtrajet;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="heure", type="time", nullable=true)
     */
    private $heure;

    public function getIdetape(): ?int
    {
        return $this->idetape;
    }

    public function getIdtrajet(): ?int
    {
        return $this->idtrajet;
    }

    public function setIdtrajet(?int $idtrajet): self
    {
        $this->idtrajet = $idtrajet;

        return $this;
    }

    public function getHeure(): ?\DateTimeInterface
    {
        return $this->heure;
    }

    public function setHeure(?\DateTimeInterface $heure): self
    {
        $this->heure = $heure;

        return $this;
    }


}
