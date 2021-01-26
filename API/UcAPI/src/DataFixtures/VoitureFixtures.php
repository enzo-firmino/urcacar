<?php

namespace App\DataFixtures;

use App\Entity\Voiture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\Security\Core\User\User;

class VoitureFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        if ($faker->boolean) {
            $marque = 'Peugeot';
            if ($faker->boolean) {
                $modele = '208';
            } else {
                $modele = '3008';
            }
        } else {
            $marque = 'Jaguar';
            if ($faker->boolean) {
                $modele = 'F-PACE';
            } else {
                $modele = '3008';
            }
        }
        for ($nbVoiture = 1; $nbVoiture <= 2; $nbVoiture++) {
            $voiture = new Voiture();
            $voiture->setAnnee($faker->dateTime($max = 'now', $timezone = null));
            $voiture->setCouleur($faker->colorName);
            $voiture->setImmatriculation($faker->randomNumber($nbDigits = 6, $strict = false));
            $voiture->setMarque($marque);
            $voiture->setModele($modele);
            if($nbVoiture%2){
                $voiture->setProprietaire($this->getReference(UserFixtures::ROMAIN));
            }else{
                $voiture->setProprietaire($this->getReference(UserFixtures::JEAN));
            }
            $voiture->setPhoto($faker->imageUrl($width = 350, $height = 350, 'transport'));
            $manager->persist($voiture);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
        ];
    }
}
