<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Exception;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @ORM\Table(name="user")
 */
class User implements UserInterface
{
    const ROLE_USER = "ROLE_USER",
        ROLE_ADMIN = "ROLE_ADMIN",
        ROLE_SUPER_ADMIN = "ROLE_SUPER_ADMIN";

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     * @ORM\Column(name="name", type="string")
     */
    protected string $name;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    protected string $email;


    /**
     * @var string|null The hashed password
     * @ORM\Column(type="string",nullable=true)
     */
    protected ?string $password;


    /**
     * @ORM\Column(type="json")
     */
    protected $roles = [];


    /**
     * @var string|null
     * @ORM\Column(name="registration_ip", type="string", nullable=true)
     */
    protected ?string $registrationIP;

    /**
     * @var string
     * @ORM\Column(name="locale", type="string")
     */
    protected string $locale;

    /**
     * @ORM\OneToOne(targetEntity=UserForgottenPassword::class, mappedBy="User", cascade={"persist", "remove"})
     */
    private $forgottenPassword;

    /**
     * @ORM\OneToMany(targetEntity=Deck::class, mappedBy="user", orphanRemoval=true)
     */
    private $decks;

    /**
     * @ORM\OneToMany(targetEntity=UserCard::class, mappedBy="user", orphanRemoval=true)
     */
    private $cards;

    /**
     * @ORM\OneToOne(targetEntity=CollectionOfUser::class, mappedBy="user", cascade={"persist", "remove"})
     */
    private $collection;

    /**
     * User constructor.
     * @throws Exception
     */
    public function __construct()
    {
        $this->locale = 'en';
        $this->decks = new ArrayCollection();
        $this->cards = new ArrayCollection();
    }

    public function getId(){
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @param string $email
     * @return self
     */
    public function setEmail(string $email): User
    {
        $this->email = $email;
        return $this;
    }


    /**
     * @param string $locale
     */
    public function setLocale(string $locale)
    {
        $this->locale = $locale;
    }

    /**
     * @return string
     */
    public function getLocale(): string
    {
        return $this->locale;
    }


    /**
     * @return string
     */
    public function getRegistrationIP(): ?string
    {
        return $this->registrationIP;
    }

    /**
     * @param string $registrationIP
     */
    public function setRegistrationIP(string $registrationIP)
    {
        $this->registrationIP = $registrationIP;
    }


    /**
     * @see UserInterface
     */
    public function getRoles() : array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';
        return $roles;
    }

    public function isInRole($role): bool
    {
        if (in_array($role, $this->roles)) {
            return true;
        }
        return false;
    }

    public function setRoles(array $roles): self
    {
        array_push($roles, 'ROLE_USER');
        $this->roles = $roles;
        return $this;
    }

    public function getPassword(): string
    {
        return (string)$this->password;
    }

    public function setPassword(string $password): User
    {
        $this->password = $password;
        return $this;
    }

    public function getUserForgottenPassword(): ?UserForgottenPassword
    {
        return $this->forgottenPassword;
    }

    public function setForgottenPassword(?UserForgottenPassword $forgottenPassword): self
    {
        $this->forgottenPassword = $forgottenPassword;

        // set (or unset) the owning side of the relation if necessary
        $newUser = null === $forgottenPassword ? null : $this;
        if ($forgottenPassword->getUser() !== $newUser) {
            $forgottenPassword->setUser($newUser);
        }

        return $this;
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function getUsername(): string
    {
        return $this->name;
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function __toString(): string
    {
        return $this->getUsername();
    }

    /**
     * @return Collection|Deck[]
     */
    public function getDecks(): Collection
    {
        return $this->decks;
    }

    public function addDeck(Deck $deck): self
    {
        if (!$this->decks->contains($deck)) {
            $this->decks[] = $deck;
            $deck->setUser($this);
        }

        return $this;
    }

    public function removeDeck(Deck $deck): self
    {
        if ($this->decks->removeElement($deck)) {
            // set the owning side to null (unless already changed)
            if ($deck->getUser() === $this) {
                $deck->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|UserCard[]
     */
    public function getCards(): Collection
    {
        return $this->cards;
    }

    public function addCard(UserCard $card): self
    {
        if (!$this->cards->contains($card)) {
            $this->cards[] = $card;
            $card->setUser($this);
        }

        return $this;
    }

    public function removeCard(UserCard $card): self
    {
        if ($this->cards->removeElement($card)) {
            // set the owning side to null (unless already changed)
            if ($card->getUser() === $this) {
                $card->setUser(null);
            }
        }

        return $this;
    }

    public function getCollection(): ?CollectionOfUser
    {
        return $this->collection;
    }

    public function setCollection(CollectionOfUser $collection): self
    {
        // set the owning side of the relation if necessary
        if ($collection->getUser() !== $this) {
            $collection->setUser($this);
        }

        $this->collection = $collection;

        return $this;
    }
}
