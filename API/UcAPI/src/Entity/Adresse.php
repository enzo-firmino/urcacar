<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AdresseRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=AdresseRepository::class)
 * @ApiResource(
 *      normalizationContext={"groups": {"infoAdresse"}, {"infoTrajet"}},
 *      itemOperations={
 *          "get",
 *          "put"={"security"="is_granted('ROLE_USER')"},
 *          "delete"={"security"="is_granted('ROLE_USER')"}
 *      },
 *      collectionOperations={
 *           "get",
 *           "post"={
 *              "security"="is_granted('ROLE_ADMIN')",
 *              "controller"=App\Controller\Api\AdresseCreateController::class
 *           }
 *      },
 * )
 */
class Adresse
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"infoAdresse", "infoTrajet", "etapeInfo"})
     */
    private $ville;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"infoAdresse", "infoTrajet", "etapeInfo"})
     */
    private $adresse;

    /**
     * @ORM\OneToMany(targetEntity=Trajet::class, mappedBy="adresseDepart")
     */
    private $departTrajets;

    /**
     * @ORM\OneToMany(targetEntity=Trajet::class, mappedBy="adresseArrivee")
     */
    private $arriveeTrajet;

    /**
     * @ORM\OneToMany(targetEntity=Etape::class, mappedBy="adresse")
     * @Groups({"infoTrajet"})
     */
    private $etapes;

    public function __construct()
    {
        $this->departTrajets = new ArrayCollection();
        $this->arriveeTrajet = new ArrayCollection();
        $this->etapes = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVille(): ?string
    {
        return $this->ville;
    }

    public function setVille(string $ville): self
    {
        $this->ville = $ville;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * @return Collection|Trajet[]
     */
    public function getDepartTrajets(): Collection
    {
        return $this->departTrajets;
    }

    public function addDepartTrajet(Trajet $departTrajet): self
    {
        if (!$this->departTrajets->contains($departTrajet)) {
            $this->departTrajets[] = $departTrajet;
            $departTrajet->setAdresseDepart($this);
        }

        return $this;
    }

    public function removeDepartTrajet(Trajet $departTrajet): self
    {
        if ($this->departTrajets->removeElement($departTrajet)) {
            // set the owning side to null (unless already changed)
            if ($departTrajet->getAdresseDepart() === $this) {
                $departTrajet->setAdresseDepart(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Trajet[]
     */
    public function getArriveeTrajet(): Collection
    {
        return $this->arriveeTrajet;
    }

    public function addArriveeTrajet(Trajet $arriveeTrajet): self
    {
        if (!$this->arriveeTrajet->contains($arriveeTrajet)) {
            $this->arriveeTrajet[] = $arriveeTrajet;
            $arriveeTrajet->setAdresseArrivee($this);
        }

        return $this;
    }

    public function removeArriveeTrajet(Trajet $arriveeTrajet): self
    {
        if ($this->arriveeTrajet->removeElement($arriveeTrajet)) {
            // set the owning side to null (unless already changed)
            if ($arriveeTrajet->getAdresseArrivee() === $this) {
                $arriveeTrajet->setAdresseArrivee(null);
            }
        }

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
            $etape->setAdresse($this);
        }

        return $this;
    }

    public function removeEtape(Etape $etape): self
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
