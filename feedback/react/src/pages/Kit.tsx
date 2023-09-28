import { pdfjs, Document, Page } from "react-pdf";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Kit = () => {
    const [numPages, setNumPages] = useState<number>(0);
    const [ pageNumber ] = useState<number>(1);
    const [b, setB] = useState("");

    useEffect(() => {
        fetch("http://" + window.location.hostname + ":80/contents/arq.pdf", { mode: "cors", method: "get" })
            .then(t => "blob" in t ? t.blob() : null)
            .then(t => t && setB(URL.createObjectURL(t)));
    }, [])

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }

    return (<>
        <Box sx={{ overflow: "auto", maxHeight: "60vh" }}>
            <Document file={b} onLoadSuccess={onDocumentLoadSuccess}>
                <Page 
                    scale={1}
                    renderAnnotationLayer={false}
                    renderTextLayer={false} 
                    // height={body.clientHeight - 100} 
                    pageNumber={pageNumber}
                />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </Box>
    </>);
}

export default Kit;
