<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Utilisateur;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserFixtures extends Fixture
{

    private $encoder;

    public function __construct(UserPasswordEncoderInterface $encoder)
    {
        $this->encoder = $encoder;
    }

    public const ROMAIN = 'romain';
    public const JEAN = 'jean';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbUsers = 1; $nbUsers <= 10; $nbUsers++){
            $user = new Utilisateur();
            $user->setPrenom($faker->firstName);
            $user->setEmail($faker->email);
            $password = $this->encoder->encodePassword($user, 'password');
            $user->setPassword($password);
            $user->setTelephone((int)$faker->phoneNumber);
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
            $manager->persist($user);
        }
        $user = new Utilisateur();
        $user->setPrenom($faker->firstName);
        $user->setEmail($faker->email);
        $password = $this->encoder->encodePassword($user, 'jean');
        $user->setPassword($password);
        $user->setTelephone((int)$faker->phoneNumber);
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
        $manager->persist($user);
        $this->addReference(self::JEAN, $user);
    
        $user = new Utilisateur();
        $user->setPrenom($faker->firstName);
        $user->setEmail($faker->email);
        $password = $this->encoder->encodePassword($user, 'romain');
        $user->setPassword($password);
        $user->setTelephone((int)$faker->phoneNumber);
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
        $manager->persist($user);
        $this->addReference(self::ROMAIN, $user);

        $manager->flush();
    }
}
