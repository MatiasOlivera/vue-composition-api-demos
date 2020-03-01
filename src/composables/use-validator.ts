import { ref, watch, Ref } from "@vue/composition-api";
import Validator from "validatorjs";

export function useValidator<Data>(data: Ref<Data>, rules: Validator.Rules) {
  const passes = ref<boolean>(false);
  const errors = ref<Validator.ValidationErrors>({});

  function validate(): void {
    const validator = new Validator(data.value, rules);
    passes.value = validator.passes() as boolean;
    errors.value = validator.errors.errors;
  }

  watch([data], () => validate(), { deep: true, lazy: true });

  return {
    passes,
    errors
  };
}
