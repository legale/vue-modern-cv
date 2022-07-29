<template>
  <ElementModal text="Регистрация не удалась"
                @close="this.modalOpened = false"
                :opened="this.modalOpened"/>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-200 border-0"
        >
<!--          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-slate-500 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-slate-50 text-slate-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-slate-300" />
          </div>-->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-slate-400 text-center mb-3 font-bold">
<!--              <small>Or sign up with credentials</small>-->
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                  Имя пользователя
                </label>
                <input
                    type="name"
                    class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Введите имя пользователя"
                    name="username"
                    :value="this.username"
                    @input="this.username = $event.target.value"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                    type="name"
                    class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Введите Ваше имя"
                    name="name"
                    :value="this.name"
                    @input="this.name = $event.target.value"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                    class="block uppercase text-slate-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                  Фамилия
                </label>
                <input
                    type="name"
                    class="border-0 px-3 py-3 placeholder-slate-300
                    text-slate-600 bg-white rounded text-sm shadow focus:outline-none
                    focus:ring w-full ease-linear transition-all duration-150"
                    name="surname"
                    :value="this.surname"
                    @input="this.surname = $event.target.value"
                    placeholder="Введите фамилию"
                />
              </div>


              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Введите адрес электронной почты"
                  :value="this.email"
                  @input="this.email = $event.target.value"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-slate-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Пароль
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Введите пароль не короче 8 символов"
                  :value="this.password"
                  @input="this.password = $event.target.value"
                />
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-slate-600">
                    Я согласен с условиями
                    <a href="javascript:void(0)" class="text-emerald-500">
                      Пользовательского соглашения
                    </a>
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="register"
                >
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// import github from "@/assets/img/github.svg";
// import google from "@/assets/img/google.svg";
import axios from 'axios';
import ElementModal from "@/components/Elementary/ElementModal";

export default {
  components: {ElementModal},
  data() {
    return {
      username: '',
      password: '',
      name: '',
      surname: '',
      email: '',
      modalOpened: false,
    };
  },
  methods: {
    async register() {
      let res = await axios.get(window.location.protocol + '//' + window.location.hostname, {
        params: {
          username: this.username,
          password: this.password,
          name: this.name,
          surname: this.surname,
          email: this.email,
          action: 'create'}
      }).catch(function (error) {
        console.log(error);
      });
      console.log(res.data);
      if (res.data['user_id']) {
        this.$router.push("/admin/settings");
      }else {
        this.modalOpened = true;
      }
    },
  }
};


</script>

