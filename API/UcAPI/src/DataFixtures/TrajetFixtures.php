<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Trajet;
use App\DataFixtures\AdresseFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class TrajetFixtures extends Fixture implements DependentFixtureInterface
{
    public const RTF = 'rtf';
    public const TF = 'tf';

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbTrajet = 1; $nbTrajet <= 10; $nbTrajet++){
            $trajet = new Trajet();
            $trajet->setAdresseArrivee($this->getReference(AdresseFixtures::RAD));
            $trajet->setAdresseDepart($this->getReference(AdresseFixtures::AD));
            if($nbTrajet%2){
                $trajet->setConducteur($this->getReference(UserFixtures::ROMAIN));
            }else{
                $trajet->setConducteur($this->getReference(UserFixtures::JEAN));
            }
            $trajet->setPrix(rand(0,10));
            $trajet->setNbplace(rand(1,4));
            $trajet->setDateDepart($faker->dateTime($max = 'now', $timezone = null));
            $trajet->setHeureArrivee($faker->dateTime($max = 'now', $timezone = null));
            $trajet->setHeuredepart($faker->dateTime($max = 'now', $timezone = null));
            $manager->persist($trajet);
        }

        $trajet = new Trajet();
        $trajet->setAdresseArrivee($this->getReference(AdresseFixtures::RAD));
        $trajet->setAdresseDepart($this->getReference(AdresseFixtures::AD));
        $trajet->setConducteur($this->getReference(UserFixtures::ROMAIN));
        $trajet->setPrix(rand(0,10));
        $trajet->setNbplace(rand(1,4));
        $trajet->setDateDepart($faker->dateTime($max = 'now', $timezone = null));
        $trajet->setHeureArrivee($faker->dateTime($max = 'now', $timezone = null));
        $trajet->setHeuredepart($faker->dateTime($max = 'now', $timezone = null));
        $manager->persist($trajet);
        $this->addReference(self::RTF, $trajet);

        $trajet = new Trajet();
        $trajet->setAdresseArrivee($this->getReference(AdresseFixtures::AD));
        $trajet->setAdresseDepart($this->getReference(AdresseFixtures::RAD));
        $trajet->setConducteur($this->getReference(UserFixtures::JEAN));
        $trajet->setPrix(rand(0,10));
        $trajet->setNbplace(rand(1,4));
        $trajet->setDateDepart($faker->dateTime($max = 'now', $timezone = null));
        $trajet->setHeureArrivee($faker->dateTime($max = 'now', $timezone = null));
        $trajet->setHeuredepart($faker->dateTime($max = 'now', $timezone = null));
        $manager->persist($trajet);
        $this->addReference(self::TF, $trajet);

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            AdresseFixtures::class,
            UserFixtures::class
        ];
    }
}
