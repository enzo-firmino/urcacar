<?php
namespace App\DataFixtures;

use App\Entity\Avis;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AvisFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($nbAvis = 1; $nbAvis <= 20; $nbAvis++) {
            $avis = new Avis();
            $avis->setConduite(rand(0,5));
            $avis->setPonctualite(rand(0,5));
            $avis->setComportement(rand(0,5));
            $avis->setEmetteur($this->getReference(UserFixtures::ROMAIN));
            $avis->setDestinataire($this->getReference(UserFixtures::JEAN));
            $manager->persist($avis);
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
