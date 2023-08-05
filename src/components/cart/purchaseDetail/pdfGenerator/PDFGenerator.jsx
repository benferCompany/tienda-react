import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PurchaseDetail from '../PurchaseDetail';

const PDFGenerator = () => {
    const handleGeneratePDF = () => {
        const content = document.getElementById('content-to-pdf');

        // Convierte el contenido HTML a una imagen usando html2canvas
        html2canvas(content).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');

            // Crea un nuevo objeto jsPDF
            const pdf = new jsPDF();

            // Agrega la imagen al PDF
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            // Abre una nueva pestaña y muestra el PDF allí
            const pdfBlob = pdf.output('blob');
            const pdfUrl = URL.createObjectURL(pdfBlob);
            const pdfWindow = window.open();
            pdfWindow.location.href = pdfUrl;
        });
    };

    return (
        <div>
            {/* Contenido que se convertirá a PDF */}
            <div id="content-to-pdf">

                <PurchaseDetail />
            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-success' onClick={handleGeneratePDF}>Comprar y generar PDF</button>
            </div>
        </div>
    );
};

export default PDFGenerator;
