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
     * @var \DateTime|null
     *
     * @ORM\Column(name="heure", type="time", nullable=true)
     */
    private $heure;

    /**
     * @ORM\ManyToOne(targetEntity=Trajet::class, inversedBy="etapes")
     */
    private $trajet;

    /**
     * @ORM\ManyToOne(targetEntity=Adresse::class, inversedBy="etapes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $adresse;

    public function getIdetape(): ?int
    {
        return $this->idetape;
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

    public function getTrajet(): ?Trajet
    {
        return $this->trajet;
    }

    public function setTrajet(?Trajet $trajet): self
    {
        $this->trajet = $trajet;

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


}
