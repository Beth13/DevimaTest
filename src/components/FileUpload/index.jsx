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

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];

      if (file.size > maxSize) {
        onError('File size exceeds required size');
        return;
      }

      const reader = new FileReader();
      reader.onload = e => {
        try {
          const json = JSON.parse(e.target.result);
          onSuccess('File is successfully uploaded');
          setAddedFiles(json);
        } catch (err) {
          onError('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    },
    [maxSize],
  );

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
