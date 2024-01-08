const processContent = (data) => {
    const recordsMap = new Map();
  
    data.split('\n').forEach(line => {
      const codeEntity = parseInt(line.substring(0, 5).trim(), 10);
      const codeIdentity = parseInt(line.substring(13, 24).trim(), 10);
      const status = parseInt(line.substring(27, 29).trim(), 10);
      const loan = parseFloat(line.substring(29, 41).replace(',', '.')) || 0;

      const recordKey = `${codeEntity}-${codeIdentity}`;
      if (!recordsMap.has(recordKey)) {
        recordsMap.set(recordKey, {
          code_entity: codeEntity,
          code_identity: codeIdentity,
          status: status,
          loan: loan
        });
      } else {
        const existingRecord = recordsMap.get(recordKey);
        existingRecord.loan = (parseFloat(existingRecord.loan) + loan).toFixed(2);
        existingRecord.status = Math.max(existingRecord.status, status);
      }
    });
  
    const unifiedRecords = Array.from(recordsMap.values());
  
    unifiedRecords.forEach(record => {
      record.loan = parseFloat(record.loan).toFixed(2);
    });
  
    return unifiedRecords;
  };
  
  module.exports = { processContent };
  