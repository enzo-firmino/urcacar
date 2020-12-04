<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Voiture
 *
 * @ORM\Table(name="voiture", indexes={@ORM\Index(name="FK_Posseder", columns={"idUser"})})
 * @ORM\Entity
 */
class Voiture
{
    /**
     * @var int
     *
     * @ORM\Column(name="idCar", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idcar;

    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     */
    private $iduser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="modeleCar", type="string", length=255, nullable=true)
     */
    private $modelecar;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="anneeCar", type="date", nullable=true)
     */
    private $anneecar;

    /**
     * @var string|null
     *
     * @ORM\Column(name="couleurCar", type="string", length=255, nullable=true)
     */
    private $couleurcar;

    /**
     * @var string|null
     *
     * @ORM\Column(name="marqueCar", type="string", length=255, nullable=true)
     */
    private $marquecar;

    /**
     * @var string|null
     *
     * @ORM\Column(name="plaqueCar", type="string", length=7, nullable=true, options={"fixed"=true})
     */
    private $plaquecar;

    /**
     * @var string|null
     *
     * @ORM\Column(name="photoCar", type="blob", length=0, nullable=true)
     */
    private $photocar;

    public function getIdcar(): ?int
    {
        return $this->idcar;
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

    public function getModelecar(): ?string
    {
        return $this->modelecar;
    }

    public function setModelecar(?string $modelecar): self
    {
        $this->modelecar = $modelecar;

        return $this;
    }

    public function getAnneecar(): ?\DateTimeInterface
    {
        return $this->anneecar;
    }

    public function setAnneecar(?\DateTimeInterface $anneecar): self
    {
        $this->anneecar = $anneecar;

        return $this;
    }

    public function getCouleurcar(): ?string
    {
        return $this->couleurcar;
    }

    public function setCouleurcar(?string $couleurcar): self
    {
        $this->couleurcar = $couleurcar;

        return $this;
    }

    public function getMarquecar(): ?string
    {
        return $this->marquecar;
    }

    public function setMarquecar(?string $marquecar): self
    {
        $this->marquecar = $marquecar;

        return $this;
    }

    public function getPlaquecar(): ?string
    {
        return $this->plaquecar;
    }

    public function setPlaquecar(?string $plaquecar): self
    {
        $this->plaquecar = $plaquecar;

        return $this;
    }

    public function getPhotocar()
    {
        return $this->photocar;
    }

    public function setPhotocar($photocar): self
    {
        $this->photocar = $photocar;

        return $this;
    }


}
