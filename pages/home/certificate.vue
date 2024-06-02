<script setup lang="ts">



</script>

<template>
  <article>
    <section>
      <h2>Мои сертификаты</h2>

      <Grid :columns="3" >
        <Certificate
          v-for="(a, index) in 2"
          class="certificates"
          university="Rehart Kcalb Academy"
          course_name="Компьютерная наука вместе с С++ и Python"
          avatar="https://www.ciu.edu/sites/default/files/inline-images/online-business-student100.jpg"
        />
      </Grid>
    </section>
  </article>
</template>

<style scoped lang="scss">
article {
  margin-top: 81px;

  section {
    margin-bottom: 42px;

    h2 {
      margin-bottom: 12px;
    }

    .certificates {

    }
  }
}
</style>