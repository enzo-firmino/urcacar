<?php

namespace App\DataFixtures;

use App\Entity\Utilisateur;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker;

class UserFixtures extends Fixture
{
    public const USER = 'user';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbUsers = 1; $nbUsers <= 10; $nbUsers++){
            $user = new Utilisateur();
            $user->setPrenom($faker->firstName);
            $user->setEmail($faker->email);
            $user->setTelephone($faker->phoneNumber);
            $user->setStatus($faker->numberBetween(0, 1));
            $user->setRang($faker->numberBetween(0, 2));
            $user->setFiabilite($faker->numberBetween(0, 5));
            $user->setDemanderes($faker->boolean);
            $user->setResAcceptee($faker->boolean);
            $user->setResEnvoyee($faker->boolean);
            $user->setDemandeNotation($faker->boolean);
            $user->setTrajetAnnule($faker->boolean);
            $user->setTrajetImminent($faker->boolean);
            $user->setNouvelAvis($faker->boolean);
            $user->setDialogue($faker->boolean);
            $user->setFumer($faker->boolean);
            $user->setMusique($faker->boolean);
            $user->setPhoto($faker->imageUrl($width = 350, $height = 350, 'people'));
            $this->addReference(self::USER, $user);
            $manager->persist($user);
        }
        $manager->flush();
    }
}
