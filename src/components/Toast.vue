<template>
  <div class="mask">
    <p>{{text}}</p>
  </div>
</template>

<script>
  export default {
    props: ["text"]
  }
</script>

<style scoped>
  .mask {
    position: fixed;
    bottom: 4rem;
    z-index: 10000;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .mask p {
    background-color: #666666;
    color: #ffffff;
    font-size: 0.55rem;
    padding: 0.35rem 0.95rem;
    border-radius: 1rem;
    animation: opacity 4s linear 1;
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    15% {
      opacity: 1;
    }

    85% {
      opacity: 1;
    }

    100% {
      opacity: 0.5;
    }
  }
</style>
