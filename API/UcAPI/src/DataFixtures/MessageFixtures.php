<?php


namespace App\DataFixtures;

use Faker;
use App\Entity\Message;
use App\DataFixtures\TrajetFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class MessageFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for ($nbMessage = 1; $nbMessage <= 20; $nbMessage++) {
            $message = new Message();
            $message->setTexte($faker->sentence($nbWords = 6, $variableNbWords = true));
            $message->setDate($faker->dateTime($max = 'now', $timezone = null));
            if($nbMessage%2){
                $message->setDestinataire($this->getReference(UserFixtures::ROMAIN));
                $message->setEnvoyeur($this->getReference(UserFixtures::JEAN));
            }else{
                $message->setDestinataire($this->getReference(UserFixtures::JEAN));
                $message->setEnvoyeur($this->getReference(UserFixtures::ROMAIN));
            }
            $manager->persist($message);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            UserFixtures::class,
            TrajetFixtures::class
        ];
    }
}
