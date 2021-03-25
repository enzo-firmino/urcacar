import React, {useCallback, useState} from "react";
import Image from "react-bootstrap/Image";
import {Button, Col, Container, Form, Row, Spinner, Toast} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import {useHistory} from "react-router-dom";
import {
    updateUser,
    updateVoiture
} from "../../../services/fetch/fetch";
import useProfil from "../../../services/hook/useProfil";


export function Profil() {

    const history = useHistory();

    const {utilisateur, isItMyProfil} = useProfil(history);

    if (utilisateur == null) {
        return <Spinner animation="grow" variant="success" />;
    }

    return (
        <div className="container bg-light">
            <Top conducteur={utilisateur} isItMyProfile={isItMyProfil}/>
            { isItMyProfil && <VoitureForm voiture={utilisateur.voiture}/>}
            { !isItMyProfil && <Voiture voiture={utilisateur.voiture}/>}
            <Preferences conducteur={utilisateur} isItMyProfile={isItMyProfil}/>
            { isItMyProfil && <Notification utilisateur={utilisateur} notifs={
                {
                    resAcceptee: utilisateur.resAcceptee,
                    resEnvoyee: utilisateur.resEnvoyee,
                    demandeRes: utilisateur.demandeRes,
                    trajetImminent: utilisateur.trajetImminent,
                    trajetAnnule: utilisateur.trajetAnnule,
                    demandeNotation: utilisateur.demandeNotation,
                    nouvelAvis: utilisateur.nouvelAvis,
                }
            }/>}
            {/*<Avis listeAvis={avisRecus}/>*/}
        </div>
    )
}




function Top({conducteur, isItMyProfile}){

    let rang;

    switch(conducteur.rang){
        case 0:
            rang = "NUL"
            break;
        case 1:
            rang = "Neutre"
            break;
        case 2:
            rang = "Recommandé"
            break;
        default:
            rang = "Inconnu"
    }

    const [prenom, setPrenom] = useState(conducteur.prenom);
    const [show, setShow] = useState(false);
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     updateUser("/api/utilisateurs/"+conducteur.id, {prenom}).then(() => setShow(true));
    // };

    function onSubmit(){
        updateUser("/api/utilisateurs/"+conducteur.id, {prenom}).then(() => setShow(true));
    }

    return (
        <>
            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Modifications prises en compte</strong>
                </Toast.Header>
            </Toast>
            <div className="row p-5">
                <Image className="pp" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC' roundedCircle/>
                <div style={{paddingLeft: 10}}>
                    {isItMyProfile
                        ? <Form.Control className="text-left" style={{marginBottom: 1}} type="text" placeholder="Couleur"
                                      value={prenom}
                                      onChange={(event) => setPrenom(event.target.value)}/>
                        : <p className="text-left" style={{marginBottom: 1}}>{conducteur.prenom}</p>

                    }
                    <p className="text-left" style={{marginBottom: 1}}>{rang}</p>
                    <p className="text-left" style={{marginBottom: 1}}>{conducteur.status}</p>
                    <p className="text-left" style={{marginBottom:1}}>{conducteur.trajetsProposes.length} trajets proposés</p>
                </div>
            </div>
            {isItMyProfile && <Button variant="primary" onClick={() => onSubmit()}>
                Enregistrer
            </Button>}
        </>
    )
}

function VoitureForm({voiture}){

 let v = voiture;
    if (voiture === null) {
        v = {
            marque: '',
            modele: '',
            couleur: '',
            annee: '',
            immatriculation: '',
            photo: '',
        }
    }

    const [marque, setMarque] = useState(v.marque);
    const [modele, setModele] = useState(v.modele);
    const [couleur, setCouleur] = useState(v.couleur);
    const [annee, setAnnee] = useState(v.annee);
    const [immat, setImmat] = useState(v.immatriculation);
    const [photo, setPhoto] = useState(v.photo);
    const [show, setShow] = useState(false);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
        updateVoiture(voiture.id, {marque, modele, couleur, annee, immat}).then(() => setShow(true));
    },[voiture]);

    return(
        <div>
            <Title titre="Véhicule"/>
            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Modifications prises en compte</strong>
                </Toast.Header>
            </Toast>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Row>
                        <Col>
                            <Form.Label>Marque</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Marque" value={marque}
                                          onChange={(event) => setMarque(event.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Modèle</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Modèle" value={modele}
                                          onChange={(event) => setModele(event.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Année</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Année" value={annee}
                                          onChange={(event) => setAnnee(event.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Couleur</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Couleur" value={couleur}
                                          onChange={(event) => setCouleur(event.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Row>
                        <Col>
                            <Form.Label>Plaque d'immatriculation</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="pImma" placeholder="AB-123-CD" value={immat}
                                          onChange={(event) => setImmat(event.target.value)}/>
                        </Col>
                    </Row>
                </Form.Group>

                {/*<Form.Group controlId="formBasicPassword">*/}
                {/*    <Row>*/}
                {/*        <Col>*/}
                {/*            <Form.Label>Photo du véhicule</Form.Label>*/}
                {/*        </Col>*/}
                {/*        <Col>*/}
                {/*            <Form.File id="exampleFormControlFile1" value={photo}*/}
                {/*                       onChange={(event) => setPhoto(event.target.value)}/>*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Form.Group>*/}
                <Button variant="primary" type="submit">
                    Enregistrer
                </Button>
            </Form>

        </div>
    )
}

function Voiture({voiture}){

    if (voiture === null) {
        return <p>Cette utilisateur n'a pas de véhicule </p>;
    }

    return(
        <div>
            <Title titre="Véhicule"/>
            <Table>
                <tbody>
                <tr>
                    <td>Marque</td>
                    <td>{voiture.marque}</td>
                </tr>
                <tr>
                    <td>Modèle</td>
                    <td>{voiture.modele}</td>
                </tr>
                <tr>
                    <td>Année</td>
                    <td>{voiture.annee}</td>
                </tr>
                <tr>
                    <td>Couleur</td>
                    <td>{voiture.couleur}</td>
                </tr>
                <tr>
                    <td>Immatriculation</td>
                    <td>{voiture.immatriculation}</td>
                </tr>
                <tr>
                    <td>Photo</td>
                    <td><img src={voiture.photo} alt='voiture'/></td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

function Preferences({conducteur, isItMyProfile}){
    const [musique, setMusique] = useState(conducteur.musique);
    const [dialogue, setDialogue] = useState(conducteur.dialogue);
    const [fumer, setFumer] = useState(conducteur.fumer);
    const [show, setShow] = useState(false);

    function onSubmit() {
        updateUser("/api/utilisateurs/"+conducteur.id, {
            musique,
            dialogue,
            fumer,
        }).then(() => setShow(true));
    }

    return (
        <>
            <Title titre="Préférences"/>
            <div className='preferences'>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">Modifications prises en compte</strong>
                    </Toast.Header>
                </Toast>
                <Image onClick={() => isItMyProfile ? setDialogue(!dialogue) : null}
                       className={dialogue.toString()}
                       style={{height: 50, width: 50, margin: 10}}
                       src="https://cdn.onlinewebfonts.com/svg/img_216930.png"/>
                <Image onClick={() => isItMyProfile ?  setFumer(!fumer) : null}
                       className={fumer.toString()}
                       style={{height: 50, width: 50, margin: 10}}
                       src="https://webstockreview.net/images/cigar-clipart-vector-14.png"/>
                <Image onClick={() => isItMyProfile ?  setMusique(!musique) : null}
                       className={musique.toString()}
                       style={{height: 50, width: 50, margin: 10}}
                       src="https://img.icons8.com/metro/452/music.png"/>
            </div>
            {isItMyProfile && <Button variant="primary" onClick={onSubmit}>
                Enregistrer
            </Button>}
        </>
    )
}

function Notification({notifs, utilisateur}){

    function onSubmit() {
        updateUser("/api/utilisateurs/"+utilisateur.id, {
            resAcceptee,
            resEnvoyee,
            demandeRes,
            trajetImminent,
            trajetAnnule,
            demandeNotation,
            nouvelAvis,
        }).then(r => setShow(true));
    }

    const [resAcceptee, setResAccepte] = useState(notifs.resAcceptee);
    const [resEnvoyee, setResEnvoye] = useState(notifs.resEnvoyee);
    const [demandeRes, setDemandeRes] = useState(notifs.demandeRes);
    const [trajetImminent, setTrajetImminent] = useState(notifs.trajetImminent);
    const [demandeNotation, setDemandeNotation] = useState(notifs.demandeNotation);
    const [trajetAnnule, setTrajetAnnule] = useState(notifs.trajetAnnule);
    const [nouvelAvis, setNouvelAvis] = useState(notifs.nouvelAvis);
    const [show, setShow] = useState(false);


    return (
        <>
            <Title titre="Notifications"/>
            <Container>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">Modifications prises en compte</strong>
                    </Toast.Header>
                </Toast>
                <Row>
                    <Col>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check className="text-left" type="checkbox" label="Réservation acceptée"
                                        checked={resAcceptee}
                                        onChange={ () => setResAccepte(!resAcceptee)} />
                            <Form.Check className="text-left" type="checkbox" label="Réservation envoyée"
                                        checked={resEnvoyee}
                                        onChange={ () => setResEnvoye(!resEnvoyee)}/>
                            <Form.Check className="text-left" type="checkbox" label="Demande de réservation"
                                        checked={demandeRes}
                                        onChange={ () => setDemandeRes(!demandeRes)}/>
                            <Form.Check className="text-left" type="checkbox" label="Trajet imminent"
                                        checked={trajetImminent}
                                        onChange={ () => setTrajetImminent(!trajetImminent)}/>
                        </Form.Group>
                    </Col>
                    <div style={{borderLeft: "1px solid #58B94B", fontWeight: 'bold', margin:10}}/>
                    <Col className="row">
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check className="text-left" type="checkbox" label="Trajet Annulé"
                                        checked={trajetAnnule}
                                        onChange={ () => setTrajetAnnule(!trajetAnnule)}/>
                            <Form.Check className="text-left" type="checkbox" label="Demande de notation"
                                        checked={demandeNotation}
                                        onChange={ () => setDemandeNotation(!demandeNotation)}/>
                            <Form.Check className="text-left" type="checkbox" label="Nouvel avis"
                                        checked={nouvelAvis}
                                        onChange={ () => setNouvelAvis(!nouvelAvis)}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" onClick={onSubmit}>
                    Enregistrer
                </Button>
            </Container>
        </>
    )
}

function Title(props){
    return (
        <div style={{borderBottom: "1px solid #58B94B", fontWeight: 'bold'}}>
            <h1 className="text-left text-success">{props.titre}</h1>
        </div>
    )
}



