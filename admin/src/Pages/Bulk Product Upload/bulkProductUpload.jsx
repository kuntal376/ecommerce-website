import React, { useState } from 'react';
import { 
    FaCloudUploadAlt, 
    FaFileCsv, 
    FaDownload, 
    FaCheckCircle, 
    FaTimesCircle, 
    FaInfoCircle,
    FaExclamationTriangle
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- UPDATED IMPORTS ---
import { uploadBulkProducts } from '../../service/api';
import { downloadTemplate } from './csvTemplate'; // Assuming csvTemplate is still in the local folder

const BulkUpload = () => {
    // State management
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState(''); // Server response message

    // 1. Handle Drag & Drop Events
    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        validateAndSetFile(droppedFile);
    };

    // 2. Handle File Selection via Click
    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        validateAndSetFile(selectedFile);
    };

    // 3. Validation Logic
    const validateAndSetFile = (file) => {
        const validTypes = ['text/csv', 'application/vnd.ms-excel'];
        // Check extension as well because some OS mime types vary
        const fileName = file?.name || '';
        const isCsvExtension = fileName.toLowerCase().endsWith('.csv');

        if (file && (validTypes.includes(file.type) || isCsvExtension)) {
            setFile(file);
            setUploadStatus('idle');
            setProgress(0);
            setMessage('');
        } else {
            alert('Please upload a valid CSV file.');
        }
    };

    // 4. Real Upload Process
    const handleUpload = async () => {
        if (!file) return;

        setUploadStatus('uploading');
        setProgress(0);
        setMessage('');

        try {
            // Call API with progress callback
            const result = await uploadBulkProducts(file, (percent) => {
                setProgress(percent);
            });

            // Handle Success
            setUploadStatus('success');
            // Assuming your API returns { message: "X products added", count: X }
            setMessage(result.message || 'File processed successfully.');
            
        } catch (error) {
            // Handle Error
            setUploadStatus('error');
            setMessage(error.message || 'Failed to upload file. Please check format.');
            setProgress(0);
        }
    };

    const removeFile = () => {
        setFile(null);
        setUploadStatus('idle');
        setProgress(0);
        setMessage('');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Link to="/products" className="hover:text-blue-900">Products</Link>
                        <span>/</span>
                        <span className="text-gray-800">Bulk Upload</span>
                    </div>
                    <h1 className="text-3xl font-bold text-blue-900">Bulk Product Upload</h1>
                    <p className="text-gray-500 mt-1">Add multiple products at once using a CSV file.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Left Column: Instructions & Template */}
                    <div className="md:col-span-1 space-y-6">
                        
                        {/* Step 1: Download Template */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <h3 className="font-bold text-gray-800 mb-2">Step 1: Get Template</h3>
                            <p className="text-sm text-gray-500 mb-4">Download our standardized CSV template to ensure your data is formatted correctly.</p>
                            
                            {/* Updated Button to use utility function */}
                            <button 
                                onClick={downloadTemplate}
                                className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-900 border border-blue-200 py-2.5 rounded-lg hover:bg-blue-100 transition font-medium text-sm"
                            >
                                <FaDownload /> Download CSV Template
                            </button>
                        </div>

                        {/* Guidelines */}
                        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold mb-3 flex items-center gap-2"><FaInfoCircle /> Important Notes</h3>
                            <ul className="text-sm space-y-2 opacity-90 list-disc list-inside">
                                <li>Do not change the column headers.</li>
                                <li>Product SKU must be unique.</li>
                                <li>Use <code className="bg-blue-800 px-1 rounded">|</code> to separate multiple images if supported.</li>
                                <li>Attributes should be valid JSON.</li>
                                <li>Max file size: 5MB.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Upload Area */}
                    <div className="md:col-span-2">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
                            <h3 className="font-bold text-gray-800 mb-4">Step 2: Upload File</h3>
                            
                            {/* Drag & Drop Zone */}
                            {!file || uploadStatus === 'idle' ? (
                                <div 
                                    className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-8 transition-all duration-200 cursor-pointer
                                        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'}
                                    `}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('fileInput').click()}
                                >
                                    <input 
                                        type="file" 
                                        id="fileInput" 
                                        className="hidden" 
                                        accept=".csv" 
                                        onChange={handleFileSelect}
                                    />
                                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl mb-4">
                                        <FaCloudUploadAlt />
                                    </div>
                                    <p className="text-lg font-medium text-gray-700">Click or Drag file to upload</p>
                                    <p className="text-sm text-gray-400 mt-1">CSV files only (Max 5MB)</p>
                                </div>
                            ) : null}

                            {/* File Selected / Progress View */}
                            {file && (
                                <div className="mt-4">
                                    <div className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg mb-6">
                                        <div className="flex items-center gap-4">
                                            <FaFileCsv className="text-3xl text-green-600" />
                                            <div>
                                                <p className="font-medium text-gray-800">{file.name}</p>
                                                <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                                            </div>
                                        </div>
                                        {/* Only show remove button if not currently uploading or success */}
                                        {uploadStatus !== 'uploading' && uploadStatus !== 'success' && (
                                            <button onClick={removeFile} className="text-red-500 hover:text-red-700">
                                                <FaTimesCircle className="text-xl" />
                                            </button>
                                        )}
                                    </div>

                                    {/* Progress Bar */}
                                    {uploadStatus === 'uploading' && (
                                        <div className="mb-6">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-blue-900 font-medium">Uploading...</span>
                                                <span className="text-gray-500">{progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div 
                                                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Success Message */}
                                    {uploadStatus === 'success' && (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                                            <FaCheckCircle className="text-green-600 mt-1 text-lg" />
                                            <div>
                                                <h4 className="font-bold text-green-800">Upload Successful!</h4>
                                                <p className="text-sm text-green-700 mt-1">{message}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Error Message */}
                                    {uploadStatus === 'error' && (
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                                            <FaExclamationTriangle className="text-red-600 mt-1 text-lg" />
                                            <div>
                                                <h4 className="font-bold text-red-800">Upload Failed</h4>
                                                <p className="text-sm text-red-700 mt-1">{message}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        {uploadStatus === 'idle' || uploadStatus === 'error' ? (
                                            <button 
                                                onClick={handleUpload}
                                                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-medium shadow-md"
                                            >
                                                {uploadStatus === 'error' ? 'Retry Upload' : 'Upload Products'}
                                            </button>
                                        ) : null}
                                        
                                        {uploadStatus === 'success' && (
                                            <>
                                                <Link to="/products" className="w-1/2">
                                                    <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition font-medium">
                                                        View Inventory
                                                    </button>
                                                </Link>
                                                <button 
                                                    onClick={removeFile} 
                                                    className="w-1/2 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-medium"
                                                >
                                                    Upload Another
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BulkUpload;