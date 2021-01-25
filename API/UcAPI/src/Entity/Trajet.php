<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    /**
     * @ORM\OneToOne(targetEntity=Recurence::class, mappedBy="trajet", cascade={"persist", "remove"})
     */
    private $recurence;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="trajetsProposés")
     * @ORM\JoinColumn(nullable=false)
     */
    private $conducteur;

    /**
     * @ORM\ManyToOne(targetEntity=Adresse::class, inversedBy="trajetsDepart")
     * @ORM\JoinColumn(nullable=false)
     */
    private $adresseDepart;

    /**
     * @ORM\ManyToOne(targetEntity=Adresse::class, inversedBy="trajetsArrivée")
     * @ORM\JoinColumn(nullable=false)
     */
    private $adresseArrivee;

    /**
     * @ORM\OneToMany(targetEntity=Etapes::class, mappedBy="trajet")
     */
    private $etapes;

    /**
     * @ORM\OneToMany(targetEntity=Reserver::class, mappedBy="trajet")
     */
    private $reservations;

    public function __construct()
    {
        $this->passagers = new ArrayCollection();
        $this->etapes = new ArrayCollection();
        $this->reservations = new ArrayCollection();
    }

    public function getIdtrajet(): ?int
    {
        return $this->idtrajet;
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

    public function getRecurence(): ?Recurence
    {
        return $this->recurence;
    }

    public function setRecurence(?Recurence $recurence): self
    {
        $this->recurence = $recurence;

        // set (or unset) the owning side of the relation if necessary
        $newTrajet = null === $recurence ? null : $this;
        if ($recurence->getTrajet() !== $newTrajet) {
            $recurence->setTrajet($newTrajet);
        }

        return $this;
    }

    public function getConducteur(): ?Utilisateur
    {
        return $this->conducteur;
    }

    public function setConducteur(?Utilisateur $conducteur): self
    {
        $this->conducteur = $conducteur;

        return $this;
    }

    /**
     * @return Collection|Utilisateur[]
     */
    public function getPassagers(): Collection
    {
        return $this->passagers;
    }

    public function addPassager(Utilisateur $passager): self
    {
        if (!$this->passagers->contains($passager)) {
            $this->passagers[] = $passager;
        }

        return $this;
    }

    public function removePassager(Utilisateur $passager): self
    {
        $this->passagers->removeElement($passager);

        return $this;
    }

    public function getAdresseDepart(): ?Adresse
    {
        return $this->adresseDepart;
    }

    public function setAdresseDepart(?Adresse $adresseDepart): self
    {
        $this->adresseDepart = $adresseDepart;

        return $this;
    }

    public function getAdresseArrivee(): ?Adresse
    {
        return $this->adresseArrivee;
    }

    public function setAdresseArrivee(?Adresse $adresseArrivee): self
    {
        $this->adresseArrivee = $adresseArrivee;

        return $this;
    }

    /**
     * @return Collection|Etapes[]
     */
    public function getEtapes(): Collection
    {
        return $this->etapes;
    }

    public function addEtape(Etapes $etape): self
    {
        if (!$this->etapes->contains($etape)) {
            $this->etapes[] = $etape;
            $etape->setTrajet($this);
        }

        return $this;
    }

    public function removeEtape(Etapes $etape): self
    {
        if ($this->etapes->removeElement($etape)) {
            // set the owning side to null (unless already changed)
            if ($etape->getTrajet() === $this) {
                $etape->setTrajet(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Reserver[]
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reserver $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setTrajet($this);
        }

        return $this;
    }

    public function removeReservation(Reserver $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getTrajet() === $this) {
                $reservation->setTrajet(null);
            }
        }

        return $this;
    }
}
