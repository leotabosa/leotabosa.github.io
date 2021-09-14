<script>
import SectionTitle from '../components/SectionTitle'
import MailForm from '../components/MailForm'
// import SocialCard from '../components/SocialCard'
export default {
  name: 'Contacts',
  components: {
    SectionTitle,
    MailForm,
    // SocialCard,
  },
}
</script>

<template>
  <section id="contacts-page" class="contacts">
    <SectionTitle section-title="Contatos" />

    <div class="contacts__content">
      <!-- <section class="contacts__links">
        <SocialCard />
        <SocialCard />
        <SocialCard />
      </section> -->
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
    min-width: 300px;

    @media screen and (max-width: 900px) {
      min-width: unset;
      width: 100%;
    }
  }

  &__email-form {
    flex: 1;
  }
}
</style>
