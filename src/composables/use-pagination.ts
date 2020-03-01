import { ref, computed } from "@vue/composition-api";

function minMax(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function usePagination(options: Options) {
  // State
  const _currentPage = ref<number>(options.startPage ?? 1);
  const perPage = ref<number>(options.perPage ?? 10);
  const total = ref<number>(options.total ?? 0);

  // Computed
  const currentPage = computed<number>(() => _currentPage.value);

  const lastPage = computed<number>(() =>
    Math.ceil(total.value / perPage.value)
  );

  const offset = computed<number>(
    () => (_currentPage.value - 1) * perPage.value
  );

  // Functions
  function setCurrentPage(page: number): void {
    _currentPage.value = minMax(page, 1, lastPage.value);
  }

  function prev(): void {
    setCurrentPage(_currentPage.value - 1);
  }

  function next(): void {
    setCurrentPage(_currentPage.value + 1);
  }

  function first(): void {
    setCurrentPage(1);
  }

  function last(): void {
    setCurrentPage(lastPage.value);
  }

  return {
    // State
    currentPage,
    perPage,

    // Computed
    lastPage,
    offset,

    // Functions
    prev,
    next,
    first,
    last
  };
}

interface Options {
  startPage?: number;
  perPage?: number;
  total: number;
}
