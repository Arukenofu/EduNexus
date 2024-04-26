<script setup lang="ts">

</script>

<template>
  <div class="chat">
    <div class="user-bar">
      <div class="user-info">
        <div class="avatar">
          <div />
        </div>
        <div class="text">
          <span>William Smith</span>
          <span>Meeting Tomorrow</span>
          <span>Кому: ersultangay@gmail.com</span>
        </div>
      </div>
      <div class="date">
        Oct 22, 2023, 9:00:00 AM
      </div>
    </div>

    <div class="text-data">
      <slot />
    </div>

    <div class="user-input">
      <textarea placeholder="Написать сообщение..." />

      <div class="input-controls">
        <span />

        <button>
          Отправить
        </button>
      </div>

    </div>


  </div>
</template>

<style scoped lang="scss">
.chat {
  width: calc(100% - 21px);
  height: calc(100vh - 125px);
  position: sticky;
  background-color: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  top: calc(3px + var(--electron));

  .user-bar {
    height: 90px;
    padding: 12px;
    border-bottom: 1px solid var(--border);
    display: flex;

    .user-info {
      display: flex;
      font-size: 1em;

      .avatar div {
        height: 40px;
        aspect-ratio: 1/1;
        background-color: var(--bg-secondary);
        border-radius: 50%;
      }

      .text {
        margin-left: 15px;


        span {
          display: block;

          &:nth-child(1) {
            margin-top: 1px;
            font-size: .95em;
            font-weight: 700;
            margin-bottom: 2px;
          }

          &:nth-child(2) {
            font-size: .75em;
            margin-bottom: 2px;
          }

          &:nth-child(3) {
            font-size: .78em;
          }
        }
      }
    }

    .date {
      position: absolute;
      right: 12px;
      color: var(--text-secondary);
      font-size: .7em;
    }
  }

  .text-data {
    padding: 12px;
    font-size: .9em;
    overflow-y: scroll;
  }

  .user-input {
    border-top: 1px solid var(--border);
    margin-top: auto;
    padding: 16px;

    textarea {
      width: 100%;
      background-color: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      height: 80px;
      min-height: 80px;
      max-height: 120px;
      font-size: .825em;
      line-height: 1.25em;
      padding: 16px;
      resize: vertical;
      border-radius: 8px;

      &:focus {
        outline: none;
        border: 1px solid var(--text);
      }
    }

    .input-controls {
      margin-top: 12px;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 35px;
        padding: 0 15px;
        background-color: var(--text);
        border: none;
        color: var(--bg);
        border-radius: 5px;
        font-weight: 600;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .chat {
    position: fixed !important;
    right: 0;
    top: 0;
    width: 70%;
    border: none;
    height: 100vh;

    .user-bar {
      padding: 15px;

      .user-info {
        font-size: 1.2em;

        .avatar div {
          height: 50px;
        }
      }

      .date {
        font-size: .9em;
        right: 15px;
      }

    }

    .text-data {
      font-size: 1em;
    }

    :global(body) {
      overflow: hidden;
    }
  }
}
</style>