<?php

namespace App\DataFixtures;

use App\Entity\Adresse;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use App\Entity\Etape;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AdresseFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbAdresse = 1; $nbAdresse <= 4; $nbAdresse++){
            $adresse = new Adresse();
            $adresse->setAdresse($faker->streetAddress);
            $adresse->setCp($faker->postcode);
            $adresse->setVille($faker->city);
            $manager->persist($adresse);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            TrajetFixtures::class,
        ];
    }
}
