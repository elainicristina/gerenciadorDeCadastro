
export const goToHome = (history) => {
  history.push("/");
};

export const goToAdd = (history) => {
  history.push("/adicionar");
};

export const goToDetalhes = (history, id) => {
  history.push("/detalhes/" + id);
};

export const goToEditar = (history, id) => {
  history.push("/editar/" + id);
}
