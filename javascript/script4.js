function gerarPDF() {
    // Captura o elemento que contém o currículo
    const elemento = document.getElementById('curriculo');

    // Opções para a conversão do PDF
    const options = {
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 1.0 }, // Qualidade máxima
        html2canvas: { scale: 3 }, // Escala aumentada para melhor qualidade
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Converter o HTML do currículo em PDF
    html2pdf().from(elemento).set(options).save();
}
