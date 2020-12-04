<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Utilisateur;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class UserFixtures extends Fixture
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbUsers = 1; $nbUsers <= 10; $nbUsers++){
            $user = new Utilisateur();
            $user->setPnom($faker->firstName);
            $manager->persist($user);
        }
        $manager->flush();
    }
}
