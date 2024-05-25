"use client"

import { useState } from 'react';

const QueryAirtable = () => {
  const [base, setBase] = useState('');
  const [table, setTable] = useState('');
  const [field, setField] = useState('');
  const [value, setValue] = useState('');
  const [records, setRecords] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/v1/airtable/${base}/${table}/${field}/${value}`);
    const data = await response.json();

    if (data.result !== 'no data') {
      setRecords(data.result);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Base" value={base} onChange={(e) => setBase(e.target.value)} />
        <input placeholder="Table" value={table} onChange={(e) => setTable(e.target.value)} />
        <input placeholder="Field" value={field} onChange={(e) => setField(e.target.value)} />
        <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Query</button>
      </form>

      <div>
        {records.map(record => (
          <Card key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
};

export default QueryAirtable;

const Card = ({ record }) => {
  return (
    <div className="border p-4 my-2">
      {/* Display your record fields here. For example: */}
      <h2>{record.id}</h2>
      <pre>{JSON.stringify(record, null, 4)}</pre>
    </div>
  );
};
