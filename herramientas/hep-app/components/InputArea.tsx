import React, { useRef, useState, useCallback } from 'react';
import { IconBeaker, IconUpload, IconCamera, IconX } from './Icon';

interface InputAreaProps {
  textValue: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAnalyze: () => void;
  onFileChange: (file: File | null) => void;
  onOpenCamera: () => void;
  selectedFile: File | null;
  isLoading: boolean;
  disabled: boolean;
}

export const InputArea: React.FC<InputAreaProps> = ({ 
  textValue, 
  onTextChange, 
  onAnalyze, 
  onFileChange,
  onOpenCamera,
  selectedFile,
  isLoading, 
  disabled 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFileChange(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  }, [onFileChange]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFileChange(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    onFileChange(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          className="hidden"
          accept="image/png, image/jpeg, image/webp"
          disabled={disabled}
        />
        {selectedFile ? (
            <div className="flex flex-col items-center justify-center">
                <img src={URL.createObjectURL(selectedFile)} alt="Previsualización" className="max-h-32 rounded-md mb-4 border" />
                <p className="font-semibold text-gray-700">{selectedFile.name}</p>
                <p className="text-sm text-gray-500 mb-4">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                <button 
                  onClick={handleRemoveFile} 
                  className="flex items-center text-sm text-red-600 hover:text-red-800 disabled:opacity-50"
                  disabled={disabled}
                >
                  <IconX className="w-4 h-4 mr-1" /> Quitar archivo
                </button>
            </div>
        ) : (
            <div className="flex flex-col items-center">
              <IconUpload className="w-12 h-12 text-gray-400 mb-4" />
              <p className="mb-2 text-gray-600">
                <span className="font-semibold text-blue-600 cursor-pointer hover:underline" onClick={triggerFileInput}>Haga clic para subir</span> o arrastre y suelte
              </p>
              <p className="text-xs text-gray-500 mb-4">PNG, JPG o WEBP</p>
              <div className="relative flex items-center justify-center w-full my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-sm">O</span>
                  <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <button 
                onClick={onOpenCamera} 
                disabled={disabled} 
                className="flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                  <IconCamera className="w-5 h-5 mr-2" />
                  Usar cámara
              </button>
            </div>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="lab-report" className="block text-lg font-semibold text-gray-700 mb-3">
          Añadir texto (Opcional)
        </label>
        <textarea
          id="lab-report"
          value={textValue}
          onChange={onTextChange}
          disabled={disabled}
          placeholder="Si es necesario, puede pegar aquí texto adicional del informe..."
          className="w-full h-32 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out resize-y disabled:bg-gray-100"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={onAnalyze}
          disabled={isLoading || (!selectedFile && !textValue.trim())}
          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analizando...
            </>
          ) : (
            <>
              <IconBeaker className="w-5 h-5 mr-2" />
              Analizar Informe
            </>
          )}
        </button>
      </div>
    </div>
  );
};