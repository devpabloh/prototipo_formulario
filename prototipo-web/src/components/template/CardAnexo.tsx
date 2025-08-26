import React, { useRef, useState } from 'react';
import { Eye, Plus, X } from 'lucide-react'; 

interface CardAnexoProps {
  readonly id: number;
  readonly title: string;
  readonly isMandatory?: boolean;
  readonly onFileChange: (id: number, file: File | null) => void;
  readonly onRemoveCard: (id: number) => void;
}

export function CardAnexo({ id, title, isMandatory = false, onFileChange, onRemoveCard }: CardAnexoProps) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    onFileChange(id, selectedFile);
  };

  const handleRemoveFile = () => {
    setFile(null);
    onFileChange(id, null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleViewFile = () => {
    if (file) {
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL, '_blank');
    }
  };

  return (
    <div className="flex flex-col items-center justify-between lg:w-70 lg:h-80 md:w-70 md:h-70 h-60 w-60  border-2 border-gray-300 rounded-lg p-6 text-center relative shadow-sm transition-all duration-300">
     
      {!isMandatory && (
        <button
          onClick={() => onRemoveCard(id)}
          className="absolute top-1 right-1 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
          title="Remover card"
        >
          <X size={16} />
        </button>
      )}

      <h3 className="font-bold mb-2 h-12 flex items-center">{title}</h3>

      <div className="flex items-center justify-center space-x-4 w-full">
  
        <button onClick={handleViewFile} disabled={!file} className="disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
          <Eye size={24} className={file ? 'text-blue-600 hover:text-blue-800' : 'text-gray-400'} />
        </button>

        <div className="flex-grow">
          {file ? (
            <div className="flex items-center justify-between bg-gray-100 p-1 rounded cursor-pointer">
              <span className="text-xs truncate text-wrap" title={file.name}>{file.name}</span>
              <button onClick={handleRemoveFile} className="text-red-500 hover:text-red-700 cursor-pointer">
                <X size={16} />
              </button>
            </div>
          ) : (
            <>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center justify-center w-full h-8 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer"
              >
                <Plus size={20} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}