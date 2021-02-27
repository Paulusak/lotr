<?php

namespace App\Entity;

use App\Repository\CardRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\DiscriminatorColumn;
use Doctrine\ORM\Mapping\DiscriminatorMap;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\InheritanceType;

/**
 * @ORM\Entity(repositoryClass=CardRepository::class)
 * @InheritanceType("SINGLE_TABLE")
 * @DiscriminatorColumn(name="type", type="string")
 * @DiscriminatorMap({"ring" = "Ring", "creature" = "Creature", "condition" = "Condition", "event"="Event", "site" = "Site", "possession" = "Possession"})
 */
abstract class Card
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
    private $code;

    /**
     * @ORM\ManyToOne(targetEntity=Rarity::class, inversedBy="cards")
     * @ORM\JoinColumn(nullable=false)
     */
    private $rarity;

    /**
     * @ORM\ManyToOne(targetEntity=Culture::class, inversedBy="cards")
     * @ORM\JoinColumn(nullable=false)
     */
    private $culture;

    /**
     * @ORM\ManyToMany(targetEntity=Keyword::class, inversedBy="cards")
     */
    private $keywords;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $photo;

    /**
     * @ORM\ManyToOne(targetEntity=Set::class, inversedBy="cards")
     * @ORM\JoinColumn(nullable=false)
     */
    private $setOfCard;

    public function __construct()
    {
        $this->keywords = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getRarity(): ?Rarity
    {
        return $this->rarity;
    }

    public function setRarity(?Rarity $rarity): self
    {
        $this->rarity = $rarity;

        return $this;
    }

    public function getCulture(): ?Culture
    {
        return $this->culture;
    }

    public function setCulture(?Culture $culture): self
    {
        $this->culture = $culture;

        return $this;
    }

    /**
     * @return Collection|Keyword[]
     */
    public function getKeywords(): Collection
    {
        return $this->keywords;
    }

    public function addKeyword(Keyword $keyword): self
    {
        if (!$this->keywords->contains($keyword)) {
            $this->keywords[] = $keyword;
        }

        return $this;
    }

    public function removeKeyword(Keyword $keyword): self
    {
        $this->keywords->removeElement($keyword);

        return $this;
    }

    public function getPhoto(): ?string
    {
        return $this->photo;
    }

    public function setPhoto(string $photo): self
    {
        $this->photo = $photo;

        return $this;
    }

    public function getSetOfCard(): ?Set
    {
        return $this->setOfCard;
    }

    public function setSetOfCard(?Set $setOfCard): self
    {
        $this->setOfCard = $setOfCard;

        return $this;
    }
}

/**
 * @Entity
 */
class Condition extends Card
{
    /**
     * @ORM\Column(type="string", length=1024, nullable=true)
     */
    private $description;

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}

/**
 * @Entity
 */
class Creature extends Card
{
    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $strength;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $twilight;


    public function getStrength(): ?int
    {
        return $this->strength;
    }

    public function setStrength(int $strength): self
    {
        $this->strength = $strength;

        return $this;
    }

    public function getTwilight(): ?int
    {
        return $this->twilight;
    }

    public function setTwilight(int $twilight): self
    {
        $this->twilight = $twilight;

        return $this;
    }
}

/**
 * @Entity
 */
class Event extends Card
{

    /**
     * @ORM\Column(type="string", length=1024, nullable=true)
     */
    private $description;


    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}

/**
 * @Entity
 */
class Possession extends Card
{

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $damage;

    public function getDamage(): ?int
    {
        return $this->damage;
    }

    public function setDamage(int $damage): self
    {
        $this->damage = $damage;

        return $this;
    }
}

/**
 * @Entity
 */
class Ring extends Card
{
    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $strength;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $vitality;

    /**
     * @ORM\Column(type="string", length=1024, nullable=true)
     */
    private $description;

    public function getStrength(): ?int
    {
        return $this->strength;
    }

    public function setStrength(?int $strength): self
    {
        $this->strength = $strength;

        return $this;
    }

    public function getVitality(): ?int
    {
        return $this->vitality;
    }

    public function setVitality(?int $vitality): self
    {
        $this->vitality = $vitality;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }
}

/**
 * @Entity
 */
class Site extends Card
{

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $number;

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(int $number): self
    {
        $this->number = $number;

        return $this;
    }
}