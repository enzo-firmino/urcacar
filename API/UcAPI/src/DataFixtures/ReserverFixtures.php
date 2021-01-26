<?php
namespace App\DataFixtures;

use App\Entity\Reserver;
use App\Entity\Trajet;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class ReserverFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($nbReservation = 1; $nbReservation <= 10; $nbReservation++) {
            $reservation = new Reserver();
            $reservation->setUtilisateur($this->getReference(UserFixtures::USER));
            $reservation->setPassager($this->getReference(UserFixtures::USER));
            $reservation->setTrajet($this->getReference(TrajetFixtures::TRAJETS));
            $reservation->setAcceptee($faker->boolean);
            $manager->persist($reservation);
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
