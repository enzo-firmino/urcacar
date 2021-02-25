<?php

namespace App\Service;

use Symfony\Component\Mime\Email;
use Symfony\Component\Mailer\MailerInterface;

class MailerService {
    private $mailer;
    public function __construct(MailerInterface $mailer)
    {
    $this->mailer = $mailer;
    }

    public function sendEmail(string $subject, string $from, string $to, string $date){
        $email = (new Email())
            ->from($from)
            ->to($to)
            ->subject($subject)
            ->text('Sending emails is fun again!')
            ->html('<p>Votre trajet du '.$date.' à bien été confirmé</p>')

        ;

        $this->mailer->send($email);


    }
}