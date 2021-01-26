<?php

namespace App\DataFixtures;

use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Faker;
use App\Entity\Recurrence;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class RecurenceFixtures extends Fixture implements DependentFixtureInterface
{

    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');

        for($nbUsers = 1; $nbUsers <= 2; $nbUsers++){
            $rec = new Recurrence();
            if($nbUsers%2){
                $rec->setTrajet($this->getReference(TrajetFixtures::TF));
            }else{
                $rec->setTrajet($this->getReference(TrajetFixtures::RTF));
            }
            $rec->setDatefin($faker->dateTime($max = 'now', $timezone = null));
            $rec->setLundi($faker->boolean);
            $rec->setMardi($faker->boolean);
            $rec->setMercredi($faker->boolean);
            $rec->setJeudi($faker->boolean);
            $rec->setVendredi($faker->boolean);
            $rec->setSamedi($faker->boolean);
            $rec->setDimanche($faker->boolean);
            $manager->persist($rec);
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
