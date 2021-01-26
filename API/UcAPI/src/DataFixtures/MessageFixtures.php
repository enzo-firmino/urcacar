<?php


namespace App\DataFixtures;

use App\Entity\Message;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class MessageFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($nbMessage = 1; $nbMessage <= 20; $nbMessage++) {
            $message = new Message();
            $message->setTexte($faker->sentence($nbWords = 6, $variableNbWords = true));
            $message->setDate($faker->dateTime($max = 'now', $timezone = null));
            $message->setDestinataire($this->getReference(UserFixtures::USER));
            $message->setEnvoyeur($this->getReference(UserFixtures::USER));
            $manager->persist($message);
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
