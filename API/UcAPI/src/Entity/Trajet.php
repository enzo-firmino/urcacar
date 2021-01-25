<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Trajet
 *
 * @ORM\Table(name="trajet", indexes={@ORM\Index(name="FK_Pouvoir", columns={"idRec"}), @ORM\Index(name="FK_Terminer", columns={"Adr_idAd"}), @ORM\Index(name="FK_Commencer", columns={"idAd"}), @ORM\Index(name="FK_Proposer", columns={"idUser"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Trajet
{
    /**
     * @var int
     *
     * @ORM\Column(name="idTrajet", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idtrajet;

    /**
     * @var int
     *
     * @ORM\Column(name="idAd", type="integer", nullable=false)
     */
    private $idad;

    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     */
    private $iduser;

    /**
     * @var int
     *
     * @ORM\Column(name="Adr_idAd", type="integer", nullable=false)
     */
    private $adrIdad;

    /**
     * @var int|null
     *
     * @ORM\Column(name="idRec", type="integer", nullable=true)
     */
    private $idrec;

    /**
     * @var int|null
     *
     * @ORM\Column(name="nbPlace", type="integer", nullable=true)
     */
    private $nbplace;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="dateDeb", type="date", nullable=true)
     */
    private $datedeb;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="heureArriver", type="time", nullable=true)
     */
    private $heurearriver;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="heureDepart", type="time", nullable=true)
     */
    private $heuredepart;

    public function getIdtrajet(): ?int
    {
        return $this->idtrajet;
    }

    public function getIdad(): ?int
    {
        return $this->idad;
    }

    public function setIdad(int $idad): self
    {
        $this->idad = $idad;

        return $this;
    }

    public function getIduser(): ?int
    {
        return $this->iduser;
    }

    public function setIduser(int $iduser): self
    {
        $this->iduser = $iduser;

        return $this;
    }

    public function getAdrIdad(): ?int
    {
        return $this->adrIdad;
    }

    public function setAdrIdad(int $adrIdad): self
    {
        $this->adrIdad = $adrIdad;

        return $this;
    }

    public function getIdrec(): ?int
    {
        return $this->idrec;
    }

    public function setIdrec(?int $idrec): self
    {
        $this->idrec = $idrec;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(?float $prix): self
    {
        $this->prix = $prix;
        return $this;
    }

    public function getNbplace(): ?int
    {
        return $this->nbplace;
    }

    public function setNbplace(?int $nbplace): self
    {
        $this->nbplace = $nbplace;
        return $this;
    }

    public function getDatedeb(): ?\DateTimeInterface
    {
        return $this->datedeb;
    }

    public function setDatedeb(?\DateTimeInterface $datedeb): self
    {
        $this->datedeb = $datedeb;
        return $this;
    }

    public function getHeurearriver(): ?\DateTimeInterface
    {
        return $this->heurearriver;
    }

    public function setHeurearriver(?\DateTimeInterface $heurearriver): self
    {
        $this->heurearriver = $heurearriver;
        return $this;
    }

    public function getHeuredepart(): ?\DateTimeInterface
    {
        return $this->heuredepart;
    }

    public function setHeuredepart(?\DateTimeInterface $heuredepart): self
    {
        $this->heuredepart = $heuredepart;
        return $this;
    }
}
