<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Situer
 *
 * @ORM\Table(name="situer", indexes={@ORM\Index(name="FK_Situer2", columns={"idAd"})})
 * @ORM\Entity
 */
class Situer
{
    /**
     * @var int
     *
     * @ORM\Column(name="idEtape", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $idetape;

    /**
     * @var int
     *
     * @ORM\Column(name="idAd", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $idad;

    public function getIdetape(): ?int
    {
        return $this->idetape;
    }

    public function getIdad(): ?int
    {
        return $this->idad;
    }


}
