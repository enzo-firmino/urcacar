<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Adresse
 *
 * @ORM\Table(name="adresse")
 * @ORM\Entity
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


}
