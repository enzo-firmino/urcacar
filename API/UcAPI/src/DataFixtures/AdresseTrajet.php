<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Trajet;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AdresseFixtures extends Fixture
{
    public const ADDRESS = "address";

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbUsers = 1; $nbUsers <= 10; $nbUsers++){
            $ad = new Trajet();
            $ad->setVillead($faker->city);
            $ad->setCpad($faker->postcode);
            $ad->setAdad($faker->address);
            $manager->persist($ad);
        }
        $manager->flush();
    }
}
