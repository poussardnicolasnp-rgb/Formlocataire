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
      audioScript: "Bienvenue dans cette formation. Avant d'entrer dans le cœur du sujet, prenons le temps de comprendre les bases : les termes clés du logement en France, les documents à conserver précieusement, et les gestes indispensables à faire dès le premier jour dans votre logement.",
      content: `
        <h2>Bienvenue dans votre formation</h2>
        <p>Cette formation vous accompagne pas à pas pour devenir un locataire confiant et bien informé. Avant d'entrer dans le vif du sujet, commençons par les fondamentaux : les termes à connaître, les documents indispensables, et les gestes à faire dès le premier jour.</p>
        <div class="callout">🎯 <strong>Ce que vous allez apprendre ici :</strong> Les termes clés du logement en France, les équipements à identifier, les documents à conserver — et comment réussir votre état des lieux d'entrée dès le premier jour.</div>

        <h2>📖 Glossaire — Les termes essentiels</h2>
        <p>Le vocabulaire de la location peut sembler complexe au premier abord. Voici les termes que vous rencontrerez le plus souvent :</p>
        <div class="example-box">
          <div class="example-box-title">📋 Termes fondamentaux</div>
          <table class="responsibility-table">
            <thead><tr><th>Terme</th><th>Définition simple</th></tr></thead>
            <tbody>
              <tr><td><strong>Bail</strong></td><td>Le contrat signé entre vous et le propriétaire. Il fixe la durée, le loyer et les règles de la location.</td></tr>
              <tr><td><strong>Dépôt de garantie</strong></td><td>Somme versée à l'entrée (1 mois de loyer hors charges). Restituée à la sortie si le logement est en bon état.</td></tr>
              <tr><td><strong>Charges locatives</strong></td><td>Dépenses collectives récupérées par le propriétaire : eau, parties communes, gardien, ascenseur…</td></tr>
              <tr><td><strong>État des lieux</strong></td><td>Document décrivant l'état précis du logement à l'entrée et à la sortie. C'est votre protection principale.</td></tr>
              <tr><td><strong>VMC</strong></td><td>Ventilation Mécanique Contrôlée — système qui renouvelle l'air en permanence. Présent dans presque tous les logements construits après 1970.</td></tr>
              <tr><td><strong>DPE</strong></td><td>Diagnostic de Performance Énergétique — note de A à G indiquant la consommation d'énergie du logement.</td></tr>
              <tr><td><strong>Préavis</strong></td><td>Délai à respecter pour prévenir le propriétaire de votre départ (1 mois en zone tendue, 3 mois ailleurs).</td></tr>
              <tr><td><strong>LRAR</strong></td><td>Lettre Recommandée Avec Accusé de Réception — mode d'envoi requis pour les communications importantes.</td></tr>
              <tr><td><strong>Quittance de loyer</strong></td><td>Reçu mensuel attestant le paiement de votre loyer. Conservez-les toutes.</td></tr>
              <tr><td><strong>Réparations locatives</strong></td><td>Réparations d'entretien courant à votre charge, listées par le décret du 26 août 1987.</td></tr>
              <tr><td><strong>Grille de vétusté</strong></td><td>Tableau définissant la durée de vie théorique des équipements. Permet de calculer la part restant à votre charge en cas de dégradation.</td></tr>
            </tbody>
          </table>
        </div>

        <h2>🔧 Les équipements typiques d'un logement français</h2>
        <p>Un logement en France est équipé d'installations que vous devez savoir identifier et entretenir dès votre arrivée :</p>
        <ul>
          <li><strong>La VMC</strong> — Des grilles situées en cuisine, salle de bain et WC. Elle fonctionne 24h/24 et ne doit JAMAIS être coupée ni obstruée. C'est elle qui prévient les moisissures. Un chapitre complet lui est consacré plus loin.</li>
          <li><strong>La chaudière individuelle</strong> — Présente dans de nombreux logements pour le chauffage et l'eau chaude. Son entretien annuel par un professionnel est une <strong>obligation légale</strong> du locataire.</li>
          <li><strong>Les radiateurs à eau</strong> — Alimentés par la chaudière, ils nécessitent une purge annuelle pour fonctionner correctement.</li>
          <li><strong>Le tableau électrique (disjoncteur)</strong> — Situé dans l'entrée ou un placard. Il coupe le courant en cas de surcharge. <strong>Localisez-le dès votre arrivée.</strong></li>
          <li><strong>Le robinet d'arrêt d'eau</strong> — Généralement sous l'évier. Il coupe l'arrivée d'eau. <strong>C'est votre premier réflexe en cas de fuite.</strong></li>
          <li><strong>Le compteur Linky</strong> — Relève automatiquement votre consommation d'électricité. Notez son index à l'arrivée et au départ.</li>
        </ul>

        <h2>📁 Les 4 documents à conserver précieusement</h2>
        <ul>
          <li><strong>Le bail signé</strong> — Votre contrat de référence pour toute la durée de la location.</li>
          <li><strong>L'état des lieux d'entrée signé</strong> — Votre protection contre toute retenue injustifiée à la sortie. Ne le perdez jamais.</li>
          <li><strong>L'attestation d'assurance habitation</strong> — Obligatoire dès le premier jour. À présenter au propriétaire sur demande chaque année.</li>
          <li><strong>Les quittances de loyer</strong> — Preuve du paiement de chaque loyer. Utiles pour vos futures demandes de logement.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>L'assurance habitation est obligatoire</strong> dès la remise des clés, sous peine de résiliation du bail. Souscrivez-la <em>avant</em> d'entrer dans le logement.</div>

        <h2>🔍 L'état des lieux d'entrée — votre bouclier</h2>
        <p>C'est le document le plus important de toute votre location. Il décrit l'état exact du logement au moment où vous prenez possession des clés. C'est sur cette base que tout sera comparé à votre départ.</p>
        <div class="example-box">
          <div class="example-box-title">✅ Ce qu'il faut faire le jour de la remise des clés</div>
          <p><strong>1.</strong> Inspectez chaque pièce minutieusement — murs, plafonds, sols, fenêtres, équipements</p>
          <p><strong>2.</strong> Testez tout — chaque interrupteur, prise, robinet, fenêtre et appareil électroménager</p>
          <p><strong>3.</strong> Notez TOUS les défauts, même minimes (rayures, taches, poignées bancales, joints abîmés…)</p>
          <p><strong>4.</strong> Prenez des <strong>photos datées</strong> de chaque pièce et de chaque défaut signalé</p>
          <p><strong>5.</strong> Relevez les index des compteurs (eau, gaz, électricité) et inscrivez-les sur le document</p>
          <p><strong>6.</strong> Signez seulement quand vous avez tout vérifié et noté</p>
        </div>
        <div class="callout callout-success">💡 <strong>Le droit des 10 jours :</strong> Même après signature, vous avez <strong>10 jours</strong> pour envoyer par LRAR tout défaut constaté après coup — par exemple un problème de chauffage visible seulement à la première mise en chauffe.</div>
        <div class="callout callout-warning">⚠️ <strong>Sans état des lieux d'entrée,</strong> le logement est présumé vous avoir été remis en parfait état. Vous devrez le rendre dans le même état à la sortie. Insistez toujours pour en établir un.</div>

        <h2>📅 Vos premières démarches administratives</h2>
        <ul>
          <li><strong>Ouvrir vos contrats d'énergie</strong> (électricité, gaz) à votre nom dès la prise de possession</li>
          <li><strong>Souscrire l'assurance habitation</strong> avant même d'entrer dans le logement</li>
          <li><strong>Déclarer votre nouvelle adresse</strong> — impôts, CAF, Sécurité sociale, banque, employeur</li>
          <li><strong>Déclarer votre situation à la CAF dans les 30 jours</strong> si vous bénéficiez d'aides au logement (APL/ALS) — tout retard crée un trop-perçu à rembourser</li>
          <li><strong>Faire suivre votre courrier</strong> via La Poste pour ne rien manquer pendant la transition</li>
        </ul>
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
      audioScript: "Lorsque vous signez un bail et que vous entrez dans un logement, vous devenez bien plus qu'un simple occupant : vous en devenez le gardien au quotidien. Cette formation vous donnera toutes les clés pour être un locataire exemplaire, protéger votre caution, et vivre dans un environnement sain et agréable.",
      content: `
        <h2>Bienvenue dans votre formation</h2>
        <p>Lorsque vous signez un bail et entrez dans un logement, vous devenez bien plus qu'un simple occupant : vous en devenez le <strong>gardien au quotidien</strong>. Être locataire, c'est accepter une responsabilité — celle de prendre soin d'un espace qui vous est confié.</p>
        <p>Cette responsabilité n'est pas une contrainte : c'est un engagement qui vous protège autant que votre propriétaire. La loi française, notamment la <strong>loi du 6 juillet 1989</strong> et le <strong>décret du 26 août 1987</strong>, définit précisément ce que doit faire le locataire.</p>

        <div class="callout">💡 <strong>Le savoir, c'est se protéger.</strong> Comprendre vos obligations vous permettra d'éviter les conflits, de protéger votre caution et de vivre sereinement.</div>

        <h2>Le principe fondamental</h2>
        <p>Un principe simple structure toutes les obligations :</p>
        <ul>
          <li><strong>L'usage courant est à la charge du locataire</strong> — entretien, petites réparations, consommables.</li>
          <li><strong>La structure et les pannes importantes sont à la charge du propriétaire</strong> — toiture, canalisations encastrées, chaudière, etc.</li>
        </ul>

        <div class="example-box">
          <div class="example-box-title">📌 Exemples concrets</div>
          <table class="responsibility-table">
            <thead>
              <tr><th>✅ Locataire</th><th>🏠 Propriétaire</th></tr>
            </thead>
            <tbody>
              <tr><td>Joint de robinet qui fuit</td><td>Canalisation qui fuit dans le mur</td></tr>
              <tr><td>Ampoule grillée</td><td>Tableau électrique défaillant</td></tr>
              <tr><td>Poignée de porte cassée</td><td>Porte déformée par l'humidité structurelle</td></tr>
              <tr><td>Entretien annuel chaudière</td><td>Remplacement chaudière vétuste</td></tr>
              <tr><td>Murs salis par l'usage</td><td>Infiltration d'eau par le toit</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Les 4 piliers du bon locataire</h2>
        <ul>
          <li><strong>L'entretien régulier</strong> — Nettoyer, aspirer, dégraisser, détartrer. Ces gestes simples préservent le logement dans le temps et évitent les dégradations coûteuses.</li>
          <li><strong>L'utilisation correcte des équipements</strong> — Ne pas forcer sur les serrures, ne pas surcharger les prises, ne pas laisser l'eau couler inutilement, aérer correctement.</li>
          <li><strong>Les petites réparations</strong> — Remplacer une ampoule, un joint de robinet, une pile de sonnette, un bouton de meuble. Ces interventions sont simples et à votre charge.</li>
          <li><strong>La réactivité</strong> — Signaler rapidement tout problème important au propriétaire. Plus vous attendez, plus les dégâts s'aggravent — et plus votre responsabilité peut être engagée.</li>
        </ul>

        <h2>Ce que dit la loi — le décret du 26 août 1987</h2>
        <p>Ce décret liste précisément les réparations locatives. Voici les grandes catégories :</p>
        <ul>
          <li><strong>🪟 Ouvertures</strong> — Graissage des gonds, remplacement des poignées, serrures et joints d'étanchéité.</li>
          <li><strong>🚿 Sanitaires</strong> — Détartrage des robinets, remplacement des joints, débouchage des évacuations.</li>
          <li><strong>⚡ Électricité</strong> — Remplacement des prises, interrupteurs, ampoules, fusibles.</li>
          <li><strong>🌡️ Chauffage</strong> — Entretien annuel obligatoire de la chaudière, remplacement des piles de thermostat.</li>
          <li><strong>🏠 Murs, sols, plafonds</strong> — Rebouchage de petits trous, retouches de peinture mineures, raccords de papier peint.</li>
        </ul>

        <div class="callout callout-success">✅ <strong>Bon à savoir :</strong> Si un problème est causé par la <em>vétusté normale</em> (le logement vieillit naturellement), c'est le propriétaire qui paie. La "grille de vétusté" définit la durée de vie des équipements.</div>

        <h2>Votre relation avec le propriétaire</h2>
        <p>La relation locataire-propriétaire repose sur la <strong>confiance et la communication</strong>. En cas de problème que vous ne pouvez pas résoudre seul :</p>
        <ul>
          <li>Signalez-le par <strong>écrit</strong> (email ou courrier recommandé) — cela constitue une preuve.</li>
          <li>Soyez précis dans la description du problème.</li>
          <li>Conservez une copie de tous vos échanges.</li>
          <li>N'attendez pas : un petit problème non signalé peut devenir un gros litige.</li>
        </ul>

        <div class="callout callout-warning">⚠️ <strong>Attention :</strong> Si vous effectuez des réparations qui étaient à la charge du propriétaire sans son accord, vous ne pourrez généralement pas vous faire rembourser — sauf urgence avérée documentée par écrit.</div>

        <h2>📊 La grille de vétusté — ce que vous ne payez pas</h2>
        <p>La <strong>grille de vétusté</strong> (instaurée par la loi ALUR 2014) est un tableau qui définit la durée de vie théorique des équipements. Elle protège le locataire contre des demandes de remboursement disproportionnées.</p>
        <div class="example-box">
          <div class="example-box-title">📋 Durées de vie théoriques (exemples)</div>
          <table class="responsibility-table">
            <thead><tr><th>Élément</th><th>Durée de vie</th><th>Ce que ça signifie</th></tr></thead>
            <tbody>
              <tr><td>Peintures intérieures</td><td>7 ans</td><td>Une peinture de 5 ans → vous ne remboursez que 2/7 du coût</td></tr>
              <tr><td>Papier peint</td><td>7 ans</td><td>Un papier de 8 ans qui se décolle → propriétaire à 100%</td></tr>
              <tr><td>Moquette</td><td>7 ans</td><td>Moquette de 7 ans usée → propriétaire à 100%</td></tr>
              <tr><td>Parquet vitrifié</td><td>10 ans</td><td>Parquet de 6 ans rayé → vous remboursez 4/10 du coût</td></tr>
              <tr><td>Robinetterie</td><td>15 ans</td><td>Robinet de 12 ans → vous ne payez que 3/15 du remplacement</td></tr>
            </tbody>
          </table>
        </div>
        <div class="callout callout-success">✅ <strong>Bon à savoir :</strong> Si votre propriétaire ne peut pas prouver l'âge exact des équipements, la grille de vétusté s'applique par défaut à votre avantage.</div>
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
      audioScript: "Dans ce chapitre, nous allons détailler précisément ce que vous devez faire dans chaque pièce de votre logement. De la salle de bain à la cuisine, des sols aux fenêtres, vous aurez une vision complète de vos obligations.",
      content: `
        <h2>Vue d'ensemble de vos obligations</h2>
        <p>L'entretien d'un logement se décompose en <strong>zones et équipements</strong>. Chaque élément a ses spécificités. Cette approche par zone vous permettra de ne rien oublier et de créer une routine efficace.</p>

        <div class="callout">🎯 <strong>Méthode recommandée :</strong> Abordez l'entretien zone par zone plutôt que de tout faire en même temps. C'est plus efficace et moins décourageant.</div>

        <h2>🪟 Fenêtres et ouvertures</h2>
        <p>Les fenêtres et portes sont des éléments mécaniques qui nécessitent un entretien régulier :</p>
        <ul>
          <li><strong>Nettoyer les vitres</strong> — Au moins 2 fois par an, avec un produit adapté ou du vinaigre dilué.</li>
          <li><strong>Entretenir les rails</strong> — Aspirer les rails de fenêtres coulissantes, éliminer les débris qui empêchent le bon glissement.</li>
          <li><strong>Graisser les gonds</strong> — Une légère application de graisse ou d'huile de paraffine prévient les grincements et l'usure.</li>
          <li><strong>Remplacer les joints d'étanchéité</strong> — Des joints usés laissent passer l'air et l'humidité : à surveiller régulièrement.</li>
          <li><strong>Remplacer les poignées</strong> — Si une poignée se désolidarise par l'usure normale, c'est au locataire de la remplacer.</li>
        </ul>

        <h2>🚿 Salle de bain</h2>
        <p>La salle de bain est la pièce la plus exposée à l'humidité et au calcaire. C'est aussi la pièce qui se dégrade le plus vite si elle est mal entretenue.</p>
        <ul>
          <li><strong>Détartrer les robinets et la douche</strong> — Le calcaire abîme les mécanismes. Utilisez du vinaigre blanc chaque mois.</li>
          <li><strong>Surveiller et remplacer les joints de carrelage</strong> — Des joints noircis ou décollés laissent infiltrer l'eau derrière les parois.</li>
          <li><strong>Nettoyer et déboucher les siphons</strong> — Régulièrement, avec de l'eau bouillante, du bicarbonate et du vinaigre.</li>
          <li><strong>Entretenir le rideau ou la paroi de douche</strong> — Nettoyer, remplacer si trop dégradé (c'est un consommable).</li>
          <li><strong>Laver les WC</strong> — Détartrer régulièrement, remplacer l'abattant si cassé.</li>
        </ul>

        <div class="callout callout-warning">⚠️ <strong>Les deux ennemis de la salle de bain :</strong> Le calcaire attaque les robinets et les joints. L'humidité favorise les moisissures. Agir sur ces deux fronts protège votre caution.</div>

        <h2>🍳 Cuisine</h2>
        <p>La cuisine est exposée aux graisses, aux odeurs et aux débris alimentaires. Un entretien régulier évite les incrustations difficiles à éliminer :</p>
        <ul>
          <li><strong>Dégraisser les surfaces</strong> — Plan de travail, crédence, murs autour de la plaque de cuisson.</li>
          <li><strong>Nettoyer les filtres de hotte</strong> — Les filtres à graisse doivent être lavés tous les mois. Des filtres bouchés sont un risque d'incendie.</li>
          <li><strong>Entretenir le réfrigérateur</strong> — Dégivrer régulièrement si nécessaire, nettoyer l'intérieur.</li>
          <li><strong>Nettoyer le four</strong> — Après chaque utilisation intensive, dégraisser les parois pour éviter les incrustations carbonisées.</li>
          <li><strong>Vérifier les joints du réfrigérateur</strong> — Des joints qui ne ferment plus correctement surconsomment de l'énergie et s'usent prématurément.</li>
          <li><strong>Entretenir l'évier</strong> — Détartrer, nettoyer le siphon, vérifier l'état du joint de bonde.</li>
        </ul>

        <h2>🏠 Sols et surfaces</h2>
        <ul>
          <li><strong>Aspirer et laver</strong> — Chaque type de sol a ses besoins : parquet (nettoyage à sec ou légèrement humide), carrelage (lavage humide), moquette (aspiration régulière).</li>
          <li><strong>Traiter les petites rayures du parquet</strong> — Une cire ou un produit spécifique prévient l'usure visible.</li>
          <li><strong>Nettoyer les murs</strong> — Enlever les traces de doigts, les éclaboussures, les taches. Une peinture lessivable facilite cette opération.</li>
          <li><strong>Reboucher les petits trous</strong> — Trous de vis ou de chevilles : enduit de rebouchage, ponçage, retouche de peinture.</li>
        </ul>

        <h2>⚡ Équipements et installations</h2>
        <ul>
          <li><strong>Remplacer les ampoules</strong> — C'est la réparation la plus courante, entièrement à votre charge.</li>
          <li><strong>Entretenir les prises et interrupteurs</strong> — Les nettoyer, remplacer un interrupteur cassé si l'usure est liée à votre usage.</li>
          <li><strong>Entretien annuel de la chaudière</strong> — <em>Obligatoire par la loi</em>, à faire réaliser par un professionnel avant l'hiver. Conservez l'attestation.</li>
          <li><strong>Détartrer le chauffe-eau</strong> — En zone calcaire, un détartrage périodique prolonge la durée de vie.</li>
          <li><strong>Entretenir VMC</strong> — Nettoyer les bouches d'aération régulièrement pour maintenir la ventilation.</li>
        </ul>

        <h2>🌿 Espaces extérieurs (si applicable)</h2>
        <ul>
          <li><strong>Balcon/terrasse</strong> — Nettoyage régulier, débroussaillage, éviter l'accumulation d'eau.</li>
          <li><strong>Jardin</strong> — Tonte de la pelouse, taille des haies et arbustes, désherbage des allées.</li>
          <li><strong>Cave/parking</strong> — Maintenir propre et dégagé, ne pas stocker de produits dangereux ou inflammables.</li>
        </ul>

        <h2>❌ Ce que le locataire NE doit PAS faire seul</h2>
        <ul>
          <li>Intervenir sur l'installation électrique (tableau, câblage, disjoncteur principal)</li>
          <li>Réparer ou remplacer une chaudière, un ballon d'eau chaude, un cumulus</li>
          <li>Modifier la structure du logement (murs, cloisons, fenêtres)</li>
          <li>Réaliser des travaux importants sans accord écrit du propriétaire</li>
        </ul>

        <div class="callout callout-success">✅ <strong>Rappel des responsabilités du propriétaire :</strong> Sécurité du logement, grosses réparations (toiture, façade, canalisations encastrées), remplacement des équipements vétustes, pannes importantes d'équipements collectifs.</div>

        <h2>🏗️ Entretenir selon les matériaux</h2>
        <p>Chaque logement a ses propres surfaces. Utiliser le mauvais produit peut provoquer des dégradations irréversibles.</p>
        <div class="example-box">
          <div class="example-box-title">⚠️ Matériaux courants et erreurs à éviter</div>
          <table class="responsibility-table">
            <thead><tr><th>Surface</th><th>Méthode correcte</th><th>À éviter absolument</th></tr></thead>
            <tbody>
              <tr><td><strong>Parquet flottant / stratifié</strong></td><td>Chiffon à peine humide, produit spécifique parquet</td><td>Eau en excès, vapeur, ammoniaque → fait gonfler et soulève les lames</td></tr>
              <tr><td><strong>Carrelage grès cérame mat</strong></td><td>Détergent neutre dilué, rinçage soigné</td><td>Vinaigre blanc, acides → attaque la surface poreuse</td></tr>
              <tr><td><strong>Papier peint</strong></td><td>Chiffon à peine humide, tamponner doucement</td><td>Eau, vapeur, spray → gonfle et décolle le papier</td></tr>
              <tr><td><strong>Peinture lessivable</strong></td><td>Éponge douce + eau tiède savonneuse</td><td>Brosse abrasive, javel concentrée → attaque le liant</td></tr>
              <tr><td><strong>Joints silicone douche</strong></td><td>Bicarbonate ou anti-moisissures spécifique</td><td>Javel répétée → corrode le silicone sur le long terme</td></tr>
            </tbody>
          </table>
        </div>

        <h2>🏢 Vie en copropriété — règles à connaître</h2>
        <ul>
          <li><strong>Le règlement de copropriété s'impose au locataire</strong> — Il peut notamment interdire les barbecues sur les balcons, imposer des horaires de bruit, réglementer les animaux.</li>
          <li><strong>Le bruit nocturne commence à 22h</strong> (article R1334-31 du Code de la santé publique) — votre responsabilité est engagée pour les nuisances causées par vous ou vos invités.</li>
          <li><strong>Les parties communes</strong> (couloirs, escaliers, hall) — il est interdit d'y déposer des affaires (vélos, poussettes, poubelles). Cela peut entraîner des amendes.</li>
          <li><strong>Travaux bruyants</strong> — Généralement interdits le dimanche et les jours fériés, avant 8h ou après 20h en semaine. Vérifiez votre règlement.</li>
          <li><strong>Le tri sélectif</strong> — Respectez les codes couleurs de votre commune : bac jaune (emballages plastique, cartons, canettes), bac vert (verre uniquement), bac noir (ordures ménagères). Les règles varient selon les villes.</li>
        </ul>
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
      audioScript: "Un logement sain est un logement bien aéré, protégé de l'humidité et des nuisibles. Dans ce chapitre, vous allez apprendre les gestes simples qui font toute la différence entre un logement agréable et un logement qui se dégrade.",
      content: `
        <h2>Pourquoi l'hygiène est-elle essentielle ?</h2>
        <p>Un logement mal entretenu sur le plan hygiénique peut rapidement devenir une source de problèmes de santé (allergies, voies respiratoires, infections) et de dégradations coûteuses (moisissures, nuisibles, murs abîmés). La bonne nouvelle : quelques gestes simples et réguliers suffisent.</p>

        <h2>🌬️ L'aération : le geste le plus important</h2>
        <p>Aérer votre logement est le geste préventif numéro un. Il est simple, gratuit, et d'une efficacité redoutable.</p>
        <ul>
          <li><strong>Aérer chaque matin, 10 minutes minimum</strong> — Ouvrir les fenêtres en grand, idéalement en créant un courant d'air entre deux pièces.</li>
          <li><strong>Aérer après la douche</strong> — Garder la porte de salle de bain ouverte ou allumer la VMC après chaque douche, pendant au moins 30 minutes.</li>
          <li><strong>Aérer après la cuisine</strong> — Utiliser la hotte et ouvrir une fenêtre pour évacuer vapeurs et odeurs.</li>
          <li><strong>Ne jamais sécher le linge dans une pièce fermée</strong> — Cela libère jusqu'à 2 litres d'eau dans l'air. Aérez impérativement pendant le séchage.</li>
        </ul>

        <div class="callout">💧 <strong>Le saviez-vous ?</strong> Une famille de 4 personnes produit en moyenne 10 à 15 litres de vapeur d'eau par jour dans son logement (respiration, cuisine, douches, linge). Sans aération, toute cette humidité s'accumule dans les murs.</div>

        <h2>💧 Gérer l'humidité</h2>
        <p>L'humidité excessive est l'ennemi principal de votre logement. Elle provoque :</p>
        <ul>
          <li>L'apparition de moisissures sur les murs et plafonds</li>
          <li>La dégradation des matériaux (bois, peinture, joint)</li>
          <li>Des problèmes respiratoires et allergiques</li>
          <li>Des odeurs désagréables et persistantes</li>
        </ul>
        <p><strong>Comment contrôler l'humidité :</strong></p>
        <ul>
          <li>Maintenir une température stable (ne pas trop chauffer, ne pas laisser le logement trop froid)</li>
          <li>Utiliser un hygromètre pour surveiller le taux d'humidité (idéal : 40-60%)</li>
          <li>Éviter de poser les meubles collés contre les murs extérieurs — laissez un espace de quelques centimètres pour la circulation d'air</li>
          <li>En cas de condensation sur les fenêtres, éponger et aérer immédiatement</li>
        </ul>

        <h2>🦠 Prévenir et traiter les moisissures</h2>
        <p>Les moisissures apparaissent dans les zones humides mal ventilées : coins de salles de bain, autour des fenêtres, derrière les meubles collés aux murs.</p>

        <div class="example-box">
          <div class="example-box-title">🔍 Identifier les zones à risque</div>
          <p>Coins de murs, bord des fenêtres, derrière les rideaux, dessous des tapis, derrière les meubles.</p>
        </div>

        <p><strong>Pour traiter une moisissure existante :</strong></p>
        <ul>
          <li>Porter un masque et des gants</li>
          <li>Frotter avec une solution de bicarbonate de soude ou du vinaigre blanc non dilué</li>
          <li>Laisser agir 30 minutes, puis rincer et sécher</li>
          <li>Aérer abondamment la pièce</li>
          <li>Si la moisissure revient ou couvre une grande surface : prévenir le propriétaire par écrit</li>
        </ul>

        <div class="callout callout-warning">⚠️ <strong>Important :</strong> Si les moisissures reviennent malgré vos actions, cela peut indiquer un problème structurel (pont thermique, infiltration). Dans ce cas, c'est au propriétaire d'intervenir. Documentez avec des photos et signalez par écrit.</div>

        <h2>🐜 Prévenir les nuisibles</h2>
        <p>Cafards, souris, fourmis, punaises de lit... Ces indésirables arrivent quand les conditions leur sont favorables. La prévention est bien plus simple que le traitement.</p>

        <p><strong>Règles de base :</strong></p>
        <ul>
          <li>Ne laisser aucun reste de nourriture accessible — stocker dans des boîtes hermétiques</li>
          <li>Vider les poubelles régulièrement et utiliser des poubelles avec couvercle</li>
          <li>Ne pas laisser traîner de vaisselle sale plus de quelques heures</li>
          <li>Vérifier les joints de porte et les petites fissures (entrées potentielles)</li>
          <li>Nettoyer derrière et sous les meubles de cuisine régulièrement</li>
        </ul>

        <p><strong>En cas de présence avérée :</strong></p>
        <ul>
          <li>Agir immédiatement avec des produits adaptés (pièges, répulsifs naturels)</li>
          <li>Si l'infestation est importante ou touche plusieurs logements : prévenir le propriétaire ou le syndic</li>
          <li>Pour les punaises de lit : ne rien déplacer, contacter un professionnel</li>
        </ul>

        <h2>🌡️ Qualité de l'air intérieur</h2>
        <p>L'air intérieur peut être 5 fois plus pollué que l'air extérieur. Pour améliorer la qualité de l'air chez vous :</p>
        <ul>
          <li>Aérer matin et soir — c'est la solution la plus efficace</li>
          <li>Éviter les produits ménagers toxiques — préférer des alternatives naturelles</li>
          <li>Entretenir les filtres de VMC et de climatisation</li>
          <li>Éviter de fumer à l'intérieur</li>
          <li>Choisir des plantes dépolluantes (pothos, ficus, chlorophytum)</li>
        </ul>

        <div class="callout callout-success">🌱 <strong>Astuce naturelle :</strong> Le bicarbonate de soude absorbe les odeurs — placez un petit bol ouvert dans le réfrigérateur ou dans les placards pour neutraliser les mauvaises odeurs.</div>

        <h2>📅 L'entretien par saison</h2>
        <p>En France, les saisons imposent des gestes spécifiques. Anticiper, c'est éviter les problèmes.</p>
        <div class="example-box">
          <div class="example-box-title">🗓️ Ce qu'il faut faire chaque saison</div>
          <p><strong>🍂 Automne (sept-oct) :</strong> Faire réviser la chaudière avant l'hiver. Purger les radiateurs. Vérifier l'étanchéité des fenêtres (joints usés = facture de chauffage élevée). Nettoyer les bouches VMC.</p>
          <p><strong>❄️ Hiver (nov-mars) :</strong> Aérer 10 min/jour même par grand froid — c'est indispensable. Maintenir 16-18°C dans toutes les pièces pour éviter la condensation. Ne jamais sécher le linge sans ventiler. En cas d'absence longue : couper l'eau et purger les canalisations si grand gel prévu.</p>
          <p><strong>🌸 Printemps (avr-mai) :</strong> Grand ménage d'aération intensive. Vérifier salle de bain et cuisine pour les moisissures nascentes. Première tonte/taille du jardin. Nettoyer les filtres si climatisation.</p>
          <p><strong>☀️ Été (juin-août) :</strong> Fermer volets et rideaux en journée pour conserver la fraîcheur (geste souvent méconnu). Ouvrir les fenêtres la nuit pour ventiler. Traitement préventif anti-moustiques et nuisibles si nécessaire selon la région.</p>
        </div>
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
      audioScript: "Le ménage n'est pas une question de force ou de temps, c'est une question d'organisation. Dans ce chapitre, vous allez découvrir une méthode simple et efficace pour maintenir votre logement propre au quotidien, sans y passer vos week-ends entiers.",
      content: `
        <h2>La philosophie du ménage efficace</h2>
        <p>Le ménage n'est pas une corvée si l'on adopte la bonne méthode. Le secret : la <strong>régularité</strong>. Un peu chaque jour vaut mieux que tout faire en une fois. Cette approche évite les incrustations, préserve les matériaux et rend le ménage de fond beaucoup plus rapide.</p>

        <div class="callout">⏰ <strong>Règle d'or :</strong> 15 minutes de ménage quotidien = 2 heures de ménage de fond évitées chaque mois.</div>

        <h2>📅 Le ménage quotidien (15-20 min)</h2>
        <p>Ces gestes simples, pratiqués chaque jour, maintiennent le logement dans un état satisfaisant :</p>
        <ul>
          <li><strong>Aérer toutes les pièces</strong> — Ouvrir les fenêtres dès le matin, 10 minutes minimum.</li>
          <li><strong>Faire la vaisselle ou vider le lave-vaisselle</strong> — Ne jamais laisser de vaisselle sale plus d'une nuit.</li>
          <li><strong>Essuyer les surfaces utilisées</strong> — Plan de travail de cuisine, table à manger, lavabo.</li>
          <li><strong>Ranger ce qui traîne</strong> — Chaque objet à sa place : vêtements, courrier, jouets.</li>
          <li><strong>Passer un coup de balai rapide</strong> — Dans la cuisine et les zones de passage.</li>
        </ul>

        <h2>📆 Le ménage hebdomadaire (1h-1h30)</h2>
        <p>Une fois par semaine, consacrez du temps à un nettoyage plus approfondi :</p>
        <ul>
          <li><strong>Aspirer toutes les pièces</strong> — Y compris sous les meubles et dans les coins.</li>
          <li><strong>Laver les sols</strong> — Avec un produit adapté à votre revêtement (parquet, carrelage, vinyle).</li>
          <li><strong>Nettoyer la salle de bain en profondeur</strong> — Baignoire/douche, WC, lavabo, sol, miroir.</li>
          <li><strong>Nettoyer les surfaces de cuisine</strong> — Façades de placard, surfaces de cuisson, micro-ondes.</li>
          <li><strong>Faire la poussière</strong> — Étagères, TV, cadres, dessus de meubles.</li>
          <li><strong>Changer les torchons et serviettes</strong> — Lavage en machine.</li>
        </ul>

        <h2>🗓️ Le ménage mensuel (2-3h)</h2>
        <p>Un nettoyage de fond mensuel permet de traiter les zones souvent oubliées :</p>
        <ul>
          <li><strong>Nettoyer les vitres</strong> — Intérieur et si possible extérieur.</li>
          <li><strong>Vider et nettoyer les placards et tiroirs</strong> — Retirer tout, nettoyer le fond, remettre en ordre.</li>
          <li><strong>Nettoyer le réfrigérateur</strong> — Vider entièrement, nettoyer les bacs, essuyer les parois.</li>
          <li><strong>Dégraisser le four</strong> — Parois, grille, lèche-frite.</li>
          <li><strong>Laver les filtres de hotte</strong> — Démonter et tremper dans de l'eau chaude avec du liquide vaisselle.</li>
          <li><strong>Nettoyer derrière et sous les meubles</strong> — Zones d'accumulation de poussière et de débris.</li>
          <li><strong>Entretenir les joints de salle de bain</strong> — Vérifier l'état, nettoyer en profondeur.</li>
        </ul>

        <h2>🗃️ Le grand ménage saisonnier (demi-journée)</h2>
        <p>2 fois par an (printemps et automne), consacrez une demi-journée au grand ménage :</p>
        <ul>
          <li>Laver les rideaux et voilages</li>
          <li>Nettoyer les canapés et fauteuils (aspirateur, nettoyage à sec ou vapeur)</li>
          <li>Vider et réorganiser les penderies</li>
          <li>Désinfecter les poignées de portes, télécommandes, claviers</li>
          <li>Vérifier et nettoyer les prises aération et VMC</li>
          <li>Faire l'inventaire des petites réparations à effectuer</li>
        </ul>

        <h2>🏠 Nettoyage par zone</h2>

        <h3>🍳 Cuisine</h3>
        <ul>
          <li>Dégraisser la plaque de cuisson et la crédence après chaque utilisation</li>
          <li>Nettoyer le plan de travail avec un produit désinfectant</li>
          <li>Vider et laver la poubelle chaque semaine (ne pas laisser d'odeurs)</li>
          <li>Détartrer régulièrement la cafetière et la bouilloire</li>
        </ul>

        <h3>🚿 Salle de bain</h3>
        <ul>
          <li>Essuyer la vitre de douche après chaque utilisation pour éviter le calcaire</li>
          <li>Passer un coup d'éponge sur le lavabo chaque jour</li>
          <li>Nettoyer les WC 2 fois par semaine minimum</li>
          <li>Vérifier l'état des joints tous les mois</li>
        </ul>

        <h3>🛏️ Chambre</h3>
        <ul>
          <li>Changer les draps toutes les 2 semaines (ou plus souvent)</li>
          <li>Laver les oreillers et couettes 2 fois par an</li>
          <li>Aspirer le matelas régulièrement</li>
          <li>Dépoussiérer têtes de lit, tables de chevet, cadres</li>
        </ul>

        <h3>🛋️ Salon</h3>
        <ul>
          <li>Dépoussiérer les surfaces (télé, étagères, cadres)</li>
          <li>Aspirer canapé et coussins</li>
          <li>Nettoyer les vitres de fenêtres côté intérieur</li>
          <li>Traiter les taches sur les textiles rapidement</li>
        </ul>

        <h2>🌿 Les produits naturels : efficaces et économiques</h2>
        <p>Trois produits suffisent pour 90% de votre ménage :</p>
        <ul>
          <li><strong>Vinaigre blanc</strong> — Détartrant, désinfectant, dégraissant dilué. Idéal pour salle de bain, vitres, robinets.</li>
          <li><strong>Bicarbonate de soude</strong> — Abrasif doux, absorbeur d'odeurs, dégraissant en pâte. Idéal pour four, WC, joints.</li>
          <li><strong>Savon noir</strong> — Nettoyant multiusage pour sols, surfaces, cuisine. Naturel et biodégradable.</li>
        </ul>

        <div class="callout callout-success">💰 <strong>Économie :</strong> Ces 3 produits remplacent une dizaine de produits ménagers chimiques et coûtent une fraction du prix. En bonus : ils sont sans danger pour votre santé et l'environnement.</div>

        <div class="callout callout-warning">⚠️ <strong>À ne jamais mélanger :</strong> Vinaigre et eau de javel, bicarbonate et eau de javel — ces mélanges produisent des gaz toxiques. En cas de doute, utilisez un produit à la fois.</div>
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
      duration: "16 min",
      points: 50,
      badgeId: "gestionnaire",
      audioScript: "Un problème non traité devient un problème coûteux. Dans ce chapitre, vous allez apprendre à réagir rapidement et efficacement face aux situations les plus courantes : fuite d'eau, problème électrique, canalisation bouchée, moisissures. La clé : agir vite et savoir quand appeler à l'aide.",
      content: `
        <h2>La règle d'or : agir vite</h2>
        <p>Devant n'importe quel problème dans votre logement, une règle s'applique toujours : <strong>agir rapidement</strong>. Un problème ignoré empire presque systématiquement. Une petite fuite devient une inondation. Une moisissure localisée envahit un mur entier. Un circuit surchargé provoque un incendie.</p>

        <div class="callout">🚨 <strong>Principe universel :</strong> Identifiez le problème → Évaluez sa gravité → Agissez si vous pouvez → Signalez si c'est au propriétaire → Documentez toujours.</div>

        <h2>💧 Fuite d'eau — Procédure d'urgence</h2>
        <p>Une fuite d'eau est une urgence qui peut causer des dégâts considérables en quelques heures.</p>

        <div class="example-box">
          <div class="example-box-title">🔴 Étapes en cas de fuite</div>
          <p><strong>1.</strong> Couper l'eau immédiatement (robinet d'arrêt sous l'évier, ou vanne principale)</p>
          <p><strong>2.</strong> Si l'eau touche des équipements électriques : couper également le disjoncteur de la pièce</p>
          <p><strong>3.</strong> Éponger et limiter les dégâts (serviettes, seaux)</p>
          <p><strong>4.</strong> Identifier l'origine de la fuite (joint, raccord, robinet, tuyau)</p>
          <p><strong>5.</strong> Si réparable par vous : réparer (joint, collier de serrage)</p>
          <p><strong>6.</strong> Si important : appeler un plombier et prévenir le propriétaire par écrit</p>
          <p><strong>7.</strong> Prévenir votre assurance habitation en cas de dégât des eaux</p>
        </div>

        <ul>
          <li><strong>Robinet d'arrêt</strong> — Situez-le dès votre emménagement. Il est généralement sous l'évier ou derrière les WC.</li>
          <li><strong>Vanne principale</strong> — Dans le couloir, la cave ou le placard de la colonne montante. En cas de fuite majeure, c'est votre bouée de sauvetage.</li>
          <li><strong>Dégât des eaux</strong> — Photographiez immédiatement tout dégât pour votre déclaration d'assurance.</li>
        </ul>

        <h2>⚡ Problèmes électriques</h2>
        <p>Les problèmes électriques peuvent être dangereux. La prudence est primordiale.</p>
        <ul>
          <li><strong>Disjoncteur qui saute</strong> — Identifier l'appareil en cause (surcharge), débrancher, puis ré-enclencher le disjoncteur. Si ça resaute : appeler un électricien.</li>
          <li><strong>Prise qui ne fonctionne plus</strong> — Vérifier si le disjoncteur différentiel s'est déclenché. Le réenclencher si tel est le cas. Sinon, signaler au propriétaire.</li>
          <li><strong>Odeur de brûlé</strong> — Urgence absolue : couper le disjoncteur général, ne pas utiliser les équipements, appeler un électricien immédiatement.</li>
          <li><strong>Étincelles</strong> — Couper le courant, évacuer si nécessaire, appeler le 18 (pompiers) en cas de début d'incendie.</li>
        </ul>

        <div class="callout callout-warning">⚠️ <strong>Ne jamais :</strong> Intervenir sur le tableau électrique soi-même, utiliser une prise avec du ruban adhésif, surcharger une multiprise, ou ignorer une odeur de brûlé.</div>

        <h2>🔩 Canalisation bouchée</h2>
        <p>Un évier, une douche ou des WC bouchés se traitent généralement facilement avant de devenir un gros problème :</p>

        <h3>Méthode naturelle (à essayer en premier)</h3>
        <ul>
          <li>Verser une demi-tasse de bicarbonate dans le siphon</li>
          <li>Ajouter un demi-verre de vinaigre blanc</li>
          <li>Laisser agir 30 minutes (la réaction dissout les graisses et résidus)</li>
          <li>Rincer à l'eau bouillante</li>
        </ul>

        <h3>Méthode mécanique</h3>
        <ul>
          <li>Utiliser une ventouse en créant une bonne étanchéité et en pompant vigoureusement</li>
          <li>Démonter et nettoyer le siphon (avec une bassine dessous)</li>
          <li>Utiliser un furet (ressort de débouchage) pour les bouchons profonds</li>
        </ul>

        <p>Si aucune méthode ne fonctionne, le bouchon est peut-être plus profond : prévenir le propriétaire, surtout si d'autres locataires sont affectés (colonne montante).</p>

        <h2>🦠 Traiter les moisissures</h2>
        <p>En complément du chapitre 3, voici le protocole complet :</p>
        <ul>
          <li><strong>Protection</strong> — Gants, masque, lunettes si la surface est grande</li>
          <li><strong>Nettoyage</strong> — Vinaigre blanc non dilué ou mélange eau/bicarbonate. Frotter avec une brosse</li>
          <li><strong>Rinçage et séchage</strong> — Rincer à l'eau, sécher soigneusement</li>
          <li><strong>Traitement préventif</strong> — Appliquer un anti-moisissures naturel (tea tree oil dilué)</li>
          <li><strong>Aération renforcée</strong> — Pendant 48h après le traitement</li>
        </ul>

        <h2>🔒 Serrure bloquée</h2>
        <ul>
          <li>Essayer de lubrifier le barillet avec de la graphite en poudre ou de la cire de bougie</li>
          <li>Vérifier que la porte n'est pas gonflée (humidité, chaleur) — tenter une légère pression</li>
          <li>Si vous êtes enfermé dehors : appeler un serrurier (choisir une entreprise certifiée)</li>
          <li>Conserver le bon de serrurier pour preuve</li>
        </ul>

        <h2>🧰 Le kit d'urgence du locataire</h2>
        <p>Préparez ces outils et informations dès votre emménagement :</p>
        <ul>
          <li>📋 Coordonnées du propriétaire ou gestionnaire</li>
          <li>📋 Numéro de votre assurance habitation</li>
          <li>🔧 Tournevis (plat et cruciforme), clé à molette</li>
          <li>🔧 Joints de rechange pour robinets</li>
          <li>🔧 Ruban Téflon pour filetages</li>
          <li>🔧 Fusibles de rechange</li>
          <li>💡 Ampoules de rechange (plusieurs puissances)</li>
          <li>🪠 Ventouse</li>
          <li>🧴 Bicarbonate, vinaigre blanc</li>
        </ul>

        <div class="callout callout-success">📞 <strong>Numéros d'urgence à mémoriser :</strong> 15 (SAMU), 17 (Police), 18 (Pompiers), 112 (Urgences européen), 190 (ENEDIS urgences électriques), 0800 011 316 (GRDF urgences gaz).</div>

        <h2>🚨 Fuite de gaz — procédure absolue</h2>
        <div class="example-box">
          <div class="example-box-title">🔴 En cas d'odeur de gaz — ne pas improviser</div>
          <p><strong>1.</strong> Ne pas allumer ni éteindre aucun appareil électrique (interrupteur, téléphone, ascenseur)</p>
          <p><strong>2.</strong> Fermer le robinet de gaz (derrière la cuisinière ou la chaudière)</p>
          <p><strong>3.</strong> Ouvrir toutes les fenêtres grand</p>
          <p><strong>4.</strong> Quitter le logement immédiatement</p>
          <p><strong>5.</strong> Appeler <strong>GRDF : 0800 011 316</strong> (gratuit, 24h/24) depuis l'extérieur</p>
          <p><strong>6.</strong> Ne pas réintégrer le logement avant validation par les secours</p>
        </div>

        <h2>🌧️ Dégât des eaux du voisin du dessus</h2>
        <ul>
          <li>Photographier immédiatement les dégâts (plafond, murs, mobilier)</li>
          <li>Contacter votre voisin du dessus pour l'alerter</li>
          <li>Déclarer le sinistre à votre assurance dans les <strong>5 jours ouvrables</strong> (48h en cas de vol)</li>
          <li>Remplir un constat amiable de dégât des eaux avec le voisin si possible</li>
          <li>Prévenir le propriétaire par écrit avec photos</li>
          <li>Conserver toutes les preuves : photos, courriers, devis de réparation</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Délai impératif :</strong> Déclarer un sinistre à votre assurance après le délai légal peut entraîner le refus d'indemnisation. Ne tardez jamais.</div>
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
          question: "Que faire si l'odeur de brûlé provient d'une prise électrique ?",
          options: [
            "Continuer à utiliser la prise prudemment",
            "Mettre du ruban adhésif sur la prise",
            "Couper le disjoncteur général et appeler un électricien immédiatement — c'est une urgence",
            "Attendre de voir si l'odeur disparaît"
          ],
          correct: 2,
          explanation: "Une odeur de brûlé dans une installation électrique est une urgence absolue : risque d'incendie. Couper le disjoncteur général et appeler un électricien immédiatement."
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
          question: "Pourquoi est-il important d'agir rapidement face à un problème dans le logement ?",
          options: [
            "Pour impressionner le propriétaire",
            "Un problème non traité s'aggrave et devient bien plus coûteux à résoudre",
            "C'est obligatoire par la loi",
            "Ce n'est pas vraiment important"
          ],
          correct: 1,
          explanation: "Tout problème non traité empire avec le temps : une petite fuite devient une inondation, une moisissure envahit un mur entier. Agir tôt limite les dégâts et les coûts."
        },
        {
          question: "Que doit-on TOUJOURS faire après un incident (fuite, dégât) ?",
          options: [
            "Réparer sans en parler à personne",
            "Photographier les dégâts et signaler par écrit au propriétaire et à son assurance",
            "Attendre que le propriétaire constate lui-même",
            "Déménager rapidement"
          ],
          correct: 1,
          explanation: "Photographier les dégâts et signaler par écrit au propriétaire ET à son assurance est essentiel pour constituer une preuve et déclencher la prise en charge des réparations."
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
      duration: "17 min",
      points: 50,
      badgeId: "certifie",
      audioScript: "C'est l'étape finale et l'une des plus importantes. L'état des lieux de sortie détermine si vous récupérez votre caution en totalité. Dans ce chapitre, vous allez apprendre à vous préparer parfaitement pour récupérer la totalité de votre dépôt de garantie.",
      content: `
        <h2>Qu'est-ce que l'état des lieux de sortie ?</h2>
        <p>L'état des lieux de sortie est un document contradictoire établi lors de la remise des clés. Il compare l'état du logement à votre départ avec l'état des lieux d'entrée que vous aviez signé à votre arrivée. C'est ce document qui détermine si des retenues seront effectuées sur votre caution.</p>

        <div class="callout">💡 <strong>L'enjeu :</strong> Votre dépôt de garantie (1 à 2 mois de loyer) n'est retenu que si des dégradations sont constatées. Un logement bien entretenu = caution récupérée intégralement.</div>

        <h2>🗓️ Commencer tôt : le calendrier idéal</h2>
        <p>Ne laissez pas la préparation au dernier moment. Voici le calendrier recommandé :</p>
        <ul>
          <li><strong>3 mois avant</strong> — Donner votre préavis dans les délais légaux (3 mois en zone non tendue, 1 mois en zone tendue ou motif légitime). Commencer l'inventaire des petits travaux à faire.</li>
          <li><strong>1 mois avant</strong> — Réaliser les petites réparations (trous, retouches de peinture, joints). Commander les pièces manquantes (poignées, joint de robinet, ampoules).</li>
          <li><strong>1 semaine avant</strong> — Grand ménage de fond complet. Vérifier chaque équipement.</li>
          <li><strong>La veille</strong> — Dernier passage de nettoyage. Organiser les clés et les documents.</li>
          <li><strong>Le jour J</strong> — Arriver avec l'état des lieux d'entrée, vos photos d'arrivée, et toutes les clés.</li>
        </ul>

        <h2>🔍 Comparer avec l'état des lieux d'entrée</h2>
        <p>Relisez attentivement votre état des lieux d'entrée avant l'état des lieux de sortie :</p>
        <ul>
          <li>Notez toutes les dégradations qui existaient déjà à votre arrivée — elles ne peuvent pas vous être imputées</li>
          <li>Identifiez les éléments que vous devez remettre en état</li>
          <li>Repérez les équipements ou éléments qui ont pu se détériorer pendant votre occupation</li>
        </ul>

        <div class="callout callout-warning">⚠️ <strong>Important :</strong> Si votre état des lieux d'entrée mentionne que le logement avait des défauts, ces défauts NE PEUVENT PAS vous être facturés à la sortie. Gardez précieusement ce document.</div>

        <h2>🧹 Check-list du grand nettoyage de sortie</h2>

        <h3>Cuisine</h3>
        <ul>
          <li>Four dégraissé intérieur et extérieur (grille, lèche-frite)</li>
          <li>Réfrigérateur vidé, dégivré et nettoyé (intérieur, bacs, joint de porte)</li>
          <li>Hotte et filtres nettoyés</li>
          <li>Plans de travail dégraissés et désinfectés</li>
          <li>Placards et tiroirs vidés et essuyés intérieur et extérieur</li>
          <li>Évier détartré, siphon nettoyé</li>
          <li>Sols lavés (y compris sous les meubles)</li>
        </ul>

        <h3>Salle de bain</h3>
        <ul>
          <li>Baignoire/douche détartrée et désinfectée</li>
          <li>Joints propres (pas de moisissures)</li>
          <li>Robinets et accessoires détartrés et brillants</li>
          <li>Miroir et surfaces nettoyées</li>
          <li>WC nettoyés intérieur et extérieur (y compris dessous et derrière)</li>
          <li>Carrelage et joints de sol propres</li>
        </ul>

        <h3>Pièces de vie</h3>
        <ul>
          <li>Vitres nettoyées des deux côtés (intérieur + accessible extérieur)</li>
          <li>Sols aspirés et lavés (y compris sous les meubles)</li>
          <li>Murs sans taches visibles, petits trous rebouchés et retouchés</li>
          <li>Plafonds sans toiles d'araignées ni traces</li>
          <li>Interrupteurs et prises nettoyés</li>
          <li>Placards vidés et nettoyés</li>
          <li>Radiateurs dépoussiérés (y compris entre les éléments)</li>
        </ul>

        <h3>Espaces extérieurs</h3>
        <ul>
          <li>Balcon/terrasse nettoyé</li>
          <li>Jardin tondu, haies taillées, allées désherbées</li>
          <li>Cave vidée et nettoyée</li>
          <li>Parking nettoyé</li>
        </ul>

        <h2>🔧 Les petites réparations à ne pas oublier</h2>
        <ul>
          <li>Reboucher TOUS les trous (vis, chevilles, clous) — utiliser un enduit de rebouchage + ponçage + retouche peinture</li>
          <li>Remettre toutes les ampoules grillées</li>
          <li>Remplacer les joints de robinets usés</li>
          <li>Vérifier que toutes les serrures et poignées fonctionnent</li>
          <li>S'assurer que tous les volets et stores fonctionnent correctement</li>
          <li>Vérifier que la chasse d'eau fonctionne</li>
        </ul>

        <h2>📸 Conseils pour le jour J</h2>
        <ul>
          <li><strong>Arrivez avec l'état des lieux d'entrée</strong> — Pour comparer sur place, point par point</li>
          <li><strong>Prenez des photos avant l'état des lieux</strong> — Documentez l'état du logement propre</li>
          <li><strong>Soyez présent et attentif</strong> — Vous avez le droit de contester des mentions sur le document</li>
          <li><strong>Lisez avant de signer</strong> — Ne signez jamais un document que vous n'avez pas lu entièrement</li>
          <li><strong>Formulez des réserves si nécessaire</strong> — Vous pouvez écrire vos observations sur le document</li>
          <li><strong>Demandez un exemplaire signé</strong> — Vous devez repartir avec votre copie</li>
        </ul>

        <h2>💰 La caution — tout ce que vous devez savoir</h2>
        <div class="example-box">
          <div class="example-box-title">⚖️ Délais légaux de restitution</div>
          <p><strong>1 mois</strong> — si l'état des lieux de sortie est identique à l'état des lieux d'entrée (aucune dégradation constatée)</p>
          <p><strong>2 mois</strong> — si des dégradations sont constatées, pour permettre l'établissement des devis</p>
          <p><strong>Majoration de 10%</strong> — du loyer mensuel hors charges, due au locataire pour <em>chaque mois de retard</em> au-delà du délai légal. C'est un droit automatique.</p>
        </div>
        <ul>
          <li><strong>Toute retenue doit être justifiée</strong> par un devis ou une facture. Sans justificatif, la retenue est illégale.</li>
          <li><strong>La vétusté s'applique toujours</strong> — Le propriétaire ne peut pas facturer le remplacement d'une peinture à 100% si elle avait déjà 5 ans. La grille de vétusté réduit proportionnellement les sommes dues.</li>
          <li><strong>Sans état des lieux d'entrée</strong> — Aucune retenue n'est possible : le logement est présumé avoir été remis en parfait état.</li>
          <li><strong>Sans état des lieux de sortie contradictoire</strong> — Aucune retenue n'est possible non plus.</li>
          <li><strong>En cas de litige</strong> — Saisir gratuitement la Commission Départementale de Conciliation (CDC) avant tout recours judiciaire.</li>
        </ul>

        <h2>🔴 Les 7 causes principales de retenue sur caution</h2>
        <p>Évitez ces erreurs et vous récupérez votre caution intégralement :</p>
        <div class="example-box">
          <div class="example-box-title">📋 Classement des motifs les plus fréquents</div>
          <p><strong>1. Nettoyage insuffisant</strong> — Four encrassé, frigo non dégivré, joints noirs, sol non lavé. C'est la première cause de retenue en France.</p>
          <p><strong>2. Trous dans les murs non rebouchés</strong> — Vis, chevilles, clous oubliés. Enduit + ponçage + retouche peinture obligatoires.</p>
          <p><strong>3. Peinture dégradée</strong> — Traces de doigts, marques, couleur vive non neutralisée. Si vous avez peint en couleur, repeignez en blanc au départ si demandé.</p>
          <p><strong>4. Sols tachés ou rayés</strong> — Liquide renversé sur parquet, brûlure de cigarette, rayures de meubles sans patins.</p>
          <p><strong>5. Jardin non entretenu</strong> — Herbes folles, haie non taillée, pelouse non tondue.</p>
          <p><strong>6. Absence d'attestation d'entretien chaudière</strong> — Retenue systématique si vous ne pouvez pas la présenter.</p>
          <p><strong>7. Papier peint abîmé</strong> — Arraché, décollé, taché — même partiellement.</p>
        </div>

        <div class="callout callout-success">🏆 <strong>L'objectif :</strong> Remettre le logement dans un état similaire à celui dans lequel vous l'avez reçu, compte tenu de l'usure normale par le temps et l'usage. Vous n'êtes pas responsable du vieillissement naturel du logement.</div>
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
          question: "Que risque-t-on si le logement présente des dégradations non justifiées par l'usure normale ?",
          options: [
            "Rien du tout",
            "Une retenue sur la caution, justifiée par des devis ou factures",
            "Une amende supplémentaire",
            "Un procès automatique"
          ],
          correct: 1,
          explanation: "Le propriétaire peut retenir sur la caution le montant nécessaire aux réparations, justifié obligatoirement par des devis ou factures. Il ne peut pas retenir plus que le coût réel."
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
            "3 mois avant, pour identifier et planifier les réparations nécessaires",
            "Après avoir rendu les clés"
          ],
          correct: 2,
          explanation: "Commencer 3 mois avant permet de donner le préavis dans les délais, d'identifier les travaux à faire et de les réaliser progressivement sans stress."
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
          explanation: "Si l'état des lieux de sortie est identique à l'état des lieux d'entrée (sans dégradations), le propriétaire doit restituer la caution dans un délai d'1 mois."
        },
        {
          question: "Que doit-on faire si on conteste une remarque lors de l'état des lieux de sortie ?",
          options: [
            "Refuser de signer le document",
            "Partir sans signer",
            "Formuler des réserves écrites directement sur le document avant de signer",
            "Accepter sans rien dire pour éviter les conflits"
          ],
          correct: 2,
          explanation: "Vous pouvez et devez formuler vos réserves par écrit directement sur le document d'état des lieux. Cela préserve vos droits tout en permettant de finaliser la procédure."
        }
      ]
    }
    // ─────────────────────────────────────────────────────────
    // CHAPITRE 7 — VMC, chaudière & équipements techniques
    // ─────────────────────────────────────────────────────────
    {
      id: 7,
      title: "VMC, chaudière & équipements",
      subtitle: "Maîtriser les installations techniques de votre logement",
      icon: "⚙️",
      duration: "18 min",
      points: 50,
      badgeId: "technicien",
      audioScript: "Votre logement est équipé d'installations techniques qui fonctionnent silencieusement : la VMC renouvelle l'air, la chaudière assure votre confort thermique, les radiateurs chauffent chaque pièce. Comprendre ces systèmes, savoir les entretenir et réagir en cas de problème, c'est vous protéger — et protéger votre caution.",
      content: `
        <h2>Des équipements que vous utilisez sans les voir</h2>
        <p>Votre logement abrite des installations techniques qui fonctionnent en arrière-plan. Les comprendre, les entretenir et réagir correctement en cas de problème, c'est éviter des pannes coûteuses — et protéger votre caution.</p>
        <div class="callout">🔧 <strong>À retenir :</strong> Certains entretiens sont une <strong>obligation légale</strong> du locataire. Les ignorer peut invalider votre assurance et justifier une retenue sur votre dépôt de garantie.</div>

        <h2>💨 La VMC — comment ça fonctionne et comment l'entretenir</h2>
        <p>La VMC est le système respiratoire de votre logement. Elle aspire en continu l'air vicié (humidité, vapeur de cuisine, odeurs) et le remplace par de l'air frais. Elle est présente dans presque tous les logements français construits depuis les années 1970.</p>
        <div class="example-box">
          <div class="example-box-title">📍 Où trouver les bouches de VMC ?</div>
          <p>Les grilles d'extraction sont situées dans les pièces "humides" : <strong>cuisine, salle de bain, WC</strong>. L'air frais entre par les grilles en bas des portes des chambres et du salon.</p>
        </div>
        <ul>
          <li><strong>Ne jamais couper ni débrancher la VMC</strong> — Même si elle fait un bruit léger. Elle fonctionne 24h/24, 365 jours/an. La couper provoque une accumulation d'humidité et des moisissures dont vous serez tenu responsable.</li>
          <li><strong>Ne jamais boucher les grilles</strong> — Ni scotch, ni torchon, ni meuble placé devant. C'est une faute grave qui engage votre responsabilité.</li>
          <li><strong>Nettoyer les grilles tous les 3 à 6 mois</strong> — Aspirer la grille, la décrocher si possible, laver sous l'eau tiède, laisser sécher avant de remettre en place.</li>
          <li><strong>VMC double flux</strong> — Si votre logement en est équipé, les filtres sont à remplacer tous les 6 à 12 mois. Demandez à votre propriétaire leur emplacement.</li>
        </ul>
        <div class="callout callout-warning">⚠️ <strong>Erreur très fréquente :</strong> Boucher les grilles de VMC "pour éviter les courants d'air" est l'une des premières causes de moisissures dans les logements. Ces dégradations sont systématiquement mises à la charge du locataire.</div>

        <h2>🔥 La chaudière à gaz individuelle — obligation légale</h2>
        <p>Si votre logement dispose d'une chaudière à gaz individuelle (chauffage et/ou eau chaude), son entretien est une <strong>obligation légale du locataire</strong> depuis le décret du 20 juillet 2023.</p>
        <div class="example-box">
          <div class="example-box-title">⚖️ Ce que dit la loi</div>
          <p>Tout locataire équipé d'une chaudière entre 4 et 400 kW doit la faire réviser <strong>chaque année civile</strong> par un technicien certifié. L'attestation d'entretien doit être conservée 2 ans et présentée au propriétaire sur demande.</p>
        </div>
        <ul>
          <li><strong>Quand intervenir ?</strong> — Idéalement en septembre-octobre, avant l'hiver. Les techniciens sont complets en décembre-janvier.</li>
          <li><strong>Coût moyen</strong> — Entre 100 et 150 € par an. Certaines assurances habitation incluent un contrat d'entretien.</li>
          <li><strong>Conséquences si oubli</strong> — En cas d'accident, votre assurance peut refuser d'indemniser. À votre départ, l'absence d'attestation permet au propriétaire de retenir sur votre caution.</li>
          <li><strong>Le ramonage</strong> — Le conduit d'évacuation doit être ramoné 1 à 2 fois par an selon les réglements locaux. Vérifiez avec votre propriétaire.</li>
        </ul>
        <div class="example-box">
          <div class="example-box-title">🚨 Signaux d'alerte chaudière</div>
          <p><strong>Flamme jaune ou orange</strong> au lieu de bleue → Risque de monoxyde de carbone. Appeler un technicien immédiatement et aérer.</p>
          <p><strong>Odeur de gaz</strong> → Couper le gaz (robinet derrière la chaudière), ouvrir les fenêtres, quitter les lieux, appeler le <strong>0800 011 316</strong> (GRDF, gratuit 24h/24). Ne pas allumer ni éteindre aucun appareil électrique.</p>
          <p><strong>Chaudière qui s'arrête souvent</strong> → Anomalie à signaler par écrit au propriétaire.</p>
        </div>

        <h2>🌡️ Les radiateurs — purge annuelle</h2>
        <p>Dans les logements avec chauffage central à eau chaude, les radiateurs accumulent de l'air. Cet air crée des poches qui empêchent la bonne circulation et réduisent l'efficacité du chauffage.</p>
        <ul>
          <li><strong>Symptômes d'un radiateur à purger</strong> — Froid en haut et chaud en bas, bruits de gargouillis ou claquements.</li>
          <li><strong>Quand purger ?</strong> — Chaque automne, avant de relancer le chauffage pour la saison.</li>
          <li><strong>Comment purger</strong> — Localiser la vis de purge (en haut du radiateur, côté opposé au robinet). Placer un chiffon et un récipient. Dévisser légèrement avec une clé de purge jusqu'à ce que l'air siffle, puis de l'eau coule. Refermer dès que l'eau coule sans bulles.</li>
          <li><strong>Après la purge</strong> — Vérifier la pression sur le manomètre de la chaudière (entre 1 et 1,5 bar). Si trop basse, faire l'appoint d'eau via le robinet de remplissage.</li>
        </ul>

        <h2>💧 Le calcaire — ennemi silencieux des équipements</h2>
        <p>De nombreuses régions françaises (Île-de-France, Grand Est, PACA…) ont une eau très calcaire. Le calcaire s'accumule progressivement et endommage les équipements si on ne l'entretient pas régulièrement.</p>
        <div class="example-box">
          <div class="example-box-title">🧴 Méthodes naturelles anti-calcaire</div>
          <table class="responsibility-table">
            <thead><tr><th>Équipement</th><th>Solution</th><th>Fréquence</th></tr></thead>
            <tbody>
              <tr><td>Pommeau de douche</td><td>Sac plastique rempli de vinaigre blanc autour du pommeau, une nuit</td><td>Tous les 3 mois</td></tr>
              <tr><td>Aérateur de robinet</td><td>Dévisser, tremper dans le vinaigre chaud, rincer</td><td>Tous les 6 mois</td></tr>
              <tr><td>Bouilloire / cafetière</td><td>Acide citrique ou vinaigre dilué, cycle à vide</td><td>Tous les 2 mois</td></tr>
              <tr><td>Machine à laver</td><td>Programme 60°C à vide + 150g d'acide citrique</td><td>Tous les 3 mois</td></tr>
              <tr><td>Lave-vaisselle</td><td>Programme à vide + vinaigre blanc dans le bac</td><td>Tous les 3 mois</td></tr>
            </tbody>
          </table>
        </div>

        <h2>⚡ Le tableau électrique — savoir réagir</h2>
        <ul>
          <li><strong>Localisez-le dès votre arrivée</strong> — Entrée, couloir ou placard. Repérez le disjoncteur général et les disjoncteurs de circuit.</li>
          <li><strong>Un disjoncteur saute</strong> — Débranchez l'appareil responsable (surcharge probable), puis réenclenchez le disjoncteur de bas en haut. S'il resaute sans raison apparente : signalez au propriétaire.</li>
          <li><strong>Disjoncteur différentiel (module carré)</strong> — S'il saute, testez chaque circuit pour trouver l'appareil défaillant (souvent un appareil dont la résistance est grillée).</li>
          <li><strong>Odeur de brûlé ou étincelles</strong> — Urgence absolue : coupez le disjoncteur général, n'utilisez aucun équipement, appelez le 18 (pompiers) si nécessaire.</li>
          <li><strong>Ne jamais bricoler les câblages</strong> — Vous pouvez remplacer une prise ou un interrupteur cassé, mais jamais toucher aux câbles et gaines.</li>
        </ul>
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
          explanation: "Depuis le décret du 20 juillet 2023, l'entretien annuel de la chaudière est une obligation légale du locataire. L'attestation doit être conservée 2 ans et peut être exigée par le propriétaire."
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
          explanation: "Un radiateur froid en haut contient de l'air qui empêche l'eau chaude de remplir tout le radiateur. Les gargouillis confirment ce diagnostic. La purge résout le problème."
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
          explanation: "Le vinaigre blanc (acide acétique) dissout le calcaire efficacement et sans abîmer les joints. Laisser tremper une nuit garantit un détartrage en profondeur."
        },
        {
          question: "Que faire EN PREMIER en cas d'odeur de gaz dans votre logement ?",
          options: [
            "Allumer la lumière pour mieux voir d'où ça vient",
            "Appeler le propriétaire par téléphone depuis la pièce concernée",
            "Couper le gaz, ouvrir toutes les fenêtres, quitter le logement et appeler le 0800 011 316",
            "Utiliser un ventilateur électrique pour disperser le gaz"
          ],
          correct: 2,
          explanation: "En cas d'odeur de gaz, il ne faut ni allumer ni éteindre aucun appareil électrique (risque d'étincelle). Il faut couper le gaz, aérer, quitter les lieux et appeler GRDF (0800 011 316, gratuit)."
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
    }
  ]
};
