<script setup lang="ts">

defineProps<{
  university: string,
  course_name: string,
  avatar: string
}>()

</script>

<template>
  <div class="certificate">
    <div class="top"></div>
    <div class="content">
      <div class="avatar" :style="`background-image: url('${avatar}')`" />
      <div class="text">
        <span>{{university}}</span>
        <h3>{{course_name}}</h3>

        <p>Завершённый курс.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.certificate {
  height: 300px;
  border: 1px solid var(--border);
  border-radius: 8px;
  position: relative;
  transition: transform .5s var(--transition-function);
  cursor: pointer;

  &:hover {
    transform: matrix3d(1.03, 0, 0, 0, 0, 1.03, 0, 0, 0, 0, 1.08, 0, 1.648, -4.12, 345.6, 1);
  }

  .top {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 90px;
    background-color: var(--border);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    z-index: -1;
  }

  .content {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 12px 24px;

    .avatar {
      width: 75px;
      margin-top: 40px;
      aspect-ratio: 1/1;
      border-radius: 8px;
      background-color: var(--bg);
      background-position: center;
      background-size: cover;
      border: 3px solid var(--border);
      margin-bottom: 12px;
    }

    .text {
      display: flex;
      flex-direction: column;
      line-height: 1;

      span {
        color: var(--text-secondary);
        text-transform: uppercase;
        font-size: .65em;
        letter-spacing: 1px;
        margin-bottom: 6px;
      }

      h3 {
        font-size: 1.1em;
        font-weight: 700;
        line-height: 1.2;
      }

      p {
        position: absolute;
        bottom: 24px;
        left: 24px;
        color: var(--text-secondary);
        font-size: .8em;
      }
    }
  }
}
</style>