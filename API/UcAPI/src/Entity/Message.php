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

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="messagesEnvoyés")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateurEnvoi;

    /**
     * @ORM\ManyToOne(targetEntity=Utilisateur::class, inversedBy="messagesRecus")
     * @ORM\JoinColumn(nullable=false)
     */
    private $utilisateurRecu;

    public function getIdmsg(): ?int
    {
        return $this->idmsg;
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

    public function getUtilisateurEnvoi(): ?Utilisateur
    {
        return $this->utilisateurEnvoi;
    }

    public function setUtilisateurEnvoi(?Utilisateur $utilisateurEnvoi): self
    {
        $this->utilisateurEnvoi = $utilisateurEnvoi;

        return $this;
    }

    public function getUtilisateurRecu(): ?Utilisateur
    {
        return $this->utilisateurRecu;
    }

    public function setUtilisateurRecu(?Utilisateur $utilisateurRecu): self
    {
        $this->utilisateurRecu = $utilisateurRecu;

        return $this;
    }


}
