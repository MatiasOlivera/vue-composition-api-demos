<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label for="firstName">First name</label>
      <input
        v-model="person.firstName"
        type="text"
        name="firstName"
        id="firstName"
      />
      <p v-if="errors.firstName">{{ errors.firstName[0] }}</p>
    </fieldset>

    <fieldset>
      <label for="lastName">Last name</label>
      <input
        v-model="person.lastName"
        type="text"
        name="lastName"
        id="lastName"
      />
      <p v-if="errors.lastName">{{ errors.lastName[0] }}</p>
    </fieldset>

    <fieldset>
      <label for="email">Email</label>
      <input v-model="person.email" type="email" name="email" id="email" />
      <p v-if="errors.email">{{ errors.email[0] }}</p>
    </fieldset>

    <button type="submit" :disabled="!passes">Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { useValidator } from "../composables/use-validator";

const personRules: PersonRules = {
  firstName: ["required", "alpha", "between:3,15"],
  lastName: ["required", "alpha", "between:3,15"],
  email: ["required", "email"]
};

const ValidationView = defineComponent({
  name: "ValidationView",

  setup() {
    const person = ref<Person>({
      firstName: "",
      lastName: "",
      email: ""
    });

    const { passes, errors } = useValidator(person, personRules);

    function onSubmit(): void {
      console.log("submit");
    }

    return { person, passes, errors, onSubmit };
  }
});

interface Person {
  firstName: string;
  lastName: string;
  email: string;
}

interface PersonRules extends Validator.Rules {
  firstName: string[];
  lastName: string[];
  email: string[];
}

export default ValidationView;
</script>

<style scoped>
fieldset {
  display: flex;
  flex-direction: column;
  border: none;
}

button {
  margin-left: 1em;
}

p {
  color: tomato;
  margin-block-start: 0.5em;
  margin-block-end: 0;
}
</style>
