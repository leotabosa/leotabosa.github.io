<script>
import SectionTitle from '../components/SectionTitle'
import MailForm from '../components/MailForm'
import SocialCard from '../components/SocialCard'
import LinkedInLogo from '../components/svg/LinkedInLogo.svg'
import GithubLogo from '../components/svg/GithubLogo.svg'
import MailIcon from '../components/svg/MailIcon.svg'

export default {
  name: 'Contacts',
  components: {
    SectionTitle,
    MailForm,
    SocialCard,
    LinkedInLogo,
    GithubLogo,
    MailIcon,
  },
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank')
    },
    focusMailForm() {
      const nameField = document.getElementById('nameFieldMailForm')
      if (nameField) nameField.focus()
    },
  },
}
</script>

<template>
  <section id="contacts-page" class="contacts">
    <SectionTitle section-title="Contatos" />

    <div class="contacts__content">
      <section class="contacts__links">
        <SocialCard
          class="contacts__cards"
          card-title="/in/leonardo-tabosa"
          card-subtitle="LinkedIn"
        >
          <template v-slot:icon>
            <LinkedInLogo />
          </template>

          <template v-slot:button>
            <Button
              class="contacts__linkedin-button"
              @click="
                openInNewTab('https://www.linkedin.com/in/leonardo-tabosa/')
              "
            >
              Conectar
            </Button>
          </template>
        </SocialCard>
        <SocialCard
          class="contacts__cards"
          card-title="@leotabosa"
          card-subtitle="Github"
        >
          <template v-slot:icon>
            <GithubLogo />
          </template>

          <template v-slot:button>
            <Button
              class="contacts__github-button"
              @click="openInNewTab('https://github.com/leotabosa')"
            >
              Seguir
            </Button>
          </template>
        </SocialCard>
        <SocialCard
          class="contacts__cards"
          card-title="leonardoctbraga@gmail.com"
          card-subtitle="Email"
        >
          <template v-slot:icon>
            <MailIcon />
          </template>

          <template v-slot:button>
            <Button @click="focusMailForm">Mensagem</Button>
          </template>
        </SocialCard>
      </section>
      <article class="contacts__email-form">
        <MailForm />
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contacts {
  width: 80%;
  align-self: center;
  padding-bottom: 24px;

  &__content {
    display: flex;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  &__links {
    width: 30%;
    min-width: 325px;
    padding-right: 40px;

    @media screen and (max-width: 900px) {
      min-width: unset;
      width: 100%;
      padding-right: 0;
    }
  }

  &__cards {
    padding-right: 25px;
    border-right: 1px solid var(--gray-color-3);

    &:not(:last-child) {
      margin-bottom: 50px;
    }

    @media screen and (max-width: 900px) {
      padding-right: 0;
      border-right: 0;
      padding-bottom: 25px;
      border-bottom: 1px solid var(--gray-color-3);
    }
  }

  &__email-form {
    flex: 1;
  }

  &__linkedin-button {
    background-color: #0a66c2 !important;
  }

  &__github-button {
    background-color: #24292f !important;
  }
}
</style>
