<script setup>
</script>

<template>
    <div class="login">
        <span class="title">Авторизация</span>
        <input type="text" placeholder="Логин" class="input"/>
        <input type="text" placeholder="Пароль" class="input"/>
        <button class="btn" type="button">Вход</button>
    </div>
    <div class="loginFooter">
        <p>
          Если возникла проблема, то можете<br/> написать <span class="spanUrl">Алёне из Сибтеха</span>
        </p>
        <p>
          С любовью, ваш <span class="spanUrl">Сибтех</span>
        </p>
    </div>
</template>

<style scoped>
.login{
  position: absolute;
  top: 80px;
  left: 179px;
  color: black;
  display: flex;
  flex-direction: column;
}

.input {
  width: 350px;
  height: 70px;
}

.btn{
  margin-top: 20px;
}

.loginFooter{
  position: absolute;
  top: 760px;
  left: 179px;
  line-height: 24px;
  color: #676767;
}
.spanUrl {
  color: #3EA748;
}
</style>