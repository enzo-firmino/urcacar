<?php

namespace App\DataFixtures;

use App\Entity\Adresse;
use Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AdresseFixtures extends Fixture 
{
    public const AD = "ad";
    public const RAD = "rad";

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbAdresse = 1; $nbAdresse <= 4; $nbAdresse++){
            $adresse = new Adresse();
            $adresse->setAdresse($faker->streetAddress);
            $adresse->setVille($faker->city);
            $manager->persist($adresse);
        }

        $adresse = new Adresse();
        $adresse->setAdresse("2 rue Goiot");
        $adresse->setVille("Reims");
        $manager->persist($adresse);
        $this->addReference(self::AD, $adresse);

        $adresse = new Adresse();
        $adresse->setAdresse("5 rue de la gare");
        $adresse->setVille("Reims");
        $manager->persist($adresse);
        $this->addReference(self::RAD, $adresse);
        $manager->flush();
    }
}
