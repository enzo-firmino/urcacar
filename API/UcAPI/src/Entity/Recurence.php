<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Recurence
 *
 * @ORM\Table(name="recurence", indexes={@ORM\Index(name="FK_Pouvoir2", columns={"idTrajet"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Recurence
{
    /**
     * @var int
     *
     * @ORM\Column(name="idRec", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idrec;

    /**
     * @var int
     *
     * @ORM\Column(name="idTrajet", type="integer", nullable=false)
     */
    private $idtrajet;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="dateFin", type="date", nullable=true)
     */
    private $datefin;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Lundi", type="boolean", nullable=true)
     */
    private $lundi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Mardi", type="boolean", nullable=true)
     */
    private $mardi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Mercredi", type="boolean", nullable=true)
     */
    private $mercredi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Jeudi", type="boolean", nullable=true)
     */
    private $jeudi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Vendredi", type="boolean", nullable=true)
     */
    private $vendredi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Samedi", type="boolean", nullable=true)
     */
    private $samedi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="Dimanche", type="boolean", nullable=true)
     */
    private $dimanche;

    public function getIdrec(): ?int
    {
        return $this->idrec;
    }

    public function getIdtrajet(): ?int
    {
        return $this->idtrajet;
    }

    public function setIdtrajet(int $idtrajet): self
    {
        $this->idtrajet = $idtrajet;

        return $this;
    }

    public function getDatefin(): ?\DateTimeInterface
    {
        return $this->datefin;
    }

    public function setDatefin(?\DateTimeInterface $datefin): self
    {
        $this->datefin = $datefin;

        return $this;
    }

    public function getLundi(): ?bool
    {
        return $this->lundi;
    }

    public function setLundi(?bool $lundi): self
    {
        $this->lundi = $lundi;

        return $this;
    }

    public function getMardi(): ?bool
    {
        return $this->mardi;
    }

    public function setMardi(?bool $mardi): self
    {
        $this->mardi = $mardi;

        return $this;
    }

    public function getMercredi(): ?bool
    {
        return $this->mercredi;
    }

    public function setMercredi(?bool $mercredi): self
    {
        $this->mercredi = $mercredi;

        return $this;
    }

    public function getJeudi(): ?bool
    {
        return $this->jeudi;
    }

    public function setJeudi(?bool $jeudi): self
    {
        $this->jeudi = $jeudi;

        return $this;
    }

    public function getVendredi(): ?bool
    {
        return $this->vendredi;
    }

    public function setVendredi(?bool $vendredi): self
    {
        $this->vendredi = $vendredi;

        return $this;
    }

    public function getSamedi(): ?bool
    {
        return $this->samedi;
    }

    public function setSamedi(?bool $samedi): self
    {
        $this->samedi = $samedi;

        return $this;
    }

    public function getDimanche(): ?bool
    {
        return $this->dimanche;
    }

    public function setDimanche(?bool $dimanche): self
    {
        $this->dimanche = $dimanche;

        return $this;
    }


}
