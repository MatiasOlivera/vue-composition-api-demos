import { reactive } from "@vue/composition-api";

export function usePromise<Data>(callback: () => Promise<Data>) {
  const state = (reactive({
    loading: false,
    error: null,
    data: null
  }) as unknown) as State<Data>;

  async function load() {
    state.error = null;
    state.loading = true;

    try {
      state.data = await callback();
    } catch (error) {
      state.error = error;
    } finally {
      state.loading = false;
    }
  }

  return {
    state,
    load
  };
}

interface State<Data> {
  loading: boolean;
  error: string | null;
  data: Data | null;
}
