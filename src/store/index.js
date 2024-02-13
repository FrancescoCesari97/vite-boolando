import { reactive } from "vue";

export const store = reactive({
  test: "Boolando s.r.l",
  apiUri: "http://localhost:3000",

  modal: {
    show: true,
  },
});
