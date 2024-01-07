const processContent = (data) => {
    const recordsMap = new Map();
  
    data.split('\n').forEach(line => {
      const codeIdentity = parseInt(line.substring(13, 24).trim(), 10);
      const status = parseInt(line.substring(27, 29).trim(), 10);
      const loan = parseFloat(line.substring(29, 41).replace(',', '.')) || 0;
  
      if (!recordsMap.has(codeIdentity)) {
        recordsMap.set(codeIdentity, {
          code_identity: codeIdentity,
          status: status,
          loan: loan
        });
      } else {
        const existingRecord = recordsMap.get(codeIdentity);
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
  