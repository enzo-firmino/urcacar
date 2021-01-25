<?php

namespace App\DataFixtures;

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
            $user->setPnomuser($faker->firstName);
            $user->setEmailuser($faker->email);
            $user->setTeluser($faker->phoneNumber);
            $user->setStatutuser($faker->numberBetween(0, 1));
            $user->setRang($faker->numberBetween(0, 2));
            $user->setFiabilite($faker->numberBetween(0, 5));
            $user->setDemanderes($faker->boolean);
            $user->setResaccepter($faker->boolean);
            $user->setResenvoyer($faker->boolean);
            $user->setDemandenota($faker->boolean);
            $user->setTrajetannuler($faker->boolean);
            $user->setTrajetimi($faker->boolean);
            $user->setNouvelleavis($faker->boolean);
            $user->setDialogue($faker->boolean);
            $user->setFumer($faker->boolean);
            $user->setMusique($faker->boolean);
            $user->setPhotouser($faker->imageUrl($width = 350, $height = 350, 'people'));

            $manager->persist($user);
        }
        $manager->flush();
    }
}
