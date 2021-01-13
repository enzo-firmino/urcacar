<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Reserver
 *
 * @ORM\Table(name="reserver", indexes={@ORM\Index(name="FK_Reserver2", columns={"idUser"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Reserver
{
    /**
     * @var int
     *
     * @ORM\Column(name="idTrajet", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $idtrajet;

    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $iduser;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="valider", type="boolean", nullable=true)
     */
    private $valider;

    public function getIdtrajet(): ?int
    {
        return $this->idtrajet;
    }

    public function getIduser(): ?int
    {
        return $this->iduser;
    }

    public function getValider(): ?bool
    {
        return $this->valider;
    }

    public function setValider(?bool $valider): self
    {
        $this->valider = $valider;

        return $this;
    }


}
