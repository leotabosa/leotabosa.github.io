<template>
  <div class="rodape">
    <div class="links">
      <div class="link"><GitHubLogo />GitHub</div>
      <div class="link"><LinkedInLogo /> LinkedIn</div>
      <div class="link"><EmailLogo />leeonardotabosa@gmail.com</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rodape {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: #3a477d;

  .links {
    color: white;
    font-size: 14px;

    .link {
      display: flex;
      align-items: center;
      padding: 0.5rem;

      svg {
        margin-right: 10px;
        height: 20px;
        width: 20px;
        fill: white;
      }
    }
  }
}
</style>
