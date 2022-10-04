import React from "react";
import Pdf from "../images/resume.pdf";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Resume(){ 
    return(
        <div className="resume-section">
            <h2>Resume</h2>
            <div className="pdf-container">      
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
                    <Viewer fileUrl={Pdf} />  
                </Worker>
                <a href={Pdf} type="button" className="btn btn-primary" target="_blank"  rel="noreferrer">View Resume</a>              
            </div>
        </div>
    )
}