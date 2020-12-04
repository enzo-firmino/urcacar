<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Avis
 *
 * @ORM\Table(name="avis", indexes={@ORM\Index(name="FK_donner", columns={"idUser"}), @ORM\Index(name="FK_Avoir", columns={"Uti_idUser"})})
 * @ORM\Entity
 */
class Avis
{
    /**
     * @var int
     *
     * @ORM\Column(name="idAvis", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idavis;

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
     * @var int|null
     *
     * @ORM\Column(name="conduite", type="integer", nullable=true)
     */
    private $conduite;

    /**
     * @var int|null
     *
     * @ORM\Column(name="ponctualite", type="integer", nullable=true)
     */
    private $ponctualite;

    /**
     * @var int|null
     *
     * @ORM\Column(name="comportement", type="integer", nullable=true)
     */
    private $comportement;

    public function getIdavis(): ?int
    {
        return $this->idavis;
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

    public function getConduite(): ?int
    {
        return $this->conduite;
    }

    public function setConduite(?int $conduite): self
    {
        $this->conduite = $conduite;

        return $this;
    }

    public function getPonctualite(): ?int
    {
        return $this->ponctualite;
    }

    public function setPonctualite(?int $ponctualite): self
    {
        $this->ponctualite = $ponctualite;

        return $this;
    }

    public function getComportement(): ?int
    {
        return $this->comportement;
    }

    public function setComportement(?int $comportement): self
    {
        $this->comportement = $comportement;

        return $this;
    }


}
