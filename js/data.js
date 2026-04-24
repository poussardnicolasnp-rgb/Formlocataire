// ============================================================
// FORMLOCATAIRE — Course Data & Quiz Content
// ============================================================

const COURSE_DATA = {
  title: "Entretenir efficacement son logement locatif",
  subtitle: "Formation certifiante pour locataires",

  chapters: [
    // ─────────────────────────────────────────────────────────
    // CHAPITRE 0 — Module d'accueil
    // ─────────────────────────────────────────────────────────
    {
      id: 0,
      title: "Prendre les clés de son logement",
      subtitle: "Glossaire, équipements et premiers gestes essentiels",
      icon: "🗝️",
      duration: "12 min",
      points: 50,
      badgeId: "initie",
      audioScript: "Bienvenue dans cette formation certifiante. Ce premier module vous donne toutes les clés pour aborder votre location en France avec confiance : les termes juridiques essentiels, les équipements à connaître, les documents à conserver et la procédure complète pour réussir votre état des lieux d'entrée dès le premier jour.",
      content: `
        <h2>Objectifs pédagogiques de ce module</h2>
        <p>À l'issue de ce module, vous serez capable de :</p>
        <ol>
          <li>Définir les termes juridiques et techniques fondamentaux de la location en France ;</li>
          <li>Identifier les équipements essentiels d'un logement et connaître leur rôle ;</li>
          <li>Citer les quatre documents à conserver pendant toute la durée de la location ;</li>
          <li>Réaliser un état des lieux d'entrée complet et opposable ;</li>
          <li>Accomplir les démarches administratives obligatoires dès l'emménagement.</li>
        </ol>

        <h2>Partie 1 — Le vocabulaire de la location</h2>
        <p>La location d'un logement s'accompagne d'un vocabulaire juridique et technique précis. Maîtriser ces termes est indispensable pour comprendre vos droits, vos obligations et les documents que vous signerez.</p>

        <h3>1.1 — Les termes juridiques fondamentaux</h3>

        <div class="example-box">
          <div class="example-box-title">📖 Glossaire officiel</div>
          <table class="responsibility-table">
            <thead><tr><th>Terme</th><th>Définition complète</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Le bail</strong></td>
                <td>Contrat écrit et signé entre le locataire et le propriétaire (ou son mandataire). Il précise la durée de la location, le montant du loyer, les charges, et les obligations de chaque partie. Sa durée légale est de 3 ans pour un logement vide et 1 an pour un logement meublé.</td>
              </tr>
              <tr>
                <td><strong>Le dépôt de garantie</strong></td>
                <td>Somme versée à l'entrée dans les lieux, équivalente à 1 mois de loyer hors charges pour un logement vide (2 mois pour un meublé). Elle est restituée à la sortie si le logement est rendu en bon état, déduction faite des éventuelles dégradations dûment justifiées. On l'appelle aussi « caution », bien que ce terme désigne techniquement la personne qui se porte garante.</td>
              </tr>
              <tr>
                <td><strong>Les charges locatives</strong></td>
                <td>Dépenses liées aux parties communes et aux services collectifs que le propriétaire avance et récupère auprès du locataire : entretien des espaces communs, électricité des parties communes, eau froide et chaude collective, gardien, ascenseur, taxe d'enlèvement des ordures ménagères.</td>
              </tr>
              <tr>
                <td><strong>L'état des lieux</strong></td>
                <td>Document contradictoire (établi en présence des deux parties) décrivant l'état précis du logement, pièce par pièce, à l'entrée et à la sortie. C'est la pièce maîtresse de la location : elle détermine ce qui peut ou non être retenu sur le dépôt de garantie à la sortie.</td>
              </tr>
              <tr>
                <td><strong>La VMC</strong></td>
                <td>Ventilation Mécanique Contrôlée. Système technique présent dans presque tous les logements français construits après 1970. Il renouvelle l'air intérieur en permanence, 24 heures sur 24, en extrayant l'air vicié (humidité, odeurs, vapeurs) par des bouches situées en cuisine, salle de bain et WC.</td>
              </tr>
              <tr>
                <td><strong>Le DPE</strong></td>
                <td>Diagnostic de Performance Énergétique. Document obligatoire remis avec chaque annonce de location, qui note le logement de A (très économe) à G (très énergivore). Depuis 2025, les logements classés G sont progressivement interdits à la location.</td>
              </tr>
              <tr>
                <td><strong>Le préavis</strong></td>
                <td>Délai légal que le locataire doit respecter pour informer le propriétaire de son départ. Il est de <strong>3 mois</strong> pour un logement vide, réduit à <strong>1 mois</strong> en zone tendue, en cas de mutation professionnelle, de perte d'emploi ou pour raison de santé.</td>
              </tr>
              <tr>
                <td><strong>La LRAR</strong></td>
                <td>Lettre Recommandée Avec Accusé de Réception. Mode d'envoi postal qui constitue une preuve légale de l'envoi et de la réception d'un courrier. Obligatoire pour tout acte juridique important : donner son préavis, signaler un problème grave, contester une retenue sur caution.</td>
              </tr>
              <tr>
                <td><strong>La quittance de loyer</strong></td>
                <td>Document que le propriétaire doit remettre au locataire chaque mois, attestant du paiement du loyer et des charges. Elle constitue une preuve de paiement reconnue juridiquement. Conservez toutes vos quittances pendant au moins 3 ans après la fin du bail.</td>
              </tr>
              <tr>
                <td><strong>Les réparations locatives</strong></td>
                <td>Ensemble des travaux d'entretien courant et des petites réparations dont la charge incombe légalement au locataire, tels que définis par le décret du 26 août 1987. Exemples : remplacement des joints de robinets, des ampoules, nettoyage des grilles de VMC.</td>
              </tr>
              <tr>
                <td><strong>La grille de vétusté</strong></td>
                <td>Tableau conventionnel définissant la durée de vie théorique de chaque élément du logement (peintures, revêtements, équipements). Elle permet de calculer la part de responsabilité du locataire en cas de dégradation, en tenant compte de l'usure naturelle liée au temps. Plus un élément est ancien, plus la part du locataire diminue.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Partie 2 — Les équipements d'un logement français</h2>
        <p>Un logement en France est équipé d'installations techniques spécifiques. Les connaître, savoir les localiser et comprendre leur fonctionnement fait partie de vos responsabilités de locataire.</p>

        <h3>2.1 — Les six équipements à identifier dès votre arrivée</h3>

        <div class="example-box">
          <div class="example-box-title">🔧 Les équipements essentiels</div>
          <p><strong>1. La VMC (Ventilation Mécanique Contrôlée)</strong><br>
          Des grilles sont visibles en cuisine, salle de bain et WC. La VMC fonctionne 24 heures sur 24, 7 jours sur 7. Elle ne doit jamais être coupée ni obstruée. C'est elle qui évite l'accumulation d'humidité et prévient les moisissures. Un chapitre complet lui est consacré dans cette formation.</p>

          <p><strong>2. La chaudière individuelle</strong><br>
          Présente dans de nombreux logements, elle produit la chaleur pour le chauffage et l'eau chaude sanitaire. Son entretien annuel par un technicien certifié est une <strong>obligation légale du locataire</strong>. Elle est généralement installée dans la cuisine ou dans un local technique dédié.</p>

          <p><strong>3. Les radiateurs à eau chaude</strong><br>
          Alimentés par la chaudière, ils chauffent les pièces en faisant circuler de l'eau chaude. Ils nécessitent une purge annuelle (élimination de l'air accumulé dans le circuit) pour fonctionner correctement.</p>

          <p><strong>4. Le tableau électrique (disjoncteur général)</strong><br>
          Situé dans l'entrée ou dans un placard, il distribue le courant électrique dans le logement et coupe automatiquement le circuit en cas de surcharge ou de court-circuit. <em>Localisez-le dès votre arrivée</em> : c'est votre premier réflexe en cas de panne électrique.</p>

          <p><strong>5. Le robinet d'arrêt d'eau général</strong><br>
          Généralement situé sous l'évier de la cuisine ou dans un placard technique, il permet de couper immédiatement toute l'alimentation en eau du logement. <em>Localisez-le dès votre arrivée</em> : c'est votre premier geste en cas de fuite d'eau.</p>

          <p><strong>6. Le compteur électrique (Linky)</strong><br>
          Le compteur Linky relève automatiquement votre consommation d'électricité et la transmet au fournisseur. Notez impérativement son index (chiffre affiché) le jour de votre arrivée et le jour de votre départ : ces relevés sont inscrits dans l'état des lieux.</p>
        </div>

        <h2>Partie 3 — Les documents à conserver</h2>
        <p>Quatre documents constituent le socle de votre protection juridique pendant toute la durée de la location. La perte de l'un d'entre eux peut vous exposer à des litiges difficiles à résoudre.</p>

        <h3>3.1 — Les quatre documents indispensables</h3>
        <ol>
          <li><strong>Le bail signé</strong> — Il définit toutes les règles de votre location. En cas de litige, c'est la référence première. Conservez-le jusqu'à 3 ans après la fin du contrat.</li>
          <li><strong>L'état des lieux d'entrée signé</strong> — C'est votre bouclier contre toute retenue injustifiée à la sortie. Tout défaut non mentionné à l'entrée peut vous être imputé au départ. Ne le perdez jamais.</li>
          <li><strong>L'attestation d'assurance habitation</strong> — Elle prouve que vous êtes couvert contre les sinistres (incendie, dégât des eaux, vol). Le propriétaire peut la demander chaque année. Son absence peut justifier la résiliation du bail.</li>
          <li><strong>Les quittances de loyer</strong> — Elles prouvent que vous avez payé chaque mois. Elles sont utiles lors de futures demandes de logement et en cas de litige sur les paiements.</li>
        </ol>

        <div class="callout callout-warning">⚠️ <strong>Règle absolue — L'assurance habitation :</strong> La souscription d'une assurance habitation est <strong>obligatoire dès la remise des clés</strong>, en vertu de la loi du 6 juillet 1989. Le défaut d'assurance constitue un motif légal de résiliation du bail. Vous devez donc souscrire votre assurance <em>avant</em> d'entrer dans le logement, et être en mesure d'en produire l'attestation à tout moment.</div>

        <h2>Partie 4 — L'état des lieux d'entrée</h2>
        <p>L'état des lieux d'entrée est le document le plus stratégique de votre location. Il photographie l'état exact du logement au moment de la remise des clés. C'est sur cette base — et uniquement cette base — que sera évaluée votre responsabilité à la sortie.</p>

        <h3>4.1 — Procédure en six étapes</h3>
        <div class="example-box">
          <div class="example-box-title">✅ Procédure complète le jour de la remise des clés</div>
          <p><strong>Étape 1 — Inspection visuelle systématique</strong><br>
          Parcourez chaque pièce méthodiquement : murs (taches, traces, trous), plafond (humidité, fissures), sol (rayures, taches, déformations), fenêtres (vitres, joints, poignées, volets).</p>
          <p><strong>Étape 2 — Test de tous les équipements</strong><br>
          Actionnez chaque interrupteur, chaque prise, chaque robinet, chaque fenêtre. Testez tous les appareils fournis (four, hotte, réfrigérateur). Vérifiez la chasse d'eau, l'interphone, la sonnette, la boîte aux lettres.</p>
          <p><strong>Étape 3 — Notation de tous les défauts</strong><br>
          Inscrivez sur le document chaque imperfection constatée, même minime : une légère rayure sur le parquet, une plinthe décollée, un joint de robinet qui suinte. Aucun défaut n'est trop petit pour être noté.</p>
          <p><strong>Étape 4 — Photos datées systématiques</strong><br>
          Photographiez chaque pièce dans son ensemble, puis chaque défaut en gros plan. Activez la date et l'heure sur votre appareil photo ou smartphone. Conservez ces photos dans plusieurs endroits (cloud, email à vous-même).</p>
          <p><strong>Étape 5 — Relevé des compteurs</strong><br>
          Notez les index de tous les compteurs présents dans le logement : électricité, eau froide, eau chaude, gaz. Ces relevés doivent figurer sur le document d'état des lieux.</p>
          <p><strong>Étape 6 — Signature en connaissance de cause</strong><br>
          Ne signez qu'après avoir tout vérifié et tout noté. Une fois signé, le document fait foi. Vous repartez avec un exemplaire original signé par les deux parties.</p>
        </div>

        <div class="callout callout-success">💡 <strong>Le droit des 10 jours :</strong> Même après avoir signé l'état des lieux d'entrée, la loi vous accorde un délai supplémentaire de <strong>10 jours</strong> pour signaler par LRAR tout défaut constaté ultérieurement. Ce droit est particulièrement utile pour les problèmes de chauffage, uniquement visibles lors de la première mise en chauffe hivernale.</div>

        <div class="callout callout-warning">⚠️ <strong>Absence d'état des lieux d'entrée :</strong> Si aucun état des lieux d'entrée n'est établi, la loi présume que le logement vous a été remis en parfait état. Vous devrez donc le rendre dans un état identique à la sortie, sans pouvoir invoquer des défauts préexistants. Insistez toujours, sans exception, pour qu'un état des lieux d'entrée soit réalisé et signé.</div>

        <h2>Partie 5 — Les démarches administratives obligatoires</h2>
        <p>L'emménagement s'accompagne de démarches administratives que vous devez accomplir rapidement pour être en règle et ne pas perdre vos droits.</p>

        <h3>5.1 — Les démarches prioritaires</h3>
        <ul>
          <li><strong>Ouverture des contrats d'énergie</strong> — Souscrivez vos contrats d'électricité (et de gaz si nécessaire) à votre nom dès la remise des clés, en communiquant les index relevés lors de l'état des lieux.</li>
          <li><strong>Souscription de l'assurance habitation</strong> — À effectuer <em>avant</em> d'entrer dans le logement. Sans assurance, vous êtes exposé en cas de sinistre et votre bail peut être résilié.</li>
          <li><strong>Déclaration de la nouvelle adresse</strong> — Informez dans les meilleurs délais : l'administration fiscale, la CAF, la Sécurité sociale, votre banque et votre employeur.</li>
          <li><strong>Déclaration à la CAF dans les 30 jours</strong> — Si vous bénéficiez d'aides au logement (APL ou ALS), tout changement de situation doit être déclaré à la CAF dans un délai de <strong>30 jours</strong>. Tout retard entraîne la création d'un trop-perçu que vous devrez intégralement rembourser.</li>
          <li><strong>Réexpédition du courrier</strong> — La Poste propose un service de réexpédition temporaire (payant) pour ne manquer aucun courrier important durant la période de transition.</li>
        </ul>

        <div class="callout callout-success">✅ <strong>Résumé du module :</strong> Vous connaissez désormais les termes clés, les équipements à repérer, les documents à conserver et la procédure complète pour réussir votre état des lieux d'entrée. Ces bases constituent le socle de toute location réussie.</div>
      `,
      quiz: [
        {
          question: "Qu'est-ce que le 'dépôt de garantie' dans une location ?",
          options: [
            "Le premier mois de loyer, déduit des futurs paiements",
            "Une somme versée à l'entrée pour couvrir d'éventuelles dégradations, restituée à la sortie si le logement est rendu en bon état",
            "Une assurance souscrite par le propriétaire",
            "Les charges mensuelles payées en avance"
          ],
          correct: 1,
          explanation: "Le dépôt de garantie est une somme versée à l'entrée (généralement 1 mois de loyer hors charges). Elle est restituée au locataire à la sortie si le logement est en bon état, déduction faite des éventuelles dégradations justifiées."
        },
        {
          question: "À quoi sert la VMC dans un logement ?",
          options: [
            "À chauffer le logement en hiver",
            "À renouveler l'air et évacuer l'humidité en permanence",
            "À filtrer l'eau du robinet",
            "À contrôler la consommation d'électricité"
          ],
          correct: 1,
          explanation: "La VMC (Ventilation Mécanique Contrôlée) renouvelle l'air en permanence, évacue l'humidité et la vapeur de cuisine. Elle fonctionne 24h/24 et ne doit jamais être coupée ni obstruée."
        },
        {
          question: "Combien de jours après la remise des clés peut-on compléter l'état des lieux d'entrée par courrier recommandé ?",
          options: ["3 jours", "7 jours", "10 jours", "30 jours"],
          correct: 2,
          explanation: "La loi prévoit un délai de 10 jours après la remise des clés pour signaler par LRAR tout défaut constaté après la signature de l'état des lieux d'entrée, notamment les problèmes de chauffage visibles seulement à la première mise en chauffe."
        },
        {
          question: "Quel document est le plus important pour protéger votre dépôt de garantie ?",
          options: [
            "Le contrat d'assurance habitation",
            "L'état des lieux d'entrée signé",
            "Les quittances de loyer",
            "Le contrat de bail"
          ],
          correct: 1,
          explanation: "L'état des lieux d'entrée signé est votre protection principale. Sans lui, le logement est présumé avoir été remis en parfait état, et vous devrez le rendre tel quel à la sortie."
        },
        {
          question: "Que doit-on souscrire AVANT d'entrer dans le logement, sous peine de résiliation du bail ?",
          options: [
            "Un abonnement internet fixe",
            "Une assurance habitation",
            "Un contrat d'entretien de chaudière",
            "Une garantie loyer impayé"
          ],
          correct: 1,
          explanation: "L'assurance habitation est obligatoire dès la remise des clés. Le propriétaire peut résilier le bail si le locataire ne peut pas en justifier. Il faut la souscrire avant même d'entrer dans le logement."
        },
        {
          question: "Dans quel délai doit-on déclarer un déménagement à la CAF si l'on bénéficie d'aides au logement ?",
          options: ["Dans les 3 mois", "Dans les 6 mois", "Dans les 30 jours", "Avant la fin de l'année fiscale"],
          correct: 2,
          explanation: "Tout changement de situation doit être déclaré à la CAF dans les 30 jours. Un retard crée un trop-perçu d'aides qui devra être intégralement remboursé."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // CHAPITRE 1 — Le rôle du locataire
    // ─────────────────────────────────────────────────────────
    {
      id: 1,
      title: "Le rôle du locataire",
      subtitle: "Comprendre vos responsabilités fondamentales",
      icon: "🏡",
      duration: "15 min",
      points: 50,
      badgeId: "debutant",
      audioScript: "Lorsque vous signez un bail, vous devenez le gardien quotidien du logement qui vous est confié. Ce chapitre vous explique le cadre légal de vos responsabilités, les quatre piliers du bon locataire, la liste complète des réparations qui vous incombent selon le décret de 1987, et comment fonctionne la grille de vétusté qui vous protège.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Expliquer le principe fondamental de répartition des responsabilités entre locataire et propriétaire ;</li>
          <li>Citer les quatre piliers du comportement d'un bon locataire ;</li>
          <li>Identifier les catégories de réparations à votre charge selon le décret du 26 août 1987 ;</li>
          <li>Appliquer la grille de vétusté pour calculer votre part de responsabilité ;</li>
          <li>Communiquer correctement avec votre propriétaire en cas de problème.</li>
        </ol>

        <h2>Partie 1 — Le cadre légal de la location</h2>
        <p>La location d'un logement est encadrée par deux textes de référence que tout locataire doit connaître :</p>
        <ul>
          <li><strong>La loi du 6 juillet 1989</strong> — Elle régit l'ensemble des rapports entre locataires et propriétaires pour les logements à usage de résidence principale. Elle définit les droits et obligations de chaque partie.</li>
          <li><strong>Le décret du 26 août 1987</strong> — Il établit la liste précise des réparations locatives, c'est-à-dire les travaux d'entretien courant et les petites réparations dont la charge incombe légalement au locataire.</li>
        </ul>
        <div class="callout">💡 <strong>À retenir :</strong> Connaître ces deux textes vous permet de savoir avec certitude ce qui est à votre charge — et ce qui ne l'est pas. Cette connaissance est votre meilleure protection contre les litiges.</div>

        <h2>Partie 2 — Le principe fondamental de répartition</h2>
        <p>Un principe structurant régit toutes les situations que vous rencontrerez en tant que locataire :</p>

        <div class="example-box">
          <div class="example-box-title">⚖️ La règle d'or</div>
          <p><strong>Règle A — Charge du locataire :</strong> Tout ce qui résulte de l'<em>usage normal et courant</em> du logement est à la charge du locataire. Cela inclut l'entretien régulier, les petites réparations et le remplacement des consommables.</p>
          <p><strong>Règle B — Charge du propriétaire :</strong> Tout ce qui relève de la <em>structure du bâtiment</em>, d'une <em>panne importante</em> ou de la <em>vétusté normale</em> est à la charge du propriétaire. Cela inclut les gros travaux, les équipements défaillants et les problèmes structurels.</p>
        </div>

        <h3>2.1 — Tableau de répartition des responsabilités</h3>
        <div class="example-box">
          <div class="example-box-title">📋 Exemples concrets — qui paie quoi ?</div>
          <table class="responsibility-table">
            <thead><tr><th>Situation</th><th>Responsable</th><th>Justification</th></tr></thead>
            <tbody>
              <tr><td>Joint de robinet qui fuit</td><td>✅ Locataire</td><td>Réparation d'usage courant (décret 1987)</td></tr>
              <tr><td>Canalisation qui fuit dans le mur</td><td>🏠 Propriétaire</td><td>Réparation structurelle</td></tr>
              <tr><td>Ampoule grillée</td><td>✅ Locataire</td><td>Consommable à la charge du locataire</td></tr>
              <tr><td>Tableau électrique défaillant</td><td>🏠 Propriétaire</td><td>Installation électrique principale</td></tr>
              <tr><td>Poignée de porte cassée (usage)</td><td>✅ Locataire</td><td>Réparation d'usage courant</td></tr>
              <tr><td>Porte déformée par humidité structurelle</td><td>🏠 Propriétaire</td><td>Problème lié à la structure</td></tr>
              <tr><td>Entretien annuel de la chaudière</td><td>✅ Locataire</td><td>Obligation légale (décret 2023)</td></tr>
              <tr><td>Remplacement d'une chaudière vétuste</td><td>🏠 Propriétaire</td><td>Équipement en fin de vie</td></tr>
              <tr><td>Murs salis par l'usage quotidien</td><td>✅ Locataire</td><td>Entretien courant</td></tr>
              <tr><td>Infiltration d'eau par le toit</td><td>🏠 Propriétaire</td><td>Défaut de la structure du bâtiment</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Partie 3 — Les quatre piliers du bon locataire</h2>
        <p>Un locataire exemplaire se distingue par quatre qualités fondamentales. Ces quatre piliers constituent ensemble le comportement attendu par la loi et par tout bailleur sérieux.</p>

        <h3>Pilier 1 — L'entretien régulier</h3>
        <p>L'entretien régulier consiste à accomplir les gestes quotidiens, hebdomadaires et mensuels qui maintiennent le logement en bon état : nettoyer les sols, aspirer, dégraisser les surfaces de cuisine, détartrer les robinets, aérer chaque jour. Ces gestes simples, effectués avec régularité, préviennent la grande majorité des dégradations coûteuses.</p>

        <h3>Pilier 2 — L'utilisation correcte des équipements</h3>
        <p>Chaque équipement du logement a été conçu pour un usage spécifique. L'utilisation correcte signifie : ne pas forcer sur les serrures, ne pas surcharger les prises électriques, ne pas verser de corps gras dans les canalisations, utiliser la hotte lors de chaque cuisson, ne pas laisser l'eau couler inutilement. Un mauvais usage qui provoque une dégradation est à la charge du locataire, même si l'équipement est ancien.</p>

        <h3>Pilier 3 — Les petites réparations</h3>
        <p>Le locataire est tenu d'effectuer lui-même les petites réparations d'entretien courant : remplacer une ampoule grillée, changer un joint de robinet usé, remplacer la pile d'une sonnette, reboucher un petit trou de cheville dans un mur. Ces interventions ne nécessitent pas de compétences techniques particulières et sont clairement listées dans le décret du 26 août 1987.</p>

        <h3>Pilier 4 — La réactivité</h3>
        <p>Dès qu'un problème dépasse vos capacités d'intervention ou relève de la responsabilité du propriétaire, vous devez le signaler sans délai, par écrit. Attendre aggrave systématiquement les dégâts : une petite fuite devient une inondation, une moisissure localisée envahit un mur entier. La réactivité vous protège également juridiquement : un problème non signalé peut vous être imputé si la situation empire.</p>

        <h2>Partie 4 — Le décret du 26 août 1987 : liste des réparations locatives</h2>
        <p>Ce décret constitue la liste officielle et exhaustive des travaux d'entretien courant à la charge du locataire. En voici les grandes catégories :</p>

        <div class="example-box">
          <div class="example-box-title">📋 Réparations locatives par catégorie (décret du 26 août 1987)</div>
          <table class="responsibility-table">
            <thead><tr><th>Catégorie</th><th>Réparations à votre charge</th></tr></thead>
            <tbody>
              <tr><td><strong>Ouvertures (portes et fenêtres)</strong></td><td>Graissage des gonds et des charnières, remplacement des poignées et des serrures (hors vétusté), remplacement des joints d'étanchéité, entretien des rails de fenêtres coulissantes</td></tr>
              <tr><td><strong>Parties communes privatives</strong></td><td>Maintien en propreté des espaces dont vous avez l'usage exclusif</td></tr>
              <tr><td><strong>Sanitaires et plomberie courante</strong></td><td>Détartrage des robinets et de la robinetterie, remplacement des joints de robinets et de la chasse d'eau, débouchage des siphons et des évacuations, remplacement de l'abattant des WC</td></tr>
              <tr><td><strong>Équipements électriques</strong></td><td>Remplacement des prises et des interrupteurs défectueux (hors défaut d'installation), remplacement des ampoules et des tubes fluorescents, remplacement des fusibles</td></tr>
              <tr><td><strong>Chauffage et production d'eau chaude</strong></td><td>Entretien annuel obligatoire de la chaudière par un technicien certifié, remplacement des piles du thermostat, nettoyage des grilles de VMC</td></tr>
              <tr><td><strong>Murs, sols et plafonds</strong></td><td>Rebouchage des petits trous de vis et de chevilles, retouches de peinture mineures dues à l'usage, raccords de papier peint partiellement décollé</td></tr>
              <tr><td><strong>Espaces extérieurs</strong></td><td>Tonte de la pelouse, taille des haies et des arbustes, désherbage des allées, entretien du balcon ou de la terrasse</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Partie 5 — La grille de vétusté : votre protection contre les abus</h2>
        <p>La <strong>grille de vétusté</strong>, instaurée par la loi ALUR du 24 mars 2014, est un outil de protection du locataire. Elle définit la durée de vie théorique de chaque élément du logement et permet de calculer la part de remplacement qui reste réellement à votre charge en cas de dégradation.</p>

        <h3>5.1 — Principe de calcul</h3>
        <p>Lorsqu'un élément est endommagé, on calcule sa durée de vie restante selon la formule suivante :</p>
        <div class="example-box">
          <div class="example-box-title">🔢 Formule de la grille de vétusté</div>
          <p><strong>Part locataire = Coût de remplacement × (Durée de vie restante ÷ Durée de vie totale)</strong></p>
          <p><em>Exemple concret :</em> Une peinture dont la durée de vie est de 7 ans a été posée il y a 5 ans. Elle est dégradée au départ du locataire. Durée de vie restante = 2 ans. Part locataire = coût × (2/7) = 28,5% seulement du coût total.</p>
        </div>

        <div class="example-box">
          <div class="example-box-title">📋 Durées de vie théoriques des éléments courants</div>
          <table class="responsibility-table">
            <thead><tr><th>Élément</th><th>Durée de vie</th><th>Conséquence pratique</th></tr></thead>
            <tbody>
              <tr><td>Peintures intérieures</td><td><strong>7 ans</strong></td><td>Au-delà de 7 ans, le propriétaire supporte 100% du coût</td></tr>
              <tr><td>Papier peint</td><td><strong>7 ans</strong></td><td>Un papier posé depuis 8 ans et décollé = charge propriétaire à 100%</td></tr>
              <tr><td>Moquette</td><td><strong>7 ans</strong></td><td>Moquette de 7 ans usée = charge propriétaire à 100%</td></tr>
              <tr><td>Parquet vitrifié</td><td><strong>10 ans</strong></td><td>Parquet de 6 ans rayé = vous remboursez 4/10 du coût</td></tr>
              <tr><td>Robinetterie</td><td><strong>15 ans</strong></td><td>Robinet de 12 ans = vous ne payez que 3/15 du remplacement</td></tr>
              <tr><td>Radiateurs électriques</td><td><strong>15 ans</strong></td><td>Appareil de 14 ans défaillant = 1/15 à votre charge</td></tr>
            </tbody>
          </table>
        </div>

        <div class="callout callout-success">✅ <strong>À retenir :</strong> Si votre propriétaire ne peut pas justifier de la date d'installation des équipements, la grille de vétusté s'applique par défaut en votre faveur. Conservez toutes les preuves de l'âge des éléments mentionnés dans votre état des lieux d'entrée.</div>

        <h2>Partie 6 — Communiquer avec votre propriétaire</h2>
        <p>La relation locataire-propriétaire repose sur la confiance et la communication. Lorsqu'un problème survient au-delà de vos capacités d'intervention, respectez les règles suivantes :</p>
        <ol>
          <li><strong>Toujours signaler par écrit</strong> — Un email ou un courrier recommandé constitue une preuve opposable en cas de litige. Un simple appel téléphonique ne suffit pas.</li>
          <li><strong>Être précis et factuel</strong> — Décrivez le problème avec exactitude : lieu, nature, date d'apparition, évolution constatée.</li>
          <li><strong>Joindre des photos</strong> — Illustrez votre signalement de photos datées pour constituer un dossier probant.</li>
          <li><strong>Conserver toutes les copies</strong> — Archivez chaque échange écrit. En cas de litige, c'est votre dossier.</li>
          <li><strong>Ne jamais attendre</strong> — Un problème non signalé qui s'aggrave peut vous être imputé si le propriétaire prouve que vous en aviez connaissance.</li>
        </ol>

        <div class="callout callout-warning">⚠️ <strong>Attention aux travaux non autorisés :</strong> Si vous effectuez des réparations relevant de la charge du propriétaire sans son accord préalable écrit, vous ne pourrez généralement pas vous faire rembourser. Seule exception : l'urgence absolue, qui doit être documentée par écrit immédiatement après l'intervention.</div>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> Le locataire est responsable de l'entretien courant et des petites réparations. Le propriétaire prend en charge la structure et les équipements vétustes. Les quatre piliers — entretien régulier, utilisation correcte, petites réparations, réactivité — définissent le comportement attendu. La grille de vétusté vous protège contre les demandes de remboursement disproportionnées.</div>
      `,
      quiz: [
        {
          question: "Qui est responsable de l'entretien courant du logement ?",
          options: ["Le propriétaire", "Le locataire", "La mairie", "L'agence immobilière"],
          correct: 1,
          explanation: "Le locataire est responsable de l'entretien courant et des petites réparations liées à l'usage normal du logement, conformément au décret du 26 août 1987."
        },
        {
          question: "Un joint de robinet est usé et goutte légèrement. Qui doit le remplacer ?",
          options: [
            "Le propriétaire, car c'est de la plomberie",
            "Le locataire, car c'est une réparation d'usage courant",
            "Un plombier mandaté par le propriétaire",
            "La copropriété"
          ],
          correct: 1,
          explanation: "Le remplacement d'un joint de robinet fait partie des réparations locatives courantes à la charge du locataire selon le décret de 1987."
        },
        {
          question: "Une canalisation fuit à l'intérieur d'un mur. Qui doit intervenir ?",
          options: ["Le locataire", "Le propriétaire", "Les deux à égalité", "Personne, c'est normal"],
          correct: 1,
          explanation: "Une fuite dans une canalisation encastrée dans un mur est une réparation structurelle, à la charge du propriétaire."
        },
        {
          question: "Quels sont les 4 piliers du bon locataire ?",
          options: [
            "Payer le loyer, décorer, avoir des animaux, inviter des amis",
            "Entretien régulier, utilisation correcte, petites réparations, réactivité",
            "Aérer, peindre, jardiner, cuisiner",
            "Nettoyer, payer, louer, vendre"
          ],
          correct: 1,
          explanation: "Les 4 piliers sont : l'entretien régulier, l'utilisation correcte des équipements, les petites réparations, et la réactivité face aux problèmes."
        },
        {
          question: "Comment doit-on signaler un problème important au propriétaire ?",
          options: [
            "Verbalement lors d'une rencontre",
            "Par un message vocal",
            "Par écrit (email ou courrier) pour conserver une preuve",
            "Via les réseaux sociaux"
          ],
          correct: 2,
          explanation: "Il est impératif de signaler tout problème par écrit (email ou courrier recommandé) afin de conserver une preuve en cas de litige."
        },
        {
          question: "Que prévoit le décret du 26 août 1987 ?",
          options: [
            "Le montant maximal du loyer",
            "Les conditions d'expulsion du locataire",
            "La liste précise des réparations à la charge du locataire",
            "Les règles de copropriété"
          ],
          correct: 2,
          explanation: "Le décret du 26 août 1987 liste précisément les réparations locatives (réparations d'entretien courant) à la charge du locataire."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // CHAPITRE 2 — Les obligations d'entretien
    // ─────────────────────────────────────────────────────────
    {
      id: 2,
      title: "Les obligations d'entretien",
      subtitle: "Ce que vous devez faire, pièce par pièce",
      icon: "🔧",
      duration: "20 min",
      points: 50,
      badgeId: "responsable",
      audioScript: "Ce chapitre détaille précisément vos obligations d'entretien, pièce par pièce et surface par surface. Vous apprendrez à adapter votre méthode aux matériaux présents dans votre logement, à éviter les erreurs irréversibles, et à entretenir les équipements dont vous êtes responsable selon la loi.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Lister les tâches d'entretien à effectuer dans chaque pièce du logement ;</li>
          <li>Identifier les matériaux courants et appliquer la méthode de nettoyage adaptée à chacun ;</li>
          <li>Reconnaître les erreurs d'entretien irréversibles à éviter absolument ;</li>
          <li>Comprendre les règles de vie en copropriété qui vous concernent directement ;</li>
          <li>Distinguer ce qui relève de votre charge de ce qui relève de celle du propriétaire.</li>
        </ol>

        <h2>Partie 1 — L'entretien par zone</h2>
        <p>La méthode la plus efficace pour entretenir un logement consiste à l'aborder zone par zone, avec des gestes précis et adaptés à chaque espace. Cette approche structurée garantit qu'aucun élément n'est oublié.</p>

        <h3>1.1 — Les fenêtres et ouvertures</h3>
        <p>Les fenêtres, portes et volets sont des éléments mécaniques soumis à l'usure. Leur entretien régulier prévient les dysfonctionnements et préserve leur étanchéité.</p>
        <ul>
          <li><strong>Nettoyer les vitres</strong> — Au moins deux fois par an, avec un produit vitres ou du vinaigre blanc dilué. Évitez de nettoyer en plein soleil : la chaleur fait sécher le produit trop vite et laisse des traces.</li>
          <li><strong>Entretenir les rails de fenêtres coulissantes</strong> — Aspirez régulièrement les rails pour éliminer poussières et débris qui empêchent le bon glissement.</li>
          <li><strong>Graisser les gonds et charnières</strong> — Une légère application de graisse ou d'huile de paraffine tous les six mois prévient les grincements et ralentit l'usure.</li>
          <li><strong>Remplacer les joints d'étanchéité</strong> — Des joints usés laissent passer l'air froid et l'humidité. Leur remplacement est à la charge du locataire et permet de réduire la consommation de chauffage.</li>
          <li><strong>Remplacer les poignées défectueuses</strong> — Une poignée qui se desserre ou se casse par l'usage normal est à votre charge.</li>
        </ul>

        <h3>1.2 — La salle de bain</h3>
        <p>La salle de bain est la pièce la plus exposée à l'humidité et au calcaire. C'est également celle qui se dégrade le plus rapidement si elle n'est pas entretenue avec régularité. <strong>Le calcaire et l'humidité sont les deux ennemis principaux de la salle de bain.</strong></p>
        <ul>
          <li><strong>Détartrer les robinets et la douche chaque mois</strong> — Le calcaire attaque les mécanismes internes des robinets et obstrue progressivement les aérateurs. Utilisez du vinaigre blanc pur appliqué avec un chiffon, laissez agir quinze minutes, rincez.</li>
          <li><strong>Surveiller et entretenir les joints de carrelage</strong> — Les joints de carrelage (entre les carreaux) et les joints silicone (à l'angle entre le mur et la baignoire ou le receveur de douche) noircissent sous l'effet de l'humidité. Des joints noircis ou décollés laissent infiltrer l'eau derrière les parois, provoquant des dégâts importants.</li>
          <li><strong>Nettoyer et déboucher les siphons</strong> — Versez régulièrement un mélange de bicarbonate de soude suivi de vinaigre blanc dans les évacuations. Laissez agir trente minutes puis rincez à l'eau bouillante.</li>
          <li><strong>Entretenir le rideau ou la paroi de douche</strong> — Rincez après chaque usage, nettoyez hebdomadairement. Un rideau trop encrassé ou troué est un consommable à remplacer à votre charge.</li>
          <li><strong>Entretenir les WC</strong> — Détartrez régulièrement la cuvette, vérifiez le bon fonctionnement de la chasse d'eau. L'abattant cassé est une réparation locative.</li>
        </ul>

        <h3>1.3 — La cuisine</h3>
        <p>La cuisine est exposée aux graisses de cuisson, aux odeurs et aux résidus alimentaires. Un entretien insuffisant peut provoquer des incrustations permanentes, voire des risques d'incendie.</p>
        <ul>
          <li><strong>Dégraisser les surfaces après chaque cuisson importante</strong> — Plan de travail, crédence, murs autour de la plaque de cuisson. Les projections de graisse, si elles ne sont pas nettoyées rapidement, carbonisent et deviennent impossibles à enlever sans abîmer la surface.</li>
          <li><strong>Nettoyer les filtres de hotte chaque mois</strong> — Les filtres à graisse de la hotte aspirante s'encrasse rapidement. Des filtres bouchés sont un risque d'incendie : la graisse accumulée peut s'enflammer au contact de la chaleur. Le nettoyage mensuel est une obligation de sécurité.</li>
          <li><strong>Entretenir le réfrigérateur</strong> — Nettoyez l'intérieur régulièrement avec un produit adapté. Si votre réfrigérateur ne dispose pas du système No Frost, dégivrez-le dès que le givre dépasse un centimètre d'épaisseur.</li>
          <li><strong>Nettoyer le four après chaque utilisation intensive</strong> — Les résidus carbonisés au fond du four sont très difficiles à éliminer une fois incrustés. Nettoyez à tiède après chaque cuisson grasse.</li>
          <li><strong>Vérifier les joints du réfrigérateur</strong> — Des joints de porte qui ne ferment plus correctement entraînent une surconsommation d'énergie et une usure prématurée du compresseur.</li>
          <li><strong>Entretenir l'évier</strong> — Détartrez régulièrement, nettoyez le siphon tous les deux mois, vérifiez l'état du joint de bonde.</li>
        </ul>

        <h3>1.4 — Les sols et surfaces</h3>
        <p>Chaque type de sol possède ses propres caractéristiques et exige une méthode d'entretien spécifique. Utiliser la mauvaise méthode sur un sol peut provoquer des dégradations irréversibles.</p>
        <ul>
          <li><strong>Parquet flottant ou stratifié</strong> — Aspirer régulièrement, nettoyer avec un chiffon à peine humide et un produit spécifique parquet. Ne jamais utiliser une serpillière mouillée, un nettoyeur vapeur ou de l'ammoniaque : l'eau en excès fait gonfler et soulever les lames de manière définitive.</li>
          <li><strong>Carrelage céramique</strong> — Laver à l'eau chaude avec du savon noir dilué. Éviter la javel directement sur les joints (elle les corrode).</li>
          <li><strong>Moquette</strong> — Aspirer deux fois par semaine minimum. Traiter les taches immédiatement en tamponnant, jamais en frottant.</li>
          <li><strong>Murs</strong> — Enlever les traces de doigts, les éclaboussures et les taches. Une peinture lessivable se nettoie avec une éponge douce légèrement humide.</li>
          <li><strong>Reboucher les petits trous</strong> — Trous de vis ou de chevilles : enduit de rebouchage, ponçage après séchage, retouche de peinture de la couleur existante.</li>
        </ul>

        <h3>1.5 — Les équipements et installations</h3>
        <ul>
          <li><strong>Remplacer les ampoules</strong> — C'est la réparation locative la plus fréquente. Toutes les ampoules, quelle que soit leur technologie (LED, halogène, fluo), sont à la charge du locataire.</li>
          <li><strong>Entretenir les prises et interrupteurs</strong> — Les nettoyer, remplacer un interrupteur ou une prise cassés par l'usage.</li>
          <li><strong>Entretien annuel de la chaudière</strong> — <em>Obligation légale du locataire.</em> Un technicien certifié doit intervenir chaque année. Conservez l'attestation.</li>
          <li><strong>Nettoyer les grilles de VMC</strong> — Tous les trois à six mois. C'est une réparation locative clairement listée dans le décret de 1987.</li>
        </ul>

        <h3>1.6 — Les espaces extérieurs</h3>
        <ul>
          <li><strong>Balcon ou terrasse</strong> — Nettoyage régulier, débroussaillage si nécessaire, éviter l'accumulation d'eau stagnante.</li>
          <li><strong>Jardin privatif</strong> — Tonte de la pelouse, taille des haies et arbustes, désherbage des allées. Ces tâches sont à la charge du locataire.</li>
          <li><strong>Cave et parking</strong> — Maintenir propre et dégagé. Ne stockez jamais de produits inflammables ou dangereux dans ces espaces.</li>
        </ul>

        <h2>Partie 2 — Entretenir selon les matériaux</h2>
        <p>L'une des erreurs les plus fréquentes des locataires est d'utiliser un produit ou une méthode inadaptés au matériau traité. Certaines erreurs sont irréversibles et entraînent des retenues sur caution.</p>

        <div class="example-box">
          <div class="example-box-title">⚠️ Guide des matériaux courants — méthodes et erreurs fatales</div>
          <table class="responsibility-table">
            <thead><tr><th>Matériau</th><th>Méthode correcte</th><th>Erreurs à éviter absolument</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Parquet flottant / stratifié</strong></td>
                <td>Chiffon à peine humide + produit spécifique parquet. Sécher immédiatement.</td>
                <td>Eau en excès, serpillière mouillée, nettoyeur vapeur → fait gonfler et soulève les lames de manière irréversible</td>
              </tr>
              <tr>
                <td><strong>Carrelage grès cérame mat</strong></td>
                <td>Détergent neutre dilué, rinçage soigné, séchage.</td>
                <td>Vinaigre blanc, acide citrique, produits acides → attaque la surface poreuse et laisse des traces permanentes</td>
              </tr>
              <tr>
                <td><strong>Papier peint</strong></td>
                <td>Chiffon très légèrement humide, tamponner doucement, ne jamais frotter.</td>
                <td>Eau, vapeur, spray nettoyant → fait gonfler, décolle et tache le papier définitivement</td>
              </tr>
              <tr>
                <td><strong>Peinture lessivable</strong></td>
                <td>Éponge douce + eau tiède savonneuse, tamponner. Rincer à l'eau claire.</td>
                <td>Brosse abrasive, javel concentrée, ammoniaque → attaque le liant et décape la peinture</td>
              </tr>
              <tr>
                <td><strong>Joints silicone (douche/baignoire)</strong></td>
                <td>Bicarbonate de soude + brosse souple, ou spray anti-moisissures spécifique.</td>
                <td>Javel répétée → corrode le silicone à long terme et provoque son décollement prématuré</td>
              </tr>
              <tr>
                <td><strong>Inox (évier, robinetterie)</strong></td>
                <td>Produit inox, polissage dans le sens du grain avec un chiffon doux.</td>
                <td>Paille de fer → raye définitivement. Javel concentrée → noircit les soudures et les joints</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Partie 3 — Le calcaire : spécificité française</h2>
        <p>De nombreuses régions françaises sont alimentées par une eau dont la teneur en calcaire est très élevée : Île-de-France, Grand Est, Provence-Alpes-Côte d'Azur, Centre-Val de Loire notamment. Le calcaire se dépose progressivement sur tous les équipements en contact avec l'eau et les abîme si on ne le traite pas régulièrement.</p>
        <ul>
          <li><strong>Robinets et mitigeurs</strong> — Des dépôts blancs apparaissent autour des becs et des joints. Appliquez du vinaigre blanc pur avec un chiffon, laissez agir quinze minutes, rincez.</li>
          <li><strong>Pommeau de douche</strong> — Lorsque les jets deviennent irréguliers, le calcaire obstrue les orifices. Remedy : placez un sac plastique rempli de vinaigre blanc autour du pommeau, maintenez avec un élastique et laissez une nuit entière.</li>
          <li><strong>Aérateurs de robinets</strong> — La petite grille vissée au bout du robinet (l'aérateur) se détartre en la dévissant, en la trempant dans du vinaigre chaud pendant trente minutes, puis en rinçant. À faire tous les six mois.</li>
          <li><strong>Machines ménagères</strong> — Détartrez votre lave-linge et votre lave-vaisselle une fois par mois en lançant un programme à vide à 60°C avec 150 grammes d'acide citrique ou 500 ml de vinaigre blanc.</li>
        </ul>

        <h2>Partie 4 — Règles de vie en copropriété</h2>
        <p>Si votre logement est situé dans un immeuble en copropriété, vous êtes soumis au règlement de copropriété, qui s'impose à vous au même titre qu'au propriétaire.</p>

        <h3>4.1 — Le règlement de copropriété</h3>
        <p>Le règlement de copropriété peut notamment interdire les barbecues sur les balcons, imposer des horaires d'utilisation du vide-ordures, réglementer les animaux domestiques ou interdire le stockage d'objets dans les parties communes. Demandez à en prendre connaissance dès votre emménagement.</p>

        <h3>4.2 — Le vide-ordures</h3>
        <p>Le vide-ordures est un conduit vertical présent dans certains immeubles construits avant les années 1990, permettant de jeter les ordures ménagères depuis chaque palier. Son utilisation est strictement réglementée :</p>
        <ul>
          <li><strong>Ce que l'on peut y jeter</strong> — Uniquement les ordures ménagères légères, dans des sacs bien fermés.</li>
          <li><strong>Ce qui est interdit</strong> — Le verre, les bouteilles, les cartons, les liquides, les piles, les produits chimiques, les objets tranchants. Ces éléments endommagent le conduit et peuvent provoquer des incendies.</li>
          <li><strong>Les horaires</strong> — Le règlement de copropriété impose généralement des horaires d'utilisation. L'utilisation nocturne est presque toujours interdite.</li>
          <li><strong>Les vide-ordures condamnés</strong> — Pour des raisons sanitaires et de sécurité incendie, de nombreux vide-ordures ont été condamnés dans les immeubles récents. Vérifiez si celui de votre immeuble est encore en service avant de l'utiliser.</li>
        </ul>

        <h3>4.3 — Le tri sélectif</h3>
        <p>Le tri sélectif est une obligation civique et, dans certaines communes, une obligation légale. Les codes couleurs sont harmonisés en France depuis 2022 :</p>
        <div class="example-box">
          <div class="example-box-title">♻️ Codes couleurs du tri sélectif</div>
          <table class="responsibility-table">
            <thead><tr><th>Couleur du bac</th><th>Ce qu'on y dépose</th><th>Ce qu'on n'y met pas</th></tr></thead>
            <tbody>
              <tr><td><strong>Bac jaune</strong></td><td>Emballages plastique, cartons, canettes, briques alimentaires, journaux</td><td>Verre, restes alimentaires, produits dangereux</td></tr>
              <tr><td><strong>Bac vert (ou colonne)</strong></td><td>Verre uniquement : bouteilles, bocaux, flacons en verre</td><td>Capsules, couvercles métalliques, vaisselle, miroirs, vitres</td></tr>
              <tr><td><strong>Bac noir/gris</strong></td><td>Ordures ménagères non recyclables : restes alimentaires, couches, emballages souillés</td><td>Tout ce qui va dans les bacs jaune ou vert</td></tr>
            </tbody>
          </table>
        </div>

        <h3>4.4 — Les nuisances sonores</h3>
        <p>L'article R1334-31 du Code de la santé publique interdit les bruits de voisinage susceptibles de troubler la tranquillité d'autrui. Les règlements de copropriété fixent généralement les horaires suivants pour les travaux bruyants : autorisés du lundi au vendredi de 8h à 20h, le samedi de 9h à 19h, interdits le dimanche et les jours fériés. Les nuisances sonores nocturnes (après 22h) sont passibles d'une amende.</p>

        <h2>Partie 5 — Ce que le locataire ne doit pas faire</h2>
        <p>Certaines interventions dépassent le cadre des réparations locatives et ne doivent en aucun cas être réalisées par le locataire sans l'accord écrit du propriétaire :</p>
        <ul>
          <li>Intervenir sur l'installation électrique principale (tableau, câblage, disjoncteur général) — <strong>il faut un électricien qualifié</strong></li>
          <li>Réparer ou remplacer une chaudière, un ballon d'eau chaude ou un cumulus</li>
          <li>Modifier la structure du logement (abattre une cloison, percer un mur porteur, créer une ouverture)</li>
          <li>Réaliser des travaux de peinture ou de revêtement importants sans accord écrit du propriétaire</li>
          <li>Installer une climatisation fixe sans autorisation</li>
        </ul>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> L'entretien d'un logement s'organise zone par zone, avec des méthodes adaptées à chaque matériau. Le calcaire est un ennemi spécifique à traiter régulièrement. Les règles de copropriété (vide-ordures, tri sélectif, nuisances sonores) s'imposent au locataire. Certaines interventions restent réservées aux professionnels qualifiés.</div>
      `,
      quiz: [
        {
          question: "À quelle fréquence est-il recommandé de détartrer les robinets de la salle de bain ?",
          options: ["Tous les jours", "Chaque mois", "Chaque année seulement", "Jamais, c'est inutile"],
          correct: 1,
          explanation: "Le détartrage mensuel avec du vinaigre blanc préserve les mécanismes et évite les dépôts de calcaire qui abîment les joints et les robinets."
        },
        {
          question: "Quels sont les deux principaux ennemis de la salle de bain ?",
          options: [
            "La poussière et les insectes",
            "Le calcaire et l'humidité",
            "Les moisissures et les odeurs",
            "L'eau froide et la chaleur"
          ],
          correct: 1,
          explanation: "Le calcaire attaque les robinets et les mécanismes, tandis que l'humidité favorise les moisissures. Ces deux ennemis doivent être combattus régulièrement."
        },
        {
          question: "L'entretien annuel de la chaudière est-il obligatoire ?",
          options: [
            "Non, c'est facultatif",
            "Oui, c'est obligatoire par la loi, à faire réaliser par un professionnel",
            "Seulement si la chaudière a plus de 10 ans",
            "C'est au propriétaire de le faire"
          ],
          correct: 1,
          explanation: "L'entretien annuel de la chaudière est obligatoire par la loi et à la charge du locataire. Il doit être réalisé par un professionnel certifié, et l'attestation doit être conservée."
        },
        {
          question: "Que doit faire le locataire pour les filtres de hotte ?",
          options: [
            "Rien, c'est au propriétaire de s'en occuper",
            "Les laver tous les mois — des filtres bouchés sont un risque d'incendie",
            "Les remplacer chaque année uniquement",
            "Les nettoyer seulement si la hotte ne marche plus"
          ],
          correct: 1,
          explanation: "Les filtres à graisse de la hotte doivent être lavés chaque mois. Des filtres saturés sont un véritable risque d'incendie et doivent donc être nettoyés régulièrement."
        },
        {
          question: "Le locataire peut-il intervenir seul sur l'installation électrique principale ?",
          options: [
            "Oui, si les travaux sont simples",
            "Oui, avec l'accord verbal du propriétaire",
            "Non, c'est interdit — il faut un électricien qualifié",
            "Oui, du moment qu'il coupe le courant avant"
          ],
          correct: 2,
          explanation: "Intervenir sur l'installation électrique principale (tableau, câblage, disjoncteur général) est dangereux et ne relève pas des réparations locatives. Un électricien qualifié est nécessaire."
        },
        {
          question: "Qui doit remplacer un équipement devenu vétuste avec le temps ?",
          options: [
            "Le locataire, car il l'utilise",
            "Le propriétaire, car la vétusté relève de sa responsabilité",
            "Les deux à parts égales",
            "L'assurance habitation"
          ],
          correct: 1,
          explanation: "La vétusté normale (usure par le temps) est à la charge du propriétaire. La grille de vétusté définit la durée de vie théorique des équipements."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // CHAPITRE 3 — Hygiène et prévention
    // ─────────────────────────────────────────────────────────
    {
      id: 3,
      title: "Hygiène et prévention",
      subtitle: "Maintenir un logement sain au quotidien",
      icon: "🌿",
      duration: "18 min",
      points: 50,
      badgeId: "hygiene",
      audioScript: "Un logement sain repose sur trois principes fondamentaux : une aération quotidienne rigoureuse, une gestion active de l'humidité, et une prévention systématique des moisissures et des nuisibles. Ce chapitre vous donne les méthodes concrètes pour maintenir un environnement sain tout au long de l'année.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Expliquer pourquoi l'aération quotidienne est indispensable et comment la pratiquer correctement ;</li>
          <li>Identifier les causes et les conséquences d'une humidité excessive dans un logement ;</li>
          <li>Appliquer le protocole de prévention et de traitement des moisissures ;</li>
          <li>Mettre en œuvre les mesures préventives contre les nuisibles ;</li>
          <li>Adapter les gestes d'entretien à chaque saison de l'année.</li>
        </ol>

        <h2>Partie 1 — L'aération : le geste préventif fondamental</h2>
        <p>L'aération quotidienne du logement est le geste de prévention le plus simple et le plus efficace qui soit. Elle est à la fois une nécessité sanitaire et une obligation d'entretien du locataire.</p>

        <h3>1.1 — Pourquoi aérer est indispensable</h3>
        <p>Une famille de quatre personnes produit en moyenne <strong>10 à 15 litres de vapeur d'eau par jour</strong> à l'intérieur du logement, à travers la respiration, la cuisson, les douches et le séchage du linge. Sans aération suffisante, cette vapeur s'accumule dans l'air et pénètre dans les murs, provoquant condensation, moisissures et dégradations des matériaux.</p>
        <p>Par ailleurs, les produits ménagers, les matériaux de construction et les activités quotidiennes génèrent des composés organiques volatils (COV) qui polluent l'air intérieur. Des études montrent que l'air intérieur peut être <strong>cinq fois plus pollué que l'air extérieur</strong>. L'aération est le seul moyen efficace et gratuit d'y remédier.</p>

        <h3>1.2 — Comment aérer correctement</h3>
        <ul>
          <li><strong>Aérer chaque matin, dix minutes minimum</strong> — Ouvrez les fenêtres en grand, idéalement en créant un courant d'air entre deux pièces situées de part et d'autre du logement. Ce renouvellement rapide de l'air est bien plus efficace qu'une fenêtre entrouverte en continu.</li>
          <li><strong>Aérer après chaque douche</strong> — Maintenez la porte de la salle de bain ouverte ou activez la VMC après chaque douche pendant au moins trente minutes pour évacuer la vapeur.</li>
          <li><strong>Aérer pendant et après la cuisson</strong> — Allumez la hotte et entrouvrez une fenêtre pour évacuer les vapeurs grasses et l'humidité de cuisson.</li>
          <li><strong>Aérer pendant le séchage du linge</strong> — Ne séchez jamais le linge dans une pièce fermée. Cette activité libère jusqu'à deux litres d'eau dans l'air par cycle de séchage. Si vous n'avez pas le choix, aérez impérativement la pièce pendant toute la durée du séchage.</li>
        </ul>

        <div class="callout callout-warning">⚠️ <strong>Même en hiver :</strong> Aérer dix minutes par grand froid reste indispensable. Le renouvellement d'air ne fait pas augmenter significativement votre facture de chauffage, mais prévient des dégradations bien plus coûteuses. Maintenez également une température minimale de <strong>16 à 18°C</strong> dans toutes les pièces, même inoccupées : une pièce froide favorise la condensation sur les murs.</div>

        <h2>Partie 2 — L'humidité : comprendre et contrôler</h2>
        <p>L'humidité excessive est l'ennemi principal du logement. Elle provoque des dégradations structurelles, favorise le développement des moisissures et constitue un risque pour la santé des occupants.</p>

        <h3>2.1 — Les causes de l'humidité excessive</h3>
        <ul>
          <li>La vapeur d'eau produite par les occupants (respiration, transpiration)</li>
          <li>Les activités domestiques : douches, bains, cuisson, séchage du linge</li>
          <li>Une VMC coupée, bouchée ou mal entretenue</li>
          <li>Des fenêtres maintenues fermées en permanence</li>
          <li>Des meubles placés directement contre les murs extérieurs (ils empêchent la circulation de l'air)</li>
        </ul>

        <h3>2.2 — Surveiller et contrôler le taux d'humidité</h3>
        <p>Le taux d'humidité idéal dans un logement est compris entre <strong>40 % et 60 %</strong>. En dessous de 40 %, l'air est trop sec et irrite les voies respiratoires. Au-dessus de 60 %, le risque de développement des moisissures devient très élevé. Un hygromètre (appareil de mesure de l'humidité, disponible pour moins de dix euros) vous permet de surveiller ce taux.</p>
        <ul>
          <li>Laissez un espace d'au moins <strong>trois à cinq centimètres</strong> entre vos meubles et les murs extérieurs pour permettre la circulation de l'air.</li>
          <li>En cas de condensation sur les vitres (gouttelettes d'eau), essuyez immédiatement et aérez : c'est le signe que l'air intérieur est trop chargé en humidité.</li>
        </ul>

        <h2>Partie 3 — Les moisissures : prévention et traitement</h2>
        <p>Les moisissures sont des champignons microscopiques qui se développent dans les zones humides et mal ventilées. Elles constituent à la fois un problème de santé (irritations, allergies, troubles respiratoires) et une dégradation du logement pouvant être mise à la charge du locataire.</p>

        <h3>3.1 — Les zones à risque</h3>
        <p>Les moisissures apparaissent préférentiellement dans les endroits suivants : coins de murs (surtout en angle avec un mur extérieur), bords des fenêtres, derrière les rideaux de douche, sous les tapis, derrière les meubles collés aux murs, dans les joints de carrelage et de silicone.</p>

        <h3>3.2 — Protocole de traitement en cinq étapes</h3>
        <div class="example-box">
          <div class="example-box-title">🧹 Procédure de traitement des moisissures</div>
          <p><strong>Étape 1 — Protection</strong> : Portez des gants en latex et, si la surface est importante, un masque de protection respiratoire (FFP2).</p>
          <p><strong>Étape 2 — Nettoyage mécanique</strong> : Frottez la zone concernée avec une brosse souple imbibée de vinaigre blanc pur ou d'une solution de bicarbonate de soude (une cuillère à soupe pour un litre d'eau). Laissez agir trente minutes.</p>
          <p><strong>Étape 3 — Rinçage et séchage</strong> : Rincez à l'eau claire et séchez soigneusement avec un chiffon sec ou un sèche-cheveux.</p>
          <p><strong>Étape 4 — Traitement préventif</strong> : Appliquez quelques gouttes d'huile essentielle d'arbre à thé (tea tree) diluées dans de l'eau sur la zone traitée. Cet antifongique naturel prévient la réapparition.</p>
          <p><strong>Étape 5 — Aération renforcée</strong> : Aérez la pièce abondamment pendant quarante-huit heures après le traitement.</p>
        </div>

        <div class="callout callout-warning">⚠️ <strong>Moisissures récurrentes :</strong> Si les moisissures réapparaissent régulièrement au même endroit malgré vos actions, cela peut indiquer un problème structurel (pont thermique, infiltration d'eau) relevant de la responsabilité du propriétaire. Dans ce cas, documentez avec des photos datées et prévenez votre propriétaire par écrit. Ce signalement vous protège juridiquement.</div>

        <h2>Partie 4 — Les nuisibles : prévention et réaction</h2>
        <p>Les nuisibles (cafards, souris, fourmis, punaises de lit, moustiques) s'installent dans un logement lorsque les conditions leur sont favorables : nourriture accessible, logement peu propre, accès facile. La prévention est toujours plus efficace et moins coûteuse que le traitement.</p>

        <h3>4.1 — Mesures préventives</h3>
        <p>La meilleure prévention contre les nuisibles consiste à nettoyer régulièrement, à stocker les aliments hermétiquement et à vider les poubelles souvent. Ces trois actions suppriment les sources de nourriture qui attirent les nuisibles.</p>
        <ul>
          <li>Ne laissez aucun reste alimentaire accessible : stockez dans des boîtes hermétiques.</li>
          <li>Videz les poubelles régulièrement et utilisez des poubelles à couvercle.</li>
          <li>Ne laissez pas de vaisselle sale plus de quelques heures.</li>
          <li>Nettoyez régulièrement derrière et sous les meubles de cuisine.</li>
          <li>Vérifiez les joints de porte et rebouchez les petites fissures (points d'entrée potentiels).</li>
        </ul>

        <h3>4.2 — En cas de présence avérée</h3>
        <ul>
          <li><strong>Cafards, fourmis, souris</strong> — Agissez immédiatement avec des produits adaptés (appâts, pièges). Si l'infestation touche plusieurs logements, prévenez le propriétaire ou le syndic : la désinsectisation peut relever des parties communes.</li>
          <li><strong>Punaises de lit</strong> — Ne déplacez aucun meuble ni aucun vêtement. Contactez immédiatement un professionnel. Les punaises de lit se propagent très rapidement d'un logement à l'autre.</li>
        </ul>

        <h2>Partie 5 — L'entretien saisonnier</h2>
        <p>Les saisons imposent des gestes spécifiques. Anticiper les besoins de chaque période permet d'éviter les problèmes les plus fréquents.</p>
        <div class="example-box">
          <div class="example-box-title">🗓️ Calendrier saisonnier des gestes prioritaires</div>
          <p><strong>🍂 Automne (septembre-octobre) :</strong> Faire réviser la chaudière avant la saison de chauffe. Purger les radiateurs. Vérifier l'étanchéité des fenêtres (joints usés = déperdition de chaleur). Nettoyer les bouches de VMC.</p>
          <p><strong>❄️ Hiver (novembre-mars) :</strong> Aérer dix minutes par jour même par grand froid — c'est indispensable. Maintenir une température minimale de 16 à 18°C dans toutes les pièces. Ne jamais sécher le linge dans une pièce fermée sans ventilation. En cas d'absence prolongée supérieure à une semaine par grand gel, coupez l'eau et purgez les canalisations.</p>
          <p><strong>🌸 Printemps (avril-mai) :</strong> Grand ménage avec aération intensive pour évacuer l'humidité accumulée. Inspecter la salle de bain et la cuisine pour détecter les moisissures nascentes. Première tonte et première taille du jardin si vous en disposez.</p>
          <p><strong>☀️ Été (juin-août) :</strong> Fermer les volets et les rideaux en journée pour maintenir la fraîcheur naturelle (geste peu connu mais très efficace). Ouvrir les fenêtres la nuit pour créer un courant d'air et rafraîchir le logement. Traitement préventif anti-moustiques et anti-nuisibles selon la région.</p>
        </div>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> L'hygiène d'un logement repose sur trois actions fondamentales : aérer dix minutes chaque jour, contrôler le taux d'humidité (idéal entre 40% et 60%) et agir dès les premiers signes de moisissures. La prévention des nuisibles passe par un nettoyage régulier et un stockage hermétique des aliments. Adapter ses gestes aux saisons permet d'anticiper les problèmes avant qu'ils n'apparaissent.</div>
      `,
      quiz: [
        {
          question: "Quelle est la durée minimale recommandée pour aérer son logement chaque matin ?",
          options: ["2 minutes", "10 minutes", "1 heure", "Ce n'est pas nécessaire"],
          correct: 1,
          explanation: "Aérer 10 minutes chaque matin (fenêtres grandes ouvertes) permet d'évacuer l'humidité nocturne, de renouveler l'air et de prévenir les moisissures."
        },
        {
          question: "Pourquoi ne faut-il pas sécher le linge dans une pièce fermée ?",
          options: [
            "Parce que ça use le linge",
            "Parce que ça libère jusqu'à 2 litres d'eau dans l'air, favorisant l'humidité et les moisissures",
            "Parce que c'est interdit par la loi",
            "Parce que ça abîme les murs"
          ],
          correct: 1,
          explanation: "Sécher du linge dans une pièce fermée libère une grande quantité de vapeur d'eau qui s'accumule dans l'air et les murs, favorisant ainsi l'apparition de moisissures."
        },
        {
          question: "Quel taux d'humidité est idéal dans un logement ?",
          options: ["10-20%", "40-60%", "70-80%", "Plus de 90%"],
          correct: 1,
          explanation: "Le taux d'humidité idéal dans un logement est de 40 à 60%. En dessous de 40%, l'air est trop sec ; au-dessus de 60%, le risque de moisissures augmente fortement."
        },
        {
          question: "Que faire en cas de moisissures récurrentes malgré vos actions ?",
          options: [
            "Les repeindre par-dessus",
            "Changer de logement",
            "Documenter avec des photos et prévenir le propriétaire par écrit — cela peut indiquer un problème structurel",
            "Ignorer, elles disparaîtront seules"
          ],
          correct: 2,
          explanation: "Des moisissures récurrentes peuvent indiquer un pont thermique ou une infiltration — problèmes structurels relevant du propriétaire. Il faut documenter par photos et signaler par écrit."
        },
        {
          question: "Quelle est la meilleure façon de prévenir les nuisibles ?",
          options: [
            "Utiliser des insecticides préventifs en permanence",
            "Nettoyer régulièrement, stocker les aliments hermétiquement et vider les poubelles souvent",
            "Garder les fenêtres fermées",
            "Mettre des pièges partout par précaution"
          ],
          correct: 1,
          explanation: "La prévention est la meilleure défense : nettoyer régulièrement, stocker les aliments dans des boîtes hermétiques et vider les poubelles fréquemment prive les nuisibles de nourriture et d'abri."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // CHAPITRE 4 — Le ménage complet
    // ─────────────────────────────────────────────────────────
    {
      id: 4,
      title: "Le ménage complet",
      subtitle: "Méthode et organisation pour un logement toujours propre",
      icon: "🧹",
      duration: "22 min",
      points: 50,
      badgeId: "menage",
      audioScript: "Un ménage efficace ne repose pas sur la force physique ni sur des produits coûteux, mais sur l'organisation et la régularité. Ce chapitre vous présente une méthode structurée en quatre fréquences — quotidienne, hebdomadaire, mensuelle et saisonnière — ainsi que les produits adaptés à chaque surface et les mélanges dangereux à ne jamais faire.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Organiser votre routine de ménage selon quatre fréquences distinctes ;</li>
          <li>Appliquer la méthode de nettoyage correcte dans chaque pièce du logement ;</li>
          <li>Sélectionner les produits adaptés à chaque type de surface ;</li>
          <li>Identifier les mélanges de produits dangereux et pourquoi les éviter ;</li>
          <li>Effectuer le geste anti-calcaire immédiatement après la douche.</li>
        </ol>

        <h2>Partie 1 — Le principe fondamental : organisation et régularité</h2>
        <p>La clé d'un ménage efficace n'est ni la force physique ni la quantité de produits utilisés : c'est l'<strong>organisation et la régularité</strong>. Un logement entretenu régulièrement en petites sessions ne demande jamais d'effort considérable. À l'inverse, un logement négligé accumule des incrustations et des dégradations qui nécessitent des heures de travail — voire des interventions professionnelles coûteuses.</p>
        <p>La méthode présentée dans ce chapitre repose sur quatre niveaux d'intervention : quotidien, hebdomadaire, mensuel et saisonnier. Chaque niveau correspond à des tâches précises, pour une durée et une fréquence définies.</p>

        <h2>Partie 2 — Le ménage quotidien (15 à 20 minutes)</h2>
        <p>Le ménage quotidien comprend les gestes indispensables qui empêchent l'accumulation de désordre et de saleté. Ces gestes prennent entre quinze et vingt minutes par jour et constituent la base de tout entretien efficace.</p>
        <div class="example-box">
          <div class="example-box-title">📋 Tâches quotidiennes — à faire chaque jour</div>
          <p><strong>1. Aérer le logement</strong> — Ouvrir les fenêtres dix minutes dès le matin pour renouveler l'air et évacuer l'humidité nocturne.</p>
          <p><strong>2. Ranger</strong> — Remettre chaque objet à sa place. Un logement rangé donne l'impression d'être propre et facilite le nettoyage.</p>
          <p><strong>3. Nettoyer les surfaces utilisées</strong> — Essuyer le plan de travail après la préparation des repas, nettoyer la table après les repas, essuyer les projections autour de la plaque de cuisson.</p>
          <p><strong>4. Faire la vaisselle</strong> — Ne jamais laisser de vaisselle sale plus de quelques heures : elle attire les nuisibles et génère des odeurs.</p>
          <p><strong>5. Geste anti-calcaire après la douche</strong> — Essuyer la vitre ou les parois de douche avec une raclette ou une serviette immédiatement après la douche. Ce geste simple de trente secondes empêche le calcaire de se déposer et réduit considérablement le temps de nettoyage hebdomadaire.</p>
        </div>

        <h2>Partie 3 — Le ménage hebdomadaire (1 heure 30)</h2>
        <p>Le ménage hebdomadaire traite l'ensemble des surfaces du logement une fois par semaine. Il se planifie idéalement le même jour chaque semaine pour en faire une habitude automatique.</p>
        <div class="example-box">
          <div class="example-box-title">📋 Tâches hebdomadaires — à faire chaque semaine</div>
          <p><strong>1. Aspirer toutes les pièces</strong> — Sols, tapis, moquettes, sous les meubles, derrière les canapés et les lits.</p>
          <p><strong>2. Laver les sols</strong> — Avec la méthode adaptée à chaque matériau : chiffon à peine humide pour le parquet flottant, serpillière pour le carrelage.</p>
          <p><strong>3. Nettoyer la salle de bain complète</strong> — Cuvette, lavabo, douche ou baignoire, robinetterie, miroir, sol.</p>
          <p><strong>4. Nettoyer la cuisine en profondeur</strong> — Plans de travail, évier, plaques de cuisson, extérieur du four et du réfrigérateur.</p>
          <p><strong>5. Faire la poussière</strong> — Meubles, étagères, cadres, luminaires, rebords de fenêtres.</p>
        </div>

        <h2>Partie 4 — Le ménage mensuel (2 à 3 heures)</h2>
        <p>Le ménage mensuel s'attaque aux zones moins visibles qui accumulent poussières et dépôts sur la durée.</p>
        <div class="example-box">
          <div class="example-box-title">📋 Tâches mensuelles — à faire chaque mois</div>
          <p><strong>1. Nettoyer les vitres et les miroirs</strong> — Intérieur et extérieur accessible, avec un produit adapté ou du vinaigre blanc dilué.</p>
          <p><strong>2. Nettoyer les placards</strong> — Vider, essuyer l'intérieur, remettre en ordre.</p>
          <p><strong>3. Nettoyer les appareils électroménagers</strong> — Intérieur du réfrigérateur, four, lave-linge (joint de hublot inclus).</p>
          <p><strong>4. Nettoyer les filtres de la hotte</strong> — Démonter, laver dans l'eau chaude savonneuse ou au lave-vaisselle, sécher avant remise en place.</p>
          <p><strong>5. Détartrer le pommeau de douche et les aérateurs de robinets</strong> — Vinaigre blanc, une nuit de trempage.</p>
        </div>

        <h2>Partie 5 — Le grand ménage saisonnier (×2 par an)</h2>
        <p>Deux fois par an, au printemps et à l'automne, un grand ménage de fond est recommandé. Il traite les zones rarement atteintes lors des ménages courants.</p>
        <ul>
          <li>Laver les rideaux et les voilages</li>
          <li>Nettoyer le canapé et les textiles d'ameublement (brossage ou nettoyage à la vapeur)</li>
          <li>Trier et vider les penderies et les placards</li>
          <li>Nettoyer les bouches de VMC (les décrocher, laver sous l'eau tiède, sécher, remettre en place)</li>
          <li>Faire le bilan des petites réparations à effectuer avant l'hiver ou l'été</li>
        </ul>

        <h2>Partie 6 — Le nettoyage par zone</h2>

        <h3>6.1 — La cuisine</h3>
        <ul>
          <li>Dégraisser systématiquement le plan de travail, la crédence et les murs autour des plaques après chaque cuisson grasse</li>
          <li>Nettoyer le réfrigérateur (vider, laver les clayettes, essuyer les parois) au moins une fois par mois</li>
          <li>Entretenir les filtres de la hotte chaque mois — des filtres saturés représentent un risque d'incendie</li>
          <li>Dégraisser le four régulièrement : les résidus carbonisés sont très difficiles à éliminer une fois incrustés</li>
        </ul>

        <h3>6.2 — La salle de bain</h3>
        <ul>
          <li>Détartrer les robinets chaque mois au vinaigre blanc</li>
          <li>Nettoyer les joints de carrelage et de silicone avec du bicarbonate de soude et une brosse souple</li>
          <li>Désinfecter la cuvette des WC et son dessous (zone souvent oubliée)</li>
          <li>Essuyer la paroi ou la vitre de douche après chaque utilisation pour prévenir le calcaire</li>
        </ul>

        <h3>6.3 — Les chambres</h3>
        <ul>
          <li>Changer les draps et la literie toutes les deux semaines minimum</li>
          <li>Aspirer le matelas tous les deux mois et aérer la literie chaque matin</li>
          <li>Dépoussiérer les surfaces (commodes, tables de nuit, plinthes, dessus des armoires)</li>
        </ul>

        <h3>6.4 — Le salon</h3>
        <ul>
          <li>Nettoyer les surfaces (table basse, étagères, téléviseur) chaque semaine</li>
          <li>Aspirer et retourner les coussins régulièrement</li>
          <li>Entretenir les textiles (canapé, tapis) selon les recommandations du fabricant</li>
        </ul>

        <h2>Partie 7 — Les produits de nettoyage : choisir et utiliser</h2>

        <h3>7.1 — Les produits naturels recommandés</h3>
        <p>Trois produits naturels suffisent à assurer l'entretien complet d'un logement. Ils sont économiques, efficaces et respectueux des surfaces fragiles : le <strong>vinaigre blanc</strong>, le <strong>bicarbonate de soude</strong> et le <strong>savon noir</strong>.</p>
        <div class="example-box">
          <div class="example-box-title">🧴 Usage des produits naturels par surface</div>
          <table class="responsibility-table">
            <thead><tr><th>Produit</th><th>Usages principaux</th><th>Surfaces adaptées</th></tr></thead>
            <tbody>
              <tr><td><strong>Vinaigre blanc</strong></td><td>Détartrant, désinfectant léger, dégraissant dilué</td><td>Robinets, vitres, carrelage céramique, joints, inox</td></tr>
              <tr><td><strong>Bicarbonate de soude</strong></td><td>Abrasif doux, déodorant, nettoyant</td><td>Évier, cuvette WC, joints de carrelage, four (pâte)</td></tr>
              <tr><td><strong>Savon noir liquide</strong></td><td>Dégraissant, nettoyant sols et surfaces</td><td>Sols carrelés, parquet (dilué), surfaces peintes</td></tr>
              <tr><td><strong>Acide citrique</strong></td><td>Détartrant puissant</td><td>Machine à laver, lave-vaisselle, bouilloire, chauffe-eau</td></tr>
              <tr><td><strong>Alcool ménager 70°</strong></td><td>Désinfectant, nettoyant vitres et miroirs</td><td>Vitres, miroirs, surfaces dures, inox</td></tr>
            </tbody>
          </table>
        </div>

        <h3>7.2 — Les mélanges DANGEREUX à ne jamais faire</h3>
        <p>Certaines associations de produits ménagers produisent des réactions chimiques dangereuses pouvant provoquer des irritations graves, des brûlures respiratoires ou des intoxications. Ces mélanges sont formellement interdits :</p>
        <div class="example-box">
          <div class="example-box-title">🚨 Mélanges dangereux — règle absolue</div>
          <p><strong>Vinaigre blanc + eau de javel</strong> → Libère du chlore gazeux, toxique par inhalation. Irrite gravement les voies respiratoires.</p>
          <p><strong>Bicarbonate de soude + eau de javel</strong> → Même réaction que ci-dessus. Ces produits ne doivent jamais être mélangés.</p>
          <p><strong>Ammoniaque + eau de javel</strong> → Produit des chloramines, gaz extrêmement toxiques. Danger grave.</p>
          <p><strong>Règle à retenir :</strong> L'eau de javel ne se mélange avec rien d'autre que de l'eau. Elle s'utilise seule, diluée, dans un espace ventilé.</p>
        </div>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> Un ménage efficace repose sur l'organisation et la régularité, non sur la force ou les produits coûteux. Le ménage quotidien (15-20 min) comprend l'aération, le rangement, les surfaces utilisées, la vaisselle et le geste anti-calcaire après la douche. Le grand ménage saisonnier se fait deux fois par an. Trois produits naturels — vinaigre blanc, bicarbonate et savon noir — suffisent. Ne jamais mélanger l'eau de javel avec un autre produit.</div>
      `,
      quiz: [
        {
          question: "Quelle est la règle d'or du ménage efficace selon cette formation ?",
          options: [
            "Tout faire le week-end pour économiser du temps",
            "15 minutes de ménage quotidien = 2 heures de ménage de fond évitées",
            "Ne nettoyer que quand c'est visible",
            "Utiliser des produits professionnels puissants"
          ],
          correct: 1,
          explanation: "La régularité est la clé : 15 minutes chaque jour permettent d'éviter les incrustations et les gros travaux de nettoyage mensuel."
        },
        {
          question: "Que comprend le ménage hebdomadaire ?",
          options: [
            "Seulement passer l'aspirateur",
            "Aspirer, laver les sols, nettoyer salle de bain et cuisine, faire la poussière",
            "Laver les vitres et dégraisser le four uniquement",
            "Vider les placards et laver les rideaux"
          ],
          correct: 1,
          explanation: "Le ménage hebdomadaire comprend : aspirer, laver les sols, nettoyer la salle de bain en profondeur, les surfaces de cuisine, et faire la poussière sur tous les meubles."
        },
        {
          question: "Quels sont les 3 produits naturels recommandés pour le ménage ?",
          options: [
            "Eau de javel, ammoniaque, acide chlorhydrique",
            "Vinaigre blanc, bicarbonate de soude, savon noir",
            "Lessive, liquide vaisselle, désinfectant spray",
            "Alcool ménager, acide citrique, eau distillée"
          ],
          correct: 1,
          explanation: "Le vinaigre blanc, le bicarbonate de soude et le savon noir suffisent pour 90% du ménage. Ils sont efficaces, économiques, naturels et sans danger."
        },
        {
          question: "À quelle fréquence faut-il effectuer le grand ménage saisonnier ?",
          options: [
            "Une fois par semaine",
            "Une fois par mois",
            "2 fois par an (printemps et automne)",
            "Une seule fois lors de l'emménagement"
          ],
          correct: 2,
          explanation: "Le grand ménage saisonnier est à réaliser 2 fois par an (printemps et automne) pour traiter les zones profondes : rideaux, canapé, penderies, VMC, etc."
        },
        {
          question: "Que faut-il faire IMMÉDIATEMENT après chaque douche pour éviter le calcaire ?",
          options: [
            "Utiliser un détartrant chimique",
            "Essuyer la vitre ou les parois de douche avec une raclette ou une serviette",
            "Laisser l'eau sécher naturellement",
            "Fermer le rideau de douche"
          ],
          correct: 1,
          explanation: "Essuyer la vitre de douche après chaque utilisation empêche le calcaire de se déposer et rend le nettoyage hebdomadaire beaucoup plus rapide."
        },
        {
          question: "Quel mélange est DANGEREUX et ne doit JAMAIS être fait ?",
          options: [
            "Bicarbonate et vinaigre",
            "Savon noir et eau chaude",
            "Vinaigre ou bicarbonate avec de l'eau de javel — produit des gaz toxiques",
            "Vinaigre et citron"
          ],
          correct: 2,
          explanation: "Mélanger du vinaigre ou du bicarbonate avec de l'eau de javel produit des gaz toxiques (chlore gazeux). Ces produits ne doivent jamais être mélangés."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // CHAPITRE 5 — Gestion des problèmes
    // ─────────────────────────────────────────────────────────
    {
      id: 5,
      title: "Gestion des problèmes",
      subtitle: "Réagir vite et efficacement face aux incidents",
      icon: "🔨",
      duration: "20 min",
      points: 50,
      badgeId: "gestionnaire",
      audioScript: "Dans ce chapitre, vous allez apprendre à réagir rapidement et efficacement face aux incidents les plus fréquents dans un logement : fuite d'eau, problème électrique, canalisation bouchée, moisissures, fuite de gaz. Vous découvrirez également vos obligations concernant le détecteur de fumée — une installation obligatoire depuis 2010, dont l'entretien vous incombe en tant que locataire. La clé de tout : agir vite, documenter, et savoir quand appeler à l'aide.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Appliquer la procédure d'urgence correcte en cas de fuite d'eau ;</li>
          <li>Identifier les situations électriques dangereuses et réagir de façon appropriée ;</li>
          <li>Déboucher une canalisation par des méthodes naturelles et mécaniques ;</li>
          <li>Entretenir correctement le DAAF (détecteur de fumée) et réagir en cas d'alarme ;</li>
          <li>Respecter la procédure de sécurité absolue en cas de fuite de gaz ;</li>
          <li>Effectuer les démarches administratives après un sinistre dans les délais légaux.</li>
        </ol>

        <h2>Partie 1 — La règle universelle face aux incidents</h2>
        <p>Quelle que soit la nature du problème rencontré dans votre logement, une règle de conduite s'applique toujours. Elle se déroule en quatre temps.</p>
        <div class="example-box">
          <div class="example-box-title">🔴 La méthode en 4 temps</div>
          <p><strong>1. Identifier</strong> — Quelle est la nature exacte du problème ? Où se situe-t-il précisément ?</p>
          <p><strong>2. Évaluer</strong> — Est-ce une urgence immédiate ? Est-ce de ma responsabilité ou de celle du propriétaire ?</p>
          <p><strong>3. Agir</strong> — Intervenir soi-même si c'est dans ses compétences, sinon sécuriser la situation et faire appel à un professionnel.</p>
          <p><strong>4. Documenter</strong> — Photographier les dégâts, noter la date et l'heure, conserver tous les justificatifs. Signaler par écrit au propriétaire et à l'assurance si nécessaire.</p>
        </div>
        <div class="callout">💡 <strong>À retenir :</strong> Un problème non traité s'aggrave toujours. Une petite fuite devient une inondation. Une moisissure localisée envahit un mur entier. Une canalisation partiellement bouchée finit par être complètement obstruée. Agir tôt est toujours moins coûteux qu'agir tard.</div>

        <h2>Partie 2 — Fuite d'eau : procédure d'urgence</h2>
        <p>Une fuite d'eau est l'incident le plus fréquent dans les logements. Si elle n'est pas stoppée rapidement, elle peut causer des dégâts considérables en quelques heures : dommages au plafond du voisin du dessous, apparition de moisissures, dégradation des murs et des sols.</p>

        <h3>2.1 — Procédure immédiate</h3>
        <div class="example-box">
          <div class="example-box-title">📋 Étapes en cas de fuite — dans l'ordre</div>
          <p><strong>1.</strong> Couper l'alimentation en eau : utiliser le robinet d'arrêt sous l'évier concerné, ou la vanne principale du logement en cas de fuite majeure.</p>
          <p><strong>2.</strong> Si l'eau touche des équipements électriques : couper également le disjoncteur de la pièce concernée.</p>
          <p><strong>3.</strong> Limiter les dégâts : placer des seaux, éponger, disposer des serviettes.</p>
          <p><strong>4.</strong> Identifier l'origine : joint défectueux, raccord desserré, tuyau percé, robinet qui goutte.</p>
          <p><strong>5.</strong> Réparer si c'est dans vos compétences (joint, collier de serrage). Sinon, appeler un plombier.</p>
          <p><strong>6.</strong> Prévenir le propriétaire par écrit (SMS, e-mail, lettre recommandée) avec photos jointes.</p>
          <p><strong>7.</strong> Déclarer à votre assurance habitation si des dégâts matériels sont constatés.</p>
        </div>

        <h3>2.2 — Connaître ses robinets d'arrêt dès l'emménagement</h3>
        <ul>
          <li><strong>Robinet d'arrêt sous l'évier</strong> — Arrête l'arrivée d'eau froide et chaude de la cuisine.</li>
          <li><strong>Robinet d'arrêt derrière les WC</strong> — Arrête l'alimentation du réservoir de chasse d'eau.</li>
          <li><strong>Vanne principale du logement</strong> — Arrête toute l'arrivée d'eau. Se trouve souvent dans l'entrée, le couloir ou le placard de la colonne montante.</li>
        </ul>

        <h2>Partie 3 — Problèmes électriques : prudence absolue</h2>
        <p>Les installations électriques défaillantes représentent l'un des principaux risques d'incendie domestique. Toute intervention doit être réalisée avec la plus grande prudence.</p>

        <h3>3.1 — Les situations courantes et les réponses adaptées</h3>
        <ul>
          <li><strong>Disjoncteur qui saute</strong> — Un appareil en surcharge a déclenché la protection. Débrancher l'appareil suspect, puis réenclencher le disjoncteur de bas en haut. S'il resaute immédiatement : signaler au propriétaire, ne pas insister.</li>
          <li><strong>Prise qui ne fonctionne plus</strong> — Vérifier si le disjoncteur différentiel s'est déclenché. Le réenclencher après avoir débranché les appareils de la pièce. Si le problème persiste : signaler au propriétaire.</li>
          <li><strong>Odeur de brûlé d'une prise ou d'un câble</strong> — Urgence absolue. Couper immédiatement le disjoncteur général. Ne pas utiliser d'équipements dans le logement. Appeler un électricien qualifié sans délai.</li>
          <li><strong>Étincelles visibles</strong> — Couper le courant, évacuer le logement si nécessaire, appeler le 18 (pompiers) en cas de début d'incendie.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Interdictions absolues :</strong> N'intervenez jamais sur les câbles ou les gaines électriques. Ne raccordez jamais une prise avec du ruban adhésif. Ne surchargez jamais une multiprise avec des appareils à forte consommation simultanément. N'ignorez jamais une odeur de brûlé.</div>

        <h2>Partie 4 — Canalisations bouchées : méthodes naturelles et mécaniques</h2>
        <p>Un lavabo, un évier ou des WC dont l'écoulement ralentit annonce un bouchon en formation. Agir tôt évite un blocage complet et l'intervention coûteuse d'un plombier.</p>

        <h3>4.1 — Méthode naturelle (à essayer en premier)</h3>
        <div class="example-box">
          <div class="example-box-title">🧴 Débouchage naturel — efficace pour les bouchons légers à modérés</div>
          <p><strong>1.</strong> Verser une demi-tasse de bicarbonate de soude directement dans le siphon.</p>
          <p><strong>2.</strong> Ajouter un demi-verre de vinaigre blanc : la réaction effervescente dissout les graisses et les résidus organiques.</p>
          <p><strong>3.</strong> Laisser agir 30 minutes sans faire couler d'eau.</p>
          <p><strong>4.</strong> Rincer abondamment à l'eau bouillante.</p>
        </div>

        <h3>4.2 — Méthode mécanique</h3>
        <ul>
          <li><strong>Ventouse</strong> — Créer une bonne étanchéité autour du siphon et pomper vigoureusement.</li>
          <li><strong>Démontage du siphon</strong> — Placer un seau sous le siphon, dévisser le coude, nettoyer manuellement.</li>
          <li><strong>Furet de débouchage</strong> — Ressort flexible qui pénètre dans la canalisation pour atteindre les bouchons éloignés.</li>
        </ul>
        <p>Si aucune méthode n'est efficace, prévenir le propriétaire par écrit, surtout si d'autres locataires de l'immeuble sont affectés.</p>

        <h2>Partie 5 — Moisissures : protocole de traitement</h2>
        <p>En complément de la prévention présentée au chapitre 3, voici le protocole de traitement des moisissures déjà présentes.</p>
        <ul>
          <li><strong>Protection individuelle</strong> — Porter des gants, un masque anti-particules et des lunettes pour les surfaces importantes.</li>
          <li><strong>Nettoyage</strong> — Appliquer du vinaigre blanc non dilué ou une pâte de bicarbonate sur la zone atteinte. Frotter avec une brosse souple.</li>
          <li><strong>Rinçage et séchage</strong> — Rincer à l'eau propre, sécher soigneusement à l'aide d'un chiffon ou d'un ventilateur.</li>
          <li><strong>Traitement préventif</strong> — Appliquer une solution d'huile essentielle de tea tree diluée (20 gouttes dans 500 ml d'eau).</li>
          <li><strong>Aération renforcée</strong> — Ventiler intensément la pièce pendant 48 heures après le traitement.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Moisissures récurrentes :</strong> Si les moisissures réapparaissent malgré vos traitements, cela peut indiquer un problème structurel (pont thermique, infiltration). Documentez avec des photos et signalez par écrit au propriétaire — ce type de dégradation relève de sa responsabilité.</div>

        <h2>Partie 6 — Le DAAF : votre obligation de sécurité incendie</h2>
        <p>Le <strong>Détecteur Avertisseur Autonome de Fumée</strong> (DAAF) est un équipement de sécurité obligatoire dans tous les logements français depuis la <strong>loi du 9 mars 2010</strong>. Son rôle est d'alerter les occupants dès les premières fumées d'un incendie, généralement avant même que les flammes ne soient visibles.</p>

        <h3>6.1 — Répartition des responsabilités</h3>
        <div class="example-box">
          <div class="example-box-title">⚖️ Qui installe ? Qui entretient ?</div>
          <p><strong>Le propriétaire</strong> a l'obligation légale de fournir et d'installer au moins un DAAF dans le logement avant la mise en location.</p>
          <p><strong>Le locataire</strong> a l'obligation d'entretenir le DAAF pendant toute la durée de la location : vérifications mensuelles, remplacement des piles, nettoyage des grilles, et signalement de toute défaillance au propriétaire.</p>
        </div>

        <h3>6.2 — Entretien régulier du DAAF</h3>
        <ul>
          <li><strong>Test mensuel</strong> — Appuyer sur le bouton « test » : le DAAF doit émettre une alarme sonore puissante. Si aucun son, remplacer la pile immédiatement.</li>
          <li><strong>Bip lent et répétitif</strong> — Ce signal indique que la pile est faible. Il faut la <strong>remplacer immédiatement</strong>. Ne jamais ignorer ce signal ni le laisser s'épuiser.</li>
          <li><strong>Nettoyage des grilles</strong> — Tous les 6 mois, aspirer délicatement les grilles de ventilation du DAAF ou les souffler doucement. Des grilles encrassées réduisent la sensibilité de l'appareil.</li>
          <li><strong>Durée de vie</strong> — Un DAAF a une durée de vie de <strong>10 ans</strong>. Passé ce délai, l'appareil entier doit être remplacé, même s'il semble encore fonctionner.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Règle absolue :</strong> Ne jamais débrancher le DAAF, même s'il émet des bips intempestifs. Si des alarmes se déclenchent sans raison apparente, cela signifie que le détecteur nécessite un entretien (nettoyage des grilles, remplacement de pile) — ou qu'il détecte réellement de la fumée. Retirer les piles pour faire taire l'appareil est une faute grave qui peut coûter des vies.</div>

        <h3>6.3 — En cas de déclenchement de l'alarme</h3>
        <div class="example-box">
          <div class="example-box-title">🚨 Procédure si le DAAF se déclenche</div>
          <p><strong>1.</strong> Ne pas paniquer — rester calme et rapide.</p>
          <p><strong>2.</strong> Quitter immédiatement le logement — ne pas prendre l'ascenseur, descendre par les escaliers.</p>
          <p><strong>3.</strong> Fermer les portes derrière soi sans les verrouiller — pour ralentir la propagation des flammes.</p>
          <p><strong>4.</strong> Depuis l'extérieur, appeler le <strong>18</strong> (pompiers).</p>
          <p><strong>5.</strong> Ne jamais retourner dans le logement avant l'autorisation des pompiers.</p>
        </div>

        <h2>Partie 7 — Fuite de gaz : procédure absolue</h2>
        <p>Une fuite de gaz est l'urgence la plus grave dans un logement. Le gaz naturel étant inodore, les fournisseurs lui ajoutent un produit odorant (odeur d'œuf pourri) pour le rendre détectable. En cas de cette odeur caractéristique, la procédure est non négociable.</p>
        <div class="example-box">
          <div class="example-box-title">🔴 Procédure fuite de gaz — à appliquer à la lettre</div>
          <p><strong>1.</strong> N'allumer ni éteindre aucun appareil électrique — ni interrupteur, ni téléphone, ni ascenseur. Une simple étincelle peut provoquer une explosion.</p>
          <p><strong>2.</strong> Fermer le robinet de gaz : derrière la cuisinière ou la chaudière.</p>
          <p><strong>3.</strong> Ouvrir toutes les fenêtres et portes en grand pour ventiler le logement.</p>
          <p><strong>4.</strong> Quitter le logement immédiatement et rester à l'extérieur.</p>
          <p><strong>5.</strong> Depuis l'extérieur, appeler GRDF au <strong>0800 011 316</strong> (numéro gratuit, disponible 24h/24).</p>
          <p><strong>6.</strong> Ne pas réintégrer le logement avant validation par les secours professionnels.</p>
        </div>

        <h2>Partie 8 — Après un sinistre : les démarches administratives</h2>
        <p>Après tout incident ayant causé des dégâts matériels, des démarches précises doivent être effectuées rapidement.</p>
        <ul>
          <li><strong>Photographier immédiatement</strong> — Documenter tous les dégâts avant toute intervention de nettoyage ou réparation. Ces photos constituent votre preuve principale.</li>
          <li><strong>Déclarer à votre assurance habitation</strong> — Dans un délai de <strong>5 jours ouvrables</strong> après la découverte du sinistre (48 heures en cas de vol). Passé ce délai, votre assurance peut légalement refuser la prise en charge.</li>
          <li><strong>Informer le propriétaire par écrit</strong> — Lettre recommandée ou e-mail avec accusé de lecture, avec photos jointes.</li>
          <li><strong>Remplir un constat amiable</strong> — En cas de dégât des eaux impliquant un voisin, remplir un constat amiable signé par les deux parties.</li>
          <li><strong>Conserver tous les documents</strong> — Devis de réparation, factures, courriers échangés avec le propriétaire et l'assurance.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Délai impératif :</strong> Déclarer un sinistre après le délai légal de 5 jours ouvrables peut entraîner le refus complet d'indemnisation par votre assurance. Ne jamais tarder.</div>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> Face à tout incident, appliquer la méthode en 4 temps : identifier, évaluer, agir, documenter. En cas de fuite d'eau, couper l'eau en premier. En cas d'odeur de brûlé électrique, couper le disjoncteur général et appeler un électricien. Le DAAF est obligatoire depuis la loi du 9 mars 2010 : tester mensuellement, remplacer la pile dès le premier bip lent, ne jamais débrancher, nettoyer les grilles tous les 6 mois, remplacer l'appareil à 10 ans. En cas de fuite de gaz : ne toucher aucun interrupteur, couper le gaz, ouvrir les fenêtres, quitter le logement, appeler le 0800 011 316 depuis l'extérieur. Déclarer tout sinistre à l'assurance dans les 5 jours ouvrables.</div>
      `,
      quiz: [
        {
          question: "En cas de fuite d'eau importante, quelle est la PREMIÈRE action à réaliser ?",
          options: [
            "Appeler le propriétaire",
            "Couper l'eau au robinet d'arrêt ou à la vanne principale",
            "Éponger l'eau",
            "Appeler le plombier"
          ],
          correct: 1,
          explanation: "La première action est toujours de couper l'eau pour stopper la fuite et limiter les dégâts. Ensuite seulement, on éponge, on identifie et on appelle si nécessaire."
        },
        {
          question: "Que faire si une odeur de brûlé provient d'une prise électrique ?",
          options: [
            "Continuer à utiliser la prise prudemment",
            "Mettre du ruban adhésif sur la prise",
            "Couper le disjoncteur général et appeler un électricien immédiatement — c'est une urgence",
            "Attendre de voir si l'odeur disparaît"
          ],
          correct: 2,
          explanation: "Une odeur de brûlé dans une installation électrique est une urgence absolue : risque d'incendie. Il faut couper le disjoncteur général et appeler un électricien qualifié immédiatement."
        },
        {
          question: "Comment déboucher naturellement une canalisation ?",
          options: [
            "Acide chlorhydrique directement dans le siphon",
            "Bicarbonate de soude suivi de vinaigre blanc, laisser agir 30 min puis rincer à l'eau bouillante",
            "Eau froide uniquement",
            "Laisser le temps faire les choses"
          ],
          correct: 1,
          explanation: "Le mélange bicarbonate + vinaigre crée une réaction effervescente qui dissout les graisses et résidus organiques. C'est une méthode naturelle, efficace et sans danger pour les canalisations."
        },
        {
          question: "Que signifie un bip lent et répétitif émis par le DAAF (détecteur de fumée) ?",
          options: [
            "Il détecte de la fumée — quitter le logement immédiatement",
            "Le DAAF est défectueux et doit être remplacé",
            "La pile est faible — la remplacer immédiatement",
            "Il effectue son test automatique mensuel"
          ],
          correct: 2,
          explanation: "Un bip lent et répétitif est le signal que la pile du DAAF est faible. Il faut la remplacer immédiatement. Ne jamais ignorer ce signal, et surtout ne jamais retirer les piles pour faire taire l'appareil."
        },
        {
          question: "Que faire si le DAAF se déclenche dans votre logement ?",
          options: [
            "Débrancher le DAAF pour arrêter l'alarme et chercher la source",
            "Appeler le propriétaire avant de faire quoi que ce soit",
            "Quitter immédiatement le logement, fermer les portes sans verrouiller, et appeler le 18 depuis l'extérieur",
            "Ouvrir toutes les fenêtres et attendre dans le logement"
          ],
          correct: 2,
          explanation: "Quand le DAAF se déclenche, la priorité absolue est d'évacuer immédiatement le logement, de fermer les portes derrière soi (sans les verrouiller) et d'appeler les pompiers (18) depuis l'extérieur. Ne jamais débrancher le DAAF."
        },
        {
          question: "Dans quel délai légal faut-il déclarer un sinistre à son assurance habitation ?",
          options: [
            "Dans les 24 heures",
            "Dans les 5 jours ouvrables suivant la découverte du sinistre",
            "Dans les 30 jours",
            "Il n'y a pas de délai légal"
          ],
          correct: 1,
          explanation: "La loi impose un délai de 5 jours ouvrables après la découverte du sinistre pour le déclarer à son assurance habitation. Passé ce délai, l'assurance peut légalement refuser la prise en charge."
        }
      ]
    },

    // ─────────────────────────────────────────────────────────
    // CHAPITRE 6 — État des lieux de sortie
    // ─────────────────────────────────────────────────────────
    {
      id: 6,
      title: "État des lieux de sortie",
      subtitle: "Récupérer 100% de votre caution",
      icon: "📋",
      duration: "20 min",
      points: 50,
      badgeId: "certifie",
      audioScript: "L'état des lieux de sortie est l'étape finale de votre location — et l'une des plus importantes. Ce document compare l'état du logement à votre départ avec ce qu'il était à votre arrivée. Il détermine si vous récupérez votre dépôt de garantie en totalité ou non. Dans ce chapitre, vous allez apprendre à vous préparer méthodiquement, pièce par pièce, pour maximiser vos chances de récupérer l'intégralité de votre caution.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Expliquer le rôle juridique de l'état des lieux de sortie et son lien avec la caution ;</li>
          <li>Planifier votre départ en respectant le calendrier de préparation recommandé ;</li>
          <li>Comparer l'état des lieux d'entrée et de sortie pour identifier vos obligations ;</li>
          <li>Réaliser un nettoyage complet du logement pièce par pièce selon la check-list ;</li>
          <li>Conduire l'état des lieux le jour J en préservant vos droits ;</li>
          <li>Connaître les délais légaux de restitution de la caution et vos recours en cas de litige.</li>
        </ol>

        <h2>Partie 1 — Comprendre l'état des lieux de sortie</h2>
        <p>L'état des lieux de sortie est un document officiel et <strong>contradictoire</strong>, établi en présence du locataire et du propriétaire (ou de son représentant) lors de la remise des clés. Il décrit avec précision l'état du logement au moment du départ.</p>
        <p>Ce document est comparé point par point à l'état des lieux d'entrée signé lors de votre installation. L'écart constaté entre les deux états — déduction faite de l'usure normale — détermine les éventuelles retenues sur votre dépôt de garantie.</p>
        <div class="callout">💡 <strong>L'enjeu concret :</strong> Votre dépôt de garantie représente 1 à 2 mois de loyer hors charges. Un état des lieux de sortie bien préparé vous permet de le récupérer intégralement.</div>

        <h3>1.1 — Usure normale vs dégradation : une distinction fondamentale</h3>
        <p>La loi distingue deux types d'altération du logement :</p>
        <ul>
          <li><strong>L'usure normale</strong> — Résulte du simple écoulement du temps et d'un usage raisonnable. Elle ne peut pas vous être facturée. Exemples : peinture légèrement ternie après plusieurs années, moquette légèrement usée dans les zones de passage, petites rayures d'usage sur le parquet.</li>
          <li><strong>La dégradation</strong> — Résulte d'un manque d'entretien ou d'une négligence. Elle peut être facturée, dans les limites de la vétusté. Exemples : trous non rebouchés, joints noirs et détériorés, moisissures dues à un manque d'aération, brûlures sur le parquet.</li>
        </ul>

        <h2>Partie 2 — Le calendrier de préparation</h2>
        <p>La préparation de l'état des lieux de sortie commence plusieurs mois à l'avance. Ne jamais tout laisser pour la dernière semaine.</p>
        <div class="example-box">
          <div class="example-box-title">🗓️ Calendrier de départ — étape par étape</div>
          <p><strong>3 mois avant :</strong> Donner votre préavis dans les délais légaux par lettre recommandée avec accusé de réception. Délai standard : 3 mois en zone non tendue, 1 mois en zone tendue ou pour motif légitime. Commencer l'inventaire des petits travaux à réaliser avant le départ.</p>
          <p><strong>1 mois avant :</strong> Réaliser les petites réparations : reboucher les trous, retoucher la peinture, remplacer les joints usés, remettre les ampoules grillées. Commander les pièces manquantes si nécessaire.</p>
          <p><strong>1 semaine avant :</strong> Grand ménage de fond complet du logement, pièce par pièce, selon la check-list ci-dessous. Vérifier le fonctionnement de tous les équipements (volets, serrures, chasse d'eau, robinets).</p>
          <p><strong>La veille :</strong> Nettoyage de finition. Rassembler tous les documents (état des lieux d'entrée, photos d'arrivée, attestation d'entretien chaudière, clés).</p>
          <p><strong>Le jour J :</strong> Se munir de l'état des lieux d'entrée. Arriver à l'heure et être disponible pour toute la durée de la visite.</p>
        </div>

        <h2>Partie 3 — Comparer avec l'état des lieux d'entrée</h2>
        <p>L'état des lieux d'entrée est votre document de référence absolue. Avant l'état des lieux de sortie, relisez-le attentivement :</p>
        <ul>
          <li>Identifiez toutes les dégradations qui existaient lors de votre arrivée — elles ne peuvent pas vous être imputées à la sortie ;</li>
          <li>Repérez les éléments qui ont pu se dégrader pendant votre occupation et que vous devez remettre en état ;</li>
          <li>Vérifiez la présence et le bon état de tous les équipements fournis.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Sans état des lieux d'entrée :</strong> Si aucun état des lieux d'entrée n'a été réalisé à votre arrivée, le logement est légalement présumé avoir été remis en parfait état. Le propriétaire ne peut alors retenir aucune somme sur votre caution. Conservez toujours précieusement votre exemplaire signé.</div>

        <h2>Partie 4 — Check-list du grand nettoyage de sortie</h2>
        <p>Le nettoyage insuffisant est la première cause de retenue sur caution en France. Chaque pièce doit être traitée avec méthode.</p>

        <h3>4.1 — Cuisine</h3>
        <ul>
          <li>Four : dégraissé intérieur (parois, fond, porte en verre) et extérieur, grille et lèche-frite récurés</li>
          <li>Réfrigérateur : entièrement vidé, dégivré si nécessaire, clayettes lavées, parois et bacs essuyés, joint de porte nettoyé</li>
          <li>Hotte : filtre dégraissé ou remplacé, intérieur nettoyé</li>
          <li>Plans de travail : dégraissés et désinfectés, sans résidus ni taches</li>
          <li>Placards et tiroirs : entièrement vidés, intérieur et extérieur essuyés</li>
          <li>Évier : détartré, siphon nettoyé, robinets brillants</li>
          <li>Sols : lavés y compris sous les meubles et derrière les appareils</li>
        </ul>

        <h3>4.2 — Salle de bain</h3>
        <ul>
          <li>Baignoire ou douche : détartrée et désinfectée, sans trace de calcaire ni de savon</li>
          <li>Joints en silicone : propres, sans moisissures ni traces noires</li>
          <li>Robinets et accessoires : détartrés, sans calcaire, brillants</li>
          <li>Miroir et surfaces : sans traces de calcaire ni d'empreintes</li>
          <li>WC : nettoyés intérieur et extérieur (y compris l'arrière et le dessous)</li>
          <li>Carrelage et joints de sol : propres, sans taches ni moisissures</li>
        </ul>

        <h3>4.3 — Pièces de vie (salon, chambres, couloirs)</h3>
        <ul>
          <li>Vitres : nettoyées des deux côtés (intérieur et extérieur accessible)</li>
          <li>Sols : aspirés et lavés, y compris sous les meubles</li>
          <li>Murs : sans taches visibles, petits trous rebouchés et retouchés avec peinture assortie</li>
          <li>Plafonds : sans toiles d'araignées ni traces de projections</li>
          <li>Placards et dressings : vidés, intérieur et extérieur propres</li>
          <li>Radiateurs : dépoussiérés y compris entre les éléments</li>
          <li>Interrupteurs et prises : essuyés, sans traces de doigts</li>
        </ul>

        <h3>4.4 — Espaces extérieurs</h3>
        <ul>
          <li>Balcon ou terrasse : balayé et lavé, sans traces ni résidus</li>
          <li>Jardin : herbe tondue, haies taillées, allées désherbées et balayées</li>
          <li>Cave : entièrement vidée et nettoyée</li>
          <li>Parking : propre, sans taches d'huile</li>
        </ul>

        <h2>Partie 5 — Les petites réparations incontournables</h2>
        <p>La deuxième grande cause de retenue sur caution concerne les réparations oubliées. Avant de rendre les clés, vérifier systématiquement :</p>
        <ul>
          <li><strong>Trous dans les murs</strong> — Tout trou de vis, de cheville ou de clou doit être rebouché avec un enduit de rebouchage, poncé et retouché avec la peinture de la pièce. Ne laisser aucun trou apparent.</li>
          <li><strong>Ampoules grillées</strong> — Remplacer toutes les ampoules grillées sans exception.</li>
          <li><strong>Joints de robinets</strong> — Remplacer tout joint qui fuit ou qui est usé.</li>
          <li><strong>Serrures et poignées</strong> — Vérifier que toutes les serrures ferment correctement et que les poignées sont solides.</li>
          <li><strong>Volets et stores</strong> — S'assurer que tous fonctionnent sans blocage.</li>
          <li><strong>Chasse d'eau</strong> — Vérifier le bon fonctionnement ; réparer si elle coule en permanence.</li>
        </ul>

        <h2>Partie 6 — Le jour J : conduire l'état des lieux</h2>
        <p>Votre attitude et votre préparation le jour de la remise des clés peuvent faire une grande différence.</p>
        <ul>
          <li><strong>Apportez l'état des lieux d'entrée</strong> — Pour comparer sur place, point par point, pièce par pièce.</li>
          <li><strong>Prenez des photos avant la visite</strong> — Documentez l'état propre du logement juste avant l'état des lieux.</li>
          <li><strong>Soyez présent et attentif</strong> — Accompagnez le propriétaire dans chaque pièce. Vous avez le droit d'observer, de commenter et de contester.</li>
          <li><strong>Lisez chaque ligne avant de signer</strong> — Ne signez jamais un document sans l'avoir lu entièrement.</li>
          <li><strong>Formulez des réserves si nécessaire</strong> — Si vous n'êtes pas d'accord avec une mention, vous pouvez écrire vos observations directement sur le document avant de le signer. Ces réserves doivent figurer par écrit sur le document.</li>
          <li><strong>Demandez votre exemplaire signé</strong> — Vous avez le droit à une copie signée par les deux parties. Ne partez pas sans votre copie.</li>
        </ul>

        <h2>Partie 7 — La caution : droits et délais légaux</h2>
        <p>Le dépôt de garantie est régi par des délais légaux stricts que le propriétaire doit impérativement respecter.</p>
        <div class="example-box">
          <div class="example-box-title">⚖️ Délais légaux de restitution de la caution</div>
          <p><strong>1 mois maximum</strong> — si l'état des lieux de sortie est identique à l'état des lieux d'entrée (aucune dégradation constatée). C'est le délai lorsque le logement est rendu propre et sans dégradation.</p>
          <p><strong>2 mois maximum</strong> — si des dégradations sont constatées, pour permettre l'obtention de devis et factures justificatifs.</p>
          <p><strong>Majoration de 10%</strong> du loyer mensuel hors charges — due automatiquement au locataire pour chaque mois de retard au-delà du délai légal. C'est un droit que vous pouvez réclamer.</p>
        </div>
        <ul>
          <li><strong>Toute retenue doit être justifiée</strong> par un devis ou une facture. Sans justificatif, la retenue est illégale.</li>
          <li><strong>La vétusté s'applique toujours</strong> — Le propriétaire ne peut pas facturer le remplacement d'un élément à 100% de son prix si cet élément était déjà ancien. Une grille de vétusté réduit les sommes dues.</li>
          <li><strong>Sans état des lieux de sortie contradictoire</strong> — Aucune retenue n'est légalement possible.</li>
          <li><strong>En cas de litige</strong> — Saisir gratuitement la Commission Départementale de Conciliation (CDC) avant tout recours judiciaire. C'est rapide, gratuit et souvent efficace.</li>
        </ul>

        <h2>Partie 8 — Les 7 causes principales de retenue sur caution</h2>
        <p>Ces sept motifs représentent la grande majorité des retenues pratiquées en France. Les connaître permet de les anticiper et de les éviter.</p>
        <div class="example-box">
          <div class="example-box-title">📋 Classement des motifs les plus fréquents</div>
          <p><strong>1. Nettoyage insuffisant</strong> — Four encrassé, réfrigérateur non dégivré, joints noirs, sols non lavés, WC non nettoyés. C'est la cause numéro 1 des retenues en France.</p>
          <p><strong>2. Trous dans les murs non rebouchés</strong> — Chaque vis, cheville ou clou oublié peut entraîner une retenue. Enduit + ponçage + retouche peinture sont obligatoires.</p>
          <p><strong>3. Peinture dégradée</strong> — Traces de doigts, marques, couleur vive appliquée sans autorisation écrite du propriétaire.</p>
          <p><strong>4. Sols tachés ou rayés</strong> — Taches de liquide sur parquet, brûlures, rayures profondes dues à un déplacement de meubles sans patins protecteurs.</p>
          <p><strong>5. Jardin non entretenu</strong> — Herbes folles, haie non taillée, pelouse non tondue.</p>
          <p><strong>6. Absence d'attestation d'entretien chaudière</strong> — Si vous ne pouvez pas présenter l'attestation annuelle, une retenue peut être appliquée.</p>
          <p><strong>7. Papier peint abîmé</strong> — Papier arraché, décollé ou taché, même partiellement.</p>
        </div>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> L'état des lieux de sortie compare le logement à l'état des lieux d'entrée. La préparation commence 3 mois avant : préavis en recommandé, réparations, grand nettoyage. Les 7 causes principales de retenue : nettoyage insuffisant, trous non rebouchés, peinture dégradée, sols abîmés, jardin non entretenu, absence d'attestation chaudière, papier peint abîmé. Le propriétaire dispose d'1 mois (sans dégradation) ou 2 mois (avec dégradation) pour restituer la caution. Toute retenue doit être justifiée par devis ou facture, sinon elle est illégale.</div>
      `,
      quiz: [
        {
          question: "Dans quel état le logement doit-il être rendu à la sortie ?",
          options: [
            "Exactement comme neuf, sans aucune marque d'usage",
            "Tel quel, le propriétaire s'en charge",
            "Propre, fonctionnel et en bon état, en tenant compte de l'usure normale",
            "Vide de meubles uniquement"
          ],
          correct: 2,
          explanation: "Le logement doit être rendu propre, fonctionnel et en bon état. L'usure normale par le temps et l'usage est reconnue par la loi et ne peut pas être facturée au locataire."
        },
        {
          question: "Quelle est la première cause de retenue sur caution en France ?",
          options: [
            "Les trous dans les murs non rebouchés",
            "Le jardin non entretenu",
            "Le nettoyage insuffisant (four encrassé, joints noirs, sols non lavés…)",
            "L'absence d'attestation chaudière"
          ],
          correct: 2,
          explanation: "Le nettoyage insuffisant est la première cause de retenue sur caution en France : four encrassé, réfrigérateur non dégivré, joints noirs, sols non lavés. Un nettoyage méthodique pièce par pièce est indispensable."
        },
        {
          question: "Quel document est indispensable à comparer avec l'état des lieux de sortie ?",
          options: [
            "Les quittances de loyer",
            "L'état des lieux d'entrée signé lors de votre installation",
            "La liste des charges",
            "Le contrat de bail uniquement"
          ],
          correct: 1,
          explanation: "L'état des lieux d'entrée est la référence absolue. Les dégradations existantes à votre arrivée ne peuvent pas vous être imputées à la sortie — conservez-le précieusement."
        },
        {
          question: "Quand faut-il idéalement commencer à préparer l'état des lieux de sortie ?",
          options: [
            "La veille de la remise des clés",
            "Le matin même",
            "3 mois avant, pour donner le préavis et planifier les réparations nécessaires",
            "Après avoir rendu les clés"
          ],
          correct: 2,
          explanation: "Commencer 3 mois avant permet de donner le préavis dans les délais légaux, d'identifier les travaux à faire et de les réaliser progressivement sans stress de dernière minute."
        },
        {
          question: "Combien de temps le propriétaire a-t-il pour restituer la caution si aucune dégradation n'est constatée ?",
          options: [
            "6 mois",
            "3 mois",
            "1 mois",
            "Il n'y a pas de délai légal"
          ],
          correct: 2,
          explanation: "Si l'état des lieux de sortie est identique à l'état des lieux d'entrée (sans dégradations), le propriétaire doit restituer la caution dans un délai légal d'1 mois. Au-delà, une majoration de 10% par mois de retard est due."
        },
        {
          question: "Que faire si l'on n'est pas d'accord avec une remarque lors de l'état des lieux de sortie ?",
          options: [
            "Refuser de signer le document",
            "Partir sans signer",
            "Formuler des réserves écrites directement sur le document avant de signer",
            "Accepter sans rien dire pour éviter les conflits"
          ],
          correct: 2,
          explanation: "Formuler des réserves par écrit directement sur le document d'état des lieux préserve vos droits tout en permettant de finaliser la procédure. Ne jamais signer sans avoir lu et, si nécessaire, annoté le document."
        }
      ]
    },
    // ─────────────────────────────────────────────────────────
    // CHAPITRE 7 — VMC, chaudière & équipements techniques
    // ─────────────────────────────────────────────────────────
    {
      id: 7,
      title: "VMC, chaudière & équipements",
      subtitle: "Maîtriser les installations techniques de votre logement",
      icon: "⚙️",
      duration: "20 min",
      points: 50,
      badgeId: "technicien",
      audioScript: "Votre logement abrite des installations techniques qui fonctionnent souvent en silence : la VMC renouvelle l'air en permanence, la chaudière assure votre confort thermique, les radiateurs chauffent chaque pièce, et les équipements sanitaires subissent l'attaque invisible du calcaire. Comprendre ces systèmes, savoir les entretenir et réagir correctement en cas de problème, c'est protéger votre santé, éviter des pannes coûteuses — et préserver votre caution.",
      content: `
        <h2>Objectifs pédagogiques de ce chapitre</h2>
        <p>À l'issue de ce chapitre, vous serez capable de :</p>
        <ol>
          <li>Expliquer le fonctionnement de la VMC et appliquer les règles d'entretien des grilles ;</li>
          <li>Connaître votre obligation légale d'entretien annuel de la chaudière à gaz individuelle ;</li>
          <li>Réaliser la purge annuelle d'un radiateur à eau chaude ;</li>
          <li>Appliquer les méthodes naturelles de détartrage adaptées à chaque équipement ;</li>
          <li>Réagir correctement face aux signaux d'alerte de la chaudière et du tableau électrique.</li>
        </ol>

        <h2>Partie 1 — La VMC : le système respiratoire de votre logement</h2>
        <p>La Ventilation Mécanique Contrôlée (VMC) est le système qui assure le renouvellement permanent de l'air dans votre logement. Elle fonctionne 24 heures sur 24, 365 jours par an, en aspirant l'air vicié, humide et chargé en vapeurs (cuisine, salle de bain) pour le remplacer par de l'air frais extérieur.</p>

        <h3>1.1 — Où se trouvent les bouches de VMC ?</h3>
        <div class="example-box">
          <div class="example-box-title">📍 Localisation des grilles de ventilation</div>
          <p><strong>Grilles d'extraction</strong> (aspiration de l'air vicié) — Situées dans les pièces humides : <strong>cuisine, salle de bain, WC</strong>. Ce sont les grilles fixées en hauteur sur les murs ou au plafond.</p>
          <p><strong>Entrées d'air frais</strong> — Situées en bas des portes intérieures des chambres et du salon (grilles basses ou espaces sous les portes). L'air frais entre par là, traverse le logement et est aspiré par les grilles d'extraction.</p>
        </div>

        <h3>1.2 — Règles d'entretien et d'utilisation</h3>
        <ul>
          <li><strong>Ne jamais couper ni débrancher la VMC</strong> — Même si elle produit un léger bruit de fond. La couper arrête la circulation de l'air et provoque une accumulation d'humidité dans le logement, entraînant inévitablement l'apparition de moisissures. Ces dégradations sont systématiquement mises à la charge du locataire.</li>
          <li><strong>Ne jamais boucher les grilles</strong> — Ni scotch, ni torchon, ni meuble placé devant les bouches d'extraction ou les entrées d'air. Boucher les grilles est une faute grave qui engage directement votre responsabilité.</li>
          <li><strong>Nettoyer les grilles tous les 3 à 6 mois</strong> — Aspirer les grilles avec un aspirateur, ou les décrocher, les laver sous l'eau tiède, les sécher complètement avant de les remettre en place. Des grilles encrassées réduisent l'efficacité de la VMC.</li>
          <li><strong>VMC double flux</strong> — Si votre logement en est équipé, les filtres doivent être remplacés tous les 6 à 12 mois. L'emplacement des filtres est indiqué dans la notice ou à demander au propriétaire.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Erreur très fréquente :</strong> Boucher les grilles de VMC « pour éviter les courants d'air » est l'une des premières causes de moisissures dans les logements locatifs. L'air n'est pas froid parce que la grille fonctionne — il est frais parce que la pièce est ventilée normalement. Ne jamais boucher ces grilles.</div>

        <h2>Partie 2 — La chaudière à gaz : une obligation légale annuelle</h2>
        <p>Si votre logement est équipé d'une chaudière à gaz individuelle (pour le chauffage, la production d'eau chaude ou les deux), son entretien est une <strong>obligation légale du locataire</strong>, définie par le décret du 20 juillet 2023.</p>

        <h3>2.1 — Ce que dit la loi</h3>
        <div class="example-box">
          <div class="example-box-title">⚖️ Obligation légale d'entretien de la chaudière</div>
          <p>Tout locataire occupant un logement équipé d'une chaudière à gaz entre 4 et 400 kW a l'obligation légale de la faire réviser <strong>chaque année civile</strong> par un technicien certifié (chauffagiste qualifié RGE ou équivalent).</p>
          <p>L'<strong>attestation d'entretien</strong> délivrée par le technicien doit être conservée pendant <strong>2 ans</strong> et présentée au propriétaire sur simple demande. Elle est également indispensable lors de l'état des lieux de sortie.</p>
        </div>

        <h3>2.2 — Modalités pratiques</h3>
        <ul>
          <li><strong>Quand intervenir ?</strong> — Idéalement en septembre ou octobre, avant le démarrage de la saison de chauffe. En décembre et janvier, les chauffagistes sont complets et les délais d'attente sont très longs.</li>
          <li><strong>Coût moyen</strong> — Entre 100 € et 150 € par intervention. Certains contrats d'assurance habitation incluent un contrat d'entretien annuel : vérifier vos garanties.</li>
          <li><strong>Conséquences en cas d'oubli</strong> — En cas de sinistre, votre assurance peut refuser d'indemniser si l'entretien n'a pas été réalisé. À votre départ, l'absence d'attestation justifie une retenue sur caution.</li>
          <li><strong>Le ramonage</strong> — Le conduit d'évacuation des fumées doit être ramoné 1 à 2 fois par an selon les réglementations locales. Se renseigner auprès du propriétaire ou de la mairie.</li>
        </ul>

        <h3>2.3 — Signaux d'alerte de la chaudière</h3>
        <div class="example-box">
          <div class="example-box-title">🚨 Signaux qui nécessitent une intervention immédiate</div>
          <p><strong>Flamme jaune ou orange</strong> au lieu de bleue → Risque de production de monoxyde de carbone (gaz inodore et mortel). Aérer immédiatement, appeler un technicien sans délai.</p>
          <p><strong>Odeur de gaz</strong> → Couper le robinet de gaz (derrière la chaudière), ouvrir toutes les fenêtres, quitter le logement, appeler le <strong>0800 011 316</strong> (GRDF, gratuit 24h/24) depuis l'extérieur. Ne pas allumer ni éteindre aucun appareil électrique.</p>
          <p><strong>Chaudière qui se met fréquemment en erreur</strong> → Anomalie à signaler par écrit au propriétaire. Ne pas tenter de réparer soi-même.</p>
        </div>

        <h2>Partie 3 — Les radiateurs à eau chaude : la purge annuelle</h2>
        <p>Dans les logements équipés d'un chauffage central à eau chaude, de l'air s'accumule progressivement dans les circuits. Ces poches d'air empêchent l'eau chaude de remplir entièrement le radiateur, réduisant son efficacité de chauffage.</p>

        <h3>3.1 — Comment identifier un radiateur à purger ?</h3>
        <ul>
          <li>Le radiateur est <strong>froid en haut et chaud en bas</strong> : l'air bloque la progression de l'eau chaude dans la partie haute ;</li>
          <li>Il produit des <strong>gargouillis ou des claquements</strong> lors du chauffage.</li>
        </ul>

        <h3>3.2 — Procédure de purge</h3>
        <div class="example-box">
          <div class="example-box-title">🔧 Étapes de la purge d'un radiateur</div>
          <p><strong>1.</strong> Mettre le chauffage en marche et attendre que les radiateurs soient chauds.</p>
          <p><strong>2.</strong> Localiser la vis de purge : petite vis carrée ou hexagonale, située en haut du radiateur, côté opposé au robinet de réglage.</p>
          <p><strong>3.</strong> Placer un chiffon et un récipient sous la vis de purge pour recueillir l'eau.</p>
          <p><strong>4.</strong> Utiliser une clé de purge pour desserrer légèrement la vis : de l'air va s'échapper avec un sifflement.</p>
          <p><strong>5.</strong> Dès que de l'eau coule de façon continue sans bulles d'air, refermer immédiatement la vis.</p>
          <p><strong>6.</strong> Vérifier la pression sur le manomètre de la chaudière : elle doit être comprise entre <strong>1 et 1,5 bar</strong>. Si elle est inférieure à 1 bar, faire l'appoint d'eau via le robinet de remplissage de la chaudière.</p>
        </div>
        <p><strong>Quand purger ?</strong> — Idéalement chaque automne, avant la première mise en route du chauffage pour la saison.</p>

        <h2>Partie 4 — Le calcaire : prévention et traitement naturel</h2>
        <p>Dans de nombreuses régions françaises (Île-de-France, Grand Est, Occitanie, PACA…), l'eau du robinet est riche en calcaire. Le calcaire se dépose progressivement sur les surfaces en contact avec l'eau et finit par obstruer et détériorer les équipements si on ne l'entretient pas régulièrement.</p>
        <div class="example-box">
          <div class="example-box-title">🧴 Méthodes naturelles de détartrage par équipement</div>
          <table class="responsibility-table">
            <thead><tr><th>Équipement</th><th>Méthode</th><th>Fréquence</th></tr></thead>
            <tbody>
              <tr><td>Pommeau de douche</td><td>Sac plastique rempli de vinaigre blanc autour du pommeau, laisser une nuit</td><td>Tous les 3 mois</td></tr>
              <tr><td>Aérateur de robinet</td><td>Dévisser, tremper dans du vinaigre blanc chaud 30 min, rincer</td><td>Tous les 6 mois</td></tr>
              <tr><td>Bouilloire / cafetière</td><td>Remplir d'eau + acide citrique (50g/litre), faire bouillir, rincer plusieurs fois</td><td>Tous les 2 mois</td></tr>
              <tr><td>Machine à laver</td><td>Programme à 60°C à vide avec 150g d'acide citrique dans le tambour</td><td>Tous les 3 mois</td></tr>
              <tr><td>Lave-vaisselle</td><td>Programme à vide avec un verre de vinaigre blanc dans le bac inférieur</td><td>Tous les 3 mois</td></tr>
            </tbody>
          </table>
        </div>
        <div class="callout">💡 <strong>Pourquoi s'en occuper ?</strong> Un pommeau de douche entartré a une pression réduite. Une machine à laver entartrée consomme plus d'énergie et vieillit prématurément. Ces équipements dont l'entretien vous incombe peuvent faire l'objet d'une retenue sur caution si leur état est dégradé par manque de soin.</div>

        <h2>Partie 5 — Le tableau électrique : localiser et réagir</h2>
        <p>Le tableau électrique est le cœur de l'installation électrique de votre logement. Il contient l'ensemble des disjoncteurs de protection.</p>

        <h3>5.1 — À faire dès votre arrivée</h3>
        <ul>
          <li><strong>Localiser le tableau</strong> — Généralement dans l'entrée, le couloir ou un placard. Repérer le disjoncteur général (qui coupe tout le logement) et les disjoncteurs de circuit (un par zone).</li>
          <li><strong>Étiqueter les circuits</strong> — Si les disjoncteurs ne sont pas identifiés, faites-le vous-même en testant chaque circuit une pièce à la fois.</li>
        </ul>

        <h3>5.2 — Réactions face aux situations courantes</h3>
        <ul>
          <li><strong>Un disjoncteur de circuit saute</strong> — Un appareil en surcharge a déclenché la protection. Débrancher l'appareil suspect, puis réenclencher le disjoncteur de bas en haut. S'il resaute immédiatement sans appareil branché : signaler au propriétaire.</li>
          <li><strong>Le disjoncteur différentiel saute</strong> — Indique une fuite de courant (appareil défaillant). Débrancher un à un les appareils du circuit pour identifier le coupable, puis réenclencher.</li>
          <li><strong>Odeur de brûlé ou étincelles</strong> — Urgence absolue : couper immédiatement le disjoncteur général, ne pas utiliser d'équipements, appeler le 18 (pompiers) si nécessaire, puis un électricien qualifié.</li>
          <li><strong>N'intervenir jamais sur les câbles</strong> — Le remplacement d'une prise ou d'un interrupteur cassé est possible, mais toute intervention sur les câbles ou les gaines doit être réalisée par un électricien qualifié.</li>
        </ul>

        <div class="callout callout-success">✅ <strong>Résumé du chapitre :</strong> La VMC fonctionne 24h/24 et ne doit jamais être coupée ni obstruée — ses grilles sont à nettoyer tous les 3 à 6 mois. La chaudière à gaz individuelle doit être révisée chaque année civile par un technicien certifié : conserver l'attestation 2 ans. Les radiateurs à eau chaude se purgent chaque automne ; la pression du circuit doit rester entre 1 et 1,5 bar après la purge. Le calcaire se combat avec le vinaigre blanc et l'acide citrique selon les équipements. Face à une odeur de gaz : couper le gaz, ouvrir les fenêtres, quitter le logement, appeler le 0800 011 316 depuis l'extérieur sans toucher aucun interrupteur.</div>
      `,
      quiz: [
        {
          question: "Pourquoi ne faut-il JAMAIS couper ni débrancher la VMC ?",
          options: [
            "Car c'est interdit par le règlement de copropriété",
            "Car cela provoque une accumulation d'humidité et l'apparition de moisissures dont le locataire est responsable",
            "Car cela entraîne une surconsommation d'énergie au redémarrage",
            "Car le propriétaire en est automatiquement averti"
          ],
          correct: 1,
          explanation: "La VMC évacue l'humidité en permanence. La couper ou l'obstruer crée une accumulation d'humidité qui génère des moisissures. Ces dégradations sont systématiquement mises à la charge du locataire."
        },
        {
          question: "À quelle fréquence doit-on faire réviser la chaudière à gaz individuelle ?",
          options: [
            "Tous les 3 ans",
            "Tous les 2 ans",
            "Chaque année civile",
            "Seulement en cas de panne"
          ],
          correct: 2,
          explanation: "Depuis le décret du 20 juillet 2023, l'entretien annuel de la chaudière est une obligation légale du locataire. L'attestation doit être conservée 2 ans et peut être exigée par le propriétaire à tout moment."
        },
        {
          question: "Comment savoir qu'un radiateur a besoin d'être purgé ?",
          options: [
            "Il est très bruyant uniquement la nuit",
            "Il est froid en haut et chaud en bas, ou fait des gargouillis",
            "Il consomme trop d'électricité",
            "La fenêtre de la pièce est condensée"
          ],
          correct: 1,
          explanation: "Un radiateur froid en haut contient de l'air qui empêche l'eau chaude de remplir tout le radiateur. Les gargouillis confirment ce diagnostic. La purge, à réaliser chaque automne, résout le problème."
        },
        {
          question: "Quel est le meilleur moyen naturel de détartrer un pommeau de douche encrassé ?",
          options: [
            "Eau de javel diluée pendant 30 minutes",
            "Sac plastique rempli de vinaigre blanc autour du pommeau, laissé une nuit",
            "Eau bouillante versée directement",
            "Bicarbonate de soude sec appliqué sur le pommeau"
          ],
          correct: 1,
          explanation: "Le vinaigre blanc (acide acétique) dissout le calcaire efficacement et sans abîmer les joints. Laisser tremper une nuit garantit un détartrage en profondeur sans produit chimique agressif."
        },
        {
          question: "Que faire EN PREMIER en cas d'odeur de gaz dans votre logement ?",
          options: [
            "Allumer la lumière pour mieux voir d'où ça vient",
            "Appeler le propriétaire par téléphone depuis la pièce concernée",
            "Couper le gaz, ouvrir toutes les fenêtres, quitter le logement et appeler le 0800 011 316 depuis l'extérieur",
            "Utiliser un ventilateur électrique pour disperser le gaz"
          ],
          correct: 2,
          explanation: "En cas d'odeur de gaz, il ne faut ni allumer ni éteindre aucun appareil électrique (risque d'étincelle). Il faut couper le gaz, aérer, quitter les lieux et appeler GRDF (0800 011 316, gratuit, 24h/24)."
        },
        {
          question: "Quelle pression doit indiquer le manomètre de la chaudière après une purge de radiateurs ?",
          options: [
            "Entre 0 et 0,5 bar",
            "Entre 1 et 1,5 bar",
            "Entre 2 et 3 bar",
            "Entre 3 et 4 bar"
          ],
          correct: 1,
          explanation: "La pression normale du circuit de chauffage est entre 1 et 1,5 bar. Après une purge, elle peut baisser. Il faut faire l'appoint d'eau via le robinet de remplissage de la chaudière si elle passe en dessous de 1 bar."
        }
      ]
    }
  ],

  // ─────────────────────────────────────────────────────────
  // BADGES
  // ─────────────────────────────────────────────────────────
  badges: [
    { id: "initie",      name: "Initié",          emoji: "🗝️", desc: "Les bases du logement maîtrisées !" },
    { id: "debutant",    name: "Débutant",         emoji: "🌱", desc: "Rôle du locataire compris !" },
    { id: "responsable", name: "Responsable",      emoji: "⭐", desc: "Obligations d'entretien maîtrisées" },
    { id: "hygiene",     name: "Expert Hygiène",   emoji: "🌿", desc: "Hygiène et prévention validées" },
    { id: "menage",      name: "Pro du Ménage",    emoji: "✨", desc: "Méthode ménage complète" },
    { id: "gestionnaire",name: "Gestionnaire",     emoji: "🔨", desc: "Gestion des problèmes validée" },
    { id: "technicien",  name: "Technicien",       emoji: "⚙️", desc: "Équipements techniques maîtrisés" },
    { id: "certifie",    name: "Certifié",         emoji: "🏆", desc: "Formation complète terminée !" }
  ],

  // ─────────────────────────────────────────────────────────
  // RESOURCES
  // ─────────────────────────────────────────────────────────
  resources: [
    {
      id: "planning",
      title: "Planning ménage",
      icon: "📅",
      color: "#2563EB",
      bgColor: "#EFF6FF",
      desc: "Routine hebdomadaire organisée",
      items: [
        { icon: "fa-sun", text: "Quotidien : Aérer + vaisselle + surfaces + ranger (15-20 min)" },
        { icon: "fa-calendar-week", text: "Hebdo : Aspirer + laver sols + salle de bain + cuisine + poussière (1h30)" },
        { icon: "fa-calendar", text: "Mensuel : Vitres + placards + frigo + four + filtres hotte (2-3h)" },
        { icon: "fa-leaf", text: "Saisonnier (×2/an) : Rideaux + canapé + penderies + VMC + bilan réparations" },
        { icon: "fa-check-double", text: "Conseil : Créez une checklist imprimable pour cocher chaque tâche" }
      ]
    },
    {
      id: "products",
      title: "Liste produits essentiels",
      icon: "🧴",
      color: "#10B981",
      bgColor: "#ECFDF5",
      desc: "Produits naturels et efficaces",
      items: [
        { icon: "fa-bottle-water", text: "Vinaigre blanc (5L) — détartrant, désinfectant, dégraissant dilué" },
        { icon: "fa-flask", text: "Bicarbonate de soude (1kg) — abrasif doux, déodorisant, dégraissant" },
        { icon: "fa-soap", text: "Savon noir liquide — nettoyant sols et surfaces polyvalent" },
        { icon: "fa-spray-can", text: "Alcool ménager 70° — désinfectant surfaces, vitres" },
        { icon: "fa-lemon", text: "Acide citrique — détartrant fort (machine à laver, lave-vaisselle)" },
        { icon: "fa-droplet", text: "Huile essentielle tea tree — anti-moisissures naturel" }
      ]
    },
    {
      id: "whodoswhat",
      title: "Fiche « Qui fait quoi »",
      icon: "⚖️",
      color: "#7C3AED",
      bgColor: "#EDE9FE",
      desc: "Locataire vs Propriétaire",
      items: [
        { icon: "fa-user", text: "LOCATAIRE : Joints, ampoules, petits trous, entretien chaudière, désinsectisation" },
        { icon: "fa-user", text: "LOCATAIRE : Filtres hotte, débouchage canalisations, serrures usées par l'usage" },
        { icon: "fa-house", text: "PROPRIÉTAIRE : Chaudière en panne, toiture, façade, canalisations encastrées" },
        { icon: "fa-house", text: "PROPRIÉTAIRE : Équipements vétustes, problèmes structurels, double vitrage cassé" },
        { icon: "fa-scale-balanced", text: "EN CAS DE DOUTE : Signaler par écrit et demander confirmation au propriétaire" }
      ]
    },
    {
      id: "surfaces",
      title: "Guide produits × surfaces",
      icon: "🧹",
      color: "#F59E0B",
      bgColor: "#FFFBEB",
      desc: "Quoi utiliser sur quoi — et les erreurs à éviter",
      items: [
        { icon: "fa-tree", text: "Parquet flottant/stratifié → produit parquet spécifique, chiffon à peine humide. JAMAIS eau stagnante, vapeur ou ammoniaque" },
        { icon: "fa-border-all", text: "Carrelage céramique brillant → eau + savon noir dilué. Éviter la javel directe (dégrade les joints)" },
        { icon: "fa-border-all", text: "Carrelage grès cérame mat → détergent neutre dilué. JAMAIS vinaigre ou produits acides (attaque la surface)" },
        { icon: "fa-paint-roller", text: "Peinture murale lessivable → eau tiède + liquide vaisselle, tamponner sans frotter. Éviter brosse dure" },
        { icon: "fa-scroll", text: "Papier peint → chiffon à peine humide, tamponner uniquement. JAMAIS eau, vapeur ou spray nettoyant" },
        { icon: "fa-faucet", text: "Joints silicone douche → bicarbonate + vinaigre ou anti-moisissures spécifique. Javel répétée attaque le silicone" },
        { icon: "fa-sink", text: "Inox (évier, robinetterie) → produit inox ou crème de tartre. JAMAIS paille de fer (raye) ni javel (noircit)" },
        { icon: "fa-window-maximize", text: "Vitres et miroirs → produit vitres ou vinaigre blanc dilué. Ne pas nettoyer en plein soleil (traces garanties)" }
      ]
    },
    {
      id: "calendrier",
      title: "Calendrier annuel d'entretien",
      icon: "📆",
      color: "#7C3AED",
      bgColor: "#EDE9FE",
      desc: "Ce qu'il faut faire chaque saison",
      items: [
        { icon: "fa-leaf", text: "AUTOMNE (sept-oct) : Révision chaudière ✦ Purge des radiateurs ✦ Vérification joints de fenêtres ✦ Nettoyage bouches VMC" },
        { icon: "fa-snowflake", text: "HIVER (nov-mars) : Aérer 10 min/jour même par grand froid ✦ Maintenir 16-18°C partout ✦ Éviter de sécher le linge sans ventiler" },
        { icon: "fa-seedling", text: "PRINTEMPS (avr-mai) : Grand ménage ✦ Vérification moisissures ✦ Première tonte de jardin ✦ Nettoyage filtres clim si équipé" },
        { icon: "fa-sun", text: "ÉTÉ (juin-août) : Fermer volets en journée ✦ Ouvrir fenêtres la nuit ✦ Nettoyer filtres VMC ✦ Traitement préventif anti-nuisibles" },
        { icon: "fa-calendar-check", text: "MENSUEL toute l'année : Nettoyer filtres hotte ✦ Détartrer pommeau de douche ✦ Vérifier joints salle de bain" }
      ]
    },
    {
      id: "emergencies",
      title: "Fiche urgences",
      icon: "🆘",
      color: "#EF4444",
      bgColor: "#FEF2F2",
      desc: "Numéros et procédures d'urgence",
      items: [
        { icon: "fa-fire", text: "Incendie → 18 (Pompiers) | Quitter les lieux, ne pas utiliser l'ascenseur" },
        { icon: "fa-bolt", text: "Urgence électrique → 190 (ENEDIS) | Couper disjoncteur général" },
        { icon: "fa-faucet", text: "Fuite gaz → 0800 011 316 (GRDF) | Ouvrir fenêtres, ne pas allumer la lumière" },
        { icon: "fa-droplet", text: "Dégât des eaux → Couper eau + appeler assurance habitation" },
        { icon: "fa-phone", text: "Urgence médicale → 15 (SAMU) | Police → 17 | Européen → 112" }
      ]
    },
    {
      id: "checklist_entree",
      title: "Checklist état des lieux d'entrée",
      icon: "📝",
      color: "#0EA5E9",
      bgColor: "#F0F9FF",
      desc: "Ce qu'il faut vérifier et photographier à l'arrivée",
      items: [
        { icon: "fa-camera", text: "Photographier TOUT avant de signer : murs, sols, plafonds, équipements, sanitaires — toutes les pièces" },
        { icon: "fa-droplet", text: "Tester robinets, chasse d'eau, douche — noter toute fuite, trace de calcaire ou dégât existant" },
        { icon: "fa-bolt", text: "Tester chaque prise électrique, interrupteur, ampoule et appareil fourni — noter ce qui ne fonctionne pas" },
        { icon: "fa-door-open", text: "Vérifier serrures, poignées, volets, stores, fenêtres — noter tout ce qui coince, grince ou ne ferme pas" },
        { icon: "fa-thermometer-half", text: "Tester le chauffage, l'eau chaude et vérifier le bon fonctionnement de la VMC" },
        { icon: "fa-pen", text: "Ajouter ses réserves par écrit sur le document avant de signer — ne jamais signer sans lire et annoter si nécessaire" }
      ]
    },
    {
      id: "charges",
      title: "Guide des charges locatives",
      icon: "💶",
      color: "#059669",
      bgColor: "#ECFDF5",
      desc: "Ce que vous payez, pourquoi, et vos droits",
      items: [
        { icon: "fa-elevator", text: "Charges récupérables (locataire) : entretien ascenseur, ménage parties communes, eau froide, ordures ménagères" },
        { icon: "fa-fire", text: "Charges récupérables (locataire) : chauffage collectif, eau chaude collective, gardiennage, éclairage communs" },
        { icon: "fa-circle-xmark", text: "NON récupérables sur le locataire : ravalement de façade, remplacement chaudière collective, gros travaux de structure" },
        { icon: "fa-file-invoice", text: "Droit au justificatif : vous pouvez demander les justificatifs de charges dans les 6 mois suivant leur appel" },
        { icon: "fa-rotate", text: "Régularisation annuelle obligatoire : le propriétaire doit régulariser les charges une fois par an — tout trop-perçu vous est remboursé" }
      ]
    }
  ]
};
