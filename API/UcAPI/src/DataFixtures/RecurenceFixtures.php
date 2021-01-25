<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Recurence;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class RecurenceFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbUsers = 1; $nbUsers <= 10; $nbUsers++){
            $rec = new Recurence();
            $rec->setIdtrajet($this->getReference(TrajetFixtures::TRAJETS));
            $rec->setDatefin($faker->dateTime($max = 'now', $timezone = null));
            $rec->setLundi($faker->boolean);
            $rec->setMardi($faker->boolean);
            $rec->setMercredi($faker->boolean);
            $rec->setJeudi($faker->boolean);
            $rec->setVendredi($faker->boolean);
            $rec->setSamedi($faker->boolean);
            $rec->setDimanche($faker->boolean);
            $manager->persist($rec);
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
