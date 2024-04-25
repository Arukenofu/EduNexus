<script setup lang="ts">

</script>

<template>
  <div class="teacher-wrap">

    <div class="teacher" v-for="teacher in 3">

      <div class="teacher-image" />

      <div class="teacher-info">

        <p class="teacher-name">
          О. И. Димашева

          <span>
            29 год
          </span>
        </p>

        <p class="teacher-subject">
          <Icon name="iconoir:graduation-cap" size="1.1rem" style="color: var(--text-secondary)" />
          Computer Science
        </p>

        <p class="teacher-language">
          <Icon name="iconoir:translate" size="1.1rem" style="color: var(--text-secondary)" />
          Русский, Казахский, Английский
        </p>

        <p class="teacher-lessons">
          <Icon name="iconoir:user" size="1.1rem" style="color: var(--text-secondary)" />
          Было проведено 59 уроков
        </p>

        <p class="teacher-text">
          Меня всегда интересовала дикая природа и фотография как страсть, поэтому мои интересы тяготели к съемке и обучению.
          Ранее я обучался в элитном колледже.Меня всегда интересовала дикая природа и фотография как страсть, поэтому мои интересы тяготели к съемке и обучению.
          Ранее я обучался в элитном колледже.
        </p>
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">

.teacher-wrap {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  .teacher {
    flex: 1;
    border-radius: 15px;
    border: 1px solid var(--bg-secondary);
    aspect-ratio: 1/0.7;
    transition: transform 0.3s cubic-bezier(0, 0, 0.5, 1);
    cursor: pointer;
    display: flex;

    .teacher-image {
      height: 100%;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: var(--bg-secondary);
      aspect-ratio: 60/100;
    }

    .teacher-info {
      padding: 21px 12px;
      font-size: 16px;

      .teacher-name {
        font-weight: 700;
        margin-bottom: 9px;

        span {
          color: var(--text-secondary);
          font-size: .7em;
        }
      }

      .teacher-subject {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 0.8em;
        color: var(--text-secondary);
        margin-bottom: 4px;
      }

      .teacher-language {
        display: block;
        align-items: center;
        gap: 5px;
        font-size: 0.75em;
        color: var(--text-secondary);
        margin-bottom: 4px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }

      .teacher-lessons {
        display: block;
        align-items: center;
        gap: 5px;
        font-size: 0.75em;
        color: var(--text-secondary);
        margin-bottom: 9px;
      }

      .teacher-text {
        font-size: 0.82em;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
      }
    }

    &:hover {
      transform: translateY(-5px);
    }
  }
}

@media screen and (max-width: 1400px) {
  .teacher-wrap .teacher .teacher-info {
    .teacher-text {
      -webkit-line-clamp: 3;
    }
  }
}

@media screen and (max-width: 1230px) {
  .teacher-wrap .teacher .teacher-info {
    font-size: 14px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .teacher-text {
      -webkit-line-clamp: 4;
    }
  }
}

@media screen and (max-width: 900px) {
  .teacher-wrap .teacher .teacher-info {
    font-size: 12px;
  }
}

</style>