<?php

namespace App\Controller\Api;

use App\Entity\Adresse;

class AdresseCreateController{
    public function __invoke(Adresse $data){
        dd($data);
    }
}