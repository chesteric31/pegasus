<template>
  <div v-if="!formSubmitted">
    <camera :resolution="{ width: 375, height: 200 }" ref="camera" autoplay></camera>
    <form @submit.prevent="submitForm">
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-sun"></i></span>
        <input type="text" class="form-control" placeholder="Enter day index" readonly
               :value="(indexes.get('day') != null)? 'Taken!':''">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="snapshot('day')"><i class="fas fa-camera"></i></button>
        </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-moon"></i></span>
        <input type="text" class="form-control" placeholder="Enter night index" readonly
               :value="(indexes.get('night') != null)? 'Taken!':''">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="snapshot('night')"><i class="fas fa-camera"></i>
          </button>
        </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-exclamation-circle"></i></span>
        <input type="text" class="form-control" placeholder="Enter exclusive night index"
               readonly :value="(indexes.get('exclusiveNight') != null)? 'Taken!':''">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="snapshot('exclusiveNight')"><i
              class="fas fa-camera"></i></button>
        </div>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
  <div v-if="formSubmitted">
    <h3>Form Submitted</h3>
    <div class="form-group">
      <label>Day</label>
      <img :src="buildUrl(indexes.get('day'))" alt="Day index photo">
    </div>
    <div class="form-group">
      <label>Night</label>
      <img :src="buildUrl(indexes.get('night'))" alt="Night index photo">
    </div>
    <div class="form-group">
      <label>Exclusive Night</label>
      <img :src="buildUrl(indexes.get('exclusiveNight'))" alt="Exclusive night index photo">
    </div>
    <button class="btn btn-secondary" @click="formSubmitted = false">Retry</button>
    <button class="btn btn-primary" @click="send">Send to broker</button>
  </div>
</template>

<script lang="ts">
import Camera from "simple-vue-camera";
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup(props) {
    // Get a reference of the component
    const camera = ref<InstanceType<typeof Camera>>();
    const indexes = ref<InstanceType<typeof Map>>(new Map<string, Blob>());
    // Use camera reference to call functions
    const snapshot = async (type: string) => {
      const blob = await camera.value?.snapshot() as Blob;
      // To show the screenshot with an image tag, create a url
      const url = URL.createObjectURL(blob);
      indexes.value?.set(type, blob);
      //console.log(indexes.value, blob, url, type)
    }

    return {
      indexes,
      camera,
      snapshot
    }
  },
  data() {
    return {
      formSubmitted: false
    }
  },
  methods: {
    submitForm() {
      this.formSubmitted = true
    },
    buildUrl(blob: Blob) {
      return URL.createObjectURL(blob);
    },
  }
});
</script>
