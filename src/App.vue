<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'Counter' }">Counter</router-link>
    </div>
    <router-view />
  </div>
</template>
