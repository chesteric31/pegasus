<template>
  <camera :resolution="{ width: 375, height: 200 }" ref="camera" autoplay/>
  <div v-if="!formSubmitted">
    <form @submit.prevent="submitForm">
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-sun"></i></span>
        <input type="text" class="form-control" placeholder="Enter day index" readonly
               :value="(indexes.get('day') != null)? 'Taken!':''">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="snapshot('day')"><i class="fas fa-camera"></i>
          </button>
        </div>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text"><i class="fas fa-moon"></i></span>
        <input type="text" class="form-control" placeholder="Enter night index" readonly
               :value="(indexes.get('night') != null)? 'Taken!':''">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" @click="snapshot('night')"><i
              class="fas fa-camera"></i>
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
      <img :src="buildUrl(indexes.get('day') as Blob)" alt="Day index photo">
    </div>
    <div class="form-group">
      <label>Night</label>
      <img :src="buildUrl(indexes.get('night') as Blob)" alt="Night index photo">
    </div>
    <div class="form-group">
      <label>Exclusive Night</label>
      <img :src="buildUrl(indexes.get('exclusiveNight') as Blob)" alt="Exclusive night index photo">
    </div>
    <button class="btn btn-secondary" @click="formSubmitted = false">Retry</button>
    <button class="btn btn-primary" @click="send">Send</button>
  </div>
</template>

<script lang="ts">
import Camera from "simple-vue-camera";
import axios from 'axios';
import {defineComponent, ref} from "vue";

export default defineComponent({
  setup() {
    // Get a reference of the component
    const camera = ref<InstanceType<typeof Camera>>();
    const indexes = ref<InstanceType<typeof Map>>(new Map<string, Blob>());
    // Use camera reference to call functions
    const snapshot = async (type: string) => {
      const blob = await camera.value?.snapshot() as Blob;
      // To show the screenshot with an image tag, create a url
      URL.createObjectURL(blob);
      indexes.value?.set(type, blob);
      //console.log(indexes.value, blob, url, type)
    }

    return {
      indexes,
      camera,
      snapshot
    }
  },
  components: {
    Camera
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
    doSend: (formData: FormData) => {
      //const url = 'https://192.168.0.12:8443/fotos/';
      const url = '<SERVER_API>/fotos/';//http://192.168.0.12:8080/fotos/';
      axios.post(url,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(() => {
            console.log('SUCCESS!!');
          }
      ).catch(error => {
            console.error('FAILURE!!', error);
            alert(error)
          }
      );
    }, buildFormData(type) {
      let formData = new FormData();
      formData.append("type", type);
      formData.append('file', this.indexes.get(type) as Blob);
      return formData;
    }, sendFotos() {
      this.doSend(this.buildFormData("day"));
      this.doSend(this.buildFormData("night"));
      this.doSend(this.buildFormData("exclusiveNight"));
    }, send() {
      this.sendFotos();
    }
  }
});
</script>
