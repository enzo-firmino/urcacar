<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Message
 *
 * @ORM\Table(name="message", indexes={@ORM\Index(name="FK_Recevoir", columns={"idUser"}), @ORM\Index(name="FK_Envoyer", columns={"Uti_idUser"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Message
{
    /**
     * @var int
     *
     * @ORM\Column(name="idMsg", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idmsg;

    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     */
    private $iduser;

    /**
     * @var int
     *
     * @ORM\Column(name="Uti_idUser", type="integer", nullable=false)
     */
    private $utiIduser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="texteMsg", type="string", length=1024, nullable=true)
     */
    private $textemsg;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="dateMsg", type="date", nullable=true)
     */
    private $datemsg;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="vuMsg", type="date", nullable=true)
     */
    private $vumsg;

    public function getIdmsg(): ?int
    {
        return $this->idmsg;
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

    public function getUtiIduser(): ?int
    {
        return $this->utiIduser;
    }

    public function setUtiIduser(int $utiIduser): self
    {
        $this->utiIduser = $utiIduser;

        return $this;
    }

    public function getTextemsg(): ?string
    {
        return $this->textemsg;
    }

    public function setTextemsg(?string $textemsg): self
    {
        $this->textemsg = $textemsg;

        return $this;
    }

    public function getDatemsg(): ?\DateTimeInterface
    {
        return $this->datemsg;
    }

    public function setDatemsg(?\DateTimeInterface $datemsg): self
    {
        $this->datemsg = $datemsg;

        return $this;
    }

    public function getVumsg(): ?\DateTimeInterface
    {
        return $this->vumsg;
    }

    public function setVumsg(?\DateTimeInterface $vumsg): self
    {
        $this->vumsg = $vumsg;

        return $this;
    }


}
