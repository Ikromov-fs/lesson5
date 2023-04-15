<template>
  <!-- <router-view /> -->
  <div>
    <div>
      <h1>Ikromov age: {{ $store.state.age }}</h1>
      <button class="btn btn-success mx-4" @click="$store.state.age += 1">+</button>
      <button class="btn btn-danger mx-4" @click="$store.state.age -= 1">-</button>
    </div>
    <div class="col-md-11 mx-auto mt-4">
      <div class="col-md-3 my-3">
        <select class="form-control" @change="selects">
          <option value="" hidden> change limit</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>
      <table class="table table-hover border">
        <thead>
          <tr>
            <th class="border">T/r</th>
            <th class="border">email</th>
            <th class="border">body</th>
            <th class="border">name</th>
            <th class="border">postId</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item, index in $store.state.datas" :key="index">
            <td class="border">{{ item.id }}</td>
            <td class="border">{{ item.email }}</td>
            <td class="border">{{ item.body }}</td>
            <td class="border">{{ item.name }}</td>
            <td class="border">{{ item.postId }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <button class="btn btn-danger mx-4" @click="prev">prev</button>
      <span class="fs-4">{{ $store.state.count }}</span>
      <button class="btn btn-success mx-4" @click="next">next</button>
    </div>

    <div class="text-center mt-5">
      <div class="mb-3">
        <p class="fs-5"> {{$store.state.yurish }} Metr</p>
        <button class="btn btn-warning" @click="yurish">Yurish</button>
      </div>
      <div>
        <p class="fs-5">Qadam kattaligi {{ $store.state.qadamKa }}</p>
        <button class="btn btn-info" @click="qadam">Qadamni qo'shish</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import store from '@/store';
import { onMounted } from 'vue';

onMounted(() => {
  store.dispatch('todo')
})
const prev = () => {
  if (store.state.count > 1) {
    store.dispatch('prev')
    store.dispatch('todo')
  }
}
const next = () => {
  store.dispatch('next')
  store.dispatch('todo')
}
const selects = (e) => {
  const val = e.target.value
  store.dispatch(`select`, { val })
  store.dispatch('todo')
}


const qadam = () => {
  store.dispatch('qadam')
}

const yurish = () => {
  store.dispatch('yurish')
}
</script>

<style scoped></style>
