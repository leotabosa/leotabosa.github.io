<script>
import MailboxSVG from '../components/svg/Mailbox.svg'
import sendMail from '../utils/send-mail'

export default {
  name: 'MailForm',
  components: { MailboxSVG },
  data() {
    return {
      mailForm: {
        fromName: '',
        fromEmail: '',
        message: '',
      },
      validEmail: true,
    }
  },
  computed: {
    sendButtonAllowed() {
      return (
        Object.keys(this.mailForm).every((key) => !!this.mailForm[key]) &&
        this.validEmail
      )
    },
  },
  methods: {
    validateEmail() {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.validEmail = re.test(this.mailForm.fromEmail)
    },
    async sendEmail() {
      try {
        await sendMail(this.mailForm)

        this.mailForm = { fromName: '', fromEmail: '', message: '' }
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<template>
  <form class="mail-form" autocomplete="off" @submit.prevent="sendEmail">
    <div class="mail-form__header">
      <MailboxSVG />
      <p>Sinta-se livre para me enviar um email!</p>
    </div>
    <div class="mail-form__basic">
      <Input
        id="nameFieldMailForm"
        v-model="mailForm.fromName"
        placeholder="Nome"
      />
      <Input
        v-model="mailForm.fromEmail"
        placeholder="Seu email"
        :error="!validEmail"
        @input="validateEmail"
      />
    </div>
    <Input
      v-model="mailForm.message"
      class="mail-form__textarea"
      placeholder="Mensagem"
      type="textarea"
    />
    <div class="mail-form__button">
      <Button type="submit" size="md" :disabled="!sendButtonAllowed">
        Enviar
      </Button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.mail-form {
  display: flex;
  flex-direction: column;
  gap: 25px;

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      color: var(--text-color-3);
    }

    svg {
      max-width: 300px;
    }
  }

  &__basic {
    display: flex;
    gap: 25px;

    input {
      width: 100%;

      &:first-child {
        width: 60%;
      }
    }

    @media screen and (max-width: 900px) {
      flex-direction: column;
      input {
        width: 100%;

        &:first-child {
          width: 100%;
        }
      }
    }
  }

  &__textarea {
    height: 120px;
  }

  &__button {
    align-self: flex-end;
  }
}
</style>
