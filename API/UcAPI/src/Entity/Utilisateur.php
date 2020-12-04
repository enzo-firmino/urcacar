<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Utilisateur
 *
 * @ORM\Table(name="utilisateur", indexes={@ORM\Index(name="FK_Posseder2", columns={"idCar"})})
 * @ORM\Entity
 */
class Utilisateur
{
    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $iduser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="idCar", type="integer", nullable=true)
     */
    private $idcar;

    /**
     * @var string|null
     *
     * @ORM\Column(name="pnomUser", type="string", length=255, nullable=true)
     */
    private $pnomuser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="emailUser", type="string", length=255, nullable=true)
     */
    private $emailuser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="telUser", type="integer", nullable=true)
     */
    private $teluser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="statutUser", type="integer", nullable=true)
     */
    private $statutuser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="rang", type="integer", nullable=true)
     */
    private $rang;

    /**
     * @var string|null
     *
     * @ORM\Column(name="photoUser", type="blob", length=0, nullable=true)
     */
    private $photouser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="fiabilite", type="integer", nullable=true)
     */
    private $fiabilite;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="resAccepter", type="boolean", nullable=true)
     */
    private $resaccepter;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="resEnvoyer", type="boolean", nullable=true)
     */
    private $resenvoyer;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="demandeRes", type="boolean", nullable=true)
     */
    private $demanderes;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="trajetImi", type="boolean", nullable=true)
     */
    private $trajetimi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="trajetAnnuler", type="boolean", nullable=true)
     */
    private $trajetannuler;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="demandeNota", type="boolean", nullable=true)
     */
    private $demandenota;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="nouvelleAvis", type="boolean", nullable=true)
     */
    private $nouvelleavis;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="dialogue", type="boolean", nullable=true)
     */
    private $dialogue;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="fumer", type="boolean", nullable=true)
     */
    private $fumer;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="musique", type="boolean", nullable=true)
     */
    private $musique;

    public function getIduser(): ?int
    {
        return $this->iduser;
    }

    public function getIdcar(): ?int
    {
        return $this->idcar;
    }

    public function setIdcar(?int $idcar): self
    {
        $this->idcar = $idcar;

        return $this;
    }

    public function getPnomuser(): ?string
    {
        return $this->pnomuser;
    }

    public function setPnomuser(?string $pnomuser): self
    {
        $this->pnomuser = $pnomuser;

        return $this;
    }

    public function getEmailuser(): ?string
    {
        return $this->emailuser;
    }

    public function setEmailuser(?string $emailuser): self
    {
        $this->emailuser = $emailuser;

        return $this;
    }

    public function getTeluser(): ?int
    {
        return $this->teluser;
    }

    public function setTeluser(?int $teluser): self
    {
        $this->teluser = $teluser;

        return $this;
    }

    public function getStatutuser(): ?int
    {
        return $this->statutuser;
    }

    public function setStatutuser(?int $statutuser): self
    {
        $this->statutuser = $statutuser;

        return $this;
    }

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(?int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }

    public function getPhotouser()
    {
        return $this->photouser;
    }

    public function setPhotouser($photouser): self
    {
        $this->photouser = $photouser;

        return $this;
    }

    public function getFiabilite(): ?int
    {
        return $this->fiabilite;
    }

    public function setFiabilite(?int $fiabilite): self
    {
        $this->fiabilite = $fiabilite;

        return $this;
    }

    public function getResaccepter(): ?bool
    {
        return $this->resaccepter;
    }

    public function setResaccepter(?bool $resaccepter): self
    {
        $this->resaccepter = $resaccepter;

        return $this;
    }

    public function getResenvoyer(): ?bool
    {
        return $this->resenvoyer;
    }

    public function setResenvoyer(?bool $resenvoyer): self
    {
        $this->resenvoyer = $resenvoyer;

        return $this;
    }

    public function getDemanderes(): ?bool
    {
        return $this->demanderes;
    }

    public function setDemanderes(?bool $demanderes): self
    {
        $this->demanderes = $demanderes;

        return $this;
    }

    public function getTrajetimi(): ?bool
    {
        return $this->trajetimi;
    }

    public function setTrajetimi(?bool $trajetimi): self
    {
        $this->trajetimi = $trajetimi;

        return $this;
    }

    public function getTrajetannuler(): ?bool
    {
        return $this->trajetannuler;
    }

    public function setTrajetannuler(?bool $trajetannuler): self
    {
        $this->trajetannuler = $trajetannuler;

        return $this;
    }

    public function getDemandenota(): ?bool
    {
        return $this->demandenota;
    }

    public function setDemandenota(?bool $demandenota): self
    {
        $this->demandenota = $demandenota;

        return $this;
    }

    public function getNouvelleavis(): ?bool
    {
        return $this->nouvelleavis;
    }

    public function setNouvelleavis(?bool $nouvelleavis): self
    {
        $this->nouvelleavis = $nouvelleavis;

        return $this;
    }

    public function getDialogue(): ?bool
    {
        return $this->dialogue;
    }

    public function setDialogue(?bool $dialogue): self
    {
        $this->dialogue = $dialogue;

        return $this;
    }

    public function getFumer(): ?bool
    {
        return $this->fumer;
    }

    public function setFumer(?bool $fumer): self
    {
        $this->fumer = $fumer;

        return $this;
    }

    public function getMusique(): ?bool
    {
        return $this->musique;
    }

    public function setMusique(?bool $musique): self
    {
        $this->musique = $musique;

        return $this;
    }


}
