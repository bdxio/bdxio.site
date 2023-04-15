<script setup lang="ts">
import { useHead } from "#imports";
import { Heading, Link } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

useHead({ title: `Code de conduite | ${ASSOCIATION_NAME}` });
</script>

<template>
  <main>
    <section class="p-section bg-white">
      <Heading level="2">
        Code de conduite
      </Heading>
      <p>
        <strong>
          Toutes les personnes qui participent à la conférence doivent accepter
          le code de conduite suivant.
        </strong>
        L'équipe d'organisation s'attachera à faire respecter ce code durant
        l'événement. Nous attendons de la part de chacune des personnes
        présentes une coopération pour assurer un environnement sain pour tout
        le monde.
      </p>

      <div>
        Besoin d'aide ?
        <ul>
          <li>
            Par email : <Link href="mailto:team@bdxio.fr">
              team@bdxio.fr
            </Link>
          </li>
          <li>
            Par twitter :
            <Link
              href="https://twitter.com/bdxio"
              target="_blank"
            >
              @bdxio
            </Link>
          </li>
        </ul>
      </div>

      <p>
        <strong>
          Notre conférence se veut une expérience sans harcèlement
        </strong>
        , quelque soit votre sexe, votre orientation sexuelle, votre handicap,
        votre apparence physique, votre poids, votre origine ou votre religion.
        Nous ne tolérons aucun harcèlement des personnes présentes à la
        conférence, quelque soit sa forme. Les expressions et les images à
        connotation sexuelle ne sont pas appropriées lors de l'événement. Ceci
        inclut les conférences, les ateliers, les soirées, Twitter et les autres
        médias en ligne. Les personnes présentes à la conférence qui violent ces
        règles peuvent être sanctionnées, voire exclues de la conférence sans
        remboursement, à la discrétion de l'équipe d'organisation de la
        conférence.
      </p>

      <p>
        <strong>Le harcèlement</strong> inclut des commentaires oraux sur le
        sexe, l'orientation sexuelle, le handicap, l'apparence physique, le
        poids, l'origine, la religion, les images à connotation sexuelle dans
        des lieux publics, les intimidations délibérées, la traque, la
        poursuite, un harcèlement photographique ou vidéo, une suite
        d'interruption des conférences et des autres événements, un contact
        physique inapproprié et des avances sexuelles non désirées.
      </p>

      <p>
        Les personnes à qui il sera demandé d'arrêter
        <strong>tout comportement de harcèlement</strong> doivent arrêter
        immédiatement.
      </p>

      <p>
        <strong>
          Les sponsors sont aussi sujet à la politique anti-harcèlement.
        </strong>
        En particulier, les sponsors doivent s'abstenir d'utiliser toute image
        ou support à connotation sexuelle. Ils ne doivent pas non plus engager
        d'activités à connotation sexuelle. L'équipe du stand (y compris les
        volontaires) ne doivent pas utiliser de vêtements, uniformes ou costumes
        à connotation sexuelle. Ils ne doivent pas non plus créer un
        environnement sexualisé.
      </p>

      <p>
        <strong>
          Si un participant ou une participante a un comportement de harcèlement
        </strong>
        , l'équipe d'organisation de la conférence peut prendre toute action qui
        lui semble adéquate. Cela va d'un simple avertissement à l'exclusion de
        la personne de la conférence sans remboursement.
      </p>

      <p>
        <strong>Si vous vous sentez victime de harcèlement</strong>, si vous
        pensez que quelqu'un se fait harceler, et plus généralement en cas de
        problème, merci de contacter immédiatement un membre de l'organisation
        de l'événement. Les membres sont facilement identifiables à leur t-shirt
        aux couleurs de l'événement.
      </p>

      <p>
        Nous attendons des personnes présentes à l'événement qu'elles
        <strong>suivent ces règles</strong> dans le bâtiment des conférences et
        des ateliers, ainsi que pendant les événements sociaux relatifs à la
        conférence.
      </p>

      <p>
        <strong>Version originale et crédit :</strong>
        <Link
          href="http://2012.jsconf.us/#/about"
          target="_blank"
        >
          http://2012.jsconf.us/#/about
        </Link>
        & The Ada Initiative <br>
        <strong>
          Merci d'aider à la traduction et à l'amélioration de ce texte:
        </strong>
        <Link
          href="http://github.com/leftlogic/confcodeofconduct.com"
          target="_blank"
        >
          http://github.com/leftlogic/confcodeofconduct.com
        </Link>
        <br>
        <strong>
          Ce texte est sous licence Creative
          <Link
            href="https://creativecommons.org/licenses/by/3.0/deed.en_US"
            target="_blank"
          >
            Commons Attribution 3.0 Unported License
          </Link>
        </strong>
      </p>
    </section>
  </main>
</template>
