/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';

const FileUpload = ({ viewUpload, maxSize, setFiles }) => {
  const [addedFiles, setAddedFiles] = useState('');

  const onSuccess = message => {
    toast.success(message || 'Success');
  };

  const onError = message => {
    toast.error(message || 'Oops, something went wrong');
  };

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    const file = acceptedFiles.at(0) || rejectedFiles.at(0) || null;

    if (file.errors) {
      const errorMessage =
        file.errors.at(0)?.code === 'file-invalid-type'
          ? 'Invalid JSON file'
          : file.errors.at(0)?.message;

      onError(errorMessage);
      return;
    }

    const reader = new FileReader();
    reader.onload = e => {
      const json = JSON.parse(e.target.result);
      onSuccess('File is successfully uploaded');
      setAddedFiles(json);
    };
    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json'],
    },
    maxSize,
    noClick: true,
    noKeyboard: true,
  });

  const handleOpenFileModal = () => {
    open();
  };

  useEffect(() => {
    setFiles(addedFiles);
  }, [addedFiles]);

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <div onClick={handleOpenFileModal} role="button" tabIndex={0}>
        {viewUpload}
      </div>
    </div>
  );
};

export default FileUpload;
