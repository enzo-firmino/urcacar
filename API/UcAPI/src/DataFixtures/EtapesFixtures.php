<?php

namespace App\DataFixtures;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use App\Entity\Etape;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class EtapesFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbEtape = 1; $nbEtape <= 4; $nbEtape++){
            $etape = new Etape();
            $etape->setTrajet($this->getReference(TrajetFixtures::TRAJETS));
            $etape->setHeure($faker->dateTime($max = 'now', $timezone = null));
            $manager->persist($etape);
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
