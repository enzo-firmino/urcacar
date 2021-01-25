<?php


namespace App\DataFixtures;

use App\Entity\Message;
use App\Entity\Notification;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class NotificationFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($nbNotifs = 1; $nbNotifs <= 20; $nbNotifs++) {
            $notification = new Notification();
            $notification->setTexte($faker->sentence($nbWords = 6, $variableNbWords = true));
            $notification->setTitre($faker->words($nb = 3, $asText = true));
            $notification->setUtilisateur($this->getReference(UserFixtures::USER));
            $manager->persist($notification);
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
