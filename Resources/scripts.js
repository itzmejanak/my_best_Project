document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.container a');
    const pdfViewerContainer = document.getElementById('pdfViewerContainer');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const pdfSrc = this.getAttribute('href');
            loadPDF(pdfSrc);

            // Add fade-in class to the PDF viewer container
            pdfViewerContainer.classList.add('fade-in');

            // Remove fade-in class after a delay (adjust as needed)
            setTimeout(() => {
                pdfViewerContainer.classList.remove('fade-in');
            }, 500);
        });
    });

    function loadPDF(pdfSrc) {
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.data = pdfSrc;
    }
});
