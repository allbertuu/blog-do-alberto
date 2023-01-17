export const copyToClipboard = (data: string) => {
    navigator.clipboard
        .writeText(data)
        .then(() => alert('Copiado com sucesso!'))
        .catch(() => alert('Erro ao copiar!'));
};
