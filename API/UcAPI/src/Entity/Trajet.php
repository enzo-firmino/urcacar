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
     * @ORM\Column(type="float")
     */
    private $prix;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbPlace;

    /**
     * @ORM\Column(type="date")
     */
    private $dateDeb;

    /**
     * @ORM\Column(type="time")
     */
    private $heureArriver;

    /**
     * @ORM\Column(type="time")
     */
    private $heureDepart;

    /**
     * @ORM\OneToOne(targetEntity=Recurrence::class, mappedBy="idTrajet", cascade={"persist", "remove"})
     */
    private $recurrence;

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

    public function getDateDeb(): ?\DateTimeInterface
    {
        return $this->dateDeb;
    }

    public function setDateDeb(\DateTimeInterface $dateDeb): self
    {
        $this->dateDeb = $dateDeb;

        return $this;
    }

    public function getHeureArriver(): ?\DateTimeInterface
    {
        return $this->heureArriver;
    }

    public function setHeureArriver(\DateTimeInterface $heureArriver): self
    {
        $this->heureArriver = $heureArriver;

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

    public function getRecurrence(): ?Recurrence
    {
        return $this->recurrence;
    }

    public function setRecurrence(?Recurrence $recurrence): self
    {
        $this->recurrence = $recurrence;

        // set (or unset) the owning side of the relation if necessary
        $newIdTrajet = null === $recurrence ? null : $this;
        if ($recurrence->getIdTrajet() !== $newIdTrajet) {
            $recurrence->setIdTrajet($newIdTrajet);
        }

        return $this;
    }
}
