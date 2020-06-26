<template>
  <div class="loader">
    <div class="bounceOne"></div>
    <div class="bounceTwo"></div>
  </div>
</template>

<style scope lang="scss">
.loader {
  width: 40px;
  height: 40px;
  position: relative;
}

.bounceOne,
.bounceTwo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background-color: #3a477d;
  opacity: 0.6;
  animation: doBounce 2s infinite ease-in-out;
}

.bounceTwo {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

@keyframes doBounce {
  0%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  50% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
