
export const goToHome = (history) => {
  history.push("/");
};
export const goToAdd = (history) => {
  history.push("/adicionar");
};

export const goToEditar = (history) => {
  history.push("/editar");
}

export const goToDetalhes = (history, id) => {
  history.push(`/detalhes/${id}`);
}

