export const COMPARE_FUNCS = {
    location: {
        ascending: (a, b) => a.location.localeCompare(b.location),
        descending: (a, b) => b.location.localeCompare(a.location),
        neutral: () => 0,
    },
    description: {
        ascending: (a, b) => a.description.localeCompare(b.description),
        descending: (a, b) => b.description.localeCompare(a.description),
        neutral: () => 0,
    },
    id: {
        ascending: (a, b) => a.id - b.id,
        descending: (a, b) => b.id - a.id,
        neutral: () => 0,
    }
  }

