/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de création :  01/12/2020 11:32:04                      */
/*==============================================================*/


drop table if exists Adresse;

drop table if exists Avis;

drop table if exists Consulter;

drop table if exists Etapes;

drop table if exists Message;

drop table if exists Notifs;

drop table if exists Recurence;

drop table if exists Reserver;

drop table if exists Situer;

drop table if exists Trajet;

drop table if exists Utilisateur;

drop table if exists Voiture;

/*==============================================================*/
/* Table : Adresse                                              */
/*==============================================================*/
create table Adresse
(
   idAd                 int not null,
   villeAd              varchar(255),
   cpAd                 numeric(5,0),
   adAd                 varchar(255),
   primary key (idAd)
);

/*==============================================================*/
/* Table : Avis                                                 */
/*==============================================================*/
create table Avis
(
   idAvis               int not null,
   idUser               int not null,
   conduite             int,
   ponctualite          int,
   comportement         int,
   primary key (idAvis)
);

/*==============================================================*/
/* Table : Consulter                                            */
/*==============================================================*/
create table Consulter
(
   idAvis               int not null,
   idUser               int not null,
   primary key (idAvis, idUser)
);

/*==============================================================*/
/* Table : Etapes                                               */
/*==============================================================*/
create table Etapes
(
   idEtape              int not null,
   idTrajet             int,
   heure                time,
   primary key (idEtape)
);

/*==============================================================*/
/* Table : Message                                              */
/*==============================================================*/
create table Message
(
   idMsg                int not null,
   idUser               int not null,
   Uti_idUser           int not null,
   texteMsg             varchar(1024),
   dateMsg              date,
   vuMsg                date,
   primary key (idMsg)
);

/*==============================================================*/
/* Table : Notifs                                               */
/*==============================================================*/
create table Notifs
(
   idNotif              int not null,
   idUser               int not null,
   titreNotif           varchar(255),
   texteNotif           varchar(255),
   primary key (idNotif)
);

/*==============================================================*/
/* Table : Recurence                                            */
/*==============================================================*/
create table Recurence
(
   idRec                int not null,
   idTrajet             int not null,
   dateFin              date,
   Lundi                bool,
   Mardi                bool,
   Mercredi             bool,
   Jeudi                bool,
   Vendredi             bool,
   Samedi               bool,
   Dimanche             bool,
   primary key (idRec)
);

/*==============================================================*/
/* Table : Reserver                                             */
/*==============================================================*/
create table Reserver
(
   idTrajet             int not null,
   idUser               int not null,
   valider              bool,
   primary key (idTrajet, idUser)
);

/*==============================================================*/
/* Table : Situer                                               */
/*==============================================================*/
create table Situer
(
   idEtape              int not null,
   idAd                 int not null,
   primary key (idEtape, idAd)
);

/*==============================================================*/
/* Table : Trajet                                               */
/*==============================================================*/
create table Trajet
(
   idTrajet             int not null,
   idAd                 int not null,
   idUser               int not null,
   Adr_idAd             int not null,
   idRec                int,
   prix                 float,
   nbPlace              int,
   dateDeb              date,
   heureArriver         time,
   heureDepart          time,
   primary key (idTrajet)
);

/*==============================================================*/
/* Table : Utilisateur                                          */
/*==============================================================*/
create table Utilisateur
(
   idUser               int not null,
   idCar                int,
   pnomUser             varchar(255),
   emailUser            varchar(255),
   telUser              int,
   statutUser           int,
   rang                 int,
   photoUser            longblob,
   fiabilite            int,
   resAccepter          bool,
   resEnvoyer           bool,
   demandeRes           bool,
   trajetImi            bool,
   trajetAnnuler        bool,
   demandeNota          bool,
   nouvelleAvis         bool,
   dialogue             bool,
   fumer                bool,
   musique              bool,
   primary key (idUser)
);

/*==============================================================*/
/* Table : Voiture                                              */
/*==============================================================*/
create table Voiture
(
   idCar                int not null,
   idUser               int not null,
   modeleCar            varchar(255),
   anneeCar             date,
   couleurCar           varchar(255),
   marqueCar            varchar(255),
   plaqueCar            char(7),
   photoCar             longblob,
   primary key (idCar)
);

alter table Avis add constraint FK_donner foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Consulter add constraint FK_Consulter foreign key (idAvis)
      references Avis (idAvis) on delete restrict on update restrict;

alter table Consulter add constraint FK_Consulter2 foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Etapes add constraint FK_Contenir foreign key (idTrajet)
      references Trajet (idTrajet) on delete restrict on update restrict;

alter table Message add constraint FK_Envoyer foreign key (Uti_idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Message add constraint FK_Recevoir foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Notifs add constraint FK_Regarder foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Recurence add constraint FK_Pouvoir2 foreign key (idTrajet)
      references Trajet (idTrajet) on delete restrict on update restrict;

alter table Reserver add constraint FK_Reserver foreign key (idTrajet)
      references Trajet (idTrajet) on delete restrict on update restrict;

alter table Reserver add constraint FK_Reserver2 foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Situer add constraint FK_Situer foreign key (idEtape)
      references Etapes (idEtape) on delete restrict on update restrict;

alter table Situer add constraint FK_Situer2 foreign key (idAd)
      references Adresse (idAd) on delete restrict on update restrict;

alter table Trajet add constraint FK_Commencer foreign key (idAd)
      references Adresse (idAd) on delete restrict on update restrict;

alter table Trajet add constraint FK_Pouvoir foreign key (idRec)
      references Recurence (idRec) on delete restrict on update restrict;

alter table Trajet add constraint FK_Proposer foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

alter table Trajet add constraint FK_Terminer foreign key (Adr_idAd)
      references Adresse (idAd) on delete restrict on update restrict;

alter table Utilisateur add constraint FK_Posseder2 foreign key (idCar)
      references Voiture (idCar) on delete restrict on update restrict;

alter table Voiture add constraint FK_Posseder foreign key (idUser)
      references Utilisateur (idUser) on delete restrict on update restrict;

