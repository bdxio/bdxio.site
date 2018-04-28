import React, { Component } from 'react';
import displayPage from '../_PageContainer';
import Header from '../../components/common/Header.component';

class CGV extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header title="Conditions Générale de Vente" />
                <div className="row align-center">
                    <div className="column small-12 large-8">
                        <div>
                            <h4>1. Objet et champs d’application des présentes Conditions Générales de Vente</h4>
                            <div>
                                Les présentes conditions générales de vente sont applicables à toutes les conférences organisées
                                par l’association Bordeaux Developper Expérience (dénommée BDX i/o).
                                Tout achat de billet pour la conférence implique l’acceptation sans réserve par
                                l’acheteur (dénommé Le Client) et son adhésion pleine et entière aux présentes
                                Conditions Générales de Vente.
                                En conséquence, l’achat par un Client emporte l’adhésion sans réserve, de ce dernier,
                                aux présentes Conditions Générales de Vente. Les présentes Conditions Générales de
                                Vente peuvent être modifiées à tout moment et sans préavis par notre association,
                                les modifications étant alors applicables uniquement aux commandes effectuées
                                postérieurement à leur date de mise en œuvre. Les présentes Conditions Générales de
                                Vente sont accessibles de façon permanente sur le site Internet : <a href="//bdx.io/#/legal/cvg">bdx.io/#/legal/cvg</a>
                            </div>
                        </div>
                        <div>
                            <h4>2. Absence de droit de rétractation</h4>
                            <div>
                                Conformément à l’article L 121-21-8 du Code de la Consommation, les billets de
                                spectacles ne font pas l’objet d’un droit de rétractation.
                            </div>
                        </div>
                        <div>
                            <h4>3. Disponibilité des places</h4>
                            <div>
                                BDX I/O alloue un nombre de places.<br />
                                L’achat s’effectue en temps réel. Ainsi, lors de l’achat des billets en ligne,
                                vous êtes informé en temps réel de la disponibilité des billets.
                            </div>
                        </div>
                        <div>
                            <h4>4. Prix</h4>
                            <div>
                                Le prix du billet est indiqué en euros toutes taxes comprises.<br />
                                Selon le mode de paiement, des frais peuvent s’ajouter au prix du billet,
                                lors de l’achat la mention de ces frais vous sera faite.<br />
                                BDX I/O se réserve le droit de modifier les prix à tout moment.
                                Les billets étant nominatifs, ils peuvent être revendus sous conditions :
                                Au prix d’achat, en nous ayant communiqué les informations de l’acheteur
                                (Nom, Prénom, Email) dans le but de transférer la place.
                                Rendez-vous sur le site <a href="//bdx.io">www.bdx.io</a> pour effectuer cette démarche.
                                A cet égard, nous vous rappelons qu’en application des dispositions de l’article
                                L.313-6-2 du Code pénal, « le fait de vendre, d’offrir à la vente ou d’exposer en
                                vue de la vente ou de la cession ou de fournir les moyens en vue de la vente ou
                                de la cession des titres d’accès à une manifestation sportive, culturelle ou
                                commerciale ou à un spectacle vivant, de manière habituelle et sans l’autorisation du
                                producteur, de l’organisateur ou du propriétaire des droits d’exploitation de cette
                                manifestation ou de ce spectacle, est puni de 15 000 € d’amende. Cette peine est
                                portée à 30 000 € d’amende en cas de récidive. ». Est considéré au sens de la loi
                                comme titre d’accès, « tout billet, document, message ou code, quels qu’en soient
                                la forme et le support, attestant de l’obtention auprès du producteur, de l’organisateur
                                ou du propriétaire des droits d’exploitation du droit d’assister à la manifestation ou
                                au spectacle. »
                            </div>
                        </div>
                        <div>
                            <h4>5. Modalités de paiement et sécurité</h4>
                            <div>
                                Le paiement du billet se fait par paiement sécurisé par une procédure de cryptage des
                                données en vue d’éviter l’interception de ces informations par un tiers, par carte de
                                crédit via la plateforme de paiement en ligne sécurisé de Weezevent.<br />
                                BDX I/O est client de Weezevent pour la vente des billets.<br />
                                Les conditions générales de vente de Weezevent sont consultables à cette
                                adresse : <a hre="https://www.weezevent.com/widget/cgv/fr_FR">https://www.weezevent.com/widget/cgv/fr_FR</a>.<br />
                                Après paiement, le Client reçoit un email de confirmation de commande, avec la facture jointe.<br />
                                BDX I/O ne saurait être tenue responsable en cas d’usage frauduleux des moyens de paiement utilisés.
                                Conformément à la réglementation en vigueur, les coordonnées bancaires du Client ne sont pas conservées par
                                BDX I/O.
                            </div>
                        </div>
                        <div>
                            <h4>6. Livraison</h4>
                            <div>
                                Le Client reçoit un second mail contenant le billet à présenter à l’entrée de l’événement
                                concerné pour l’échanger contre son pass d’entrée.
                            </div>
                        </div>
                        <div>
                            <h4>7. Limites de responsabilité</h4>
                            <h5>7.1. Modification ou annulation d’un événement et remboursement</h5>
                            <div>
                                En cas  de modification de l’heure et/ou de lieu (ex : inondation de la salle), vous serez
                                informé par BDX i/o par l’envoi d’un e-mail à l’adresse que vous avez communiquée lors de votre achat.<br />
                                Vous retrouverez également toutes les informations nécessaires concernant les modifications affectant l’événement sur le site internet www.bdx.io, notre page Facebook et notre twitter.<br />
                                En cas d’annulation ou de report de date, vous serez informé par BDX I/O par l’envoi d’un e-mail
                                à l’adresse que vous avez communiquée lors de votre achat et nous procéderons au remboursement.
                                Le remboursement est effectué sur la base du prix du billet, et par virement bancaire sur le compte de la carte bancaire utilisée lors de votre paiement.<br />
                                En dehors des conditions ci-après énoncées, aucune annulation de votre réservation ne peut être effectuée.<br />
                                Le billet n’est pas remboursable y compris en cas de perte ou de vol. Le billet ne peut être ni repris ni échangé.
                            </div>
                            <h5>7.2 Données personnelles.</h5>
                            <div>
                                Le Client est informé, conformément à la loi du 6 janvier 1978 dite Loi Informatique et Libertés, que les
                                données personnelles le concernant collectées à l’occasion de son achat, sont utilisées aux fins de gestion et
                                de traitement de son achat.<br />
                                Conformément aux dispositions de la loi du 6 janvier 1978, le Client dispose d’un droit d’accès, de
                                rectification et, le cas échéant, de suppression des données le concernant. Ce droit peut être exercé
                                auprès de BDX I/O, par mail.
                            </div>
                            <h5>7.3 Contraintes liées à Internet</h5>
                            <div>
                                Weezevent est soumis aux contraintes liées à Internet.<br />
                                Vous déclarez avoir parfaitement connaissance des caractéristiques et limites du réseau Internet, par lequel BDX I/O
                            met à disposition le Site et l’espace « Weezevent ».<br />
                                Vous reconnaissez donc que  les transmissions de données sur Internet ne bénéficient que d’une fiabilité technique
                                relative, celles-ci circulant sur des réseaux hétérogènes aux caractéristiques et capacités techniques diverses,
                                qui sont parfois saturés à certaines périodes de la journée ; les données circulant sur Internet ne sont pas
                                protégées contre des détournements éventuels, et qu’elles peuvent faire l’objet d’une captation des informations
                            diffusées et qu’il est impossible de contrôler l’utilisation qui pourrait en être faite par des tiers sur Internet.<br />
                                En conséquence, BDX i/o ne peut être responsable pour l’un quelconque des faits ou événements mentionnés ci-dessus.
                                BDX I/O est dégagée de toute responsabilité en cas de force majeure, dont notamment le dysfonctionnement du réseau Internet,
                                des lignes téléphoniques, du matériel de réception empêchant ou entravant l’utilisation du Site.
                            </div>
                        </div>
                        <div>
                            <h4>8. Obligations du client</h4>
                            <div>
                                En procédant à l’achat sur Weezevent, vous vous engagez à respecter les dispositions des CGV applicables au moment de votre achat.<br />
                                Vous êtes responsable de toutes les données que vous saisissez directement sur le Site.<br />
                                Par l’achat de mon droit d’entrée à l’événement, j’accepte le code de conduite de BDX I/O a l’adresse
                                suivante <a href="//bdx.io/legal/code_de_conduite">www.bdx.io/legal/code_de_conduite</a> ainsi que la diffusion de mon
                                image à des fins de promotion en ligne (sur le site de l'événement www.bdx.io, ainsi que les profils de réseaux
                                sociaux associés “Facebook, Twitter et Linkedin”) et sur tout support.
                            </div>
                        </div>
                        <div>
                            <h4>9. Droit applicable</h4>
                            <div>
                                Toutes les clauses figurant dans les présentes conditions générales de vente, ainsi que toutes les 
                                opérations d’achat et de vente qui y sont visées, seront soumises au droit français.<br />
                                En cas de litige, les tribunaux français sont seuls compétents.
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(CGV)