<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\UtilisateurRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UtilisateurRepository::class)
 * @ApiResource(
 * attributes={"force_eager"=false},
 *      normalizationContext={"groups": {"infoUser"}},
 *      itemOperations={
 *          "get",
 *          "put"={
 *              "normalization_context" = {"groups": {"infoUser:put"}},
 *              "security"="is_granted('ROLE_USER')"
 *          },
 *      },
 *      collectionOperations={
 *           "get",
 *      },
 * )
 */
class Utilisateur implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"infoUser"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"infoUser:put","infoUser", "infoTrajet", "infoAvis"})
     */
    private $prenom;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"infoUser"})
     */
    private $status;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"infoUser", "infoTrajet"})
     */
    private $rang;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"infoUser", "infoTrajet", "infoAvis"})
     */
    private $photo;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $fiabilite;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $resAcceptee;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $resEnvoyee;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $demandeRes;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $trajetImminent;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $trajetAnnule;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $demandeNotation;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser"})
     */
    private $nouvelAvis;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser", "infoTrajet"})
     */
    private $dialogue;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser", "infoTrajet"})
     */
    private $fumer;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"infoUser:put","infoUser", "infoTrajet"})
     */
    private $musique;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="envoyeur")
     * Groups({"infoMessage"})
     */
    private $messagesEnvoyes;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="destinataire")
     * Groups({"infoMessage"})
     */
    private $messagesRecus;

    /**
     * @ORM\OneToMany(targetEntity=Notification::class, mappedBy="utilisateur")
     */
    private $notifications;

    /**
     * @ORM\OneToOne(targetEntity=Voiture::class, mappedBy="proprietaire", cascade={"persist", "remove"})
     * @Groups({"infoUser:put","infoUser", "infoTrajet"})
     */
    private $voiture;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="emetteur")
     */
    private $avisEmis;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="destinataire")
     * @Groups({"infoTrajet"})
     */
    private $avisRecu;

    /**
     * @ORM\OneToMany(targetEntity=Trajet::class, mappedBy="conducteur")
     * @Groups({"infoUser"})
     */
    private $trajetsProposes;

    /**
     * @ORM\OneToMany(targetEntity=Reserver::class, mappedBy="passager")
     * @Groups({"infoUser"})
     */
    private $reservations;

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    public function __construct()
    {
        $this->messagesEnvoyes = new ArrayCollection();
        $this->messagesRecus = new ArrayCollection();
        $this->notifications = new ArrayCollection();
        $this->avisEmis = new ArrayCollection();
        $this->avisRecu = new ArrayCollection();
        $this->trajetsProposes = new ArrayCollection();
        $this->reservations = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    public function getPrenom(): ?string
    {
        return $this->prenom;
    }

    public function setPrenom(string $prenom): self
    {
        $this->prenom = $prenom;

        return $this;
    }

    public function getTelephone(): ?int
    {
        return $this->telephone;
    }

    public function setTelephone(?int $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

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

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(?string $photo): self
    {
        $this->photo = $photo;

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

    public function getResAcceptee(): ?bool
    {
        return $this->resAcceptee;
    }

    public function setResAcceptee(?bool $resAcceptee): self
    {
        $this->resAcceptee = $resAcceptee;

        return $this;
    }

    public function getResEnvoyee(): ?bool
    {
        return $this->resEnvoyee;
    }

    public function setResEnvoyee(?bool $resEnvoyee): self
    {
        $this->resEnvoyee = $resEnvoyee;

        return $this;
    }

    public function getDemandeRes(): ?bool
    {
        return $this->demandeRes;
    }

    public function setDemandeRes(?bool $demandeRes): self
    {
        $this->demandeRes = $demandeRes;

        return $this;
    }

    public function getTrajetImminent(): ?bool
    {
        return $this->trajetImminent;
    }

    public function setTrajetImminent(?bool $trajetImminent): self
    {
        $this->trajetImminent = $trajetImminent;

        return $this;
    }

    public function getTrajetAnnule(): ?bool
    {
        return $this->trajetAnnule;
    }

    public function setTrajetAnnule(?bool $trajetAnnule): self
    {
        $this->trajetAnnule = $trajetAnnule;

        return $this;
    }

    public function getDemandeNotation(): ?bool
    {
        return $this->demandeNotation;
    }

    public function setDemandeNotation(?bool $demandeNotation): self
    {
        $this->demandeNotation = $demandeNotation;

        return $this;
    }

    public function getNouvelAvis(): ?bool
    {
        return $this->nouvelAvis;
    }

    public function setNouvelAvis(?bool $nouvelAvis): self
    {
        $this->nouvelAvis = $nouvelAvis;

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

    /**
     * @return Collection|Message[]
     */
    public function getMessagesEnvoyes(): Collection
    {
        return $this->messagesEnvoyes;
    }

    public function addMessagesEnvoye(Message $messagesEnvoye): self
    {
        if (!$this->messagesEnvoyes->contains($messagesEnvoye)) {
            $this->messagesEnvoyes[] = $messagesEnvoye;
            $messagesEnvoye->setEnvoyeur($this);
        }

        return $this;
    }

    public function removeMessagesEnvoye(Message $messagesEnvoye): self
    {
        if ($this->messagesEnvoyes->removeElement($messagesEnvoye)) {
            // set the owning side to null (unless already changed)
            if ($messagesEnvoye->getEnvoyeur() === $this) {
                $messagesEnvoye->setEnvoyeur(null);
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
            $messagesRecu->setDestinataire($this);
        }

        return $this;
    }

    public function removeMessagesRecu(Message $messagesRecu): self
    {
        if ($this->messagesRecus->removeElement($messagesRecu)) {
            // set the owning side to null (unless already changed)
            if ($messagesRecu->getDestinataire() === $this) {
                $messagesRecu->setDestinataire(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Notification[]
     */
    public function getNotifications(): Collection
    {
        return $this->notifications;
    }

    public function addNotification(Notification $notification): self
    {
        if (!$this->notifications->contains($notification)) {
            $this->notifications[] = $notification;
            $notification->setUtilisateur($this);
        }

        return $this;
    }

    public function removeNotification(Notification $notification): self
    {
        if ($this->notifications->removeElement($notification)) {
            // set the owning side to null (unless already changed)
            if ($notification->getUtilisateur() === $this) {
                $notification->setUtilisateur(null);
            }
        }

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
        if ($voiture->getProprietaire() !== $this) {
            $voiture->setProprietaire($this);
        }

        return $this;
    }

    /**
     * @return Collection|Avis[]
     */
    public function getAvisEmis(): Collection
    {
        return $this->avisEmis;
    }

    public function addAvisEmi(Avis $avisEmi): self
    {
        if (!$this->avisEmis->contains($avisEmi)) {
            $this->avisEmis[] = $avisEmi;
            $avisEmi->setEmetteur($this);
        }

        return $this;
    }

    public function removeAvisEmi(Avis $avisEmi): self
    {
        if ($this->avisEmis->removeElement($avisEmi)) {
            // set the owning side to null (unless already changed)
            if ($avisEmi->getEmetteur() === $this) {
                $avisEmi->setEmetteur(null);
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
            $avisRecu->setDestinataire($this);
        }

        return $this;
    }

    public function removeAvisRecu(Avis $avisRecu): self
    {
        if ($this->avisRecu->removeElement($avisRecu)) {
            // set the owning side to null (unless already changed)
            if ($avisRecu->getDestinataire() === $this) {
                $avisRecu->setDestinataire(null);
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

    public function addTrajetsPropose(Trajet $trajetsPropose): self
    {
        if (!$this->trajetsProposes->contains($trajetsPropose)) {
            $this->trajetsProposes[] = $trajetsPropose;
            $trajetsPropose->setConducteur($this);
        }

        return $this;
    }

    public function removeTrajetsPropose(Trajet $trajetsPropose): self
    {
        if ($this->trajetsProposes->removeElement($trajetsPropose)) {
            // set the owning side to null (unless already changed)
            if ($trajetsPropose->getConducteur() === $this) {
                $trajetsPropose->setConducteur(null);
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
            $reservation->setPassager($this);
        }

        return $this;
    }

    public function removeReservation(Reserver $reservation): self
    {
        if ($this->reservations->removeElement($reservation)) {
            // set the owning side to null (unless already changed)
            if ($reservation->getPassager() === $this) {
                $reservation->setPassager(null);
            }
        }

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }
}
