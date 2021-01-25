<?php

namespace App\DataFixtures;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use App\Entity\Trajet;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class TrajetFixtures extends Fixture implements DependentFixtureInterface
{
    public const TRAJETS = 'trajets';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        $tab = [];

        for($nbTrajet = 1; $nbTrajet <= 10; $nbTrajet++){
            $trajet = new Trajet();
            $trajet->setAdresseArrivee($this->getReference(AdresseFixtures::ADDRESS));
            $trajet->setAdresseDepart($this->getReference(AdresseFixtures::ADDRESS));
            $trajet->setPrix(rand(0,10));
            $trajet->setNbplace(rand(1,4));
            $trajet->setDateDepart($faker->dateTime($max = 'now', $timezone = null));
            $trajet->setHeureArrivee($faker->dateTime($max = 'now', $timezone = null));
            $trajet->setHeuredepart($faker->dateTime($max = 'now', $timezone = null));
            $manager->persist($trajet);
            array_push($tab,$trajet);
        }
        $this->addReference(self::TRAJETS, $tab);
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            AdresseFixtures::class,
        ];
    }
}
