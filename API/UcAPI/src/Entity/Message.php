<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=MessageRepository::class)
 */
class Message
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
    private $texteMsg;

    /**
     * @ORM\Column(type="date")
     */
    private $dateMsg;

    /**
     * @ORM\Column(type="date")
     */
    private $vuMsg;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTexteMsg(): ?string
    {
        return $this->texteMsg;
    }

    public function setTexteMsg(string $texteMsg): self
    {
        $this->texteMsg = $texteMsg;

        return $this;
    }

    public function getDateMsg(): ?\DateTimeInterface
    {
        return $this->dateMsg;
    }

    public function setDateMsg(\DateTimeInterface $dateMsg): self
    {
        $this->dateMsg = $dateMsg;

        return $this;
    }

    public function getVuMsg(): ?\DateTimeInterface
    {
        return $this->vuMsg;
    }

    public function setVuMsg(bool $vuMsg): self
    {
        $this->vuMsg = $vuMsg;

        return $this;
    }
}
