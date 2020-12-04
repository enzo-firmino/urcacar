<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ReserverRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ReserverRepository::class)
 */
class Reserver
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idTrajet;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $idUser;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $Valider;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdTrajet(): ?string
    {
        return $this->idTrajet;
    }

    public function setIdTrajet(string $idTrajet): self
    {
        $this->idTrajet = $idTrajet;

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

    public function getValider(): ?string
    {
        return $this->Valider;
    }

    public function setValider(string $Valider): self
    {
        $this->Valider = $Valider;

        return $this;
    }
}
