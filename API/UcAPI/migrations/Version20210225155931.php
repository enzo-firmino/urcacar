<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210225155931 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE adresse (id INT AUTO_INCREMENT NOT NULL, ville VARCHAR(255) NOT NULL, adresse VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avis (id INT AUTO_INCREMENT NOT NULL, emetteur_id INT NOT NULL, destinataire_id INT NOT NULL, conduite INT DEFAULT NULL, ponctualite INT DEFAULT NULL, comportement INT DEFAULT NULL, INDEX IDX_8F91ABF079E92E8C (emetteur_id), INDEX IDX_8F91ABF0A4F84F6E (destinataire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE etape (id INT AUTO_INCREMENT NOT NULL, adresse_id INT DEFAULT NULL, trajet_id INT NOT NULL, heure TIME NOT NULL, INDEX IDX_285F75DD4DE7DC5C (adresse_id), INDEX IDX_285F75DDD12A823 (trajet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE message (id INT AUTO_INCREMENT NOT NULL, envoyeur_id INT NOT NULL, destinataire_id INT NOT NULL, trajet_id INT NOT NULL, texte VARCHAR(255) NOT NULL, date DATETIME NOT NULL, vu TINYINT(1) DEFAULT NULL, INDEX IDX_B6BD307F4795A786 (envoyeur_id), INDEX IDX_B6BD307FA4F84F6E (destinataire_id), INDEX IDX_B6BD307FD12A823 (trajet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE notification (id INT AUTO_INCREMENT NOT NULL, utilisateur_id INT NOT NULL, titre VARCHAR(255) NOT NULL, texte VARCHAR(255) DEFAULT NULL, INDEX IDX_BF5476CAFB88E14F (utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recurrence (id INT AUTO_INCREMENT NOT NULL, trajet_id INT NOT NULL, date_fin DATE NOT NULL, lundi TINYINT(1) NOT NULL, mardi TINYINT(1) NOT NULL, mercredi TINYINT(1) NOT NULL, jeudi TINYINT(1) NOT NULL, vendredi TINYINT(1) NOT NULL, samedi TINYINT(1) NOT NULL, dimanche TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_1FB7F221D12A823 (trajet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reserver (id INT AUTO_INCREMENT NOT NULL, passager_id INT NOT NULL, trajet_id INT NOT NULL, acceptee TINYINT(1) NOT NULL, INDEX IDX_B9765E9371A51189 (passager_id), INDEX IDX_B9765E93D12A823 (trajet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE trajet (id INT AUTO_INCREMENT NOT NULL, conducteur_id INT NOT NULL, adresse_depart_id INT NOT NULL, adresse_arrivee_id INT NOT NULL, prix DOUBLE PRECISION NOT NULL, nb_place INT NOT NULL, date_depart DATE NOT NULL, heure_arrivee TIME NOT NULL, heure_depart TIME NOT NULL, INDEX IDX_2B5BA98CF16F4AC6 (conducteur_id), INDEX IDX_2B5BA98C305689D (adresse_depart_id), INDEX IDX_2B5BA98C85ED0E35 (adresse_arrivee_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE utilisateur (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', prenom VARCHAR(255) NOT NULL, telephone INT DEFAULT NULL, status INT DEFAULT NULL, rang INT DEFAULT NULL, photo VARCHAR(255) DEFAULT NULL, fiabilite INT DEFAULT NULL, res_acceptee TINYINT(1) DEFAULT NULL, res_envoyee TINYINT(1) DEFAULT NULL, demande_res TINYINT(1) DEFAULT NULL, trajet_imminent TINYINT(1) DEFAULT NULL, trajet_annule TINYINT(1) DEFAULT NULL, demande_notation TINYINT(1) DEFAULT NULL, nouvel_avis TINYINT(1) DEFAULT NULL, dialogue TINYINT(1) DEFAULT NULL, fumer TINYINT(1) DEFAULT NULL, musique TINYINT(1) DEFAULT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_1D1C63B3E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE voiture (id INT AUTO_INCREMENT NOT NULL, proprietaire_id INT NOT NULL, modele VARCHAR(255) DEFAULT NULL, annee DATE DEFAULT NULL, couleur VARCHAR(255) DEFAULT NULL, marque VARCHAR(255) DEFAULT NULL, immatriculation VARCHAR(255) DEFAULT NULL, photo VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_E9E2810F76C50E4A (proprietaire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE avis ADD CONSTRAINT FK_8F91ABF079E92E8C FOREIGN KEY (emetteur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE avis ADD CONSTRAINT FK_8F91ABF0A4F84F6E FOREIGN KEY (destinataire_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE etape ADD CONSTRAINT FK_285F75DD4DE7DC5C FOREIGN KEY (adresse_id) REFERENCES adresse (id)');
        $this->addSql('ALTER TABLE etape ADD CONSTRAINT FK_285F75DDD12A823 FOREIGN KEY (trajet_id) REFERENCES trajet (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307F4795A786 FOREIGN KEY (envoyeur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FA4F84F6E FOREIGN KEY (destinataire_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE message ADD CONSTRAINT FK_B6BD307FD12A823 FOREIGN KEY (trajet_id) REFERENCES trajet (id)');
        $this->addSql('ALTER TABLE notification ADD CONSTRAINT FK_BF5476CAFB88E14F FOREIGN KEY (utilisateur_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE recurrence ADD CONSTRAINT FK_1FB7F221D12A823 FOREIGN KEY (trajet_id) REFERENCES trajet (id)');
        $this->addSql('ALTER TABLE reserver ADD CONSTRAINT FK_B9765E9371A51189 FOREIGN KEY (passager_id) REFERENCES utilisateur (id)');
        $this->addSql('ALTER TABLE reserver ADD CONSTRAINT FK_B9765E93D12A823 FOREIGN KEY (trajet_id) REFERENCES trajet (id)');
        $this->addSql('ALTER TABLE trajet ADD CONSTRAINT FK_2B5BA98CF16F4AC6 FOREIGN KEY (conducteur_id) REFERENCES utilisateur (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE trajet ADD CONSTRAINT FK_2B5BA98C305689D FOREIGN KEY (adresse_depart_id) REFERENCES adresse (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE trajet ADD CONSTRAINT FK_2B5BA98C85ED0E35 FOREIGN KEY (adresse_arrivee_id) REFERENCES adresse (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE voiture ADD CONSTRAINT FK_E9E2810F76C50E4A FOREIGN KEY (proprietaire_id) REFERENCES utilisateur (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE etape DROP FOREIGN KEY FK_285F75DD4DE7DC5C');
        $this->addSql('ALTER TABLE trajet DROP FOREIGN KEY FK_2B5BA98C305689D');
        $this->addSql('ALTER TABLE trajet DROP FOREIGN KEY FK_2B5BA98C85ED0E35');
        $this->addSql('ALTER TABLE etape DROP FOREIGN KEY FK_285F75DDD12A823');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FD12A823');
        $this->addSql('ALTER TABLE recurrence DROP FOREIGN KEY FK_1FB7F221D12A823');
        $this->addSql('ALTER TABLE reserver DROP FOREIGN KEY FK_B9765E93D12A823');
        $this->addSql('ALTER TABLE avis DROP FOREIGN KEY FK_8F91ABF079E92E8C');
        $this->addSql('ALTER TABLE avis DROP FOREIGN KEY FK_8F91ABF0A4F84F6E');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307F4795A786');
        $this->addSql('ALTER TABLE message DROP FOREIGN KEY FK_B6BD307FA4F84F6E');
        $this->addSql('ALTER TABLE notification DROP FOREIGN KEY FK_BF5476CAFB88E14F');
        $this->addSql('ALTER TABLE reserver DROP FOREIGN KEY FK_B9765E9371A51189');
        $this->addSql('ALTER TABLE trajet DROP FOREIGN KEY FK_2B5BA98CF16F4AC6');
        $this->addSql('ALTER TABLE voiture DROP FOREIGN KEY FK_E9E2810F76C50E4A');
        $this->addSql('DROP TABLE adresse');
        $this->addSql('DROP TABLE avis');
        $this->addSql('DROP TABLE etape');
        $this->addSql('DROP TABLE message');
        $this->addSql('DROP TABLE notification');
        $this->addSql('DROP TABLE recurrence');
        $this->addSql('DROP TABLE reserver');
        $this->addSql('DROP TABLE trajet');
        $this->addSql('DROP TABLE utilisateur');
        $this->addSql('DROP TABLE voiture');
    }
}
