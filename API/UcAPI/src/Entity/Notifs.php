<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Notifs
 *
 * @ORM\Table(name="notifs", indexes={@ORM\Index(name="FK_Regarder", columns={"idUser"})})
 * @ORM\Entity
 */
class Notifs
{
    /**
     * @var int
     *
     * @ORM\Column(name="idNotif", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idnotif;

    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     */
    private $iduser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="titreNotif", type="string", length=255, nullable=true)
     */
    private $titrenotif;

    /**
     * @var string|null
     *
     * @ORM\Column(name="texteNotif", type="string", length=255, nullable=true)
     */
    private $textenotif;

    public function getIdnotif(): ?int
    {
        return $this->idnotif;
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

    public function getTitrenotif(): ?string
    {
        return $this->titrenotif;
    }

    public function setTitrenotif(?string $titrenotif): self
    {
        $this->titrenotif = $titrenotif;

        return $this;
    }

    public function getTextenotif(): ?string
    {
        return $this->textenotif;
    }

    public function setTextenotif(?string $textenotif): self
    {
        $this->textenotif = $textenotif;

        return $this;
    }


}
