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
            $trajet = new Recurence();
            $trajet->setIdtrajet($this->getReference(TrajetFixtures::TRAJETS));
            $trajet->setDatefin($faker->dateTime($max = 'now', $timezone = null));
            $trajet->setLundi($bill[rand(0,1)]);
            $trajet->setMardi($bill[rand(0,1)]);
            $trajet->setMercredi($bill[rand(0,1)]);
            $trajet->setJeudi($bill[rand(0,1)]);
            $trajet->setVendredi($bill[rand(0,1)]);
            $trajet->setSamedi($bill[rand(0,1)]);
            $trajet->setDimanche($bill[rand(0,1)]);
            $manager->persist($user);
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
