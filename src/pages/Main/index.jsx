// src/JsonViewer.js
import { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import FileUpload from '../../components/FileUpload';
import JSONComponent from '../../components/JSONComponent';
import { Button } from '../../components/_Buttons';

const Main = () => {
  const [jsonContent, setJsonContent] = useState(null);

  return (
    <div className="h-full">
      {jsonContent ? (
        <JSONComponent jsonContent={jsonContent} setJsonContent={setJsonContent} />
      ) : (
        <FileUpload
          setFiles={file => setJsonContent(file)}
          maxSize={1048576}
          multiple={false}
          viewUpload={
            <div className="flex_center flex-col gap-2 transition min-h-[220px] max-w-[50%] rounded-classic p-5 border-2 border-dashed border-viridian hover:bg-alabaster max-sm:max-w-[80%]">
              <CloudDownloadIcon
                fontSize="large"
                style={{ color: '#458f79', width: '40px', height: '40px' }}
              />
              <div className="flex-col text-center text-lg font-semibold mb-2 mt-3">
                <div className="flex items-center gap-2 mb-2 max-sm:flex-col">
                  Drag & Drop or
                  <Button>
                    <FileDownloadIcon fontSize="small" />
                    Choose JSON
                  </Button>
                </div>
                <span>to upload</span>
              </div>
              <p className="text-sm font-medium text-gray">(1 MB max)</p>
            </div>
          }
        />
      )}
    </div>
  );
};

export default Main;
