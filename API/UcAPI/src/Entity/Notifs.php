<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\NotifsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=NotifsRepository::class)
 */
class Notifs
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
    private $titreNotif;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $texteNotif;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitreNotif(): ?string
    {
        return $this->titreNotif;
    }

    public function setTitreNotif(string $titreNotif): self
    {
        $this->titreNotif = $titreNotif;

        return $this;
    }

    public function getTexteNotif(): ?string
    {
        return $this->texteNotif;
    }

    public function setTexteNotif(string $texteNotif): self
    {
        $this->texteNotif = $texteNotif;

        return $this;
    }
}
