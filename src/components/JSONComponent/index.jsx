/* eslint-disable react/prop-types */
import { useState } from 'react';
import JSONView from '@uiw/react-json-view';
import CircularProgress from '@mui/material/CircularProgress';

import { filterObjectByKey } from '../../utils/object';
import { Input } from '../_Searchs';
import { Button } from '../_Buttons';

const JSONComponent = ({ jsonContent, setJsonContent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJson, setFilteredJson] = useState(jsonContent);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = value => {
    setSearchTerm(value);

    if (value) {
      setFilteredJson(filterObjectByKey(value, jsonContent));
    } else {
      setFilteredJson(jsonContent);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Input onChange={handleSearchChange} value={searchTerm} setIsLoading={setIsLoading} />
        <Button onClick={() => setJsonContent(null)}>Clear selected JSON</Button>
      </div>
      {isLoading ? (
        <div className="flex_center h-[500px]">
          <CircularProgress color="success" />
        </div>
      ) : (
        <div className="flex max-h-[500px] overflow-y-auto">
          <JSONView
            value={filteredJson}
            collapsed={searchTerm ? false : true}
            enableClipboard={true}
            displayDataTypes={false}
            displayObjectSize={false}
          />
        </div>
      )}
    </div>
  );
};

export default JSONComponent;
