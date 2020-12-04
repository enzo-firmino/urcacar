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
     * @ORM\Column(type="date")
     */
    private $dateFin;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Lundi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Mardi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Mercredi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Jeudi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Vendredi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Samedi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $Dimanche;

    /**
     * @ORM\OneToOne(targetEntity=Trajet::class, inversedBy="recurrence", cascade={"persist", "remove"})
     */
    private $idTrajet;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLundi(): ?bool
    {
        return $this->Lundi;
    }

    public function setLundi(bool $Lundi): self
    {
        $this->Lundi = $Lundi;

        return $this;
    }

    public function getMardi(): ?bool
    {
        return $this->Mardi;
    }

    public function setMardi(bool $Mardi): self
    {
        $this->Mardi = $Mardi;

        return $this;
    }

    public function getMercredi(): ?bool
    {
        return $this->Mercredi;
    }

    public function setMercredi(bool $Mercredi): self
    {
        $this->Mercredi = $Mercredi;

        return $this;
    }

    public function getJeudi(): ?bool
    {
        return $this->Jeudi;
    }

    public function setJeudi(bool $Jeudi): self
    {
        $this->Jeudi = $Jeudi;

        return $this;
    }

    public function getVendredi(): ?bool
    {
        return $this->Vendredi;
    }

    public function setVendredi(bool $Vendredi): self
    {
        $this->Vendredi = $Vendredi;

        return $this;
    }

    public function getSamedi(): ?bool
    {
        return $this->Samedi;
    }

    public function setSamedi(bool $Samedi): self
    {
        $this->Samedi = $Samedi;

        return $this;
    }

    public function getDimanche(): ?bool
    {
        return $this->Dimanche;
    }

    public function setDimanche(bool $Dimanche): self
    {
        $this->Dimanche = $Dimanche;

        return $this;
    }

    public function getIdTrajet(): ?Trajet
    {
        return $this->idTrajet;
    }

    public function setIdTrajet(?Trajet $idTrajet): self
    {
        $this->idTrajet = $idTrajet;

        return $this;
    }
}
