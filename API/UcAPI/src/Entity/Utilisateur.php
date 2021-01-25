<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Utilisateur
 *
 * @ORM\Table(name="utilisateur", indexes={@ORM\Index(name="FK_Posseder2", columns={"idCar"})})
 * @ORM\Entity
 * @ApiResource()
 */
class Utilisateur
{
    /**
     * @var int
     *
     * @ORM\Column(name="idUser", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $iduser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="pnomUser", type="string", length=255, nullable=true)
     */
    private $pnomuser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="emailUser", type="string", length=255, nullable=true)
     */
    private $emailuser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="telUser", type="integer", nullable=true)
     */
    private $teluser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="statutUser", type="integer", nullable=true)
     */
    private $statutuser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="rang", type="integer", nullable=true)
     */
    private $rang;

    /**
     * @var string|null
     *
     * @ORM\Column(name="photoUser", type="blob", length=0, nullable=true)
     */
    private $photouser;

    /**
     * @var int|null
     *
     * @ORM\Column(name="fiabilite", type="integer", nullable=true)
     */
    private $fiabilite;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="resAccepter", type="boolean", nullable=true)
     */
    private $resaccepter;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="resEnvoyer", type="boolean", nullable=true)
     */
    private $resenvoyer;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="demandeRes", type="boolean", nullable=true)
     */
    private $demanderes;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="trajetImi", type="boolean", nullable=true)
     */
    private $trajetimi;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="trajetAnnuler", type="boolean", nullable=true)
     */
    private $trajetannuler;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="demandeNota", type="boolean", nullable=true)
     */
    private $demandenota;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="nouvelleAvis", type="boolean", nullable=true)
     */
    private $nouvelleavis;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="dialogue", type="boolean", nullable=true)
     */
    private $dialogue;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="fumer", type="boolean", nullable=true)
     */
    private $fumer;

    /**
     * @var bool|null
     *
     * @ORM\Column(name="musique", type="boolean", nullable=true)
     */
    private $musique;

    /**
     * @ORM\OneToOne(targetEntity=Voiture::class, mappedBy="utilisateur", cascade={"persist", "remove"})
     */
    private $voiture;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="utilisateurEnvoi")
     */
    private $messagesEnvoyes;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="utilisateurRecu")
     */
    private $messagesRecus;

    /**
     * @ORM\OneToMany(targetEntity=Trajet::class, mappedBy="conducteur", orphanRemoval=true)
     */
    private $trajetsProposes;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="utilisateurDonne")
     */
    private $avisDonnes;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="utilisateurRecu")
     */
    private $avisRecu;

    /**
     * @ORM\OneToMany(targetEntity=Notifs::class, mappedBy="utilisateur")
     */
    private $notifs;

    /**
     * @ORM\OneToMany(targetEntity=Reserver::class, mappedBy="utilisateur")
     */
    private $reservations;

    public function __construct()
    {
        $this->messagesEnvoyes = new ArrayCollection();
        $this->messagesRecus = new ArrayCollection();
        $this->trajetsProposes = new ArrayCollection();
        $this->trajetsRéservés = new ArrayCollection();
        $this->avisDonnes = new ArrayCollection();
        $this->avisRecu = new ArrayCollection();
        $this->notifs = new ArrayCollection();
        $this->reservations = new ArrayCollection();
    }

    public function getIduser(): ?int
    {
        return $this->iduser;
    }

    public function getPnomuser(): ?string
    {
        return $this->pnomuser;
    }

    public function setPnomuser(?string $pnomuser): self
    {
        $this->pnomuser = $pnomuser;

        return $this;
    }

    public function getEmailuser(): ?string
    {
        return $this->emailuser;
    }

    public function setEmailuser(?string $emailuser): self
    {
        $this->emailuser = $emailuser;

        return $this;
    }

    public function getTeluser(): ?int
    {
        return $this->teluser;
    }

    public function setTeluser(?int $teluser): self
    {
        $this->teluser = $teluser;

        return $this;
    }

    public function getStatutuser(): ?int
    {
        return $this->statutuser;
    }

    public function setStatutuser(?int $statutuser): self
    {
        $this->statutuser = $statutuser;

        return $this;
    }

    public function getRang(): ?int
    {
        return $this->rang;
    }

    public function setRang(?int $rang): self
    {
        $this->rang = $rang;

        return $this;
    }

    public function getPhotouser()
    {
        return $this->photouser;
    }

    public function setPhotouser($photouser): self
    {
        $this->photouser = $photouser;

        return $this;
    }

    public function getFiabilite(): ?int
    {
        return $this->fiabilite;
    }

    public function setFiabilite(?int $fiabilite): self
    {
        $this->fiabilite = $fiabilite;

        return $this;
    }

    public function getResaccepter(): ?bool
    {
        return $this->resaccepter;
    }

    public function setResaccepter(?bool $resaccepter): self
    {
        $this->resaccepter = $resaccepter;

        return $this;
    }

    public function getResenvoyer(): ?bool
    {
        return $this->resenvoyer;
    }

    public function setResenvoyer(?bool $resenvoyer): self
    {
        $this->resenvoyer = $resenvoyer;

        return $this;
    }

    public function getDemanderes(): ?bool
    {
        return $this->demanderes;
    }

    public function setDemanderes(?bool $demanderes): self
    {
        $this->demanderes = $demanderes;

        return $this;
    }

    public function getTrajetimi(): ?bool
    {
        return $this->trajetimi;
    }

    public function setTrajetimi(?bool $trajetimi): self
    {
        $this->trajetimi = $trajetimi;

        return $this;
    }

    public function getTrajetannuler(): ?bool
    {
        return $this->trajetannuler;
    }

    public function setTrajetannuler(?bool $trajetannuler): self
    {
        $this->trajetannuler = $trajetannuler;

        return $this;
    }

    public function getDemandenota(): ?bool
    {
        return $this->demandenota;
    }

    public function setDemandenota(?bool $demandenota): self
    {
        $this->demandenota = $demandenota;

        return $this;
    }

    public function getNouvelleavis(): ?bool
    {
        return $this->nouvelleavis;
    }

    public function setNouvelleavis(?bool $nouvelleavis): self
    {
        $this->nouvelleavis = $nouvelleavis;

        return $this;
    }

    public function getDialogue(): ?bool
    {
        return $this->dialogue;
    }

    public function setDialogue(?bool $dialogue): self
    {
        $this->dialogue = $dialogue;

        return $this;
    }

    public function getFumer(): ?bool
    {
        return $this->fumer;
    }

    public function setFumer(?bool $fumer): self
    {
        $this->fumer = $fumer;

        return $this;
    }

    public function getMusique(): ?bool
    {
        return $this->musique;
    }

    public function setMusique(?bool $musique): self
    {
        $this->musique = $musique;

        return $this;
    }

    public function getVoiture(): ?Voiture
    {
        return $this->voiture;
    }

    public function setVoiture(Voiture $voiture): self
    {
        $this->voiture = $voiture;

        // set the owning side of the relation if necessary
        if ($voiture->getUtilisateur() !== $this) {
            $voiture->setUtilisateur($this);
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessagesEnvoyes(): Collection
    {
        return $this->messagesEnvoyes;
    }

    public function addMessagesEnvoy(Message $messagesEnvoy): self
    {
        if (!$this->messagesEnvoyes->contains($messagesEnvoy)) {
            $this->messagesEnvoyes[] = $messagesEnvoy;
            $messagesEnvoy->setUtilisateurEnvoi($this);
        }

        return $this;
    }

    public function removeMessagesEnvoy(Message $messagesEnvoy): self
    {
        if ($this->messagesEnvoyes->removeElement($messagesEnvoy)) {
            // set the owning side to null (unless already changed)
            if ($messagesEnvoy->getUtilisateurEnvoi() === $this) {
                $messagesEnvoy->setUtilisateurEnvoi(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessagesRecus(): Collection
    {
        return $this->messagesRecus;
    }

    public function addMessagesRecu(Message $messagesRecu): self
    {
        if (!$this->messagesRecus->contains($messagesRecu)) {
            $this->messagesRecus[] = $messagesRecu;
            $messagesRecu->setUtilisateurRecu($this);
        }

        return $this;
    }

    public function removeMessagesRecu(Message $messagesRecu): self
    {
        if ($this->messagesRecus->removeElement($messagesRecu)) {
            // set the owning side to null (unless already changed)
            if ($messagesRecu->getUtilisateurRecu() === $this) {
                $messagesRecu->setUtilisateurRecu(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Trajet[]
     */
    public function getTrajetsProposes(): Collection
    {
        return $this->trajetsProposes;
    }

    public function addTrajetsPropos(Trajet $trajetsPropos): self
    {
        if (!$this->trajetsProposes->contains($trajetsPropos)) {
            $this->trajetsProposes[] = $trajetsPropos;
            $trajetsPropos->setConducteur($this);
        }

        return $this;
    }

    public function removeTrajetsPropos(Trajet $trajetsPropos): self
    {
        if ($this->trajetsProposes->removeElement($trajetsPropos)) {
            // set the owning side to null (unless already changed)
            if ($trajetsPropos->getConducteur() === $this) {
                $trajetsPropos->setConducteur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Trajet[]
     */
    public function getTrajetsRéservés(): Collection
    {
        return $this->trajetsRéservés;
    }

    public function addTrajetsRServ(Trajet $trajetsRServ): self
    {
        if (!$this->trajetsRéservés->contains($trajetsRServ)) {
            $this->trajetsRéservés[] = $trajetsRServ;
            $trajetsRServ->addPassager($this);
        }

        return $this;
    }

    public function removeTrajetsRServ(Trajet $trajetsRServ): self
    {
        if ($this->trajetsRéservés->removeElement($trajetsRServ)) {
            $trajetsRServ->removePassager($this);
        }

        return $this;
    }

    /**
     * @return Collection|Avis[]
     */
    public function getAvisDonnes(): Collection
    {
        return $this->avisDonnes;
    }

    public function addAvisDonn(Avis $avisDonn): self
    {
        if (!$this->avisDonnes->contains($avisDonn)) {
            $this->avisDonnes[] = $avisDonn;
            $avisDonn->setUtilisateurDonne($this);
        }

        return $this;
    }

    public function removeAvisDonn(Avis $avisDonn): self
    {
        if ($this->avisDonnes->removeElement($avisDonn)) {
            // set the owning side to null (unless already changed)
            if ($avisDonn->getUtilisateurDonne() === $this) {
                $avisDonn->setUtilisateurDonne(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Avis[]
     */
    public function getAvisRecu(): Collection
    {
        return $this->avisRecu;
    }

    public function addAvisRecu(Avis $avisRecu): self
    {
        if (!$this->avisRecu->contains($avisRecu)) {
            $this->avisRecu[] = $avisRecu;
            $avisRecu->setUtilisateurRecu($this);
        }

        return $this;
    }

    public function removeAvisRecu(Avis $avisRecu): self
    {
        if ($this->avisRecu->removeElement($avisRecu)) {
            // set the owning side to null (unless already changed)
            if ($avisRecu->getUtilisateurRecu() === $this) {
                $avisRecu->setUtilisateurRecu(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Notifs[]
     */
    public function getNotifs(): Collection
    {
        return $this->notifs;
    }

    public function addNotif(Notifs $notif): self
    {
        if (!$this->notifs->contains($notif)) {
            $this->notifs[] = $notif;
            $notif->setUtilisateur($this);
        }

        return $this;
    }

    public function removeNotif(Notifs $notif): self
    {
        if ($this->notifs->removeElement($notif)) {
            // set the owning side to null (unless already changed)
            if ($notif->getUtilisateur() === $this) {
                $notif->setUtilisateur(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Reserver[]
     */
    public function getReservations(): Collection
    {
        return $this->reservations;
    }

    public function addReservation(Reserver $reservation): self
    {
        if (!$this->reservations->contains($reservation)) {
            $this->reservations[] = $reservation;
            $reservation->setUtilisateur($this);
        }

        return $this;
    }

    public function removeReservation(Reserver $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getUtilisateur() === $this) {
                $reservation->setUtilisateur(null);
            }
        }

        return $this;
    }


}
