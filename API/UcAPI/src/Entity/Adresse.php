<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Adresse
 *
 * @ORM\Table(name="adresse")
 * @ORM\Entity
 * @ApiResource()
 */
class Adresse
{
    /**
     * @var int
     *
     * @ORM\Column(name="idAd", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idad;

    /**
     * @var string|null
     *
     * @ORM\Column(name="villeAd", type="string", length=255, nullable=true)
     */
    private $villead;

    /**
     * @var string|null
     *
     * @ORM\Column(name="cpAd", type="decimal", precision=5, scale=0, nullable=true)
     */
    private $cpad;

    /**
     * @var string|null
     *
     * @ORM\Column(name="adAd", type="string", length=255, nullable=true)
     */
    private $adad;

    /**
     * @ORM\OneToMany(targetEntity=Trajet::class, mappedBy="adresseDepart")
     */
    private $trajetsDepart;

    /**
     * @ORM\OneToMany(targetEntity=Trajet::class, mappedBy="adresseArrivée")
     */
    private $trajetsArrivee;

    /**
     * @ORM\OneToMany(targetEntity=Etapes::class, mappedBy="adresse")
     */
    private $etapes;

    public function __construct()
    {
        $this->trajetsDepart = new ArrayCollection();
        $this->trajetsArrivee = new ArrayCollection();
        $this->etapes = new ArrayCollection();
    }

    public function getIdad(): ?int
    {
        return $this->idad;
    }

    public function getVillead(): ?string
    {
        return $this->villead;
    }

    public function setVillead(?string $villead): self
    {
        $this->villead = $villead;

        return $this;
    }

    public function getCpad(): ?string
    {
        return $this->cpad;
    }

    public function setCpad(?string $cpad): self
    {
        $this->cpad = $cpad;

        return $this;
    }

    public function getAdad(): ?string
    {
        return $this->adad;
    }

    public function setAdad(?string $adad): self
    {
        $this->adad = $adad;

        return $this;
    }

    /**
     * @return Collection|Trajet[]
     */
    public function getTrajetsDepart(): Collection
    {
        return $this->trajetsDepart;
    }

    public function addTrajetsDepart(Trajet $trajetsDepart): self
    {
        if (!$this->trajetsDepart->contains($trajetsDepart)) {
            $this->trajetsDepart[] = $trajetsDepart;
            $trajetsDepart->setAdresseDepart($this);
        }

        return $this;
    }

    public function removeTrajetsDepart(Trajet $trajetsDepart): self
    {
        if ($this->trajetsDepart->removeElement($trajetsDepart)) {
            // set the owning side to null (unless already changed)
            if ($trajetsDepart->getAdresseDepart() === $this) {
                $trajetsDepart->setAdresseDepart(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Trajet[]
     */
    public function getTrajetsArrivee(): Collection
    {
        return $this->trajetsArrivee;
    }

    public function addTrajetsArrivE(Trajet $trajetsArrivE): self
    {
        if (!$this->trajetsArrivee->contains($trajetsArrivE)) {
            $this->trajetsArrivee[] = $trajetsArrivE;
            $trajetsArrivE->setAdresseArrivee($this);
        }

        return $this;
    }

    public function removeTrajetsArrivE(Trajet $trajetsArrivE): self
    {
        if ($this->trajetsArrivee->removeElement($trajetsArrivE)) {
            // set the owning side to null (unless already changed)
            if ($trajetsArrivE->getAdresseArrivee() === $this) {
                $trajetsArrivE->setAdresseArrivee(null);
            }
        }

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
            $etape->setAdresse($this);
        }

        return $this;
    }

    public function removeEtape(Etapes $etape): self
    {
        if ($this->etapes->removeElement($etape)) {
            // set the owning side to null (unless already changed)
            if ($etape->getAdresse() === $this) {
                $etape->setAdresse(null);
            }
        }

        return $this;
    }


}
