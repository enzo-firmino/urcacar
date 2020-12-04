<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\RecurrenceRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=RecurrenceRepository::class)
 */
class Recurrence
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
    private $Lundi;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Mardi;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Mercredi;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Jeudi;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Vendredi;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Samedi;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Dimanche;

    /**
     * @ORM\Column(type="date")
     */
    private $dateFin;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idTrajet;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLundi(): ?string
    {
        return $this->Lundi;
    }

    public function setLundi(string $Lundi): self
    {
        $this->Lundi = $Lundi;

        return $this;
    }

    public function getMardi(): ?string
    {
        return $this->Mardi;
    }

    public function setMardi(string $Mardi): self
    {
        $this->Mardi = $Mardi;

        return $this;
    }

    public function getMercredi(): ?string
    {
        return $this->Mercredi;
    }

    public function setMercredi(string $Mercredi): self
    {
        $this->Mercredi = $Mercredi;

        return $this;
    }

    public function getJeudi(): ?string
    {
        return $this->Jeudi;
    }

    public function setJeudi(string $Jeudi): self
    {
        $this->Jeudi = $Jeudi;

        return $this;
    }

    public function getVendredi(): ?string
    {
        return $this->Vendredi;
    }

    public function setVendredi(string $Vendredi): self
    {
        $this->Vendredi = $Vendredi;

        return $this;
    }

    public function getSamedi(): ?string
    {
        return $this->Samedi;
    }

    public function setSamedi(string $Samedi): self
    {
        $this->Samedi = $Samedi;

        return $this;
    }

    public function getDimanche(): ?string
    {
        return $this->Dimanche;
    }

    public function setDimanche(string $Dimanche): self
    {
        $this->Dimanche = $Dimanche;

        return $this;
    }

    public function getDateFin(): ?\DateTimeInterface
    {
        return $this->dateFin;
    }

    public function setDateFin(\DateTimeInterface $dateFin): self
    {
        $this->dateFin = $dateFin;

        return $this;
    }

    public function getIdTrajet(): ?string
    {
        return $this->idTrajet;
    }

    public function setIdTrajet(string $idTrajet): self
    {
        $this->idTrajet = $idTrajet;

        return $this;
    }
}
