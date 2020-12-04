<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TrajetRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=TrajetRepository::class)
 */
class Trajet
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
    private $heureDepart;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $heureArriver;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDeb;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $nbPlace;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idRec;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adr_idAd;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idUser;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idAd;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHeureDepart(): ?\DateTimeInterface
    {
        return $this->heureDepart;
    }

    public function setHeureDepart(\DateTimeInterface $heureDepart): self
    {
        $this->heureDepart = $heureDepart;

        return $this;
    }

    public function getHeureArriver(): ?string
    {
        return $this->heureArriver;
    }

    public function setHeureArriver(string $heureArriver): self
    {
        $this->heureArriver = $heureArriver;

        return $this;
    }

    public function getDateDeb(): ?\DateTimeInterface
    {
        return $this->dateDeb;
    }

    public function setDateDeb(\DateTimeInterface $dateDeb): self
    {
        $this->dateDeb = $dateDeb;

        return $this;
    }

    public function getNbPlace(): ?string
    {
        return $this->nbPlace;
    }

    public function setNbPlace(string $nbPlace): self
    {
        $this->nbPlace = $nbPlace;

        return $this;
    }

    public function getIdRec(): ?string
    {
        return $this->idRec;
    }

    public function setIdRec(string $idRec): self
    {
        $this->idRec = $idRec;

        return $this;
    }

    public function getAdrIdAd(): ?string
    {
        return $this->adr_idAd;
    }

    public function setAdrIdAd(string $adr_idAd): self
    {
        $this->adr_idAd = $adr_idAd;

        return $this;
    }

    public function getIdUser(): ?string
    {
        return $this->idUser;
    }

    public function setIdUser(string $idUser): self
    {
        $this->idUser = $idUser;

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
