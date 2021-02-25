<?php

namespace App\Controller;
use App\Service\MailerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MailerController extends AbstractController
{
    /**
     * @Route("/email")
     */
    public function sendEmail(MailerService $mailerService)
    {
        $mailerService->sendEmail('OUI', 'didou@gmail.com', 'athis@gmail.com', '21/12/2021');
    }
}
