<?php

namespace App\Entity;

use App\Repository\UtilisateurRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass=UtilisateurRepository::class)
 */
class Utilisateur implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $pnom;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="utilisateurEnvoyer")
     */
    private $messageEnvoye;

    /**
     * @ORM\OneToMany(targetEntity=Message::class, mappedBy="utilisateurRecevoir")
     */
    private $messageRecu;

    /**
     * @ORM\OneToMany(targetEntity=Notifs::class, mappedBy="utilisateurNotifs", orphanRemoval=true)
     */
    private $notif;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="utilisateurDonner")
     */
    private $avisDonne;

    /**
     * @ORM\OneToMany(targetEntity=Avis::class, mappedBy="utilisateurAvoir")
     */
    private $avisRecu;

    public function __construct()
    {
        $this->messageEnvoye = new ArrayCollection();
        $this->messageRecu = new ArrayCollection();
        $this->notif = new ArrayCollection();
        $this->avisDonne = new ArrayCollection();
        $this->avisRecu = new ArrayCollection();
     * @ORM\OneToOne(targetEntity=Voiture::class, mappedBy="idUser", cascade={"persist", "remove"})
     */
    private $voiture;

    /**
     * @ORM\ManyToMany(targetEntity=Reserver::class, mappedBy="idUser")
     */
    private $reservers;

    public function __construct()
    {
        $this->reservers = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPnom(): ?string
    {
        return $this->pnom;
    }

    public function setPnom(string $pnom): self
    {
        $this->pnom = $pnom;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->pnom;
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

    /**
     * @see UserInterface
     */
    public function getPassword()
    {
        // not needed for apps that do not check user passwords
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed for apps that do not check user passwords
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessageEnvoye(): Collection
    {
        return $this->messageEnvoye;
    }

    public function addMessageEnvoye(Message $messageEnvoye): self
    {
        if (!$this->messageEnvoye->contains($messageEnvoye)) {
            $this->messageEnvoye[] = $messageEnvoye;
            $messageEnvoye->setUtilisateurEnvoyer($this);
        }

        return $this;
    }

    public function removeMessageEnvoye(Message $messageEnvoye): self
    {
        if ($this->messageEnvoye->removeElement($messageEnvoye)) {
            // set the owning side to null (unless already changed)
            if ($messageEnvoye->getUtilisateurEnvoyer() === $this) {
                $messageEnvoye->setUtilisateurEnvoyer(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Message[]
     */
    public function getMessageRecu(): Collection
    {
        return $this->messageRecu;
    }

    public function addMessageRecu(Message $messageRecu): self
    {
        if (!$this->messageRecu->contains($messageRecu)) {
            $this->messageRecu[] = $messageRecu;
            $messageRecu->setUtilisateurRecevoir($this);
        }

        return $this;
    }

    public function removeMessageRecu(Message $messageRecu): self
    {
        if ($this->messageRecu->removeElement($messageRecu)) {
            // set the owning side to null (unless already changed)
            if ($messageRecu->getUtilisateurRecevoir() === $this) {
                $messageRecu->setUtilisateurRecevoir(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Notifs[]
     */
    public function getNotif(): Collection
    {
        return $this->notif;
    }

    public function addNotif(Notifs $notif): self
    {
        if (!$this->notif->contains($notif)) {
            $this->notif[] = $notif;
            $notif->setUtilisateurNotifs($this);
        }

        return $this;
    }

    public function removeNotif(Notifs $notif): self
    {
        if ($this->notif->removeElement($notif)) {
            // set the owning side to null (unless already changed)
            if ($notif->getUtilisateurNotifs() === $this) {
                $notif->setUtilisateurNotifs(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Avis[]
     */
    public function getAvisDonne(): Collection
    {
        return $this->avisDonne;
    }

    public function addAvisDonne(Avis $avisDonne): self
    {
        if (!$this->avisDonne->contains($avisDonne)) {
            $this->avisDonne[] = $avisDonne;
            $avisDonne->setUtilisateurDonner($this);
        }

        return $this;
    }

    public function removeAvisDonne(Avis $avisDonne): self
    {
        if ($this->avisDonne->removeElement($avisDonne)) {
            // set the owning side to null (unless already changed)
            if ($avisDonne->getUtilisateurDonner() === $this) {
                $avisDonne->setUtilisateurDonner(null);
            }
    public function getVoiture(): ?Voiture
    {
        return $this->voiture;
    }

    public function setVoiture(?Voiture $voiture): self
    {
        $this->voiture = $voiture;

        // set (or unset) the owning side of the relation if necessary
        $newIdUser = null === $voiture ? null : $this;
        if ($voiture->getIdUser() !== $newIdUser) {
            $voiture->setIdUser($newIdUser);
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
            $avisRecu->setUtilisateurAvoir($this);
     * @return Collection|Reserver[]
     */
    public function getReservers(): Collection
    {
        return $this->reservers;
    }

    public function addReserver(Reserver $reserver): self
    {
        if (!$this->reservers->contains($reserver)) {
            $this->reservers[] = $reserver;
            $reserver->addIdUser($this);
        }

        return $this;
    }

    public function removeAvisRecu(Avis $avisRecu): self
    {
        if ($this->avisRecu->removeElement($avisRecu)) {
            // set the owning side to null (unless already changed)
            if ($avisRecu->getUtilisateurAvoir() === $this) {
                $avisRecu->setUtilisateurAvoir(null);
            }
    public function removeReserver(Reserver $reserver): self
    {
        if ($this->reservers->removeElement($reserver)) {
            $reserver->removeIdUser($this);
        }

        return $this;
    }
}
