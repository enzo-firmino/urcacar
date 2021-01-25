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
    private $lundi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $mardi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $mercredi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $jeudi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $vendredi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $samedi;

    /**
     * @ORM\Column(type="boolean")
     */
    private $dimanche;

    /**
     * @ORM\OneToOne(targetEntity=Trajet::class, inversedBy="recurrence", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $trajet;

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
        return $this->lundi;
    }

    public function setLundi(bool $lundi): self
    {
        $this->lundi = $lundi;

        return $this;
    }

    public function getMardi(): ?bool
    {
        return $this->mardi;
    }

    public function setMardi(bool $mardi): self
    {
        $this->mardi = $mardi;

        return $this;
    }

    public function getMercredi(): ?bool
    {
        return $this->mercredi;
    }

    public function setMercredi(bool $mercredi): self
    {
        $this->mercredi = $mercredi;

        return $this;
    }

    public function getJeudi(): ?bool
    {
        return $this->jeudi;
    }

    public function setJeudi(bool $jeudi): self
    {
        $this->jeudi = $jeudi;

        return $this;
    }

    public function getVendredi(): ?bool
    {
        return $this->vendredi;
    }

    public function setVendredi(bool $vendredi): self
    {
        $this->vendredi = $vendredi;

        return $this;
    }

    public function getSamedi(): ?bool
    {
        return $this->samedi;
    }

    public function setSamedi(bool $samedi): self
    {
        $this->samedi = $samedi;

        return $this;
    }

    public function getDimanche(): ?bool
    {
        return $this->dimanche;
    }

    public function setDimanche(bool $dimanche): self
    {
        $this->dimanche = $dimanche;

        return $this;
    }

    public function getTrajet(): ?Trajet
    {
        return $this->trajet;
    }

    public function setTrajet(Trajet $trajet): self
    {
        $this->trajet = $trajet;

        return $this;
    }
}
