<script setup lang="ts">
import { useHead } from "#imports";
import { Heading, LinkNative } from "#components";
import { ASSOCIATION_NAME } from "~/services/constants";

useHead({ title: `Code de conduite | ${ASSOCIATION_NAME}` });
</script>

<template>
  <main>
    <section class="p-section bg-white">
      <Heading level="1">
        Code de conduite
      </Heading>
      <ul class="flex flex-col gap-5">
        <li>
          <p>
            <strong>
              Toutes les personnes qui participent à la conférence doivent accepter
              le code de conduite suivant.
            </strong><br>
            L'équipe d'organisation s'attachera à faire respecter ce code durant
            l'évènement. Nous attendons de la part de chacune des personnes
            présentes une coopération pour assurer un environnement sain pour tout
            le monde.
          </p>
        </li>
        <li>
          <p>
            <strong>
              Notre conférence se veut une expérience sans harcèlement
            </strong>
            , quelque soit votre sexe, votre orientation sexuelle, votre handicap,
            votre apparence physique, votre poids, votre origine ou votre religion.
            Nous ne tolérons aucun harcèlement des personnes présentes à la
            conférence, quelque soit sa forme. Les expressions et les images à
            connotation sexuelle ne sont pas appropriées lors de l'évènement. Ceci
            inclut les conférences, les ateliers, les soirées, Twitter et les autres
            médias en ligne. Les personnes présentes à la conférence qui violent ces
            règles peuvent être sanctionnées, voire exclues de la conférence sans
            remboursement, à la discrétion de l'équipe d'organisation de la
            conférence.
          </p>
        </li>
        <li>
          <p>
            <strong>Le harcèlement</strong> inclut des commentaires oraux sur le
            sexe, l'orientation sexuelle, le handicap, l'apparence physique, le
            poids, l'origine, la religion, les images à connotation sexuelle dans
            des lieux publics, les intimidations délibérées, la traque, la
            poursuite, un harcèlement photographique ou vidéo, une suite
            d'interruption des conférences et des autres évènements, un contact
            physique inapproprié et des avances sexuelles non désirées.
          </p>
          <p>
            Les personnes à qui il sera demandé d'arrêter
            <strong>tout comportement de harcèlement</strong> doivent arrêter
            immédiatement.
          </p>
        </li>
        <li>
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
        </li>
        <li>
          <p>
            <strong>
              Si un participant ou une participante a un comportement de harcèlement
            </strong>
            , l'équipe d'organisation de la conférence peut prendre toute action qui
            lui semble adéquate. Cela va d'un simple avertissement à l'exclusion de
            la personne de la conférence sans remboursement.
          </p>
        </li>
        <li>
          <p>
            <strong>Si vous vous sentez victime de harcèlement</strong>, si vous
            pensez que quelqu'un se fait harceler, et plus généralement en cas de
            problème, merci de contacter immédiatement un membre de l'organisation
            de l'évènement. Les membres sont facilement identifiables à leur t-shirt
            aux couleurs de l'évènement.
          </p>
        </li>

        <li>
          <p>
            Nous attendons des personnes présentes à l'évènement qu'elles
            <strong>suivent ces règles</strong> dans le bâtiment des conférences et
            des ateliers, ainsi que pendant les évènements sociaux relatifs à la
            conférence.
          </p>
        </li>
        <li>
          <div>
            <strong>Besoin d'aide ?</strong>
            <ul>
              <li>
                Par email : <LinkNative href="mailto:team@bdxio.fr">
                  team@bdxio.fr
                </LinkNative>
              </li>
              <li>
                Par twitter :
                <LinkNative
                  href="https://twitter.com/bdxio"
                  aria-label="contacter par twitter - Nouvelle fenêtre"
                  target="_blank"
                >
                  @bdxio
                </LinkNative>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <p>
            <strong>Version originale et crédit :</strong>
            <LinkNative
              href="http://2012.jsconf.us/#/about"
              aria-label="lien vers la version originale du texte du code de conduite - Nouvelle fenêtre"
              target="_blank"
            >
              http://2012.jsconf.us/#/about
            </LinkNative>
            & The Ada Initiative <br>
            <strong>
              Merci d'aider à la traduction et à l'amélioration de ce texte:
            </strong>
            <LinkNative
              href="http://github.com/leftlogic/confcodeofconduct.com"
              aria-label="lien vers le github du texte du code de conduite - Nouvelle fenêtre"
              target="_blank"
            >
              http://github.com/leftlogic/confcodeofconduct.com
            </LinkNative>
            <br>
            <strong>
              Ce texte est sous licence Creative
              <LinkNative
                href="https://creativecommons.org/licenses/by/3.0/deed.en_US"
                aria-label="lien vers le site des creative commons - Nouvelle fenêtre"
                target="_blank"
              >
                Commons Attribution 3.0 Unported License
              </LinkNative>
            </strong>
          </p>
        </li>
      </ul>
    </section>
  </main>
</template>
