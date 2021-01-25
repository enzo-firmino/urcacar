<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Etapes;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class EtapesFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbEtape = 1; $nbEtape <= 4; $nbEtape++){
            $etape = new Etapes();
            $etape->setIdtrajet($this->getReference(TrajetFixtures::TRAJETS));
            $etape->setHeure(time($format = 'H:i', $max = 'now'));
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
