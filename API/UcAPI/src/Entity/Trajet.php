<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\TrajetRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=TrajetRepository::class)
 * @ApiResource(
 *      normalizationContext={"groups"={"infoTrajet"}},
 *      itemOperations={
 *          "get",
 *          "delete"={"security"="is_granted('ROLE_USER')"},
 *          "put"={"security"="is_granted('ROLE_USER')"},
 *      },
 *      collectionOperations={
 *          "get",
 *          "post"={
 *              "security"="is_granted('ROLE_USER')",
 *              "denormalization_context"={"groups"={"infoTrajet"}},
 *              "controller"=App\Controller\Api\TrajetCreateController::class
 *          }
 *      },
 * )
 */
class Trajet
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"infoTrajet"})
     */
    private $id;

    /**
     * @ORM\Column(type="float")
     * @Groups({"infoTrajet"})
     */
    private $prix;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"infoTrajet"})
     */
    private $nbPlace;

    /**
     * @ORM\Column(type="date")
     * @Groups({"infoTrajet"})
     */
    private $dateDepart;

    /**
     * @ORM\Column(type="time")
     * @Groups({"infoTrajet"})
     */
    private $heureArrivee;

    /**
     * @ORM\Column(type="time")
     * @Groups({"infoTrajet"})
     */
    private $heureDepart;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="trajetsProposes")
     * @ORM\JoinColumn(onDelete="CASCADE",nullable=false)
     * @Groups({"infoTrajet"})
     */
    private $conducteur;

    /**
     * @ORM\OneToMany(targetEntity=Reserver::class, mappedBy="trajet")
     * @Groups({"infoTrajet"})
     */
    private $reservations;

    /**
     * @ORM\OneToOne(targetEntity=Recurrence::class, mappedBy="trajet", cascade={"persist", "remove"})
     */
    private $recurrence;

    /**
     * @ORM\ManyToOne(targetEntity=Adresse::class, inversedBy="departTrajets", cascade={"persist"})
     * @ORM\JoinColumn(onDelete="CASCADE",nullable=false)
     * @Groups({"infoTrajet", "postTrajet"})
     */
    private $adresseDepart;

    /**
     * @ORM\ManyToOne(targetEntity=Adresse::class, inversedBy="arriveeTrajet", cascade={"persist"})
     * @ORM\JoinColumn(onDelete="CASCADE",nullable=false)
     * @Groups({"infoTrajet", "postTrajet"})
     */
    private $adresseArrivee;

    /**
     * @ORM\OneToMany(targetEntity=Etape::class, mappedBy="trajet")
     */
    private $etapes;

    public function __construct()
    {
        $this->reservations = new ArrayCollection();
        $this->etapes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getNbPlace(): ?int
    {
        return $this->nbPlace;
    }

    public function setNbPlace(int $nbPlace): self
    {
        $this->nbPlace = $nbPlace;

        return $this;
    }

    public function getDateDepart(): ?\DateTimeInterface
    {
        return $this->dateDepart;
    }

    public function setDateDepart(\DateTimeInterface $dateDepart): self
    {
        $this->dateDepart = $dateDepart;

        return $this;
    }

    public function getHeureArrivee(): ?\DateTimeInterface
    {
        return $this->heureArrivee;
    }

    public function setHeureArrivee(\DateTimeInterface $heureArrivee): self
    {
        $this->heureArrivee = $heureArrivee;

        return $this;
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

    public function getRecurrence(): ?Recurrence
    {
        return $this->recurrence;
    }

    public function setRecurrence(Recurrence $recurrence): self
    {
        $this->recurrence = $recurrence;

        // set the owning side of the relation if necessary
        if ($recurrence->getTrajet() !== $this) {
            $recurrence->setTrajet($this);
        }

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
     * @return Collection|Etape[]
     */
    public function getEtapes(): Collection
    {
        return $this->etapes;
    }

    public function addEtape(Etape $etape): self
    {
        if (!$this->etapes->contains($etape)) {
            $this->etapes[] = $etape;
            $etape->setTrajet($this);
        }

        return $this;
    }

    public function removeEtape(Etape $etape): self
    {
        if ($this->etapes->removeElement($etape)) {
            // set the owning side to null (unless already changed)
            if ($etape->getTrajet() === $this) {
                $etape->setTrajet(null);
            }
        }

        return $this;
    }
}
