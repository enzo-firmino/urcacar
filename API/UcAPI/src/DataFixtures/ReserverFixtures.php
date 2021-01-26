<?php
namespace App\DataFixtures;

use Faker;
use App\Entity\Reserver;
use App\DataFixtures\UserFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ReserverFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');
        for ($nbReservation = 1; $nbReservation <= 10; $nbReservation++) {
            $reservation = new Reserver();
            if($nbReservation%2){
                $reservation->setPassager($this->getReference(UserFixtures::JEAN));
                $reservation->setTrajet($this->getReference(TrajetFixtures::TF));
            }else{
                $reservation->setPassager($this->getReference(UserFixtures::ROMAIN));
                $reservation->setTrajet($this->getReference(TrajetFixtures::RTF));
            }
            $reservation->setAcceptee($faker->boolean);
            $manager->persist($reservation);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            TrajetFixtures::class,
            UserFixtures::class
        ];
    }
}
